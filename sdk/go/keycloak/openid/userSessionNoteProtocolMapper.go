// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package openid

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Allows for creating and managing user session note protocol mappers within Keycloak.
//
// User session note protocol mappers map a custom user session note to a token claim.
//
// Protocol mappers can be defined for a single client, or they can be defined for a client scope which can be shared between
// multiple different clients.
//
// ## Example Usage
// ### Client)
//
// ```go
// package main
//
// import (
// 	"github.com/pulumi/pulumi-keycloak/sdk/v3/go/keycloak/"
// 	"github.com/pulumi/pulumi-keycloak/sdk/v3/go/keycloak/openid"
// 	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
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
// 		_, err = openid.NewUserSessionNoteProtocolMapper(ctx, "userSessionNoteMapper", &openid.UserSessionNoteProtocolMapperArgs{
// 			RealmId:        realm.ID(),
// 			ClientId:       openidClient.ID(),
// 			ClaimName:      pulumi.String("foo"),
// 			ClaimValueType: pulumi.String("String"),
// 			SessionNote:    pulumi.String("bar"),
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
// 	"github.com/pulumi/pulumi-keycloak/sdk/v3/go/keycloak/"
// 	"github.com/pulumi/pulumi-keycloak/sdk/v3/go/keycloak/openid"
// 	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
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
// 		_, err = openid.NewUserSessionNoteProtocolMapper(ctx, "userSessionNoteMapper", &openid.UserSessionNoteProtocolMapperArgs{
// 			RealmId:        realm.ID(),
// 			ClientScopeId:  clientScope.ID(),
// 			ClaimName:      pulumi.String("foo"),
// 			ClaimValueType: pulumi.String("String"),
// 			SessionNote:    pulumi.String("bar"),
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
//  $ pulumi import keycloak:openid/userSessionNoteProtocolMapper:UserSessionNoteProtocolMapper user_session_note_mapper my-realm/client/a7202154-8793-4656-b655-1dd18c181e14/71602afa-f7d1-4788-8c49-ef8fd00af0f4
// ```
//
// ```sh
//  $ pulumi import keycloak:openid/userSessionNoteProtocolMapper:UserSessionNoteProtocolMapper user_session_note_mapper my-realm/client-scope/b799ea7e-73ee-4a73-990a-1eafebe8e20a/71602afa-f7d1-4788-8c49-ef8fd00af0f4
// ```
type UserSessionNoteProtocolMapper struct {
	pulumi.CustomResourceState

	// Indicates if the property should be added as a claim to the access token. Defaults to `true`.
	AddToAccessToken pulumi.BoolPtrOutput `pulumi:"addToAccessToken"`
	// Indicates if the property should be added as a claim to the id token. Defaults to `true`.
	AddToIdToken pulumi.BoolPtrOutput `pulumi:"addToIdToken"`
	// The name of the claim to insert into a token.
	ClaimName pulumi.StringOutput `pulumi:"claimName"`
	// The claim type used when serializing JSON tokens. Can be one of `String`, `JSON`, `long`, `int`, or `boolean`. Defaults to `String`.
	ClaimValueType pulumi.StringPtrOutput `pulumi:"claimValueType"`
	// The client this protocol mapper should be attached to. Conflicts with `clientScopeId`. One of `clientId` or `clientScopeId` must be specified.
	ClientId pulumi.StringPtrOutput `pulumi:"clientId"`
	// The client scope this protocol mapper should be attached to. Conflicts with `clientId`. One of `clientId` or `clientScopeId` must be specified.
	ClientScopeId pulumi.StringPtrOutput `pulumi:"clientScopeId"`
	// The display name of this protocol mapper in the GUI.
	Name pulumi.StringOutput `pulumi:"name"`
	// The realm this protocol mapper exists within.
	RealmId pulumi.StringOutput `pulumi:"realmId"`
	// String value being the name of stored user session note within the UserSessionModel.note map.
	SessionNote pulumi.StringPtrOutput `pulumi:"sessionNote"`
	// **Deprecated** Use `sessionNote` instead.
	//
	// Deprecated: use session_note instead
	SessionNoteLabel pulumi.StringPtrOutput `pulumi:"sessionNoteLabel"`
}

