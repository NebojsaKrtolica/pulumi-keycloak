// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package ldap

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

// Allows for creating and managing group mappers for Keycloak users federated via LDAP.
//
// The LDAP group mapper can be used to map an LDAP user's groups from some DN to Keycloak groups. This group mapper will also
// create the groups within Keycloak if they do not already exist.
//
// ## Example Usage
//
// ```go
// package main
//
// import (
// 	"github.com/pulumi/pulumi-keycloak/sdk/v4/go/keycloak"
// 	"github.com/pulumi/pulumi-keycloak/sdk/v4/go/keycloak/ldap"
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
// 		ldapUserFederation, err := ldap.NewUserFederation(ctx, "ldapUserFederation", &ldap.UserFederationArgs{
// 			RealmId:               realm.ID(),
// 			UsernameLdapAttribute: pulumi.String("cn"),
// 			RdnLdapAttribute:      pulumi.String("cn"),
// 			UuidLdapAttribute:     pulumi.String("entryDN"),
// 			UserObjectClasses: pulumi.StringArray{
// 				pulumi.String("simpleSecurityObject"),
// 				pulumi.String("organizationalRole"),
// 			},
// 			ConnectionUrl:  pulumi.String("ldap://openldap"),
// 			UsersDn:        pulumi.String("dc=example,dc=org"),
// 			BindDn:         pulumi.String("cn=admin,dc=example,dc=org"),
// 			BindCredential: pulumi.String("admin"),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		_, err = ldap.NewGroupMapper(ctx, "ldapGroupMapper", &ldap.GroupMapperArgs{
// 			RealmId:                realm.ID(),
// 			LdapUserFederationId:   ldapUserFederation.ID(),
// 			LdapGroupsDn:           pulumi.String("dc=example,dc=org"),
// 			GroupNameLdapAttribute: pulumi.String("cn"),
// 			GroupObjectClasses: pulumi.StringArray{
// 				pulumi.String("groupOfNames"),
// 			},
// 			MembershipAttributeType:     pulumi.String("DN"),
// 			MembershipLdapAttribute:     pulumi.String("member"),
// 			MembershipUserLdapAttribute: pulumi.String("cn"),
// 			MemberofLdapAttribute:       pulumi.String("memberOf"),
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
// LDAP mappers can be imported using the format `{{realm_id}}/{{ldap_user_federation_id}}/{{ldap_mapper_id}}`. The ID of the LDAP user federation provider and the mapper can be found within the Keycloak GUI, and they are typically GUIDs. Examplebash
//
// ```sh
//  $ pulumi import keycloak:ldap/groupMapper:GroupMapper ldap_group_mapper my-realm/af2a6ca3-e4d7-49c3-b08b-1b3c70b4b860/3d923ece-1a91-4bf7-adaf-3b82f2a12b67
// ```
type GroupMapper struct {
	pulumi.CustomResourceState

	// When `true`, groups that no longer exist within LDAP will be dropped in Keycloak during sync. Defaults to `false`.
	DropNonExistingGroupsDuringSync pulumi.BoolPtrOutput `pulumi:"dropNonExistingGroupsDuringSync"`
	// The name of the LDAP attribute that is used in group objects for the name and RDN of the group. Typically `cn`.
	GroupNameLdapAttribute pulumi.StringOutput `pulumi:"groupNameLdapAttribute"`
	// List of strings representing the object classes for the group. Must contain at least one.
	GroupObjectClasses pulumi.StringArrayOutput `pulumi:"groupObjectClasses"`
	// When specified, adds an additional custom filter to be used when querying for groups. Must start with `(` and end with `)`.
	GroupsLdapFilter pulumi.StringPtrOutput `pulumi:"groupsLdapFilter"`
	// Keycloak group path the LDAP groups are added to. For example if value `/Applications/App1` is used, then LDAP groups will be available in Keycloak under group `App1`, which is the child of top level group `Applications`. The configured group path must already exist in Keycloak when creating this mapper.
	GroupsPath pulumi.StringOutput `pulumi:"groupsPath"`
	// When `true`, missing groups in the hierarchy will be ignored.
	IgnoreMissingGroups pulumi.BoolPtrOutput `pulumi:"ignoreMissingGroups"`
	// The LDAP DN where groups can be found.
	LdapGroupsDn pulumi.StringOutput `pulumi:"ldapGroupsDn"`
	// The ID of the LDAP user federation provider to attach this mapper to.
	LdapUserFederationId pulumi.StringOutput `pulumi:"ldapUserFederationId"`
	// Array of strings representing attributes on the LDAP group which will be mapped to attributes on the Keycloak group.
	MappedGroupAttributes pulumi.StringArrayOutput `pulumi:"mappedGroupAttributes"`
	// Specifies the name of the LDAP attribute on the LDAP user that contains the groups the user is a member of. Defaults to `memberOf`.
	MemberofLdapAttribute pulumi.StringPtrOutput `pulumi:"memberofLdapAttribute"`
	// Can be one of `DN` or `UID`. Defaults to `DN`.
	MembershipAttributeType pulumi.StringPtrOutput `pulumi:"membershipAttributeType"`
	// The name of the LDAP attribute that is used for membership mappings.
	MembershipLdapAttribute pulumi.StringOutput `pulumi:"membershipLdapAttribute"`
	// The name of the LDAP attribute on a user that is used for membership mappings.
	MembershipUserLdapAttribute pulumi.StringOutput `pulumi:"membershipUserLdapAttribute"`
	// Can be one of `READ_ONLY`, `LDAP_ONLY` or `IMPORT`. Defaults to `READ_ONLY`.
	Mode pulumi.StringPtrOutput `pulumi:"mode"`
	// Display name of this mapper when displayed in the console.
	Name pulumi.StringOutput `pulumi:"name"`
	// When `true`, group inheritance will be propagated from LDAP to Keycloak. When `false`, all LDAP groups will be propagated as top level groups within Keycloak.
	PreserveGroupInheritance pulumi.BoolPtrOutput `pulumi:"preserveGroupInheritance"`
	// The realm that this LDAP mapper will exist in.
	RealmId pulumi.StringOutput `pulumi:"realmId"`
	// Can be one of `LOAD_GROUPS_BY_MEMBER_ATTRIBUTE`, `GET_GROUPS_FROM_USER_MEMBEROF_ATTRIBUTE`, or `LOAD_GROUPS_BY_MEMBER_ATTRIBUTE_RECURSIVELY`. Defaults to `LOAD_GROUPS_BY_MEMBER_ATTRIBUTE`.
	UserRolesRetrieveStrategy pulumi.StringPtrOutput `pulumi:"userRolesRetrieveStrategy"`
}

