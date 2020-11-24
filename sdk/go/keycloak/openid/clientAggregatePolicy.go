// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package openid

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

type ClientAggregatePolicy struct {
	pulumi.CustomResourceState

	DecisionStrategy pulumi.StringOutput      `pulumi:"decisionStrategy"`
	Description      pulumi.StringPtrOutput   `pulumi:"description"`
	Logic            pulumi.StringPtrOutput   `pulumi:"logic"`
	Name             pulumi.StringOutput      `pulumi:"name"`
	Policies         pulumi.StringArrayOutput `pulumi:"policies"`
	RealmId          pulumi.StringOutput      `pulumi:"realmId"`
	ResourceServerId pulumi.StringOutput      `pulumi:"resourceServerId"`
}

// NewClientAggregatePolicy registers a new resource with the given unique name, arguments, and options.
func NewClientAggregatePolicy(ctx *pulumi.Context,
	name string, args *ClientAggregatePolicyArgs, opts ...pulumi.ResourceOption) (*ClientAggregatePolicy, error) {
	if args == nil || args.DecisionStrategy == nil {
		return nil, errors.New("missing required argument 'DecisionStrategy'")
	}
	if args == nil || args.Policies == nil {
		return nil, errors.New("missing required argument 'Policies'")
	}
	if args == nil || args.RealmId == nil {
		return nil, errors.New("missing required argument 'RealmId'")
	}
	if args == nil || args.ResourceServerId == nil {
		return nil, errors.New("missing required argument 'ResourceServerId'")
	}
	if args == nil {
		args = &ClientAggregatePolicyArgs{}
	}
	var resource ClientAggregatePolicy
	err := ctx.RegisterResource("keycloak:openid/clientAggregatePolicy:ClientAggregatePolicy", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetClientAggregatePolicy gets an existing ClientAggregatePolicy resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetClientAggregatePolicy(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *ClientAggregatePolicyState, opts ...pulumi.ResourceOption) (*ClientAggregatePolicy, error) {
	var resource ClientAggregatePolicy
	err := ctx.ReadResource("keycloak:openid/clientAggregatePolicy:ClientAggregatePolicy", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering ClientAggregatePolicy resources.
type clientAggregatePolicyState struct {
	DecisionStrategy *string  `pulumi:"decisionStrategy"`
	Description      *string  `pulumi:"description"`
	Logic            *string  `pulumi:"logic"`
	Name             *string  `pulumi:"name"`
	Policies         []string `pulumi:"policies"`
	RealmId          *string  `pulumi:"realmId"`
	ResourceServerId *string  `pulumi:"resourceServerId"`
}

type ClientAggregatePolicyState struct {
	DecisionStrategy pulumi.StringPtrInput
	Description      pulumi.StringPtrInput
	Logic            pulumi.StringPtrInput
	Name             pulumi.StringPtrInput
	Policies         pulumi.StringArrayInput
	RealmId          pulumi.StringPtrInput
	ResourceServerId pulumi.StringPtrInput
}

func (ClientAggregatePolicyState) ElementType() reflect.Type {
	return reflect.TypeOf((*clientAggregatePolicyState)(nil)).Elem()
}

type clientAggregatePolicyArgs struct {
	DecisionStrategy string   `pulumi:"decisionStrategy"`
	Description      *string  `pulumi:"description"`
	Logic            *string  `pulumi:"logic"`
	Name             *string  `pulumi:"name"`
	Policies         []string `pulumi:"policies"`
	RealmId          string   `pulumi:"realmId"`
	ResourceServerId string   `pulumi:"resourceServerId"`
}

// The set of arguments for constructing a ClientAggregatePolicy resource.
type ClientAggregatePolicyArgs struct {
	DecisionStrategy pulumi.StringInput
	Description      pulumi.StringPtrInput
	Logic            pulumi.StringPtrInput
	Name             pulumi.StringPtrInput
	Policies         pulumi.StringArrayInput
	RealmId          pulumi.StringInput
	ResourceServerId pulumi.StringInput
}

func (ClientAggregatePolicyArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*clientAggregatePolicyArgs)(nil)).Elem()
}

type ClientAggregatePolicyInput interface {
	pulumi.Input

	ToClientAggregatePolicyOutput() ClientAggregatePolicyOutput
	ToClientAggregatePolicyOutputWithContext(ctx context.Context) ClientAggregatePolicyOutput
}

func (ClientAggregatePolicy) ElementType() reflect.Type {
	return reflect.TypeOf((*ClientAggregatePolicy)(nil)).Elem()
}

func (i ClientAggregatePolicy) ToClientAggregatePolicyOutput() ClientAggregatePolicyOutput {
	return i.ToClientAggregatePolicyOutputWithContext(context.Background())
}

func (i ClientAggregatePolicy) ToClientAggregatePolicyOutputWithContext(ctx context.Context) ClientAggregatePolicyOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ClientAggregatePolicyOutput)
}

type ClientAggregatePolicyOutput struct {
	*pulumi.OutputState
}

func (ClientAggregatePolicyOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*ClientAggregatePolicyOutput)(nil)).Elem()
}

func (o ClientAggregatePolicyOutput) ToClientAggregatePolicyOutput() ClientAggregatePolicyOutput {
	return o
}

func (o ClientAggregatePolicyOutput) ToClientAggregatePolicyOutputWithContext(ctx context.Context) ClientAggregatePolicyOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(ClientAggregatePolicyOutput{})
}
