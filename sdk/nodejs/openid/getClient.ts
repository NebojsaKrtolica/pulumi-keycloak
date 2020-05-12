// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * ## # keycloak.openid.Client data source
 * 
 * This data source can be used to fetch properties of a Keycloak OpenID client for usage with other resources.
 * 
 * ### Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as keycloak from "@pulumi/keycloak";
 * 
 * const realmManagement = keycloak.openid.getClient({
 *     realmId: "my-realm",
 *     clientId: "realm-management",
 * });
 * const admin = realmManagement.then(realmManagement => keycloak.getRole({
 *     realmId: "my-realm",
 *     clientId: realmManagement.id,
 *     name: "realm-admin",
 * }));
 * ```
 * 
 * ### Argument Reference
 * 
 * The following arguments are supported:
 * 
 * - `realmId` - (Required) The realm id.
 * - `clientId` - (Required) The client id.
 * 
 * ### Attributes Reference
 * 
 * See the docs for the `keycloak.openid.Client` resource for details on the exported attributes.
 *
 * > This content is derived from https://github.com/mrparkers/terraform-provider-keycloak/blob/master/website/docs/d/keycloak_openid_client.html.markdown.
 */
export function getClient(args: GetClientArgs, opts?: pulumi.InvokeOptions): Promise<GetClientResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("keycloak:openid/getClient:getClient", {
        "clientId": args.clientId,
        "realmId": args.realmId,
    }, opts);
}

/**
 * A collection of arguments for invoking getClient.
 */
export interface GetClientArgs {
    readonly clientId: string;
    readonly realmId: string;
}

/**
 * A collection of values returned by getClient.
 */
export interface GetClientResult {
    readonly accessType: string;
    readonly authenticationFlowBindingOverrides: outputs.openid.GetClientAuthenticationFlowBindingOverrides;
    readonly authorization: outputs.openid.GetClientAuthorization;
    readonly clientId: string;
    readonly clientSecret: string;
    readonly consentRequired: boolean;
    readonly description: string;
    readonly directAccessGrantsEnabled: boolean;
    readonly enabled: boolean;
    readonly fullScopeAllowed: boolean;
    readonly implicitFlowEnabled: boolean;
    readonly name: string;
    readonly realmId: string;
    readonly resourceServerId: string;
    readonly rootUrl: string;
    readonly serviceAccountUserId: string;
    readonly serviceAccountsEnabled: boolean;
    readonly standardFlowEnabled: boolean;
    readonly validRedirectUris: string[];
    readonly webOrigins: string[];
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
