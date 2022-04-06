package version

import (
	"errors"
	"fmt"
	"os"
	"regexp"
	"strconv"
	"strings"

	pb "github.com/pachyderm/pachyderm/v2/src/version/versionpb"
)

var (
	// MajorVersion is the current major version for pachyderm.
	MajorVersion, _ = getenvInt("MAJOR_VERSION")
	// MinorVersion is the current minor version for pachyderm.
	MinorVersion, _ = getenvInt("MINOR_VERSION")
	// MicroVersion is the patch number for pachyderm.
	MicroVersion, _ = getenvInt("PATCH_VERSION")

	// AdditionalVersion is the string provided at release time
	// The value is passed to the linker at build time
	//
	// DO NOT set the value of this variable here. For some reason, if
	// AdditionalVersion is set here, the go linker will not overwrite it.
	AdditionalVersion string

	// Version is the current version for pachyderm.
	Version = &pb.Version{
		Major:      uint32(MajorVersion),
		Minor:      uint32(MinorVersion),
		Micro:      uint32(MicroVersion),
		Additional: AdditionalVersion,
	}

	// Custom release have a 40 character commit hash build into the version string
	customReleaseRegex = regexp.MustCompile(`[0-9a-f]{40}`)
)

func getenvStr(key string) (string, error) {
	v := os.Getenv(key)
	if v == "" {
		return v, errors.New("getenv: environment variable empty")
	}
	return v, nil
}

func getenvInt(key string) (int, error) {
	s, err := getenvStr(key)
	if err != nil {
		return 0, err
	}
	v, err := strconv.Atoi(s)
	if err != nil {
		return 0, err
	}
	return v, nil
}

// IsUnstable will return true for alpha or beta builds, and false otherwise.
func IsUnstable() bool {
	return strings.Contains(Version.Additional, "beta") || strings.Contains(Version.Additional, "alpha")
}

// PrettyPrintVersion returns a version string optionally tagged with metadata.
// For example: "1.2.3", or "1.2.3rc1" if version.Additional is "rc1".
func PrettyPrintVersion(version *pb.Version) string {
	result := PrettyPrintVersionNoAdditional(version)
	if version.Additional != "" {
		result += version.Additional
	}
	return result
}

// IsAtLeast returns true if Pachyderm is at least at the given version. This
// allows us to gate backwards-incompatible features on release boundaries.
func IsAtLeast(major, minor int) bool {
	return MajorVersion > major || (MajorVersion == major && MinorVersion >= minor)
}

// IsCustomRelease returns true if versionAdditional is a hex commit hash that is
// 40 characters long
func IsCustomRelease(version *pb.Version) bool {
	if version.Additional != "" && customReleaseRegex.MatchString(version.Additional) {
		return true
	}
	return false
}

// BranchFromVersion returns version string for the release branch
// patch release of .0 is always from the master. Others are from the M.m.x branch
func BranchFromVersion(version *pb.Version) string {
	if version.Micro == 0 {
		return "master"
	}
	return fmt.Sprintf("%d.%d.x", version.Major, version.Minor)
}

// PrettyVersion calls PrettyPrintVersion on Version and returns the result.
func PrettyVersion() string {
	return PrettyPrintVersion(Version)
}

// PrettyPrintVersionNoAdditional returns a version string without
// version.Additional.
func PrettyPrintVersionNoAdditional(version *pb.Version) string {
	return fmt.Sprintf("%d.%d.%d", version.Major, version.Minor, version.Micro)
}
