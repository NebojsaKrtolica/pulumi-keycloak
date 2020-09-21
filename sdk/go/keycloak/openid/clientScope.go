// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package openid

import (
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// ## # openid.ClientScope
//
// Allows for creating and managing Keycloak client scopes that can be attached to
// clients that use the OpenID Connect protocol.
//
// Client Scopes can be used to share common protocol and role mappings between multiple
// clients within a realm. They can also be used by clients to conditionally request
// claims or roles for a user based on the OAuth 2.0 `scope` parameter.
//
// ### Example Usage
//
// ```go
// package main
//
// import (
// 	"github.com/pulumi/pulumi-keycloak/sdk/v2/go/keycloak"
// 	"github.com/pulumi/pulumi-keycloak/sdk/v2/go/keycloak/openid"
// 	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
// )
//
// func main() {
// 	pulumi.Run(func(ctx *pulumi.Context) error {
// 		realm, err := keycloak.NewRealm(ctx, "realm", &keycloak.RealmArgs{
// 			Enabled: pulumi.Bool(true),
// 			Realm:   pulumi.String("my-realm"),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		_, err = openid.NewClientScope(ctx, "openidClientScope", &openid.ClientScopeArgs{
// 			Description:         pulumi.String("When requested, this scope will map a user's group memberships to a claim"),
// 			GuiOrder:            pulumi.Int(1),
// 			IncludeInTokenScope: pulumi.Bool(true),
// 			RealmId:             realm.ID(),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		return nil
// 	})
// }
// ```
//
// ### Argument Reference
//
// The following arguments are supported:
//
// - `realmId` - (Required) The realm this client scope belongs to.
// - `name` - (Required) The display name of this client scope in the GUI.
// - `description` - (Optional) The description of this client scope in the GUI.
// - `consentScreenText` - (Optional) When set, a consent screen will be displayed to users
//   authenticating to clients with this scope attached. The consent screen will display the string
//   value of this attribute.
// - `includeInTokenScope` - (Optional) When `true`, the name of this client scope will be added to the access token property 'scope' as well as to the Token Introspection Endpoint response.
// - `guiOrder` - (Optional) Specify order of the client scope in GUI (such as in Consent page) as integer.
type ClientScope struct {
	pulumi.CustomResourceState

	ConsentScreenText   pulumi.StringPtrOutput `pulumi:"consentScreenText"`
	Description         pulumi.StringPtrOutput `pulumi:"description"`
	GuiOrder            pulumi.IntPtrOutput    `pulumi:"guiOrder"`
	IncludeInTokenScope pulumi.BoolPtrOutput   `pulumi:"includeInTokenScope"`
	Name                pulumi.StringOutput    `pulumi:"name"`
	RealmId             pulumi.StringOutput    `pulumi:"realmId"`
}

// NewClientScope registers a new resource with the given unique name, arguments, and options.
func NewClientScope(ctx *pulumi.Context,
	name string, args *ClientScopeArgs, opts ...pulumi.ResourceOption) (*ClientScope, error) {
	if args == nil || args.RealmId == nil {
		return nil, errors.New("missing required argument 'RealmId'")
	}
	if args == nil {
		args = &ClientScopeArgs{}
	}
	var resource ClientScope
	err := ctx.RegisterResource("keycloak:openid/clientScope:ClientScope", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetClientScope gets an existing ClientScope resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetClientScope(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *ClientScopeState, opts ...pulumi.ResourceOption) (*ClientScope, error) {
	var resource ClientScope
	err := ctx.ReadResource("keycloak:openid/clientScope:ClientScope", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering ClientScope resources.
type clientScopeState struct {
	ConsentScreenText   *string `pulumi:"consentScreenText"`
	Description         *string `pulumi:"description"`
	GuiOrder            *int    `pulumi:"guiOrder"`
	IncludeInTokenScope *bool   `pulumi:"includeInTokenScope"`
	Name                *string `pulumi:"name"`
	RealmId             *string `pulumi:"realmId"`
}

type ClientScopeState struct {
	ConsentScreenText   pulumi.StringPtrInput
	Description         pulumi.StringPtrInput
	GuiOrder            pulumi.IntPtrInput
	IncludeInTokenScope pulumi.BoolPtrInput
	Name                pulumi.StringPtrInput
	RealmId             pulumi.StringPtrInput
}

func (ClientScopeState) ElementType() reflect.Type {
	return reflect.TypeOf((*clientScopeState)(nil)).Elem()
}

type clientScopeArgs struct {
	ConsentScreenText   *string `pulumi:"consentScreenText"`
	Description         *string `pulumi:"description"`
	GuiOrder            *int    `pulumi:"guiOrder"`
	IncludeInTokenScope *bool   `pulumi:"includeInTokenScope"`
	Name                *string `pulumi:"name"`
	RealmId             string  `pulumi:"realmId"`
}

// The set of arguments for constructing a ClientScope resource.
type ClientScopeArgs struct {
	ConsentScreenText   pulumi.StringPtrInput
	Description         pulumi.StringPtrInput
	GuiOrder            pulumi.IntPtrInput
	IncludeInTokenScope pulumi.BoolPtrInput
	Name                pulumi.StringPtrInput
	RealmId             pulumi.StringInput
}

func (ClientScopeArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*clientScopeArgs)(nil)).Elem()
}
