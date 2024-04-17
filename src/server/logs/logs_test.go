package logs_test

import (
	"context"
	"fmt"
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"
	"time"

	"github.com/pachyderm/pachyderm/v2/src/logs"
	logservice "github.com/pachyderm/pachyderm/v2/src/server/logs"
	"google.golang.org/protobuf/types/known/timestamppb"

	"github.com/pachyderm/pachyderm/v2/src/internal/errors"
	"github.com/pachyderm/pachyderm/v2/src/internal/lokiutil"
	loki "github.com/pachyderm/pachyderm/v2/src/internal/lokiutil/client"
	"github.com/pachyderm/pachyderm/v2/src/internal/pctx"
	"github.com/pachyderm/pachyderm/v2/src/internal/require"
	"github.com/pachyderm/pachyderm/v2/src/internal/testutil"
)

type testPublisher struct {
	responses []*logs.GetLogsResponse
}

func (tp *testPublisher) Publish(ctx context.Context, response *logs.GetLogsResponse) error {
	tp.responses = append(tp.responses, response)
	return nil
}

type errPublisher struct {
	count int
}

func (ep *errPublisher) Publish(context.Context, *logs.GetLogsResponse) error {
	ep.count++
	return errors.New("errPublisher cannot publish")
}

func TestGetLogsHint(t *testing.T) {
	var testData = map[string]struct {
		buildEntries func() []loki.Entry
		buildWant    func() []int
	}{
		"no logs to return": {
			buildEntries: func() []loki.Entry {
				return nil
			},
			buildWant: func() []int { return nil },
		},
		"logs": {
			buildEntries: func() []loki.Entry {
				var entries []loki.Entry
				for i := -99; i <= 0; i++ {
					entries = append(entries, loki.Entry{
						Timestamp: time.Now().Add(time.Duration(i) * time.Second),
						Line:      fmt.Sprintf("%v", i),
					})
				}
				return entries
			},
			buildWant: func() []int {
				var want []int
				for i := -99; i <= 0; i++ {
					want = append(want, i)
				}
				return want
			},
		},
	}

	for name, testCase := range testData {
		t.Run(name, func(t *testing.T) {
			var (
				ctx      = pctx.TestContext(t)
				want     = testCase.buildWant()
				fakeLoki = httptest.NewServer(&lokiutil.FakeServer{
					Entries: testCase.buildEntries(),
				})
				ls = logservice.LogService{
					GetLokiClient: func() (*loki.Client, error) {
						return &loki.Client{Address: fakeLoki.URL}, nil
					},
				}
				publisher *testPublisher
			)
			defer fakeLoki.Close()

			// GetLogs without a hint request should not return hints.
			publisher = new(testPublisher)

			require.NoError(t, ls.GetLogs(ctx, &logs.GetLogsRequest{}, publisher), "GetLogs should succeed")
			for _, r := range publisher.responses {
				_, ok := r.ResponseType.(*logs.GetLogsResponse_PagingHint)
				require.False(t, ok, "paging hints should not be returned when unasked for")
			}
			require.Len(t, publisher.responses, len(want), "query with no date range should return all logs")

			// GetLogs with a hint request should return a hint.
			publisher = new(testPublisher)
			require.NoError(t, ls.GetLogs(ctx, &logs.GetLogsRequest{
				WantPagingHint: true,
			}, publisher), "GetLogs must succeed")
			require.True(t, len(publisher.responses) > 0, "there must be at least one response")
			var foundHint bool
			for _, resp := range publisher.responses {
				h, ok := resp.ResponseType.(*logs.GetLogsResponse_PagingHint)
				if ok && h != nil {
					foundHint = true
				}
			}
			require.True(t, foundHint, "paging hints should be returned when requested")

			// GetLogs with a hint request and a non-standard time filter should duplicate that duration.
			publisher = new(testPublisher)
			until := time.Now()
			from := until.Add(-1 * time.Second)
			require.NoError(t, ls.GetLogs(ctx, &logs.GetLogsRequest{
				WantPagingHint: true,
				Filter: &logs.LogFilter{
					TimeRange: &logs.TimeRangeLogFilter{
						From:  timestamppb.New(from),
						Until: timestamppb.New(until),
					},
				},
			}, publisher), "GetLogs with an explicit time filter must succeed")
			require.True(t, len(publisher.responses) > 0, "there must be at least one response")
			foundHint = false
			for _, resp := range publisher.responses {
				h, ok := resp.ResponseType.(*logs.GetLogsResponse_PagingHint)
				if !ok && h == nil {
					continue
				}
				foundHint = true
				for _, hint := range []*logs.GetLogsRequest{h.PagingHint.Older, h.PagingHint.Newer} {
					from := hint.Filter.TimeRange.From.AsTime()
					until := hint.Filter.TimeRange.Until.AsTime()
					require.Equal(t, time.Second, until.Sub(from), "explicit window is one hour, not %v (%v–%v)", until.Sub(from), from, until)
				}
			}
			require.True(t, foundHint, "paging hints should be returned when requested")

			publisher = new(testPublisher)
			require.NoError(t, ls.GetLogs(ctx, &logs.GetLogsRequest{
				WantPagingHint: true,
				Filter:         &logs.LogFilter{Limit: 100}}, publisher),
				"GetLogs with both a limit and a hint request should work")

			var badPublisher errPublisher
			err := ls.GetLogs(ctx, &logs.GetLogsRequest{}, &badPublisher)
			if badPublisher.count > 0 && !errors.Is(err, logservice.ErrPublish) {
				t.Error("GetLogs with a broken publisher must return an appropriate error)")
			}
			_ = want
		})
	}
}

