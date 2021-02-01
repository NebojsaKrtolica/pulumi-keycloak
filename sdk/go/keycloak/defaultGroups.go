// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package keycloak

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Allows for managing a realm's default groups.
//
// > You should not use `DefaultGroups` with a group whose members are managed by `GroupMemberships`.
//
// ## Example Usage
//
// ```go
// package main
//
// import (
// 	"github.com/pulumi/pulumi-keycloak/sdk/v3/go/keycloak/"
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
// 		group, err := keycloak.NewGroup(ctx, "group", &keycloak.GroupArgs{
// 			RealmId: realm.ID(),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		_, err = keycloak.NewDefaultGroups(ctx, "_default", &keycloak.DefaultGroupsArgs{
// 			RealmId: realm.ID(),
// 			GroupIds: pulumi.StringArray{
// 				group.ID(),
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
// Default groups can be imported using the format `{{realm_id}}` where `realm_id` is the realm the group exists in. Examplebash
//
// ```sh
//  $ pulumi import keycloak:index/defaultGroups:DefaultGroups default my-realm
// ```
type DefaultGroups struct {
	pulumi.CustomResourceState

	// A set of group ids that should be default groups on the realm referenced by `realmId`.
	GroupIds pulumi.StringArrayOutput `pulumi:"groupIds"`
	// The realm this group exists in.
	RealmId pulumi.StringOutput `pulumi:"realmId"`
}

// NewDefaultGroups registers a new resource with the given unique name, arguments, and options.
func NewDefaultGroups(ctx *pulumi.Context,
	name string, args *DefaultGroupsArgs, opts ...pulumi.ResourceOption) (*DefaultGroups, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.GroupIds == nil {
		return nil, errors.New("invalid value for required argument 'GroupIds'")
	}
	if args.RealmId == nil {
		return nil, errors.New("invalid value for required argument 'RealmId'")
	}
	var resource DefaultGroups
	err := ctx.RegisterResource("keycloak:index/defaultGroups:DefaultGroups", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetDefaultGroups gets an existing DefaultGroups resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetDefaultGroups(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *DefaultGroupsState, opts ...pulumi.ResourceOption) (*DefaultGroups, error) {
	var resource DefaultGroups
	err := ctx.ReadResource("keycloak:index/defaultGroups:DefaultGroups", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering DefaultGroups resources.
type defaultGroupsState struct {
	// A set of group ids that should be default groups on the realm referenced by `realmId`.
	GroupIds []string `pulumi:"groupIds"`
	// The realm this group exists in.
	RealmId *string `pulumi:"realmId"`
}

type DefaultGroupsState struct {
	// A set of group ids that should be default groups on the realm referenced by `realmId`.
	GroupIds pulumi.StringArrayInput
	// The realm this group exists in.
	RealmId pulumi.StringPtrInput
}

func (DefaultGroupsState) ElementType() reflect.Type {
	return reflect.TypeOf((*defaultGroupsState)(nil)).Elem()
}

type defaultGroupsArgs struct {
	// A set of group ids that should be default groups on the realm referenced by `realmId`.
	GroupIds []string `pulumi:"groupIds"`
	// The realm this group exists in.
	RealmId string `pulumi:"realmId"`
}

// The set of arguments for constructing a DefaultGroups resource.
type DefaultGroupsArgs struct {
	// A set of group ids that should be default groups on the realm referenced by `realmId`.
	GroupIds pulumi.StringArrayInput
	// The realm this group exists in.
	RealmId pulumi.StringInput
}

func (DefaultGroupsArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*defaultGroupsArgs)(nil)).Elem()
}

type DefaultGroupsInput interface {
	pulumi.Input

	ToDefaultGroupsOutput() DefaultGroupsOutput
	ToDefaultGroupsOutputWithContext(ctx context.Context) DefaultGroupsOutput
}

func (*DefaultGroups) ElementType() reflect.Type {
	return reflect.TypeOf((*DefaultGroups)(nil))
}

func (i *DefaultGroups) ToDefaultGroupsOutput() DefaultGroupsOutput {
	return i.ToDefaultGroupsOutputWithContext(context.Background())
}

func (i *DefaultGroups) ToDefaultGroupsOutputWithContext(ctx context.Context) DefaultGroupsOutput {
	return pulumi.ToOutputWithContext(ctx, i).(DefaultGroupsOutput)
}

type DefaultGroupsOutput struct {
	*pulumi.OutputState
}

func (DefaultGroupsOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*DefaultGroups)(nil))
}

func (o DefaultGroupsOutput) ToDefaultGroupsOutput() DefaultGroupsOutput {
	return o
}

func (o DefaultGroupsOutput) ToDefaultGroupsOutputWithContext(ctx context.Context) DefaultGroupsOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(DefaultGroupsOutput{})
}
