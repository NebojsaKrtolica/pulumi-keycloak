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
// This resource can be imported using the format `{{realm_id}}/{{provider_alias}}`, where `provider_alias` is the alias that you assign to the identity provider upon creation. Examplebash
//
// ```sh
//  $ pulumi import keycloak:index/identityProviderTokenExchangeScopePermission:IdentityProviderTokenExchangeScopePermission oidc_idp_permission my-realm/myIdp
// ```
type IdentityProviderTokenExchangeScopePermission struct {
	pulumi.CustomResourceState

	// (Computed) Resource ID representing the identity provider, this automatically created by keycloak.
	AuthorizationIdpResourceId pulumi.StringOutput `pulumi:"authorizationIdpResourceId"`
	// (Computed) Resource server ID representing the realm management client on which this permission is managed.
	AuthorizationResourceServerId pulumi.StringOutput `pulumi:"authorizationResourceServerId"`
	// (Computed) Permission ID representing the Permission with scope 'Token Exchange' and the resource 'authorization_idp_resource_id', this automatically created by keycloak, the policy ID will be set on this permission.
	AuthorizationTokenExchangeScopePermissionId pulumi.StringOutput `pulumi:"authorizationTokenExchangeScopePermissionId"`
	// A list of IDs of the clients for which a policy will be created and set on scope based token exchange permission.
	Clients pulumi.StringArrayOutput `pulumi:"clients"`
	// (Computed) Policy ID that will be set on the scope based token exchange permission automatically created by enabling permissions on the reference identity provider.
	PolicyId pulumi.StringOutput `pulumi:"policyId"`
	// Defaults to "client" This is also the only value policy type supported by this provider.
	PolicyType pulumi.StringPtrOutput `pulumi:"policyType"`
	// Alias of the identity provider.
	ProviderAlias pulumi.StringOutput `pulumi:"providerAlias"`
	// The realm that the identity provider exists in.
	RealmId pulumi.StringOutput `pulumi:"realmId"`
}

