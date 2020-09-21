// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package keycloak

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupRole(ctx *pulumi.Context, args *LookupRoleArgs, opts ...pulumi.InvokeOption) (*LookupRoleResult, error) {
	var rv LookupRoleResult
	err := ctx.Invoke("keycloak:index/getRole:getRole", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

// A collection of arguments for invoking getRole.
type LookupRoleArgs struct {
	ClientId *string `pulumi:"clientId"`
	Name     string  `pulumi:"name"`
	RealmId  string  `pulumi:"realmId"`
}

// A collection of values returned by getRole.
type LookupRoleResult struct {
	ClientId    *string `pulumi:"clientId"`
	Description string  `pulumi:"description"`
	// The provider-assigned unique ID for this managed resource.
	Id      string `pulumi:"id"`
	Name    string `pulumi:"name"`
	RealmId string `pulumi:"realmId"`
}
