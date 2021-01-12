// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package openid

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// ## Import
//
// This resource does not support import. Instead of importing, feel free to create this resource as if it did not already exist on the server.
type ClientDefaultScopes struct {
	pulumi.CustomResourceState

	// The ID of the client to attach default scopes to. Note that this is the unique ID of the client generated by Keycloak.
	ClientId pulumi.StringOutput `pulumi:"clientId"`
	// An array of client scope names to attach to this client.
	DefaultScopes pulumi.StringArrayOutput `pulumi:"defaultScopes"`
	// The realm this client and scopes exists in.
	RealmId pulumi.StringOutput `pulumi:"realmId"`
}

// NewClientDefaultScopes registers a new resource with the given unique name, arguments, and options.
func NewClientDefaultScopes(ctx *pulumi.Context,
	name string, args *ClientDefaultScopesArgs, opts ...pulumi.ResourceOption) (*ClientDefaultScopes, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.ClientId == nil {
		return nil, errors.New("invalid value for required argument 'ClientId'")
	}
	if args.DefaultScopes == nil {
		return nil, errors.New("invalid value for required argument 'DefaultScopes'")
	}
	if args.RealmId == nil {
		return nil, errors.New("invalid value for required argument 'RealmId'")
	}
	var resource ClientDefaultScopes
	err := ctx.RegisterResource("keycloak:openid/clientDefaultScopes:ClientDefaultScopes", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetClientDefaultScopes gets an existing ClientDefaultScopes resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetClientDefaultScopes(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *ClientDefaultScopesState, opts ...pulumi.ResourceOption) (*ClientDefaultScopes, error) {
	var resource ClientDefaultScopes
	err := ctx.ReadResource("keycloak:openid/clientDefaultScopes:ClientDefaultScopes", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering ClientDefaultScopes resources.
type clientDefaultScopesState struct {
	// The ID of the client to attach default scopes to. Note that this is the unique ID of the client generated by Keycloak.
	ClientId *string `pulumi:"clientId"`
	// An array of client scope names to attach to this client.
	DefaultScopes []string `pulumi:"defaultScopes"`
	// The realm this client and scopes exists in.
	RealmId *string `pulumi:"realmId"`
}

type ClientDefaultScopesState struct {
	// The ID of the client to attach default scopes to. Note that this is the unique ID of the client generated by Keycloak.
	ClientId pulumi.StringPtrInput
	// An array of client scope names to attach to this client.
	DefaultScopes pulumi.StringArrayInput
	// The realm this client and scopes exists in.
	RealmId pulumi.StringPtrInput
}

func (ClientDefaultScopesState) ElementType() reflect.Type {
	return reflect.TypeOf((*clientDefaultScopesState)(nil)).Elem()
}

type clientDefaultScopesArgs struct {
	// The ID of the client to attach default scopes to. Note that this is the unique ID of the client generated by Keycloak.
	ClientId string `pulumi:"clientId"`
	// An array of client scope names to attach to this client.
	DefaultScopes []string `pulumi:"defaultScopes"`
	// The realm this client and scopes exists in.
	RealmId string `pulumi:"realmId"`
}

// The set of arguments for constructing a ClientDefaultScopes resource.
type ClientDefaultScopesArgs struct {
	// The ID of the client to attach default scopes to. Note that this is the unique ID of the client generated by Keycloak.
	ClientId pulumi.StringInput
	// An array of client scope names to attach to this client.
	DefaultScopes pulumi.StringArrayInput
	// The realm this client and scopes exists in.
	RealmId pulumi.StringInput
}

func (ClientDefaultScopesArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*clientDefaultScopesArgs)(nil)).Elem()
}

type ClientDefaultScopesInput interface {
	pulumi.Input

	ToClientDefaultScopesOutput() ClientDefaultScopesOutput
	ToClientDefaultScopesOutputWithContext(ctx context.Context) ClientDefaultScopesOutput
}

func (ClientDefaultScopes) ElementType() reflect.Type {
	return reflect.TypeOf((*ClientDefaultScopes)(nil)).Elem()
}

func (i ClientDefaultScopes) ToClientDefaultScopesOutput() ClientDefaultScopesOutput {
	return i.ToClientDefaultScopesOutputWithContext(context.Background())
}

func (i ClientDefaultScopes) ToClientDefaultScopesOutputWithContext(ctx context.Context) ClientDefaultScopesOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ClientDefaultScopesOutput)
}

type ClientDefaultScopesOutput struct {
	*pulumi.OutputState
}

func (ClientDefaultScopesOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*ClientDefaultScopesOutput)(nil)).Elem()
}

func (o ClientDefaultScopesOutput) ToClientDefaultScopesOutput() ClientDefaultScopesOutput {
	return o
}

func (o ClientDefaultScopesOutput) ToClientDefaultScopesOutputWithContext(ctx context.Context) ClientDefaultScopesOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(ClientDefaultScopesOutput{})
}
