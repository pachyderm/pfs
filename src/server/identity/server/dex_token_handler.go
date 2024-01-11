package server

import (
	"bytes"
	"context"
	"encoding/base64"
	"encoding/json"
	"net/http"
	"strings"

	"go.uber.org/zap"

	"github.com/pachyderm/pachyderm/v2/src/internal/errors"
	"github.com/pachyderm/pachyderm/v2/src/internal/log"
)

type tokenResp struct {
	IdToken string `json:"id_token"`
}

type idToken struct {
	Email         string   `json:"email"`
	EmailVerified bool     `json:"email_verified"`
	Groups        []string `json:"groups"`
}

func (w *dexWeb) idTokenHandler(next http.Handler) http.HandlerFunc {
	return func(rw http.ResponseWriter, r *http.Request) {
		ctx := r.Context()
		bw := &bufferResponseWriter{
			rw: rw,
			b:  &bytes.Buffer{},
		}
		next.ServeHTTP(bw, r)
		if bw.statusCode >= 300 {
			log.Error(ctx, "skip provisioning during login", zap.Int("statusCode", bw.statusCode))
			return
		}
		ps, err := w.provisioners(ctx)
		if err != nil {
			log.Error(ctx, "failed to collect user provisioners", zap.Error(err))
			return
		}
		if len(ps) == 0 {
			return
		}
		token, err := idTokenFromBytes(ctx, bw.b.Bytes())
		if err != nil {
			log.Error(ctx, "failed to extract ID token from bytes", zap.Error(err))
			return
		}
		if token.Email == "" {
			log.Error(ctx, "failed to find email claim in ID token", zap.Error(err))
			return
		}
		for _, p := range ps {
			defer p.close()
			u := &user{name: token.Email}
			if _, err := p.findUser(ctx, token.Email); err != nil {
				if !errors.As(err, &errNotFound{}) {
					log.Error(ctx, "failed to find user", zap.Error(err),
						zap.String("user", token.Email))
					return
				}
				if _, err := p.createUser(ctx, &user{name: token.Email}); err != nil {
					log.Error(ctx, "failed to provision user", zap.Error(err),
						zap.String("user", token.Email))
					return
				}
				log.Info(ctx, "determined user provisioned", zap.String("email", token.Email))
			} else {
				log.Info(ctx, "determined user exists", zap.String("email", token.Email))
			}
			var gs []*group
			for _, grp := range token.Groups {
				g, err := p.findGroup(ctx, grp)
				if err != nil {
					if !errors.As(err, &errNotFound{}) {
						log.Error(ctx, "failed to find group", zap.Error(err),
							zap.String("group", grp))
						return
					}
					if _, err := p.createGroup(ctx, &group{name: grp}); err != nil {
						log.Error(ctx, "failed to provision group", zap.Error(err),
							zap.String("group", grp))
						return
					}
					log.Info(ctx, "created determined group", zap.String("group", grp))
				} else {
					log.Info(ctx, "determined group exists", zap.String("group", grp))
				}
				gs = append(gs, g)
			}
			if err := p.setUserGroups(ctx, u, gs); err != nil {
				log.Error(ctx, "failed to set user groups", zap.Error(err),
					zap.String("user", token.Email),
					zap.Any("groups", token.Groups))
				return
			}
		}
	}
}

func idTokenFromBytes(ctx context.Context, b []byte) (*idToken, error) {
	resp := &tokenResp{}
	if err := json.Unmarshal(b, resp); err != nil {
		msg := "failed to unmarshal /token response"
		log.Error(ctx, msg, zap.Error(err))
		return nil, errors.Wrap(err, msg)
	}
	tok, err := base64.RawStdEncoding.DecodeString(jwtPayload(resp.IdToken))
	if err != nil {
		msg := "failed to base64 decode ID token"
		log.Error(ctx, msg, zap.Error(err),
			zap.String("token", resp.IdToken))
		return nil, errors.Wrap(err, msg)
	}
	token := &idToken{}
	if err := json.Unmarshal(tok, token); err != nil {
		msg := "failed to unmarshal /token response"
		log.Error(ctx, msg, zap.Error(err))
		return nil, errors.Wrap(err, msg)
	}
	return token, nil
}

type bufferResponseWriter struct {
	b          *bytes.Buffer
	rw         http.ResponseWriter
	statusCode int
}

func (br *bufferResponseWriter) Write(b []byte) (int, error) {
	i, err := br.rw.Write(b)
	if err != nil {
		return i, errors.Wrap(err, "write to response writer")
	}
	_, err = br.b.Write(b)
	return i, errors.Wrap(err, "write to buffered response writer")
}

func (br *bufferResponseWriter) Header() http.Header {
	return br.rw.Header()
}

func (br *bufferResponseWriter) WriteHeader(statusCode int) {
	br.rw.WriteHeader(statusCode)
	if br.statusCode != 0 {
		br.statusCode = statusCode
	}
}

func (w *dexWeb) provisioners(ctx context.Context) ([]provisioner, error) {
	var ps []provisioner
	if w.env.Config.DeterminedURL != "" {
		d, err := newDeterminedProvisioner(ctx, determinedConfig{
			MasterURL: w.env.Config.DeterminedURL,
			Username:  w.env.Config.DeterminedUsername,
			Password:  w.env.Config.DeterminedPassword,
			TLS:       w.env.Config.DeterminedTLS,
		})
		if err != nil {
			log.Error(ctx, "failed to instantiate determined user provisioner", zap.Error(err))
			return nil, err
		}
		ps = append(ps, d)
	}
	return ps, nil
}

func jwtPayload(jwt string) string {
	parts := strings.Split(jwt, ".")
	if len(parts) > 1 {
		return parts[1]
	}
	return ""
}
