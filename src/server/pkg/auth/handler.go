package auth

import (
	"github.com/pachyderm/pachyderm/src/client"
	"github.com/pachyderm/pachyderm/src/client/auth"
)

type authHandler func(*client.APIClient, string) error

// authDisabledOr wraps an authHandler and permits the RPC if authHandler succeeds or
// if auth is disabled on the cluster
func authDisabledOr(h authHandler) authHandler {
	return func(pachClient *client.APIClient, fullMethod string) error {
		err := h(pachClient, fullMethod)
		if auth.IsErrNotActivated(err) {
			return nil
		}
		return err
	}
}

// authPartialAnd wraps an authHandler and permits the RPC if authHandler succeeds or
// if auth is partially enabled on the cluster. Handlers only report partial activation
// if they would otherwise succeed, so this
func authPartialAnd(h authHandler) authHandler {
	return func(pachClient *client.APIClient, fullMethod string) error {
		err := h(pachClient, fullMethod)
		if auth.IsErrPartiallyActivated(err) {
			return nil
		}
		return err
	}
}

// unauthenticated permits any RPC even if the user has no authentication token
func unauthenticated(pachClient *client.APIClient, fullMethod string) error {
	return nil
}

// authenticated permits an RPC if auth is fully enabled and the user is authenticated
func authenticated(pachClient *client.APIClient, fullMethod string) error {
	me, err := pachClient.WhoAmI(pachClient.Ctx(), &auth.WhoAmIRequest{})
	if err != nil {
		return err
	}
	if !me.FullyActivated {
		return auth.ErrPartiallyActivated
	}
	return nil
}

// admin permits an RPC if auth is fully enabled and the user is a cluster admin
func admin(pachClient *client.APIClient, fullMethod string) error {
	me, err := pachClient.WhoAmI(pachClient.Ctx(), &auth.WhoAmIRequest{})
	if err != nil {
		return err
	}
	if me.ClusterRoles != nil {
		for _, s := range me.ClusterRoles.Roles {
			if s == auth.ClusterRole_SUPER {
				if !me.FullyActivated {
					return auth.ErrPartiallyActivated
				}
				return nil
			}
		}
	}

	return &auth.ErrNotAuthorized{
		Subject: me.Username,
		AdminOp: fullMethod,
	}
}
