// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

let __config = new pulumi.Config("keycloak");

export let additionalHeaders: {[key: string]: string} | undefined = __config.getObject<{[key: string]: string}>("additionalHeaders");
export let basePath: string | undefined = __config.get("basePath");
export let clientId: string | undefined = __config.get("clientId");
export let clientSecret: string | undefined = __config.get("clientSecret");
/**
 * Timeout (in seconds) of the Keycloak client
 */
export let clientTimeout: number | undefined = __config.getObject<number>("clientTimeout") || (<any>utilities.getEnvNumber("KEYCLOAK_CLIENT_TIMEOUT") || 5);
/**
 * Whether or not to login to Keycloak instance on provider initialization
 */
export let initialLogin: boolean | undefined = __config.getObject<boolean>("initialLogin");
export let password: string | undefined = __config.get("password");
export let realm: string | undefined = __config.get("realm");
/**
 * Allows x509 calls using an unknown CA certificate (for development purposes)
 */
export let rootCaCertificate: string | undefined = __config.get("rootCaCertificate");
/**
 * Allows ignoring insecure certificates when set to true. Defaults to false. Disabling security check is dangerous and
 * should be avoided.
 */
export let tlsInsecureSkipVerify: boolean | undefined = __config.getObject<boolean>("tlsInsecureSkipVerify");
/**
 * The base URL of the Keycloak instance, before `/auth`
 */
export let url: string | undefined = __config.get("url");
export let username: string | undefined = __config.get("username");