// NewUserSessionNoteProtocolMapper registers a new resource with the given unique name, arguments, and options.
func NewUserSessionNoteProtocolMapper(ctx *pulumi.Context,
	name string, args *UserSessionNoteProtocolMapperArgs, opts ...pulumi.ResourceOption) (*UserSessionNoteProtocolMapper, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.ClaimName == nil {
		return nil, errors.New("invalid value for required argument 'ClaimName'")
	}
	if args.RealmId == nil {
		return nil, errors.New("invalid value for required argument 'RealmId'")
	}
	var resource UserSessionNoteProtocolMapper
	err := ctx.RegisterResource("keycloak:openid/userSessionNoteProtocolMapper:UserSessionNoteProtocolMapper", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetUserSessionNoteProtocolMapper gets an existing UserSessionNoteProtocolMapper resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetUserSessionNoteProtocolMapper(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *UserSessionNoteProtocolMapperState, opts ...pulumi.ResourceOption) (*UserSessionNoteProtocolMapper, error) {
	var resource UserSessionNoteProtocolMapper
	err := ctx.ReadResource("keycloak:openid/userSessionNoteProtocolMapper:UserSessionNoteProtocolMapper", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering UserSessionNoteProtocolMapper resources.
type userSessionNoteProtocolMapperState struct {
	// Indicates if the property should be added as a claim to the access token. Defaults to `true`.
	AddToAccessToken *bool `pulumi:"addToAccessToken"`
	// Indicates if the property should be added as a claim to the id token. Defaults to `true`.
	AddToIdToken *bool `pulumi:"addToIdToken"`
	// The name of the claim to insert into a token.
	ClaimName *string `pulumi:"claimName"`
	// The claim type used when serializing JSON tokens. Can be one of `String`, `JSON`, `long`, `int`, or `boolean`. Defaults to `String`.
	ClaimValueType *string `pulumi:"claimValueType"`
	// The client this protocol mapper should be attached to. Conflicts with `clientScopeId`. One of `clientId` or `clientScopeId` must be specified.
	ClientId *string `pulumi:"clientId"`
	// The client scope this protocol mapper should be attached to. Conflicts with `clientId`. One of `clientId` or `clientScopeId` must be specified.
	ClientScopeId *string `pulumi:"clientScopeId"`
	// The display name of this protocol mapper in the GUI.
	Name *string `pulumi:"name"`
	// The realm this protocol mapper exists within.
	RealmId *string `pulumi:"realmId"`
	// String value being the name of stored user session note within the UserSessionModel.note map.
	SessionNote *string `pulumi:"sessionNote"`
	// **Deprecated** Use `sessionNote` instead.
	//
	// Deprecated: use session_note instead
	SessionNoteLabel *string `pulumi:"sessionNoteLabel"`
}

type UserSessionNoteProtocolMapperState struct {
	// Indicates if the property should be added as a claim to the access token. Defaults to `true`.
	AddToAccessToken pulumi.BoolPtrInput
	// Indicates if the property should be added as a claim to the id token. Defaults to `true`.
	AddToIdToken pulumi.BoolPtrInput
	// The name of the claim to insert into a token.
	ClaimName pulumi.StringPtrInput
	// The claim type used when serializing JSON tokens. Can be one of `String`, `JSON`, `long`, `int`, or `boolean`. Defaults to `String`.
	ClaimValueType pulumi.StringPtrInput
	// The client this protocol mapper should be attached to. Conflicts with `clientScopeId`. One of `clientId` or `clientScopeId` must be specified.
	ClientId pulumi.StringPtrInput
	// The client scope this protocol mapper should be attached to. Conflicts with `clientId`. One of `clientId` or `clientScopeId` must be specified.
	ClientScopeId pulumi.StringPtrInput
	// The display name of this protocol mapper in the GUI.
	Name pulumi.StringPtrInput
	// The realm this protocol mapper exists within.
	RealmId pulumi.StringPtrInput
	// String value being the name of stored user session note within the UserSessionModel.note map.
	SessionNote pulumi.StringPtrInput
	// **Deprecated** Use `sessionNote` instead.
	//
	// Deprecated: use session_note instead
	SessionNoteLabel pulumi.StringPtrInput
}

func (UserSessionNoteProtocolMapperState) ElementType() reflect.Type {
	return reflect.TypeOf((*userSessionNoteProtocolMapperState)(nil)).Elem()
}

type userSessionNoteProtocolMapperArgs struct {
	// Indicates if the property should be added as a claim to the access token. Defaults to `true`.
	AddToAccessToken *bool `pulumi:"addToAccessToken"`
	// Indicates if the property should be added as a claim to the id token. Defaults to `true`.
	AddToIdToken *bool `pulumi:"addToIdToken"`
	// The name of the claim to insert into a token.
	ClaimName string `pulumi:"claimName"`
	// The claim type used when serializing JSON tokens. Can be one of `String`, `JSON`, `long`, `int`, or `boolean`. Defaults to `String`.
	ClaimValueType *string `pulumi:"claimValueType"`
	// The client this protocol mapper should be attached to. Conflicts with `clientScopeId`. One of `clientId` or `clientScopeId` must be specified.
	ClientId *string `pulumi:"clientId"`
	// The client scope this protocol mapper should be attached to. Conflicts with `clientId`. One of `clientId` or `clientScopeId` must be specified.
	ClientScopeId *string `pulumi:"clientScopeId"`
	// The display name of this protocol mapper in the GUI.
	Name *string `pulumi:"name"`
	// The realm this protocol mapper exists within.
	RealmId string `pulumi:"realmId"`
	// String value being the name of stored user session note within the UserSessionModel.note map.
	SessionNote *string `pulumi:"sessionNote"`
	// **Deprecated** Use `sessionNote` instead.
	//
	// Deprecated: use session_note instead
	SessionNoteLabel *string `pulumi:"sessionNoteLabel"`
}

// The set of arguments for constructing a UserSessionNoteProtocolMapper resource.
type UserSessionNoteProtocolMapperArgs struct {
	// Indicates if the property should be added as a claim to the access token. Defaults to `true`.
	AddToAccessToken pulumi.BoolPtrInput
	// Indicates if the property should be added as a claim to the id token. Defaults to `true`.
	AddToIdToken pulumi.BoolPtrInput
	// The name of the claim to insert into a token.
	ClaimName pulumi.StringInput
	// The claim type used when serializing JSON tokens. Can be one of `String`, `JSON`, `long`, `int`, or `boolean`. Defaults to `String`.
	ClaimValueType pulumi.StringPtrInput
	// The client this protocol mapper should be attached to. Conflicts with `clientScopeId`. One of `clientId` or `clientScopeId` must be specified.
	ClientId pulumi.StringPtrInput
	// The client scope this protocol mapper should be attached to. Conflicts with `clientId`. One of `clientId` or `clientScopeId` must be specified.
	ClientScopeId pulumi.StringPtrInput
	// The display name of this protocol mapper in the GUI.
	Name pulumi.StringPtrInput
	// The realm this protocol mapper exists within.
	RealmId pulumi.StringInput
	// String value being the name of stored user session note within the UserSessionModel.note map.
	SessionNote pulumi.StringPtrInput
	// **Deprecated** Use `sessionNote` instead.
	//
	// Deprecated: use session_note instead
	SessionNoteLabel pulumi.StringPtrInput
}

func (UserSessionNoteProtocolMapperArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*userSessionNoteProtocolMapperArgs)(nil)).Elem()
}

type UserSessionNoteProtocolMapperInput interface {
	pulumi.Input

	ToUserSessionNoteProtocolMapperOutput() UserSessionNoteProtocolMapperOutput
	ToUserSessionNoteProtocolMapperOutputWithContext(ctx context.Context) UserSessionNoteProtocolMapperOutput
}

func (*UserSessionNoteProtocolMapper) ElementType() reflect.Type {
	return reflect.TypeOf((*UserSessionNoteProtocolMapper)(nil))
}

func (i *UserSessionNoteProtocolMapper) ToUserSessionNoteProtocolMapperOutput() UserSessionNoteProtocolMapperOutput {
	return i.ToUserSessionNoteProtocolMapperOutputWithContext(context.Background())
}

func (i *UserSessionNoteProtocolMapper) ToUserSessionNoteProtocolMapperOutputWithContext(ctx context.Context) UserSessionNoteProtocolMapperOutput {
	return pulumi.ToOutputWithContext(ctx, i).(UserSessionNoteProtocolMapperOutput)
}

type UserSessionNoteProtocolMapperOutput struct {
	*pulumi.OutputState
}

func (UserSessionNoteProtocolMapperOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*UserSessionNoteProtocolMapper)(nil))
}

func (o UserSessionNoteProtocolMapperOutput) ToUserSessionNoteProtocolMapperOutput() UserSessionNoteProtocolMapperOutput {
	return o
}

func (o UserSessionNoteProtocolMapperOutput) ToUserSessionNoteProtocolMapperOutputWithContext(ctx context.Context) UserSessionNoteProtocolMapperOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(UserSessionNoteProtocolMapperOutput{})
}