// NewGroupMapper registers a new resource with the given unique name, arguments, and options.
func NewGroupMapper(ctx *pulumi.Context,
	name string, args *GroupMapperArgs, opts ...pulumi.ResourceOption) (*GroupMapper, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.GroupNameLdapAttribute == nil {
		return nil, errors.New("invalid value for required argument 'GroupNameLdapAttribute'")
	}
	if args.GroupObjectClasses == nil {
		return nil, errors.New("invalid value for required argument 'GroupObjectClasses'")
	}
	if args.LdapGroupsDn == nil {
		return nil, errors.New("invalid value for required argument 'LdapGroupsDn'")
	}
	if args.LdapUserFederationId == nil {
		return nil, errors.New("invalid value for required argument 'LdapUserFederationId'")
	}
	if args.MembershipLdapAttribute == nil {
		return nil, errors.New("invalid value for required argument 'MembershipLdapAttribute'")
	}
	if args.MembershipUserLdapAttribute == nil {
		return nil, errors.New("invalid value for required argument 'MembershipUserLdapAttribute'")
	}
	if args.RealmId == nil {
		return nil, errors.New("invalid value for required argument 'RealmId'")
	}
	var resource GroupMapper
	err := ctx.RegisterResource("keycloak:ldap/groupMapper:GroupMapper", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetGroupMapper gets an existing GroupMapper resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetGroupMapper(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *GroupMapperState, opts ...pulumi.ResourceOption) (*GroupMapper, error) {
	var resource GroupMapper
	err := ctx.ReadResource("keycloak:ldap/groupMapper:GroupMapper", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering GroupMapper resources.
type groupMapperState struct {
	// When `true`, groups that no longer exist within LDAP will be dropped in Keycloak during sync. Defaults to `false`.
	DropNonExistingGroupsDuringSync *bool `pulumi:"dropNonExistingGroupsDuringSync"`
	// The name of the LDAP attribute that is used in group objects for the name and RDN of the group. Typically `cn`.
	GroupNameLdapAttribute *string `pulumi:"groupNameLdapAttribute"`
	// List of strings representing the object classes for the group. Must contain at least one.
	GroupObjectClasses []string `pulumi:"groupObjectClasses"`
	// When specified, adds an additional custom filter to be used when querying for groups. Must start with `(` and end with `)`.
	GroupsLdapFilter *string `pulumi:"groupsLdapFilter"`
	// Keycloak group path the LDAP groups are added to. For example if value `/Applications/App1` is used, then LDAP groups will be available in Keycloak under group `App1`, which is the child of top level group `Applications`. The configured group path must already exist in Keycloak when creating this mapper.
	GroupsPath *string `pulumi:"groupsPath"`
	// When `true`, missing groups in the hierarchy will be ignored.
	IgnoreMissingGroups *bool `pulumi:"ignoreMissingGroups"`
	// The LDAP DN where groups can be found.
	LdapGroupsDn *string `pulumi:"ldapGroupsDn"`
	// The ID of the LDAP user federation provider to attach this mapper to.
	LdapUserFederationId *string `pulumi:"ldapUserFederationId"`
	// Array of strings representing attributes on the LDAP group which will be mapped to attributes on the Keycloak group.
	MappedGroupAttributes []string `pulumi:"mappedGroupAttributes"`
	// Specifies the name of the LDAP attribute on the LDAP user that contains the groups the user is a member of. Defaults to `memberOf`.
	MemberofLdapAttribute *string `pulumi:"memberofLdapAttribute"`
	// Can be one of `DN` or `UID`. Defaults to `DN`.
	MembershipAttributeType *string `pulumi:"membershipAttributeType"`
	// The name of the LDAP attribute that is used for membership mappings.
	MembershipLdapAttribute *string `pulumi:"membershipLdapAttribute"`
	// The name of the LDAP attribute on a user that is used for membership mappings.
	MembershipUserLdapAttribute *string `pulumi:"membershipUserLdapAttribute"`
	// Can be one of `READ_ONLY`, `LDAP_ONLY` or `IMPORT`. Defaults to `READ_ONLY`.
	Mode *string `pulumi:"mode"`
	// Display name of this mapper when displayed in the console.
	Name *string `pulumi:"name"`
	// When `true`, group inheritance will be propagated from LDAP to Keycloak. When `false`, all LDAP groups will be propagated as top level groups within Keycloak.
	PreserveGroupInheritance *bool `pulumi:"preserveGroupInheritance"`
	// The realm that this LDAP mapper will exist in.
	RealmId *string `pulumi:"realmId"`
	// Can be one of `LOAD_GROUPS_BY_MEMBER_ATTRIBUTE`, `GET_GROUPS_FROM_USER_MEMBEROF_ATTRIBUTE`, or `LOAD_GROUPS_BY_MEMBER_ATTRIBUTE_RECURSIVELY`. Defaults to `LOAD_GROUPS_BY_MEMBER_ATTRIBUTE`.
	UserRolesRetrieveStrategy *string `pulumi:"userRolesRetrieveStrategy"`
}

type GroupMapperState struct {
	// When `true`, groups that no longer exist within LDAP will be dropped in Keycloak during sync. Defaults to `false`.
	DropNonExistingGroupsDuringSync pulumi.BoolPtrInput
	// The name of the LDAP attribute that is used in group objects for the name and RDN of the group. Typically `cn`.
	GroupNameLdapAttribute pulumi.StringPtrInput
	// List of strings representing the object classes for the group. Must contain at least one.
	GroupObjectClasses pulumi.StringArrayInput
	// When specified, adds an additional custom filter to be used when querying for groups. Must start with `(` and end with `)`.
	GroupsLdapFilter pulumi.StringPtrInput
	// Keycloak group path the LDAP groups are added to. For example if value `/Applications/App1` is used, then LDAP groups will be available in Keycloak under group `App1`, which is the child of top level group `Applications`. The configured group path must already exist in Keycloak when creating this mapper.
	GroupsPath pulumi.StringPtrInput
	// When `true`, missing groups in the hierarchy will be ignored.
	IgnoreMissingGroups pulumi.BoolPtrInput
	// The LDAP DN where groups can be found.
	LdapGroupsDn pulumi.StringPtrInput
	// The ID of the LDAP user federation provider to attach this mapper to.
	LdapUserFederationId pulumi.StringPtrInput
	// Array of strings representing attributes on the LDAP group which will be mapped to attributes on the Keycloak group.
	MappedGroupAttributes pulumi.StringArrayInput
	// Specifies the name of the LDAP attribute on the LDAP user that contains the groups the user is a member of. Defaults to `memberOf`.
	MemberofLdapAttribute pulumi.StringPtrInput
	// Can be one of `DN` or `UID`. Defaults to `DN`.
	MembershipAttributeType pulumi.StringPtrInput
	// The name of the LDAP attribute that is used for membership mappings.
	MembershipLdapAttribute pulumi.StringPtrInput
	// The name of the LDAP attribute on a user that is used for membership mappings.
	MembershipUserLdapAttribute pulumi.StringPtrInput
	// Can be one of `READ_ONLY`, `LDAP_ONLY` or `IMPORT`. Defaults to `READ_ONLY`.
	Mode pulumi.StringPtrInput
	// Display name of this mapper when displayed in the console.
	Name pulumi.StringPtrInput
	// When `true`, group inheritance will be propagated from LDAP to Keycloak. When `false`, all LDAP groups will be propagated as top level groups within Keycloak.
	PreserveGroupInheritance pulumi.BoolPtrInput
	// The realm that this LDAP mapper will exist in.
	RealmId pulumi.StringPtrInput
	// Can be one of `LOAD_GROUPS_BY_MEMBER_ATTRIBUTE`, `GET_GROUPS_FROM_USER_MEMBEROF_ATTRIBUTE`, or `LOAD_GROUPS_BY_MEMBER_ATTRIBUTE_RECURSIVELY`. Defaults to `LOAD_GROUPS_BY_MEMBER_ATTRIBUTE`.
	UserRolesRetrieveStrategy pulumi.StringPtrInput
}

func (GroupMapperState) ElementType() reflect.Type {
	return reflect.TypeOf((*groupMapperState)(nil)).Elem()
}

type groupMapperArgs struct {
	// When `true`, groups that no longer exist within LDAP will be dropped in Keycloak during sync. Defaults to `false`.
	DropNonExistingGroupsDuringSync *bool `pulumi:"dropNonExistingGroupsDuringSync"`
	// The name of the LDAP attribute that is used in group objects for the name and RDN of the group. Typically `cn`.
	GroupNameLdapAttribute string `pulumi:"groupNameLdapAttribute"`
	// List of strings representing the object classes for the group. Must contain at least one.
	GroupObjectClasses []string `pulumi:"groupObjectClasses"`
	// When specified, adds an additional custom filter to be used when querying for groups. Must start with `(` and end with `)`.
	GroupsLdapFilter *string `pulumi:"groupsLdapFilter"`
	// Keycloak group path the LDAP groups are added to. For example if value `/Applications/App1` is used, then LDAP groups will be available in Keycloak under group `App1`, which is the child of top level group `Applications`. The configured group path must already exist in Keycloak when creating this mapper.
	GroupsPath *string `pulumi:"groupsPath"`
	// When `true`, missing groups in the hierarchy will be ignored.
	IgnoreMissingGroups *bool `pulumi:"ignoreMissingGroups"`
	// The LDAP DN where groups can be found.
	LdapGroupsDn string `pulumi:"ldapGroupsDn"`
	// The ID of the LDAP user federation provider to attach this mapper to.
	LdapUserFederationId string `pulumi:"ldapUserFederationId"`
	// Array of strings representing attributes on the LDAP group which will be mapped to attributes on the Keycloak group.
	MappedGroupAttributes []string `pulumi:"mappedGroupAttributes"`
	// Specifies the name of the LDAP attribute on the LDAP user that contains the groups the user is a member of. Defaults to `memberOf`.
	MemberofLdapAttribute *string `pulumi:"memberofLdapAttribute"`
	// Can be one of `DN` or `UID`. Defaults to `DN`.
	MembershipAttributeType *string `pulumi:"membershipAttributeType"`
	// The name of the LDAP attribute that is used for membership mappings.
	MembershipLdapAttribute string `pulumi:"membershipLdapAttribute"`
	// The name of the LDAP attribute on a user that is used for membership mappings.
	MembershipUserLdapAttribute string `pulumi:"membershipUserLdapAttribute"`
	// Can be one of `READ_ONLY`, `LDAP_ONLY` or `IMPORT`. Defaults to `READ_ONLY`.
	Mode *string `pulumi:"mode"`
	// Display name of this mapper when displayed in the console.
	Name *string `pulumi:"name"`
	// When `true`, group inheritance will be propagated from LDAP to Keycloak. When `false`, all LDAP groups will be propagated as top level groups within Keycloak.
	PreserveGroupInheritance *bool `pulumi:"preserveGroupInheritance"`
	// The realm that this LDAP mapper will exist in.
	RealmId string `pulumi:"realmId"`
	// Can be one of `LOAD_GROUPS_BY_MEMBER_ATTRIBUTE`, `GET_GROUPS_FROM_USER_MEMBEROF_ATTRIBUTE`, or `LOAD_GROUPS_BY_MEMBER_ATTRIBUTE_RECURSIVELY`. Defaults to `LOAD_GROUPS_BY_MEMBER_ATTRIBUTE`.
	UserRolesRetrieveStrategy *string `pulumi:"userRolesRetrieveStrategy"`
}

// The set of arguments for constructing a GroupMapper resource.
type GroupMapperArgs struct {
	// When `true`, groups that no longer exist within LDAP will be dropped in Keycloak during sync. Defaults to `false`.
	DropNonExistingGroupsDuringSync pulumi.BoolPtrInput
	// The name of the LDAP attribute that is used in group objects for the name and RDN of the group. Typically `cn`.
	GroupNameLdapAttribute pulumi.StringInput
	// List of strings representing the object classes for the group. Must contain at least one.
	GroupObjectClasses pulumi.StringArrayInput
	// When specified, adds an additional custom filter to be used when querying for groups. Must start with `(` and end with `)`.
	GroupsLdapFilter pulumi.StringPtrInput
	// Keycloak group path the LDAP groups are added to. For example if value `/Applications/App1` is used, then LDAP groups will be available in Keycloak under group `App1`, which is the child of top level group `Applications`. The configured group path must already exist in Keycloak when creating this mapper.
	GroupsPath pulumi.StringPtrInput
	// When `true`, missing groups in the hierarchy will be ignored.
	IgnoreMissingGroups pulumi.BoolPtrInput
	// The LDAP DN where groups can be found.
	LdapGroupsDn pulumi.StringInput
	// The ID of the LDAP user federation provider to attach this mapper to.
	LdapUserFederationId pulumi.StringInput
	// Array of strings representing attributes on the LDAP group which will be mapped to attributes on the Keycloak group.
	MappedGroupAttributes pulumi.StringArrayInput
	// Specifies the name of the LDAP attribute on the LDAP user that contains the groups the user is a member of. Defaults to `memberOf`.
	MemberofLdapAttribute pulumi.StringPtrInput
	// Can be one of `DN` or `UID`. Defaults to `DN`.
	MembershipAttributeType pulumi.StringPtrInput
	// The name of the LDAP attribute that is used for membership mappings.
	MembershipLdapAttribute pulumi.StringInput
	// The name of the LDAP attribute on a user that is used for membership mappings.
	MembershipUserLdapAttribute pulumi.StringInput
	// Can be one of `READ_ONLY`, `LDAP_ONLY` or `IMPORT`. Defaults to `READ_ONLY`.
	Mode pulumi.StringPtrInput
	// Display name of this mapper when displayed in the console.
	Name pulumi.StringPtrInput
	// When `true`, group inheritance will be propagated from LDAP to Keycloak. When `false`, all LDAP groups will be propagated as top level groups within Keycloak.
	PreserveGroupInheritance pulumi.BoolPtrInput
	// The realm that this LDAP mapper will exist in.
	RealmId pulumi.StringInput
	// Can be one of `LOAD_GROUPS_BY_MEMBER_ATTRIBUTE`, `GET_GROUPS_FROM_USER_MEMBEROF_ATTRIBUTE`, or `LOAD_GROUPS_BY_MEMBER_ATTRIBUTE_RECURSIVELY`. Defaults to `LOAD_GROUPS_BY_MEMBER_ATTRIBUTE`.
	UserRolesRetrieveStrategy pulumi.StringPtrInput
}

func (GroupMapperArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*groupMapperArgs)(nil)).Elem()
}

type GroupMapperInput interface {
	pulumi.Input

	ToGroupMapperOutput() GroupMapperOutput
	ToGroupMapperOutputWithContext(ctx context.Context) GroupMapperOutput
}

func (*GroupMapper) ElementType() reflect.Type {
	return reflect.TypeOf((*GroupMapper)(nil))
}

func (i *GroupMapper) ToGroupMapperOutput() GroupMapperOutput {
	return i.ToGroupMapperOutputWithContext(context.Background())
}

func (i *GroupMapper) ToGroupMapperOutputWithContext(ctx context.Context) GroupMapperOutput {
	return pulumi.ToOutputWithContext(ctx, i).(GroupMapperOutput)
}

func (i *GroupMapper) ToGroupMapperPtrOutput() GroupMapperPtrOutput {
	return i.ToGroupMapperPtrOutputWithContext(context.Background())
}

func (i *GroupMapper) ToGroupMapperPtrOutputWithContext(ctx context.Context) GroupMapperPtrOutput {
	return pulumi.ToOutputWithContext(ctx, i).(GroupMapperPtrOutput)
}

type GroupMapperPtrInput interface {
	pulumi.Input

	ToGroupMapperPtrOutput() GroupMapperPtrOutput
	ToGroupMapperPtrOutputWithContext(ctx context.Context) GroupMapperPtrOutput
}

type groupMapperPtrType GroupMapperArgs

func (*groupMapperPtrType) ElementType() reflect.Type {
	return reflect.TypeOf((**GroupMapper)(nil))
}

func (i *groupMapperPtrType) ToGroupMapperPtrOutput() GroupMapperPtrOutput {
	return i.ToGroupMapperPtrOutputWithContext(context.Background())
}

func (i *groupMapperPtrType) ToGroupMapperPtrOutputWithContext(ctx context.Context) GroupMapperPtrOutput {
	return pulumi.ToOutputWithContext(ctx, i).(GroupMapperPtrOutput)
}

// GroupMapperArrayInput is an input type that accepts GroupMapperArray and GroupMapperArrayOutput values.
// You can construct a concrete instance of `GroupMapperArrayInput` via:
//
//          GroupMapperArray{ GroupMapperArgs{...} }
type GroupMapperArrayInput interface {
	pulumi.Input

	ToGroupMapperArrayOutput() GroupMapperArrayOutput
	ToGroupMapperArrayOutputWithContext(context.Context) GroupMapperArrayOutput
}

type GroupMapperArray []GroupMapperInput

func (GroupMapperArray) ElementType() reflect.Type {
	return reflect.TypeOf((*[]*GroupMapper)(nil)).Elem()
}

func (i GroupMapperArray) ToGroupMapperArrayOutput() GroupMapperArrayOutput {
	return i.ToGroupMapperArrayOutputWithContext(context.Background())
}

func (i GroupMapperArray) ToGroupMapperArrayOutputWithContext(ctx context.Context) GroupMapperArrayOutput {
	return pulumi.ToOutputWithContext(ctx, i).(GroupMapperArrayOutput)
}

// GroupMapperMapInput is an input type that accepts GroupMapperMap and GroupMapperMapOutput values.
// You can construct a concrete instance of `GroupMapperMapInput` via:
//
//          GroupMapperMap{ "key": GroupMapperArgs{...} }
type GroupMapperMapInput interface {
	pulumi.Input

	ToGroupMapperMapOutput() GroupMapperMapOutput
	ToGroupMapperMapOutputWithContext(context.Context) GroupMapperMapOutput
}

type GroupMapperMap map[string]GroupMapperInput

func (GroupMapperMap) ElementType() reflect.Type {
	return reflect.TypeOf((*map[string]*GroupMapper)(nil)).Elem()
}

func (i GroupMapperMap) ToGroupMapperMapOutput() GroupMapperMapOutput {
	return i.ToGroupMapperMapOutputWithContext(context.Background())
}

func (i GroupMapperMap) ToGroupMapperMapOutputWithContext(ctx context.Context) GroupMapperMapOutput {
	return pulumi.ToOutputWithContext(ctx, i).(GroupMapperMapOutput)
}

type GroupMapperOutput struct{ *pulumi.OutputState }

func (GroupMapperOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*GroupMapper)(nil))
}