// NewIdentityProviderTokenExchangeScopePermission registers a new resource with the given unique name, arguments, and options.
func NewIdentityProviderTokenExchangeScopePermission(ctx *pulumi.Context,
	name string, args *IdentityProviderTokenExchangeScopePermissionArgs, opts ...pulumi.ResourceOption) (*IdentityProviderTokenExchangeScopePermission, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.Clients == nil {
		return nil, errors.New("invalid value for required argument 'Clients'")
	}
	if args.ProviderAlias == nil {
		return nil, errors.New("invalid value for required argument 'ProviderAlias'")
	}
	if args.RealmId == nil {
		return nil, errors.New("invalid value for required argument 'RealmId'")
	}
	var resource IdentityProviderTokenExchangeScopePermission
	err := ctx.RegisterResource("keycloak:index/identityProviderTokenExchangeScopePermission:IdentityProviderTokenExchangeScopePermission", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetIdentityProviderTokenExchangeScopePermission gets an existing IdentityProviderTokenExchangeScopePermission resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetIdentityProviderTokenExchangeScopePermission(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *IdentityProviderTokenExchangeScopePermissionState, opts ...pulumi.ResourceOption) (*IdentityProviderTokenExchangeScopePermission, error) {
	var resource IdentityProviderTokenExchangeScopePermission
	err := ctx.ReadResource("keycloak:index/identityProviderTokenExchangeScopePermission:IdentityProviderTokenExchangeScopePermission", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering IdentityProviderTokenExchangeScopePermission resources.
type identityProviderTokenExchangeScopePermissionState struct {
	// (Computed) Resource ID representing the identity provider, this automatically created by keycloak.
	AuthorizationIdpResourceId *string `pulumi:"authorizationIdpResourceId"`
	// (Computed) Resource server ID representing the realm management client on which this permission is managed.
	AuthorizationResourceServerId *string `pulumi:"authorizationResourceServerId"`
	// (Computed) Permission ID representing the Permission with scope 'Token Exchange' and the resource 'authorization_idp_resource_id', this automatically created by keycloak, the policy ID will be set on this permission.
	AuthorizationTokenExchangeScopePermissionId *string `pulumi:"authorizationTokenExchangeScopePermissionId"`
	// A list of IDs of the clients for which a policy will be created and set on scope based token exchange permission.
	Clients []string `pulumi:"clients"`
	// (Computed) Policy ID that will be set on the scope based token exchange permission automatically created by enabling permissions on the reference identity provider.
	PolicyId *string `pulumi:"policyId"`
	// Defaults to "client" This is also the only value policy type supported by this provider.
	PolicyType *string `pulumi:"policyType"`
	// Alias of the identity provider.
	ProviderAlias *string `pulumi:"providerAlias"`
	// The realm that the identity provider exists in.
	RealmId *string `pulumi:"realmId"`
}

type IdentityProviderTokenExchangeScopePermissionState struct {
	// (Computed) Resource ID representing the identity provider, this automatically created by keycloak.
	AuthorizationIdpResourceId pulumi.StringPtrInput
	// (Computed) Resource server ID representing the realm management client on which this permission is managed.
	AuthorizationResourceServerId pulumi.StringPtrInput
	// (Computed) Permission ID representing the Permission with scope 'Token Exchange' and the resource 'authorization_idp_resource_id', this automatically created by keycloak, the policy ID will be set on this permission.
	AuthorizationTokenExchangeScopePermissionId pulumi.StringPtrInput
	// A list of IDs of the clients for which a policy will be created and set on scope based token exchange permission.
	Clients pulumi.StringArrayInput
	// (Computed) Policy ID that will be set on the scope based token exchange permission automatically created by enabling permissions on the reference identity provider.
	PolicyId pulumi.StringPtrInput
	// Defaults to "client" This is also the only value policy type supported by this provider.
	PolicyType pulumi.StringPtrInput
	// Alias of the identity provider.
	ProviderAlias pulumi.StringPtrInput
	// The realm that the identity provider exists in.
	RealmId pulumi.StringPtrInput
}

func (IdentityProviderTokenExchangeScopePermissionState) ElementType() reflect.Type {
	return reflect.TypeOf((*identityProviderTokenExchangeScopePermissionState)(nil)).Elem()
}

type identityProviderTokenExchangeScopePermissionArgs struct {
	// A list of IDs of the clients for which a policy will be created and set on scope based token exchange permission.
	Clients []string `pulumi:"clients"`
	// Defaults to "client" This is also the only value policy type supported by this provider.
	PolicyType *string `pulumi:"policyType"`
	// Alias of the identity provider.
	ProviderAlias string `pulumi:"providerAlias"`
	// The realm that the identity provider exists in.
	RealmId string `pulumi:"realmId"`
}

// The set of arguments for constructing a IdentityProviderTokenExchangeScopePermission resource.
type IdentityProviderTokenExchangeScopePermissionArgs struct {
	// A list of IDs of the clients for which a policy will be created and set on scope based token exchange permission.
	Clients pulumi.StringArrayInput
	// Defaults to "client" This is also the only value policy type supported by this provider.
	PolicyType pulumi.StringPtrInput
	// Alias of the identity provider.
	ProviderAlias pulumi.StringInput
	// The realm that the identity provider exists in.
	RealmId pulumi.StringInput
}

func (IdentityProviderTokenExchangeScopePermissionArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*identityProviderTokenExchangeScopePermissionArgs)(nil)).Elem()
}

type IdentityProviderTokenExchangeScopePermissionInput interface {
	pulumi.Input

	ToIdentityProviderTokenExchangeScopePermissionOutput() IdentityProviderTokenExchangeScopePermissionOutput
	ToIdentityProviderTokenExchangeScopePermissionOutputWithContext(ctx context.Context) IdentityProviderTokenExchangeScopePermissionOutput
}

func (IdentityProviderTokenExchangeScopePermission) ElementType() reflect.Type {
	return reflect.TypeOf((*IdentityProviderTokenExchangeScopePermission)(nil)).Elem()
}

func (i IdentityProviderTokenExchangeScopePermission) ToIdentityProviderTokenExchangeScopePermissionOutput() IdentityProviderTokenExchangeScopePermissionOutput {
	return i.ToIdentityProviderTokenExchangeScopePermissionOutputWithContext(context.Background())
}

func (i IdentityProviderTokenExchangeScopePermission) ToIdentityProviderTokenExchangeScopePermissionOutputWithContext(ctx context.Context) IdentityProviderTokenExchangeScopePermissionOutput {
	return pulumi.ToOutputWithContext(ctx, i).(IdentityProviderTokenExchangeScopePermissionOutput)
}

type IdentityProviderTokenExchangeScopePermissionOutput struct {
	*pulumi.OutputState
}

func (IdentityProviderTokenExchangeScopePermissionOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*IdentityProviderTokenExchangeScopePermissionOutput)(nil)).Elem()
}

func (o IdentityProviderTokenExchangeScopePermissionOutput) ToIdentityProviderTokenExchangeScopePermissionOutput() IdentityProviderTokenExchangeScopePermissionOutput {
	return o
}

func (o IdentityProviderTokenExchangeScopePermissionOutput) ToIdentityProviderTokenExchangeScopePermissionOutputWithContext(ctx context.Context) IdentityProviderTokenExchangeScopePermissionOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(IdentityProviderTokenExchangeScopePermissionOutput{})
}