func TestGetDatumLogs(t *testing.T) {
	var (
		ctx             = pctx.TestContext(t)
		foundQuery      bool
		datumMiddleware = func(next http.Handler) http.Handler {
			return http.HandlerFunc(func(rw http.ResponseWriter, req *http.Request) {
				q := req.URL.Query()
				if q := q.Get("query"); q != "" {
					if strings.Contains(q, `datumId="12d0b112f8deea684c4530693545901608bfb088d564d3c68dddaf2a02d446f5"`) && strings.Contains(q, `datum="12d0b112f8deea684c4530693545901608bfb088d564d3c68dddaf2a02d446f5"`) {
						foundQuery = true
					}
				}
				next.ServeHTTP(rw, req)
			})
		}
		fakeLoki = httptest.NewServer(datumMiddleware(&lokiutil.FakeServer{}))
		ls       = logservice.LogService{
			GetLokiClient: func() (*loki.Client, error) {
				return &loki.Client{Address: fakeLoki.URL}, nil
			},
		}
		publisher *testPublisher
	)
	defer fakeLoki.Close()
	publisher = new(testPublisher)
	require.NoError(t, ls.GetLogs(ctx, &logs.GetLogsRequest{
		Query: &logs.LogQuery{
			QueryType: &logs.LogQuery_User{
				User: &logs.UserLogQuery{
					UserType: &logs.UserLogQuery_Datum{
						Datum: "12d0b112f8deea684c4530693545901608bfb088d564d3c68dddaf2a02d446f5",
					},
				},
			},
		},
	}, publisher), "GetLogs should succeed")
	require.True(t, foundQuery, "datum LogQL query should be found")

}

func TestGetProjectLogs(t *testing.T) {
	var (
		ctx             = pctx.TestContext(t)
		foundQuery      bool
		projectName     = testutil.UniqueString("projectName")
		datumMiddleware = func(next http.Handler) http.Handler {
			return http.HandlerFunc(func(rw http.ResponseWriter, req *http.Request) {
				q := req.URL.Query()
				if q := q.Get("query"); q != "" {
					if strings.Contains(q, fmt.Sprintf(`projectName="%s"`, projectName)) {
						foundQuery = true
					}
				}
				next.ServeHTTP(rw, req)
			})
		}
		fakeLoki = httptest.NewServer(datumMiddleware(&lokiutil.FakeServer{}))
		ls       = logservice.LogService{
			GetLokiClient: func() (*loki.Client, error) {
				return &loki.Client{Address: fakeLoki.URL}, nil
			},
		}
		publisher *testPublisher
	)
	defer fakeLoki.Close()
	publisher = new(testPublisher)
	require.NoError(t, ls.GetLogs(ctx, &logs.GetLogsRequest{
		LogFormat: logs.LogFormat_LOG_FORMAT_VERBATIM_WITH_TIMESTAMP,
		Query: &logs.LogQuery{
			QueryType: &logs.LogQuery_User{
				User: &logs.UserLogQuery{
					UserType: &logs.UserLogQuery_Project{
						Project: projectName,
					},
				},
			},
		},
	}, publisher), "GetLogs should succeed")
	require.True(t, foundQuery, "project LogQL query should be found")

}
