// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package keycloak

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// ## Import
//
// Custom user federation providers can be imported using the format `{{realm_id}}/{{custom_user_federation_id}}`. The ID of the custom user federation provider can be found within the Keycloak GUI and is typically a GUIDbash
//
// ```sh
//  $ pulumi import keycloak:index/customUserFederation:CustomUserFederation custom_user_federation my-realm/af2a6ca3-e4d7-49c3-b08b-1b3c70b4b860
// ```
type CustomUserFederation struct {
	pulumi.CustomResourceState

	// Can be one of `DEFAULT`, `EVICT_DAILY`, `EVICT_WEEKLY`, `MAX_LIFESPAN`, or `NO_CACHE`. Defaults to `DEFAULT`.
	CachePolicy pulumi.StringPtrOutput `pulumi:"cachePolicy"`
	// The provider configuration handed over to your custom user federation provider.
	Config pulumi.MapOutput `pulumi:"config"`
	// When `false`, this provider will not be used when performing queries for users. Defaults to `true`.
	Enabled pulumi.BoolPtrOutput `pulumi:"enabled"`
	// Display name of the provider when displayed in the console.
	Name pulumi.StringOutput `pulumi:"name"`
	// Must be set to the realms' `internalId`  when it differs from the realm. This can happen when existing resources are imported into the state.
	ParentId pulumi.StringPtrOutput `pulumi:"parentId"`
	// Priority of this provider when looking up users. Lower values are first. Defaults to `0`.
	Priority pulumi.IntPtrOutput `pulumi:"priority"`
	// The unique ID of the custom provider, specified in the `getId` implementation for the `UserStorageProviderFactory` interface.
	ProviderId pulumi.StringOutput `pulumi:"providerId"`
	// The realm that this provider will provide user federation for.
	RealmId pulumi.StringOutput `pulumi:"realmId"`
}

