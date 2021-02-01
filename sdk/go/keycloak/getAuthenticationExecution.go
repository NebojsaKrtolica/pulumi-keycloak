// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package keycloak

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// This data source can be used to fetch the ID of an authentication execution within Keycloak.
//
// ## Example Usage
//
// ```go
// package main
//
// import (
// 	"github.com/pulumi/pulumi-keycloak/sdk/v3/go/keycloak"
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
// 		return nil
// 	})
// }
// ```
func GetAuthenticationExecution(ctx *pulumi.Context, args *GetAuthenticationExecutionArgs, opts ...pulumi.InvokeOption) (*GetAuthenticationExecutionResult, error) {
	var rv GetAuthenticationExecutionResult
	err := ctx.Invoke("keycloak:index/getAuthenticationExecution:getAuthenticationExecution", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

// A collection of arguments for invoking getAuthenticationExecution.
type GetAuthenticationExecutionArgs struct {
	// The alias of the flow this execution is attached to.
	ParentFlowAlias string `pulumi:"parentFlowAlias"`
	// The name of the provider. This can be found by experimenting with the GUI and looking at HTTP requests within the network tab of your browser's development tools. This was previously known as the "authenticator".
	ProviderId string `pulumi:"providerId"`
	// The realm the authentication execution exists in.
	RealmId string `pulumi:"realmId"`
}

// A collection of values returned by getAuthenticationExecution.
type GetAuthenticationExecutionResult struct {
	// The provider-assigned unique ID for this managed resource.
	Id              string `pulumi:"id"`
	ParentFlowAlias string `pulumi:"parentFlowAlias"`
	ProviderId      string `pulumi:"providerId"`
	RealmId         string `pulumi:"realmId"`
}
