package pfs

import (
	"encoding/hex"
	"fmt"
	"hash"

	"github.com/pachyderm/pachyderm/v2/src/internal/pachhash"
)

const (
	// ChunkSize is the size of file chunks when resumable upload is used
	ChunkSize = int64(512 * 1024 * 1024) // 512 MB
	// EmptyStr is included in the description of output commits from failed jobs.
	EmptyStr = "(empty)"

	// default system repo types
	UserRepoType  = "user"
	MetaRepoType  = "meta"
	BuildRepoType = "build"
	SpecRepoType  = "spec"
)

// FullID prints repoName@CommitID
func (c *Commit) FullID() string {
	return fmt.Sprintf("%s@%s", c.Branch.Repo.Name, c.ID)
}

// NewHash returns a hash that PFS uses internally to compute checksums.
func NewHash() hash.Hash {
	return pachhash.New()
}

// EncodeHash encodes a hash into a readable format.
func EncodeHash(bytes []byte) string {
	return hex.EncodeToString(bytes)
}

// DecodeHash decodes a hash into bytes.
func DecodeHash(hash string) ([]byte, error) {
	return hex.DecodeString(hash)
}

func (r *Repo) NewBranch(name string) *Branch {
	return &Branch{
		Repo: r,
		Name: name,
	}
}

func (r *Repo) NewCommit(branch, id string) *Commit {
	return &Commit{
		ID:     id,
		Branch: r.NewBranch(branch),
	}
}