// NewCustomUserFederation registers a new resource with the given unique name, arguments, and options.
func NewCustomUserFederation(ctx *pulumi.Context,
	name string, args *CustomUserFederationArgs, opts ...pulumi.ResourceOption) (*CustomUserFederation, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.ProviderId == nil {
		return nil, errors.New("invalid value for required argument 'ProviderId'")
	}
	if args.RealmId == nil {
		return nil, errors.New("invalid value for required argument 'RealmId'")
	}
	var resource CustomUserFederation
	err := ctx.RegisterResource("keycloak:index/customUserFederation:CustomUserFederation", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetCustomUserFederation gets an existing CustomUserFederation resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetCustomUserFederation(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *CustomUserFederationState, opts ...pulumi.ResourceOption) (*CustomUserFederation, error) {
	var resource CustomUserFederation
	err := ctx.ReadResource("keycloak:index/customUserFederation:CustomUserFederation", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering CustomUserFederation resources.
type customUserFederationState struct {
	// Can be one of `DEFAULT`, `EVICT_DAILY`, `EVICT_WEEKLY`, `MAX_LIFESPAN`, or `NO_CACHE`. Defaults to `DEFAULT`.
	CachePolicy *string `pulumi:"cachePolicy"`
	// The provider configuration handed over to your custom user federation provider.
	Config map[string]interface{} `pulumi:"config"`
	// When `false`, this provider will not be used when performing queries for users. Defaults to `true`.
	Enabled *bool `pulumi:"enabled"`
	// Display name of the provider when displayed in the console.
	Name *string `pulumi:"name"`
	// Must be set to the realms' `internalId`  when it differs from the realm. This can happen when existing resources are imported into the state.
	ParentId *string `pulumi:"parentId"`
	// Priority of this provider when looking up users. Lower values are first. Defaults to `0`.
	Priority *int `pulumi:"priority"`
	// The unique ID of the custom provider, specified in the `getId` implementation for the `UserStorageProviderFactory` interface.
	ProviderId *string `pulumi:"providerId"`
	// The realm that this provider will provide user federation for.
	RealmId *string `pulumi:"realmId"`
}

type CustomUserFederationState struct {
	// Can be one of `DEFAULT`, `EVICT_DAILY`, `EVICT_WEEKLY`, `MAX_LIFESPAN`, or `NO_CACHE`. Defaults to `DEFAULT`.
	CachePolicy pulumi.StringPtrInput
	// The provider configuration handed over to your custom user federation provider.
	Config pulumi.MapInput
	// When `false`, this provider will not be used when performing queries for users. Defaults to `true`.
	Enabled pulumi.BoolPtrInput
	// Display name of the provider when displayed in the console.
	Name pulumi.StringPtrInput
	// Must be set to the realms' `internalId`  when it differs from the realm. This can happen when existing resources are imported into the state.
	ParentId pulumi.StringPtrInput
	// Priority of this provider when looking up users. Lower values are first. Defaults to `0`.
	Priority pulumi.IntPtrInput
	// The unique ID of the custom provider, specified in the `getId` implementation for the `UserStorageProviderFactory` interface.
	ProviderId pulumi.StringPtrInput
	// The realm that this provider will provide user federation for.
	RealmId pulumi.StringPtrInput
}

func (CustomUserFederationState) ElementType() reflect.Type {
	return reflect.TypeOf((*customUserFederationState)(nil)).Elem()
}

type customUserFederationArgs struct {
	// Can be one of `DEFAULT`, `EVICT_DAILY`, `EVICT_WEEKLY`, `MAX_LIFESPAN`, or `NO_CACHE`. Defaults to `DEFAULT`.
	CachePolicy *string `pulumi:"cachePolicy"`
	// The provider configuration handed over to your custom user federation provider.
	Config map[string]interface{} `pulumi:"config"`
	// When `false`, this provider will not be used when performing queries for users. Defaults to `true`.
	Enabled *bool `pulumi:"enabled"`
	// Display name of the provider when displayed in the console.
	Name *string `pulumi:"name"`
	// Must be set to the realms' `internalId`  when it differs from the realm. This can happen when existing resources are imported into the state.
	ParentId *string `pulumi:"parentId"`
	// Priority of this provider when looking up users. Lower values are first. Defaults to `0`.
	Priority *int `pulumi:"priority"`
	// The unique ID of the custom provider, specified in the `getId` implementation for the `UserStorageProviderFactory` interface.
	ProviderId string `pulumi:"providerId"`
	// The realm that this provider will provide user federation for.
	RealmId string `pulumi:"realmId"`
}

// The set of arguments for constructing a CustomUserFederation resource.
type CustomUserFederationArgs struct {
	// Can be one of `DEFAULT`, `EVICT_DAILY`, `EVICT_WEEKLY`, `MAX_LIFESPAN`, or `NO_CACHE`. Defaults to `DEFAULT`.
	CachePolicy pulumi.StringPtrInput
	// The provider configuration handed over to your custom user federation provider.
	Config pulumi.MapInput
	// When `false`, this provider will not be used when performing queries for users. Defaults to `true`.
	Enabled pulumi.BoolPtrInput
	// Display name of the provider when displayed in the console.
	Name pulumi.StringPtrInput
	// Must be set to the realms' `internalId`  when it differs from the realm. This can happen when existing resources are imported into the state.
	ParentId pulumi.StringPtrInput
	// Priority of this provider when looking up users. Lower values are first. Defaults to `0`.
	Priority pulumi.IntPtrInput
	// The unique ID of the custom provider, specified in the `getId` implementation for the `UserStorageProviderFactory` interface.
	ProviderId pulumi.StringInput
	// The realm that this provider will provide user federation for.
	RealmId pulumi.StringInput
}

func (CustomUserFederationArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*customUserFederationArgs)(nil)).Elem()
}

type CustomUserFederationInput interface {
	pulumi.Input

	ToCustomUserFederationOutput() CustomUserFederationOutput
	ToCustomUserFederationOutputWithContext(ctx context.Context) CustomUserFederationOutput
}

func (CustomUserFederation) ElementType() reflect.Type {
	return reflect.TypeOf((*CustomUserFederation)(nil)).Elem()
}

func (i CustomUserFederation) ToCustomUserFederationOutput() CustomUserFederationOutput {
	return i.ToCustomUserFederationOutputWithContext(context.Background())
}

func (i CustomUserFederation) ToCustomUserFederationOutputWithContext(ctx context.Context) CustomUserFederationOutput {
	return pulumi.ToOutputWithContext(ctx, i).(CustomUserFederationOutput)
}

type CustomUserFederationOutput struct {
	*pulumi.OutputState
}

func (CustomUserFederationOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*CustomUserFederationOutput)(nil)).Elem()
}

func (o CustomUserFederationOutput) ToCustomUserFederationOutput() CustomUserFederationOutput {
	return o
}

func (o CustomUserFederationOutput) ToCustomUserFederationOutputWithContext(ctx context.Context) CustomUserFederationOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(CustomUserFederationOutput{})
}
