// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package keycloak

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

type UserTemplateImporterIdentityProviderMapper struct {
	pulumi.CustomResourceState

	ExtraConfig pulumi.MapOutput `pulumi:"extraConfig"`
	// IDP Alias
	IdentityProviderAlias pulumi.StringOutput `pulumi:"identityProviderAlias"`
	// IDP Mapper Name
	Name pulumi.StringOutput `pulumi:"name"`
	// Realm Name
	Realm pulumi.StringOutput `pulumi:"realm"`
	// Username For Template Import
	Template pulumi.StringPtrOutput `pulumi:"template"`
}

// NewUserTemplateImporterIdentityProviderMapper registers a new resource with the given unique name, arguments, and options.
func NewUserTemplateImporterIdentityProviderMapper(ctx *pulumi.Context,
	name string, args *UserTemplateImporterIdentityProviderMapperArgs, opts ...pulumi.ResourceOption) (*UserTemplateImporterIdentityProviderMapper, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.IdentityProviderAlias == nil {
		return nil, errors.New("invalid value for required argument 'IdentityProviderAlias'")
	}
	if args.Realm == nil {
		return nil, errors.New("invalid value for required argument 'Realm'")
	}
	var resource UserTemplateImporterIdentityProviderMapper
	err := ctx.RegisterResource("keycloak:index/userTemplateImporterIdentityProviderMapper:UserTemplateImporterIdentityProviderMapper", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetUserTemplateImporterIdentityProviderMapper gets an existing UserTemplateImporterIdentityProviderMapper resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetUserTemplateImporterIdentityProviderMapper(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *UserTemplateImporterIdentityProviderMapperState, opts ...pulumi.ResourceOption) (*UserTemplateImporterIdentityProviderMapper, error) {
	var resource UserTemplateImporterIdentityProviderMapper
	err := ctx.ReadResource("keycloak:index/userTemplateImporterIdentityProviderMapper:UserTemplateImporterIdentityProviderMapper", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering UserTemplateImporterIdentityProviderMapper resources.
type userTemplateImporterIdentityProviderMapperState struct {
	ExtraConfig map[string]interface{} `pulumi:"extraConfig"`
	// IDP Alias
	IdentityProviderAlias *string `pulumi:"identityProviderAlias"`
	// IDP Mapper Name
	Name *string `pulumi:"name"`
	// Realm Name
	Realm *string `pulumi:"realm"`
	// Username For Template Import
	Template *string `pulumi:"template"`
}

type UserTemplateImporterIdentityProviderMapperState struct {
	ExtraConfig pulumi.MapInput
	// IDP Alias
	IdentityProviderAlias pulumi.StringPtrInput
	// IDP Mapper Name
	Name pulumi.StringPtrInput
	// Realm Name
	Realm pulumi.StringPtrInput
	// Username For Template Import
	Template pulumi.StringPtrInput
}

func (UserTemplateImporterIdentityProviderMapperState) ElementType() reflect.Type {
	return reflect.TypeOf((*userTemplateImporterIdentityProviderMapperState)(nil)).Elem()
}

type userTemplateImporterIdentityProviderMapperArgs struct {
	ExtraConfig map[string]interface{} `pulumi:"extraConfig"`
	// IDP Alias
	IdentityProviderAlias string `pulumi:"identityProviderAlias"`
	// IDP Mapper Name
	Name *string `pulumi:"name"`
	// Realm Name
	Realm string `pulumi:"realm"`
	// Username For Template Import
	Template *string `pulumi:"template"`
}

// The set of arguments for constructing a UserTemplateImporterIdentityProviderMapper resource.
type UserTemplateImporterIdentityProviderMapperArgs struct {
	ExtraConfig pulumi.MapInput
	// IDP Alias
	IdentityProviderAlias pulumi.StringInput
	// IDP Mapper Name
	Name pulumi.StringPtrInput
	// Realm Name
	Realm pulumi.StringInput
	// Username For Template Import
	Template pulumi.StringPtrInput
}

func (UserTemplateImporterIdentityProviderMapperArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*userTemplateImporterIdentityProviderMapperArgs)(nil)).Elem()
}

type UserTemplateImporterIdentityProviderMapperInput interface {
	pulumi.Input

	ToUserTemplateImporterIdentityProviderMapperOutput() UserTemplateImporterIdentityProviderMapperOutput
	ToUserTemplateImporterIdentityProviderMapperOutputWithContext(ctx context.Context) UserTemplateImporterIdentityProviderMapperOutput
}

func (*UserTemplateImporterIdentityProviderMapper) ElementType() reflect.Type {
	return reflect.TypeOf((*UserTemplateImporterIdentityProviderMapper)(nil))
}

func (i *UserTemplateImporterIdentityProviderMapper) ToUserTemplateImporterIdentityProviderMapperOutput() UserTemplateImporterIdentityProviderMapperOutput {
	return i.ToUserTemplateImporterIdentityProviderMapperOutputWithContext(context.Background())
}

func (i *UserTemplateImporterIdentityProviderMapper) ToUserTemplateImporterIdentityProviderMapperOutputWithContext(ctx context.Context) UserTemplateImporterIdentityProviderMapperOutput {
	return pulumi.ToOutputWithContext(ctx, i).(UserTemplateImporterIdentityProviderMapperOutput)
}

type UserTemplateImporterIdentityProviderMapperOutput struct {
	*pulumi.OutputState
}

func (UserTemplateImporterIdentityProviderMapperOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*UserTemplateImporterIdentityProviderMapper)(nil))
}

func (o UserTemplateImporterIdentityProviderMapperOutput) ToUserTemplateImporterIdentityProviderMapperOutput() UserTemplateImporterIdentityProviderMapperOutput {
	return o
}

func (o UserTemplateImporterIdentityProviderMapperOutput) ToUserTemplateImporterIdentityProviderMapperOutputWithContext(ctx context.Context) UserTemplateImporterIdentityProviderMapperOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(UserTemplateImporterIdentityProviderMapperOutput{})
}
