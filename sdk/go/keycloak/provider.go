// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package keycloak

import (
	"reflect"

	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// The provider type for the keycloak package. By default, resources use package-wide configuration
// settings, however an explicit `Provider` instance may be created and passed during resource
// construction to achieve fine-grained programmatic control over provider settings. See the
// [documentation](https://www.pulumi.com/docs/reference/programming-model/#providers) for more information.
type Provider struct {
	pulumi.ProviderResourceState
}

// NewProvider registers a new resource with the given unique name, arguments, and options.
func NewProvider(ctx *pulumi.Context,
	name string, args *ProviderArgs, opts ...pulumi.ResourceOption) (*Provider, error) {
	if args == nil {
		args = &ProviderArgs{}
	}
	if args.ClientId == nil {
		args.ClientId = pulumi.StringPtr(getEnvOrDefault("", nil, "KEYCLOAK_CLIENT_ID").(string))
	}
	if args.ClientSecret == nil {
		args.ClientSecret = pulumi.StringPtr(getEnvOrDefault("", nil, "KEYCLOAK_CLIENT_SECRET").(string))
	}
	if args.ClientTimeout == nil {
		args.ClientTimeout = pulumi.IntPtr(getEnvOrDefault(5, parseEnvInt, "KEYCLOAK_CLIENT_TIMEOUT").(int))
	}
	if args.Password == nil {
		args.Password = pulumi.StringPtr(getEnvOrDefault("", nil, "KEYCLOAK_PASSWORD").(string))
	}
	if args.Realm == nil {
		args.Realm = pulumi.StringPtr(getEnvOrDefault("master", nil, "KEYCLOAK_REALM").(string))
	}
	if args.Url == nil {
		args.Url = pulumi.StringPtr(getEnvOrDefault("", nil, "KEYCLOAK_URL").(string))
	}
	if args.Username == nil {
		args.Username = pulumi.StringPtr(getEnvOrDefault("", nil, "KEYCLOAK_USER").(string))
	}
	var resource Provider
	err := ctx.RegisterResource("pulumi:providers:keycloak", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

type providerArgs struct {
	BasePath     *string `pulumi:"basePath"`
	ClientId     *string `pulumi:"clientId"`
	ClientSecret *string `pulumi:"clientSecret"`
	// Timeout (in seconds) of the Keycloak client
	ClientTimeout *int `pulumi:"clientTimeout"`
	// Whether or not to login to Keycloak instance on provider initialization
	InitialLogin *bool   `pulumi:"initialLogin"`
	Password     *string `pulumi:"password"`
	Realm        *string `pulumi:"realm"`
	// Allows x509 calls using an unknown CA certificate (for development purposes)
	RootCaCertificate *string `pulumi:"rootCaCertificate"`
	// Allows ignoring insecure certificates when set to true. Defaults to false. Disabling security check is dangerous and
	// should be avoided.
	TlsInsecureSkipVerify *bool `pulumi:"tlsInsecureSkipVerify"`
	// The base URL of the Keycloak instance, before `/auth`
	Url      *string `pulumi:"url"`
	Username *string `pulumi:"username"`
}

// The set of arguments for constructing a Provider resource.
type ProviderArgs struct {
	BasePath     pulumi.StringPtrInput
	ClientId     pulumi.StringPtrInput
	ClientSecret pulumi.StringPtrInput
	// Timeout (in seconds) of the Keycloak client
	ClientTimeout pulumi.IntPtrInput
	// Whether or not to login to Keycloak instance on provider initialization
	InitialLogin pulumi.BoolPtrInput
	Password     pulumi.StringPtrInput
	Realm        pulumi.StringPtrInput
	// Allows x509 calls using an unknown CA certificate (for development purposes)
	RootCaCertificate pulumi.StringPtrInput
	// Allows ignoring insecure certificates when set to true. Defaults to false. Disabling security check is dangerous and
	// should be avoided.
	TlsInsecureSkipVerify pulumi.BoolPtrInput
	// The base URL of the Keycloak instance, before `/auth`
	Url      pulumi.StringPtrInput
	Username pulumi.StringPtrInput
}

func (ProviderArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*providerArgs)(nil)).Elem()
}
