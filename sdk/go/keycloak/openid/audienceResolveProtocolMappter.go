// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package openid

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

// Allows for creating the "Audience Resolve" OIDC protocol mapper within Keycloak.
//
// This protocol mapper is useful to avoid manual management of audiences, instead relying on the presence of client roles
// to imply which audiences are appropriate for the token. See the
// [Keycloak docs](https://www.keycloak.org/docs/latest/server_admin/#_audience_resolve) for more details.
//
// ## Example Usage
// ### Client)
//
// ```go
// package main
//
// import (
// 	"github.com/pulumi/pulumi-keycloak/sdk/v4/go/keycloak"
// 	"github.com/pulumi/pulumi-keycloak/sdk/v4/go/keycloak/openid"
// 	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
// )
//
// func main() {
// 	pulumi.Run(func(ctx *pulumi.Context) error {
// 		realm, err := keycloak.NewRealm(ctx, "realm", &keycloak.RealmArgs{
// 			Realm:   pulumi.String("my-realm"),
// 			Enabled: pulumi.Bool(true),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		openidClient, err := openid.NewClient(ctx, "openidClient", &openid.ClientArgs{
// 			RealmId:    realm.ID(),
// 			ClientId:   pulumi.String("client"),
// 			Enabled:    pulumi.Bool(true),
// 			AccessType: pulumi.String("CONFIDENTIAL"),
// 			ValidRedirectUris: pulumi.StringArray{
// 				pulumi.String("http://localhost:8080/openid-callback"),
// 			},
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		_, err = openid.NewAudienceResolveProtocolMappter(ctx, "audienceMapper", &openid.AudienceResolveProtocolMappterArgs{
// 			RealmId:  realm.ID(),
// 			ClientId: openidClient.ID(),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		return nil
// 	})
// }
// ```
// ### Client Scope)
//
// ```go
// package main
//
// import (
// 	"github.com/pulumi/pulumi-keycloak/sdk/v4/go/keycloak"
// 	"github.com/pulumi/pulumi-keycloak/sdk/v4/go/keycloak/openid"
// 	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
// )
//
// func main() {
// 	pulumi.Run(func(ctx *pulumi.Context) error {
// 		realm, err := keycloak.NewRealm(ctx, "realm", &keycloak.RealmArgs{
// 			Realm:   pulumi.String("my-realm"),
// 			Enabled: pulumi.Bool(true),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		clientScope, err := openid.NewClientScope(ctx, "clientScope", &openid.ClientScopeArgs{
// 			RealmId: realm.ID(),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		_, err = openid.NewAudienceProtocolMapper(ctx, "audienceMapper", &openid.AudienceProtocolMapperArgs{
// 			RealmId:       realm.ID(),
// 			ClientScopeId: clientScope.ID(),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		return nil
// 	})
// }
// ```
//
// ## Import
//
// Protocol mappers can be imported using one of the following formats- Client`{{realm_id}}/client/{{client_keycloak_id}}/{{protocol_mapper_id}}` - Client Scope`{{realm_id}}/client-scope/{{client_scope_keycloak_id}}/{{protocol_mapper_id}}` Examplebash
//
// ```sh
//  $ pulumi import keycloak:openid/audienceResolveProtocolMappter:AudienceResolveProtocolMappter audience_mapper my-realm/client/a7202154-8793-4656-b655-1dd18c181e14/71602afa-f7d1-4788-8c49-ef8fd00af0f4
// ```
//
// ```sh
//  $ pulumi import keycloak:openid/audienceResolveProtocolMappter:AudienceResolveProtocolMappter audience_mapper my-realm/client-scope/b799ea7e-73ee-4a73-990a-1eafebe8e20a/71602afa-f7d1-4788-8c49-ef8fd00af0f4
// ```
type AudienceResolveProtocolMappter struct {
	pulumi.CustomResourceState

	// The client this protocol mapper should be attached to. Conflicts with `clientScopeId`. One of `clientId` or `clientScopeId` must be specified.
	ClientId pulumi.StringPtrOutput `pulumi:"clientId"`
	// The client scope this protocol mapper should be attached to. Conflicts with `clientId`. One of `clientId` or `clientScopeId` must be specified.
	ClientScopeId pulumi.StringPtrOutput `pulumi:"clientScopeId"`
	// The display name of this protocol mapper in the GUI. Defaults to "audience resolve".
	Name pulumi.StringOutput `pulumi:"name"`
	// The realm this protocol mapper exists within.
	RealmId pulumi.StringOutput `pulumi:"realmId"`
}

// NewAudienceResolveProtocolMappter registers a new resource with the given unique name, arguments, and options.
func NewAudienceResolveProtocolMappter(ctx *pulumi.Context,
	name string, args *AudienceResolveProtocolMappterArgs, opts ...pulumi.ResourceOption) (*AudienceResolveProtocolMappter, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.RealmId == nil {
		return nil, errors.New("invalid value for required argument 'RealmId'")
	}
	var resource AudienceResolveProtocolMappter
	err := ctx.RegisterResource("keycloak:openid/audienceResolveProtocolMappter:AudienceResolveProtocolMappter", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetAudienceResolveProtocolMappter gets an existing AudienceResolveProtocolMappter resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetAudienceResolveProtocolMappter(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *AudienceResolveProtocolMappterState, opts ...pulumi.ResourceOption) (*AudienceResolveProtocolMappter, error) {
	var resource AudienceResolveProtocolMappter
	err := ctx.ReadResource("keycloak:openid/audienceResolveProtocolMappter:AudienceResolveProtocolMappter", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering AudienceResolveProtocolMappter resources.
type audienceResolveProtocolMappterState struct {
	// The client this protocol mapper should be attached to. Conflicts with `clientScopeId`. One of `clientId` or `clientScopeId` must be specified.
	ClientId *string `pulumi:"clientId"`
	// The client scope this protocol mapper should be attached to. Conflicts with `clientId`. One of `clientId` or `clientScopeId` must be specified.
	ClientScopeId *string `pulumi:"clientScopeId"`
	// The display name of this protocol mapper in the GUI. Defaults to "audience resolve".
	Name *string `pulumi:"name"`
	// The realm this protocol mapper exists within.
	RealmId *string `pulumi:"realmId"`
}

type AudienceResolveProtocolMappterState struct {
	// The client this protocol mapper should be attached to. Conflicts with `clientScopeId`. One of `clientId` or `clientScopeId` must be specified.
	ClientId pulumi.StringPtrInput
	// The client scope this protocol mapper should be attached to. Conflicts with `clientId`. One of `clientId` or `clientScopeId` must be specified.
	ClientScopeId pulumi.StringPtrInput
	// The display name of this protocol mapper in the GUI. Defaults to "audience resolve".
	Name pulumi.StringPtrInput
	// The realm this protocol mapper exists within.
	RealmId pulumi.StringPtrInput
}

func (AudienceResolveProtocolMappterState) ElementType() reflect.Type {
	return reflect.TypeOf((*audienceResolveProtocolMappterState)(nil)).Elem()
}

type audienceResolveProtocolMappterArgs struct {
	// The client this protocol mapper should be attached to. Conflicts with `clientScopeId`. One of `clientId` or `clientScopeId` must be specified.
	ClientId *string `pulumi:"clientId"`
	// The client scope this protocol mapper should be attached to. Conflicts with `clientId`. One of `clientId` or `clientScopeId` must be specified.
	ClientScopeId *string `pulumi:"clientScopeId"`
	// The display name of this protocol mapper in the GUI. Defaults to "audience resolve".
	Name *string `pulumi:"name"`
	// The realm this protocol mapper exists within.
	RealmId string `pulumi:"realmId"`
}

// The set of arguments for constructing a AudienceResolveProtocolMappter resource.
type AudienceResolveProtocolMappterArgs struct {
	// The client this protocol mapper should be attached to. Conflicts with `clientScopeId`. One of `clientId` or `clientScopeId` must be specified.
	ClientId pulumi.StringPtrInput
	// The client scope this protocol mapper should be attached to. Conflicts with `clientId`. One of `clientId` or `clientScopeId` must be specified.
	ClientScopeId pulumi.StringPtrInput
	// The display name of this protocol mapper in the GUI. Defaults to "audience resolve".
	Name pulumi.StringPtrInput
	// The realm this protocol mapper exists within.
	RealmId pulumi.StringInput
}

func (AudienceResolveProtocolMappterArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*audienceResolveProtocolMappterArgs)(nil)).Elem()
}

type AudienceResolveProtocolMappterInput interface {
	pulumi.Input

	ToAudienceResolveProtocolMappterOutput() AudienceResolveProtocolMappterOutput
	ToAudienceResolveProtocolMappterOutputWithContext(ctx context.Context) AudienceResolveProtocolMappterOutput
}

func (*AudienceResolveProtocolMappter) ElementType() reflect.Type {
	return reflect.TypeOf((*AudienceResolveProtocolMappter)(nil))
}

func (i *AudienceResolveProtocolMappter) ToAudienceResolveProtocolMappterOutput() AudienceResolveProtocolMappterOutput {
	return i.ToAudienceResolveProtocolMappterOutputWithContext(context.Background())
}

func (i *AudienceResolveProtocolMappter) ToAudienceResolveProtocolMappterOutputWithContext(ctx context.Context) AudienceResolveProtocolMappterOutput {
	return pulumi.ToOutputWithContext(ctx, i).(AudienceResolveProtocolMappterOutput)
}

func (i *AudienceResolveProtocolMappter) ToAudienceResolveProtocolMappterPtrOutput() AudienceResolveProtocolMappterPtrOutput {
	return i.ToAudienceResolveProtocolMappterPtrOutputWithContext(context.Background())
}

func (i *AudienceResolveProtocolMappter) ToAudienceResolveProtocolMappterPtrOutputWithContext(ctx context.Context) AudienceResolveProtocolMappterPtrOutput {
	return pulumi.ToOutputWithContext(ctx, i).(AudienceResolveProtocolMappterPtrOutput)
}

type AudienceResolveProtocolMappterPtrInput interface {
	pulumi.Input

	ToAudienceResolveProtocolMappterPtrOutput() AudienceResolveProtocolMappterPtrOutput
	ToAudienceResolveProtocolMappterPtrOutputWithContext(ctx context.Context) AudienceResolveProtocolMappterPtrOutput
}

type audienceResolveProtocolMappterPtrType AudienceResolveProtocolMappterArgs

func (*audienceResolveProtocolMappterPtrType) ElementType() reflect.Type {
	return reflect.TypeOf((**AudienceResolveProtocolMappter)(nil))
}

func (i *audienceResolveProtocolMappterPtrType) ToAudienceResolveProtocolMappterPtrOutput() AudienceResolveProtocolMappterPtrOutput {
	return i.ToAudienceResolveProtocolMappterPtrOutputWithContext(context.Background())
}

func (i *audienceResolveProtocolMappterPtrType) ToAudienceResolveProtocolMappterPtrOutputWithContext(ctx context.Context) AudienceResolveProtocolMappterPtrOutput {
	return pulumi.ToOutputWithContext(ctx, i).(AudienceResolveProtocolMappterPtrOutput)
}

// AudienceResolveProtocolMappterArrayInput is an input type that accepts AudienceResolveProtocolMappterArray and AudienceResolveProtocolMappterArrayOutput values.
// You can construct a concrete instance of `AudienceResolveProtocolMappterArrayInput` via:
//
//          AudienceResolveProtocolMappterArray{ AudienceResolveProtocolMappterArgs{...} }
type AudienceResolveProtocolMappterArrayInput interface {
	pulumi.Input

	ToAudienceResolveProtocolMappterArrayOutput() AudienceResolveProtocolMappterArrayOutput
	ToAudienceResolveProtocolMappterArrayOutputWithContext(context.Context) AudienceResolveProtocolMappterArrayOutput
}

type AudienceResolveProtocolMappterArray []AudienceResolveProtocolMappterInput

func (AudienceResolveProtocolMappterArray) ElementType() reflect.Type {
	return reflect.TypeOf(([]*AudienceResolveProtocolMappter)(nil))
}

func (i AudienceResolveProtocolMappterArray) ToAudienceResolveProtocolMappterArrayOutput() AudienceResolveProtocolMappterArrayOutput {
	return i.ToAudienceResolveProtocolMappterArrayOutputWithContext(context.Background())
}

func (i AudienceResolveProtocolMappterArray) ToAudienceResolveProtocolMappterArrayOutputWithContext(ctx context.Context) AudienceResolveProtocolMappterArrayOutput {
	return pulumi.ToOutputWithContext(ctx, i).(AudienceResolveProtocolMappterArrayOutput)
}

// AudienceResolveProtocolMappterMapInput is an input type that accepts AudienceResolveProtocolMappterMap and AudienceResolveProtocolMappterMapOutput values.
// You can construct a concrete instance of `AudienceResolveProtocolMappterMapInput` via:
//
//          AudienceResolveProtocolMappterMap{ "key": AudienceResolveProtocolMappterArgs{...} }
type AudienceResolveProtocolMappterMapInput interface {
	pulumi.Input

	ToAudienceResolveProtocolMappterMapOutput() AudienceResolveProtocolMappterMapOutput
	ToAudienceResolveProtocolMappterMapOutputWithContext(context.Context) AudienceResolveProtocolMappterMapOutput
}

type AudienceResolveProtocolMappterMap map[string]AudienceResolveProtocolMappterInput

func (AudienceResolveProtocolMappterMap) ElementType() reflect.Type {
	return reflect.TypeOf((map[string]*AudienceResolveProtocolMappter)(nil))
}

func (i AudienceResolveProtocolMappterMap) ToAudienceResolveProtocolMappterMapOutput() AudienceResolveProtocolMappterMapOutput {
	return i.ToAudienceResolveProtocolMappterMapOutputWithContext(context.Background())
}

func (i AudienceResolveProtocolMappterMap) ToAudienceResolveProtocolMappterMapOutputWithContext(ctx context.Context) AudienceResolveProtocolMappterMapOutput {
	return pulumi.ToOutputWithContext(ctx, i).(AudienceResolveProtocolMappterMapOutput)
}

type AudienceResolveProtocolMappterOutput struct {
	*pulumi.OutputState
}

func (AudienceResolveProtocolMappterOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*AudienceResolveProtocolMappter)(nil))
}

func (o AudienceResolveProtocolMappterOutput) ToAudienceResolveProtocolMappterOutput() AudienceResolveProtocolMappterOutput {
	return o
}

func (o AudienceResolveProtocolMappterOutput) ToAudienceResolveProtocolMappterOutputWithContext(ctx context.Context) AudienceResolveProtocolMappterOutput {
	return o
}

func (o AudienceResolveProtocolMappterOutput) ToAudienceResolveProtocolMappterPtrOutput() AudienceResolveProtocolMappterPtrOutput {
	return o.ToAudienceResolveProtocolMappterPtrOutputWithContext(context.Background())
}

func (o AudienceResolveProtocolMappterOutput) ToAudienceResolveProtocolMappterPtrOutputWithContext(ctx context.Context) AudienceResolveProtocolMappterPtrOutput {
	return o.ApplyT(func(v AudienceResolveProtocolMappter) *AudienceResolveProtocolMappter {
		return &v
	}).(AudienceResolveProtocolMappterPtrOutput)
}

type AudienceResolveProtocolMappterPtrOutput struct {
	*pulumi.OutputState
}

func (AudienceResolveProtocolMappterPtrOutput) ElementType() reflect.Type {
	return reflect.TypeOf((**AudienceResolveProtocolMappter)(nil))
}

func (o AudienceResolveProtocolMappterPtrOutput) ToAudienceResolveProtocolMappterPtrOutput() AudienceResolveProtocolMappterPtrOutput {
	return o
}

func (o AudienceResolveProtocolMappterPtrOutput) ToAudienceResolveProtocolMappterPtrOutputWithContext(ctx context.Context) AudienceResolveProtocolMappterPtrOutput {
	return o
}

type AudienceResolveProtocolMappterArrayOutput struct{ *pulumi.OutputState }

func (AudienceResolveProtocolMappterArrayOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*[]AudienceResolveProtocolMappter)(nil))
}

