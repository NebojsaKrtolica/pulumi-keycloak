// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package keycloak

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Allows for creating and managing Groups within Keycloak.
//
// Groups provide a logical wrapping for users within Keycloak. Users within a group can share attributes and roles, and
// group membership can be mapped to a claim.
//
// Attributes can also be defined on Groups.
//
// Groups can also be federated from external data sources, such as LDAP or Active Directory. This resource **should not**
// be used to manage groups that were created this way.
//
// ## Example Usage
//
// ```go
// package main
//
// import (
// 	"github.com/pulumi/pulumi-keycloak/sdk/v3/go/keycloak"
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
// 		parentGroup, err := keycloak.NewGroup(ctx, "parentGroup", &keycloak.GroupArgs{
// 			RealmId: realm.ID(),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		_, err = keycloak.NewGroup(ctx, "childGroup", &keycloak.GroupArgs{
// 			RealmId:  realm.ID(),
// 			ParentId: parentGroup.ID(),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		_, err = keycloak.NewGroup(ctx, "childGroupWithOptionalAttributes", &keycloak.GroupArgs{
// 			RealmId:  realm.ID(),
// 			ParentId: parentGroup.ID(),
// 			Attributes: pulumi.StringMap{
// 				"key1": pulumi.String("value1"),
// 				"key2": pulumi.String("value2"),
// 			},
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
// Groups can be imported using the format `{{realm_id}}/{{group_id}}`, where `group_id` is the unique ID that Keycloak assigns to the group upon creation. This value can be found in the URI when editing this group in the GUI, and is typically a GUID. Examplebash
//
// ```sh
//  $ pulumi import keycloak:index/group:Group child_group my-realm/934a4a4e-28bd-4703-a0fa-332df153aabd
// ```
type Group struct {
	pulumi.CustomResourceState

	// A map of key/value pairs to set as custom attributes for the group.
	Attributes pulumi.MapOutput `pulumi:"attributes"`
	// The name of the group.
	Name pulumi.StringOutput `pulumi:"name"`
	// The ID of this group's parent. If omitted, this group will be defined at the root level.
	ParentId pulumi.StringPtrOutput `pulumi:"parentId"`
	// (Computed) The complete path of the group. For example, the child group's path in the example configuration would be `/parent-group/child-group`.
	Path pulumi.StringOutput `pulumi:"path"`
	// The realm this group exists in.
	RealmId pulumi.StringOutput `pulumi:"realmId"`
}

// NewGroup registers a new resource with the given unique name, arguments, and options.
func NewGroup(ctx *pulumi.Context,
	name string, args *GroupArgs, opts ...pulumi.ResourceOption) (*Group, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.RealmId == nil {
		return nil, errors.New("invalid value for required argument 'RealmId'")
	}
	var resource Group
	err := ctx.RegisterResource("keycloak:index/group:Group", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetGroup gets an existing Group resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetGroup(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *GroupState, opts ...pulumi.ResourceOption) (*Group, error) {
	var resource Group
	err := ctx.ReadResource("keycloak:index/group:Group", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering Group resources.
type groupState struct {
	// A map of key/value pairs to set as custom attributes for the group.
	Attributes map[string]interface{} `pulumi:"attributes"`
	// The name of the group.
	Name *string `pulumi:"name"`
	// The ID of this group's parent. If omitted, this group will be defined at the root level.
	ParentId *string `pulumi:"parentId"`
	// (Computed) The complete path of the group. For example, the child group's path in the example configuration would be `/parent-group/child-group`.
	Path *string `pulumi:"path"`
	// The realm this group exists in.
	RealmId *string `pulumi:"realmId"`
}

type GroupState struct {
	// A map of key/value pairs to set as custom attributes for the group.
	Attributes pulumi.MapInput
	// The name of the group.
	Name pulumi.StringPtrInput
	// The ID of this group's parent. If omitted, this group will be defined at the root level.
	ParentId pulumi.StringPtrInput
	// (Computed) The complete path of the group. For example, the child group's path in the example configuration would be `/parent-group/child-group`.
	Path pulumi.StringPtrInput
	// The realm this group exists in.
	RealmId pulumi.StringPtrInput
}

func (GroupState) ElementType() reflect.Type {
	return reflect.TypeOf((*groupState)(nil)).Elem()
}

type groupArgs struct {
	// A map of key/value pairs to set as custom attributes for the group.
	Attributes map[string]interface{} `pulumi:"attributes"`
	// The name of the group.
	Name *string `pulumi:"name"`
	// The ID of this group's parent. If omitted, this group will be defined at the root level.
	ParentId *string `pulumi:"parentId"`
	// The realm this group exists in.
	RealmId string `pulumi:"realmId"`
}

// The set of arguments for constructing a Group resource.
type GroupArgs struct {
	// A map of key/value pairs to set as custom attributes for the group.
	Attributes pulumi.MapInput
	// The name of the group.
	Name pulumi.StringPtrInput
	// The ID of this group's parent. If omitted, this group will be defined at the root level.
	ParentId pulumi.StringPtrInput
	// The realm this group exists in.
	RealmId pulumi.StringInput
}

func (GroupArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*groupArgs)(nil)).Elem()
}

type GroupInput interface {
	pulumi.Input

	ToGroupOutput() GroupOutput
	ToGroupOutputWithContext(ctx context.Context) GroupOutput
}

func (Group) ElementType() reflect.Type {
	return reflect.TypeOf((*Group)(nil)).Elem()
}

func (i Group) ToGroupOutput() GroupOutput {
	return i.ToGroupOutputWithContext(context.Background())
}

func (i Group) ToGroupOutputWithContext(ctx context.Context) GroupOutput {
	return pulumi.ToOutputWithContext(ctx, i).(GroupOutput)
}

type GroupOutput struct {
	*pulumi.OutputState
}

func (GroupOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*GroupOutput)(nil)).Elem()
}

func (o GroupOutput) ToGroupOutput() GroupOutput {
	return o
}

func (o GroupOutput) ToGroupOutputWithContext(ctx context.Context) GroupOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(GroupOutput{})
}
