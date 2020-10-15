// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * This data source can be used to retrieve Installation Provider of a SAML Client.
 *
 * ## Example Usage
 *
 * In the example below, we extract the SAML metadata IDPSSODescriptor to pass it to the AWS IAM SAML Provider.
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * import * as keycloak from "@pulumi/keycloak";
 * import * from "fs";
 *
 * const realm = new keycloak.Realm("realm", {
 *     realm: "my-realm",
 *     enabled: true,
 * });
 * const samlClient = new keycloak.saml.Client("samlClient", {
 *     realmId: realm.id,
 *     clientId: "test-saml-client",
 *     signDocuments: false,
 *     signAssertions: true,
 *     includeAuthnStatement: true,
 *     signingCertificate: fs.readFileSync("saml-cert.pem"),
 *     signingPrivateKey: fs.readFileSync("saml-key.pem"),
 * });
 * const samlIdpDescriptor = pulumi.all([realm.id, samlClient.id]).apply(([realmId, samlClientId]) => keycloak.saml.getClientInstallationProvider({
 *     realmId: realmId,
 *     clientId: samlClientId,
 *     providerId: "saml-idp-descriptor",
 * }));
 * const _default = new aws.iam.SamlProvider("default", {samlMetadataDocument: samlIdpDescriptor.value});
 * ```
 */
export function getClientInstallationProvider(args: GetClientInstallationProviderArgs, opts?: pulumi.InvokeOptions): Promise<GetClientInstallationProviderResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("keycloak:saml/getClientInstallationProvider:getClientInstallationProvider", {
        "clientId": args.clientId,
        "providerId": args.providerId,
        "realmId": args.realmId,
    }, opts);
}

/**
 * A collection of arguments for invoking getClientInstallationProvider.
 */
export interface GetClientInstallationProviderArgs {
    /**
     * The ID of the SAML client. The `id` attribute of a `keycloakClient` resource should be used here.
     */
    readonly clientId: string;
    /**
     * The ID of the SAML installation provider. Could be one of `saml-idp-descriptor`, `keycloak-saml`, `saml-sp-descriptor`, `keycloak-saml-subsystem`, `mod-auth-mellon`, etc.
     */
    readonly providerId: string;
    /**
     * The realm that the SAML client exists within.
     */
    readonly realmId: string;
}

/**
 * A collection of values returned by getClientInstallationProvider.
 */
export interface GetClientInstallationProviderResult {
    readonly clientId: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly providerId: string;
    readonly realmId: string;
    /**
     * (Computed) The returned document needed for SAML installation.
     */
    readonly value: string;
}
