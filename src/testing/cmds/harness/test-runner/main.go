package main

import (
	"bufio"
	"context"
	"flag"
	"fmt"
	"io"
	"os"
	"os/exec"
	"strings"
	"time"

	"github.com/pachyderm/pachyderm/v2/src/internal/backoff"
	"github.com/pachyderm/pachyderm/v2/src/internal/errors"
	"github.com/pachyderm/pachyderm/v2/src/internal/log"
	"github.com/pachyderm/pachyderm/v2/src/internal/pctx"
	"go.uber.org/zap"
	"golang.org/x/exp/slices"
	"golang.org/x/sync/errgroup"
	"golang.org/x/sync/semaphore"
)

func main() {
	log.InitPachctlLogger()
	ctx := pctx.Background("test-runner")
	tags := flag.String("tags", "", "Tags to run, for example k8s. Tests without this flag will not be selected.")
	fileName := flag.String("file", "tests_to_run.csv", "Tags to run, for example k8s. Tests without this flag will not be selected.")
	gotestsumArgs := flag.String("gotestsum-args", "", "Additional arguments to pass to the gotestsum portion of the test command.")
	gotestArgs := flag.String("gotest-args", "", "Additional arguments to pass to the 'go test' portion of the test command.")
	shard := flag.Int("shard", 0, "0 indexed current runner index that we are on.")
	totalShards := flag.Int("total-shards", 1, "Total number of runners that we are sharding over.")
	threadPool := flag.Int("threads", 1, "Number of tests to execute concurrently.")
	flag.Parse()
	err := run(ctx,
		*tags,
		*fileName,
		*gotestsumArgs,
		*gotestArgs,
		*shard,
		*totalShards,
		*threadPool,
	)
	if err != nil {
		log.Error(ctx, "Error running tests", zap.Error(err))
		os.Exit(1)
	}
	os.Exit(0)
}

func run(ctx context.Context, tags string, fileName string, gotestsumArgs string, gotestArgs string, shard int, totalShards int, threadPool int) error {
	tests, err := readTests(ctx, fileName)
	if err != nil {
		return errors.Wrapf(err, "reading file %v", fileName)
	}
	slices.Sort(tests) // sort so we shard them from a pre-determined order

	// loop through by the number of shards so that each gets a roughly equal number on each
	testsForShard := map[string][]string{}
	for idx := shard; idx < len(tests); idx += totalShards {
		val := strings.Split(tests[idx], ",")
		pkg := val[0]
		testName := val[1]
		// index all tests by package as we collect the ones for this shard. This lets
		// us run all tests in each package on this shard with one `go test` command, preserving the serial
		// running of tests without t.parallel the same way that go test ./... would since
		// got test also runs packages in paralllel.
		if _, ok := testsForShard[pkg]; !ok {
			testsForShard[pkg] = []string{testName}
		} else {
			testsForShard[pkg] = append(testsForShard[pkg], testName)
		}
	}

	// DNJ TODO - incorporate gomaxprocs or add parallel parameter
	sem := semaphore.NewWeighted(int64(threadPool))
	eg, _ := errgroup.WithContext(ctx)
	for pkg, tests := range testsForShard {
		threadLocalPkg := pkg
		threadLocalTests := tests
		err = sem.Acquire(ctx, 1)
		if err != nil {
			return errors.EnsureStack(err)
		}
		eg.Go(func() error {
			defer sem.Release(1)
			return runTest(threadLocalPkg, threadLocalTests, tags, gotestsumArgs, gotestArgs)
		})
	}
	err = eg.Wait()

	if err != nil {
		return errors.EnsureStack(err)
	}
	return nil
}

func readTests(ctx context.Context, fileName string) ([]string, error) {
	lockFileName := fmt.Sprintf("lock-%s", fileName)
	err := backoff.RetryNotify(func() error {
		if _, err := os.Stat(fileName); err != nil {
			return err // couldn't read file, so retry until it can
		}
		if _, err := os.Stat(lockFileName); err == nil {
			return errors.Errorf("lock file for test collection still exists")
		}
		return nil
	}, backoff.NewConstantBackOff(time.Second*5).For(time.Minute*10), func(err error, d time.Duration) error {
		log.Info(ctx, "retry waiting for tests to be collected.", zap.Error(err))
		return nil
	})
	if err != nil {
		return nil, errors.EnsureStack(err)
	}
	tests := []string{}
	file, err := os.Open(fileName)
	if err != nil {
		return nil, errors.EnsureStack(err)
	}
	defer file.Close()
	scanner := bufio.NewScanner(file)
	for scanner.Scan() {
		tests = append(tests, scanner.Text())
	}
	if err := scanner.Err(); err != nil {
		return nil, errors.EnsureStack(err)
	}
	return tests, nil
}

// run tests with `go test`. We run one package at a time so tests with the same name in different packages
// like TestConfig or TestDebug don't run multiple times if they land on separate shards.
func runTest(pkg string, testNames []string, tags string, gotestsumArgs string, gotestArgs string) error {
	findTestArgs := []string{
		fmt.Sprintf("--packages=%s", pkg),
		"--rerun-fails",
		"--rerun-fails-max-failures=1",
		"--format=testname",
		"--debug",
	}
	if gotestsumArgs != "" {
		findTestArgs = append(findTestArgs, gotestsumArgs)
	}
	testRegex := strings.Builder{}
	for _, test := range testNames {
		if testRegex.Len() > 0 {
			testRegex.WriteString("|")
		}
		testRegex.WriteString(fmt.Sprintf("^%s$", test))
	}

	findTestArgs = append(findTestArgs, "--",
		"-timeout=30m",
		"-parallel=4", // DNJ TODO allow this to change with args
		fmt.Sprintf("-tags=%s", tags),
		fmt.Sprintf("-run=%s", testRegex.String()))
	if gotestArgs != "" {
		findTestArgs = append(findTestArgs, gotestArgs)
	}

	cmd := exec.Command("gotestsum", findTestArgs...)
	cmd.Env = os.Environ()
	cmd.Env = append(cmd.Env, "CGO_ENABLED=0") // DNJ TODO - parameter - how to take form args?
	fmt.Printf("Running command %v\n", cmd.String())
	testsOutput, err := cmd.CombinedOutput()
	io.Copy(os.Stdout, strings.NewReader(string(testsOutput)))
	if err != nil {
		return errors.EnsureStack(err)
	}
	return nil
}
