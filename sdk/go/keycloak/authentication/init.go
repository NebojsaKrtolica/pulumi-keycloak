// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package authentication

import (
	"fmt"

	"github.com/blang/semver"
	"github.com/pulumi/pulumi-keycloak/sdk/v4/go/keycloak"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

type module struct {
	version semver.Version
}

func (m *module) Version() semver.Version {
	return m.version
}

func (m *module) Construct(ctx *pulumi.Context, name, typ, urn string) (r pulumi.Resource, err error) {
	switch typ {
	case "keycloak:authentication/execution:Execution":
		r = &Execution{}
	case "keycloak:authentication/executionConfig:ExecutionConfig":
		r = &ExecutionConfig{}
	case "keycloak:authentication/flow:Flow":
		r = &Flow{}
	case "keycloak:authentication/subflow:Subflow":
		r = &Subflow{}
	default:
		return nil, fmt.Errorf("unknown resource type: %s", typ)
	}

	err = ctx.RegisterResource(typ, name, nil, r, pulumi.URN_(urn))
	return
}

func init() {
	version, err := keycloak.PkgVersion()
	if err != nil {
		fmt.Printf("failed to determine package version. defaulting to v1: %v\n", err)
	}
	pulumi.RegisterResourceModule(
		"keycloak",
		"authentication/execution",
		&module{version},
	)
	pulumi.RegisterResourceModule(
		"keycloak",
		"authentication/executionConfig",
		&module{version},
	)
	pulumi.RegisterResourceModule(
		"keycloak",
		"authentication/flow",
		&module{version},
	)
	pulumi.RegisterResourceModule(
		"keycloak",
		"authentication/subflow",
		&module{version},
	)
}
