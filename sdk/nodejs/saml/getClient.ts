// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
import * as utilities from "../utilities";

/**
 * This data source can be used to fetch properties of a Keycloak client that uses the SAML protocol.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as keycloak from "@pulumi/keycloak";
 *
 * const realmManagement = keycloak.saml.getClient({
 *     realmId: "my-realm",
 *     clientId: "realm-management",
 * });
 * const admin = realmManagement.then(realmManagement => keycloak.getRole({
 *     realmId: "my-realm",
 *     clientId: realmManagement.id,
 *     name: "realm-admin",
 * }));
 * ```
 */
export function getClient(args: GetClientArgs, opts?: pulumi.InvokeOptions): Promise<GetClientResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("keycloak:saml/getClient:getClient", {
        "clientId": args.clientId,
        "realmId": args.realmId,
    }, opts);
}

/**
 * A collection of arguments for invoking getClient.
 */
export interface GetClientArgs {
    /**
     * The client id (not its unique ID).
     */
    clientId: string;
    /**
     * The realm id.
     */
    realmId: string;
}

/**
 * A collection of values returned by getClient.
 */
export interface GetClientResult {
    readonly assertionConsumerPostUrl: string;
    readonly assertionConsumerRedirectUrl: string;
    readonly authenticationFlowBindingOverrides: outputs.saml.GetClientAuthenticationFlowBindingOverride[];
    readonly baseUrl: string;
    readonly canonicalizationMethod: string;
    readonly clientId: string;
    readonly clientSignatureRequired: boolean;
    readonly description: string;
    readonly enabled: boolean;
    readonly encryptAssertions: boolean;
    readonly encryptionCertificate: string;
    readonly encryptionCertificateSha1: string;
    readonly extraConfig: {[key: string]: any};
    readonly forceNameIdFormat: boolean;
    readonly forcePostBinding: boolean;
    readonly frontChannelLogout: boolean;
    readonly fullScopeAllowed: boolean;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly idpInitiatedSsoRelayState: string;
    readonly idpInitiatedSsoUrlName: string;
    readonly includeAuthnStatement: boolean;
    readonly loginTheme: string;
    readonly logoutServicePostBindingUrl: string;
    readonly logoutServiceRedirectBindingUrl: string;
    readonly masterSamlProcessingUrl: string;
    readonly name: string;
    readonly nameIdFormat: string;
    readonly realmId: string;
    readonly rootUrl: string;
    readonly samlSignatureKeyName: string;
    readonly signAssertions: boolean;
    readonly signDocuments: boolean;
    readonly signatureAlgorithm: string;
    readonly signatureKeyName: string;
    readonly signingCertificate: string;
    readonly signingCertificateSha1: string;
    readonly signingPrivateKey: string;
    readonly signingPrivateKeySha1: string;
    readonly validRedirectUris: string[];
}

export function getClientOutput(args: GetClientOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetClientResult> {
    return pulumi.output(args).apply(a => getClient(a, opts))
}

/**
 * A collection of arguments for invoking getClient.
 */
export interface GetClientOutputArgs {
    /**
     * The client id (not its unique ID).
     */
    clientId: pulumi.Input<string>;
    /**
     * The realm id.
     */
    realmId: pulumi.Input<string>;
}