func (o GroupMapperOutput) ToGroupMapperOutput() GroupMapperOutput {
	return o
}

func (o GroupMapperOutput) ToGroupMapperOutputWithContext(ctx context.Context) GroupMapperOutput {
	return o
}

func (o GroupMapperOutput) ToGroupMapperPtrOutput() GroupMapperPtrOutput {
	return o.ToGroupMapperPtrOutputWithContext(context.Background())
}

func (o GroupMapperOutput) ToGroupMapperPtrOutputWithContext(ctx context.Context) GroupMapperPtrOutput {
	return o.ApplyTWithContext(ctx, func(_ context.Context, v GroupMapper) *GroupMapper {
		return &v
	}).(GroupMapperPtrOutput)
}

type GroupMapperPtrOutput struct{ *pulumi.OutputState }

func (GroupMapperPtrOutput) ElementType() reflect.Type {
	return reflect.TypeOf((**GroupMapper)(nil))
}

func (o GroupMapperPtrOutput) ToGroupMapperPtrOutput() GroupMapperPtrOutput {
	return o
}

func (o GroupMapperPtrOutput) ToGroupMapperPtrOutputWithContext(ctx context.Context) GroupMapperPtrOutput {
	return o
}

func (o GroupMapperPtrOutput) Elem() GroupMapperOutput {
	return o.ApplyT(func(v *GroupMapper) GroupMapper {
		if v != nil {
			return *v
		}
		var ret GroupMapper
		return ret
	}).(GroupMapperOutput)
}

