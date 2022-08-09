package pachd

import (
	"context"
	"os"
	"path"

	"github.com/pachyderm/pachyderm/v2/src/enterprise"
	eprsserver "github.com/pachyderm/pachyderm/v2/src/server/enterprise/server"
	"google.golang.org/grpc"
)

type pausedBuilder struct {
	builder
}

func NewPausedBuilder(config any) Builder {
	return &pausedBuilder{newBuilder(config, "pachyderm-pachd-paused")}
}

func (pb *pausedBuilder) registerEnterpriseServer(ctx context.Context) error {
	pb.enterpriseEnv = eprsserver.EnvFromServiceEnv(
		pb.env,
		path.Join(pb.env.Config().EtcdPrefix, pb.env.Config().EnterpriseEtcdPrefix),
		pb.txnEnv,
		eprsserver.WithMode(eprsserver.PausedMode),
		eprsserver.WithUnpausedMode(os.Getenv("UNPAUSED_MODE")),
	)
	apiServer, err := eprsserver.NewEnterpriseServer(
		pb.enterpriseEnv,
		true,
	)
	if err != nil {
		return err
	}
	pb.forGRPCServer(func(s *grpc.Server) {
		enterprise.RegisterAPIServer(s, apiServer)
	})
	pb.bootstrappers = append(pb.bootstrappers, apiServer)
	pb.env.SetEnterpriseServer(apiServer)
	pb.licenseEnv.EnterpriseServer = apiServer

	// Stop workers because unpaused pachds in the process
	// of rolling may have started them back up.
	if err := pb.enterpriseEnv.StopWorkers(ctx); err != nil {
		return err
	}
	return nil
}

func (pb *pausedBuilder) maybeRegisterIdentityServer(ctx context.Context) error {

	if pb.env.Config().EnterpriseMember {
		return nil
	}
	return pb.builder.registerIdentityServer(ctx)
}

func (pb *pausedBuilder) Build(ctx context.Context) error {
	pb.daemon.criticalServersOnly = pb.env.Config().RequireCriticalServersOnly
	return pb.apply(ctx,
		pb.setupDB,
		pb.maybeInitDexDB,
		pb.initInternalServer,
		pb.initExternalServer,
		pb.registerLicenseServer,
		pb.registerEnterpriseServer,
		pb.registerAdminServer,
		pb.maybeRegisterIdentityServer,
		pb.registerAuthServer,
		pb.registerHealthServer,
		pb.registerTransactionServer,
		pb.initS3Server,
		pb.initPrometheusServer,

		pb.initTransaction,
		pb.internallyListen,
		pb.externallyListen,
		pb.resumeHealth,
		pb.daemon.serve,
	)
}