func (o AudienceResolveProtocolMappterArrayOutput) ToAudienceResolveProtocolMappterArrayOutput() AudienceResolveProtocolMappterArrayOutput {
	return o
}

func (o AudienceResolveProtocolMappterArrayOutput) ToAudienceResolveProtocolMappterArrayOutputWithContext(ctx context.Context) AudienceResolveProtocolMappterArrayOutput {
	return o
}

func (o AudienceResolveProtocolMappterArrayOutput) Index(i pulumi.IntInput) AudienceResolveProtocolMappterOutput {
	return pulumi.All(o, i).ApplyT(func(vs []interface{}) AudienceResolveProtocolMappter {
		return vs[0].([]AudienceResolveProtocolMappter)[vs[1].(int)]
	}).(AudienceResolveProtocolMappterOutput)
}

type AudienceResolveProtocolMappterMapOutput struct{ *pulumi.OutputState }

func (AudienceResolveProtocolMappterMapOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*map[string]AudienceResolveProtocolMappter)(nil))
}

func (o AudienceResolveProtocolMappterMapOutput) ToAudienceResolveProtocolMappterMapOutput() AudienceResolveProtocolMappterMapOutput {
	return o
}

func (o AudienceResolveProtocolMappterMapOutput) ToAudienceResolveProtocolMappterMapOutputWithContext(ctx context.Context) AudienceResolveProtocolMappterMapOutput {
	return o
}

func (o AudienceResolveProtocolMappterMapOutput) MapIndex(k pulumi.StringInput) AudienceResolveProtocolMappterOutput {
	return pulumi.All(o, k).ApplyT(func(vs []interface{}) AudienceResolveProtocolMappter {
		return vs[0].(map[string]AudienceResolveProtocolMappter)[vs[1].(string)]
	}).(AudienceResolveProtocolMappterOutput)
}

func init() {
	pulumi.RegisterOutputType(AudienceResolveProtocolMappterOutput{})
	pulumi.RegisterOutputType(AudienceResolveProtocolMappterPtrOutput{})
	pulumi.RegisterOutputType(AudienceResolveProtocolMappterArrayOutput{})
	pulumi.RegisterOutputType(AudienceResolveProtocolMappterMapOutput{})
}