type GroupMapperArrayOutput struct{ *pulumi.OutputState }

func (GroupMapperArrayOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*[]GroupMapper)(nil))
}

func (o GroupMapperArrayOutput) ToGroupMapperArrayOutput() GroupMapperArrayOutput {
	return o
}

func (o GroupMapperArrayOutput) ToGroupMapperArrayOutputWithContext(ctx context.Context) GroupMapperArrayOutput {
	return o
}

func (o GroupMapperArrayOutput) Index(i pulumi.IntInput) GroupMapperOutput {
	return pulumi.All(o, i).ApplyT(func(vs []interface{}) GroupMapper {
		return vs[0].([]GroupMapper)[vs[1].(int)]
	}).(GroupMapperOutput)
}

type GroupMapperMapOutput struct{ *pulumi.OutputState }

func (GroupMapperMapOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*map[string]GroupMapper)(nil))
}

func (o GroupMapperMapOutput) ToGroupMapperMapOutput() GroupMapperMapOutput {
	return o
}

func (o GroupMapperMapOutput) ToGroupMapperMapOutputWithContext(ctx context.Context) GroupMapperMapOutput {
	return o
}

func (o GroupMapperMapOutput) MapIndex(k pulumi.StringInput) GroupMapperOutput {
	return pulumi.All(o, k).ApplyT(func(vs []interface{}) GroupMapper {
		return vs[0].(map[string]GroupMapper)[vs[1].(string)]
	}).(GroupMapperOutput)
}

func init() {
	pulumi.RegisterInputType(reflect.TypeOf((*GroupMapperInput)(nil)).Elem(), &GroupMapper{})
	pulumi.RegisterInputType(reflect.TypeOf((*GroupMapperPtrInput)(nil)).Elem(), &GroupMapper{})
	pulumi.RegisterInputType(reflect.TypeOf((*GroupMapperArrayInput)(nil)).Elem(), GroupMapperArray{})
	pulumi.RegisterInputType(reflect.TypeOf((*GroupMapperMapInput)(nil)).Elem(), GroupMapperMap{})
	pulumi.RegisterOutputType(GroupMapperOutput{})
	pulumi.RegisterOutputType(GroupMapperPtrOutput{})
	pulumi.RegisterOutputType(GroupMapperArrayOutput{})
	pulumi.RegisterOutputType(GroupMapperMapOutput{})
}
