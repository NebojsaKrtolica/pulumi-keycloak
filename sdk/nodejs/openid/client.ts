// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Allows for creating and managing Keycloak clients that use the OpenID Connect protocol.
 *
 * Clients are entities that can use Keycloak for user authentication. Typically,
 * clients are applications that redirect users to Keycloak for authentication
 * in order to take advantage of Keycloak's user sessions for SSO.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as keycloak from "@pulumi/keycloak";
 *
 * const realm = new keycloak.Realm("realm", {
 *     realm: "my-realm",
 *     enabled: true,
 * });
 * const openidClient = new keycloak.openid.Client("openidClient", {
 *     realmId: realm.id,
 *     clientId: "test-client",
 *     enabled: true,
 *     accessType: "CONFIDENTIAL",
 *     validRedirectUris: ["http://localhost:8080/openid-callback"],
 *     loginTheme: "keycloak",
 * });
 * ```
 */
export class Client extends pulumi.CustomResource {
    /**
     * Get an existing Client resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ClientState, opts?: pulumi.CustomResourceOptions): Client {
        return new Client(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'keycloak:openid/client:Client';

    /**
     * Returns true if the given object is an instance of Client.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Client {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Client.__pulumiType;
    }

    /**
     * The amount of time in seconds before an access token expires. This will override the default for the realm.
     */
    public readonly accessTokenLifespan!: pulumi.Output<string | undefined>;
    /**
     * Specifies the type of client, which can be one of the following:
     */
    public readonly accessType!: pulumi.Output<string>;
    /**
     * URL to the admin interface of the client.
     */
    public readonly adminUrl!: pulumi.Output<string | undefined>;
    /**
     * Override realm authentication flow bindings
     */
    public readonly authenticationFlowBindingOverrides!: pulumi.Output<outputs.openid.ClientAuthenticationFlowBindingOverrides | undefined>;
    /**
     * When this block is present, fine-grained authorization will be enabled for this client. The client's `accessType` must be `CONFIDENTIAL`, and `serviceAccountsEnabled` must be `true`. This block has the following arguments:
     */
    public readonly authorization!: pulumi.Output<outputs.openid.ClientAuthorization | undefined>;
    /**
     * Default URL to use when the auth server needs to redirect or link back to the client.
     */
    public readonly baseUrl!: pulumi.Output<string | undefined>;
    /**
     * The Client ID for this client, referenced in the URI during authentication and in issued tokens.
     */
    public readonly clientId!: pulumi.Output<string>;
    /**
     * The secret for clients with an `accessType` of `CONFIDENTIAL` or `BEARER-ONLY`. This value is sensitive and should be treated with the same care as a password. If omitted, this will be generated by Keycloak.
     */
    public readonly clientSecret!: pulumi.Output<string>;
    /**
     * When `true`, users have to consent to client access.
     */
    public readonly consentRequired!: pulumi.Output<boolean | undefined>;
    /**
     * The description of this client in the GUI.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * When `true`, the OAuth2 Resource Owner Password Grant will be enabled for this client. Defaults to `false`.
     */
    public readonly directAccessGrantsEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * When `false`, this client will not be able to initiate a login or obtain access tokens. Defaults to `true`.
     */
    public readonly enabled!: pulumi.Output<boolean | undefined>;
    /**
     * When `true`, the parameter `sessionState` will not be included in OpenID Connect Authentication Response.
     */
    public readonly excludeSessionStateFromAuthResponse!: pulumi.Output<boolean | undefined>;
    /**
     * Allow to include all roles mappings in the access token.
     */
    public readonly fullScopeAllowed!: pulumi.Output<boolean | undefined>;
    /**
     * When `true`, the OAuth2 Implicit Grant will be enabled for this client. Defaults to `false`.
     */
    public readonly implicitFlowEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * The client login theme. This will override the default theme for the realm.
     */
    public readonly loginTheme!: pulumi.Output<string | undefined>;
    /**
     * The display name of this client in the GUI.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The challenge method to use for Proof Key for Code Exchange. Can be either `plain` or `S256` or set to empty value ``.
     */
    public readonly pkceCodeChallengeMethod!: pulumi.Output<string | undefined>;
    /**
     * The realm this client is attached to.
     */
    public readonly realmId!: pulumi.Output<string>;
    /**
     * (Computed) When authorization is enabled for this client, this attribute is the unique ID for the client (the same value as the `.id` attribute).
     */
    public /*out*/ readonly resourceServerId!: pulumi.Output<string>;
    /**
     * When specified, this URL is prepended to any relative URLs found within `validRedirectUris`, `webOrigins`, and `adminUrl`. NOTE: Due to limitations in the Keycloak API, when the `rootUrl` attribute is used, the `validRedirectUris`, `webOrigins`, and `adminUrl` attributes will be required.
     */
    public readonly rootUrl!: pulumi.Output<string | undefined>;
    /**
     * (Computed) When service accounts are enabled for this client, this attribute is the unique ID for the Keycloak user that represents this service account.
     */
    public /*out*/ readonly serviceAccountUserId!: pulumi.Output<string>;
    /**
     * When `true`, the OAuth2 Client Credentials grant will be enabled for this client. Defaults to `false`.
     */
    public readonly serviceAccountsEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * When `true`, the OAuth2 Authorization Code Grant will be enabled for this client. Defaults to `false`.
     */
    public readonly standardFlowEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * A list of valid URIs a browser is permitted to redirect to after a successful login or logout. Simple
     * wildcards in the form of an asterisk can be used here. This attribute must be set if either `standardFlowEnabled` or `implicitFlowEnabled`
     * is set to `true`.
     */
    public readonly validRedirectUris!: pulumi.Output<string[] | undefined>;
    /**
     * A list of allowed CORS origins. `+` can be used to permit all valid redirect URIs, and `*` can be used to permit all origins.
     */
    public readonly webOrigins!: pulumi.Output<string[] | undefined>;

    /**
     * Create a Client resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ClientArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ClientArgs | ClientState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as ClientState | undefined;
            inputs["accessTokenLifespan"] = state ? state.accessTokenLifespan : undefined;
            inputs["accessType"] = state ? state.accessType : undefined;
            inputs["adminUrl"] = state ? state.adminUrl : undefined;
            inputs["authenticationFlowBindingOverrides"] = state ? state.authenticationFlowBindingOverrides : undefined;
            inputs["authorization"] = state ? state.authorization : undefined;
            inputs["baseUrl"] = state ? state.baseUrl : undefined;
            inputs["clientId"] = state ? state.clientId : undefined;
            inputs["clientSecret"] = state ? state.clientSecret : undefined;
            inputs["consentRequired"] = state ? state.consentRequired : undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["directAccessGrantsEnabled"] = state ? state.directAccessGrantsEnabled : undefined;
            inputs["enabled"] = state ? state.enabled : undefined;
            inputs["excludeSessionStateFromAuthResponse"] = state ? state.excludeSessionStateFromAuthResponse : undefined;
            inputs["fullScopeAllowed"] = state ? state.fullScopeAllowed : undefined;
            inputs["implicitFlowEnabled"] = state ? state.implicitFlowEnabled : undefined;
            inputs["loginTheme"] = state ? state.loginTheme : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["pkceCodeChallengeMethod"] = state ? state.pkceCodeChallengeMethod : undefined;
            inputs["realmId"] = state ? state.realmId : undefined;
            inputs["resourceServerId"] = state ? state.resourceServerId : undefined;
            inputs["rootUrl"] = state ? state.rootUrl : undefined;
            inputs["serviceAccountUserId"] = state ? state.serviceAccountUserId : undefined;
            inputs["serviceAccountsEnabled"] = state ? state.serviceAccountsEnabled : undefined;
            inputs["standardFlowEnabled"] = state ? state.standardFlowEnabled : undefined;
            inputs["validRedirectUris"] = state ? state.validRedirectUris : undefined;
            inputs["webOrigins"] = state ? state.webOrigins : undefined;
        } else {
            const args = argsOrState as ClientArgs | undefined;
            if (!args || args.accessType === undefined) {
                throw new Error("Missing required property 'accessType'");
            }
            if (!args || args.clientId === undefined) {
                throw new Error("Missing required property 'clientId'");
            }
            if (!args || args.realmId === undefined) {
                throw new Error("Missing required property 'realmId'");
            }
            inputs["accessTokenLifespan"] = args ? args.accessTokenLifespan : undefined;
            inputs["accessType"] = args ? args.accessType : undefined;
            inputs["adminUrl"] = args ? args.adminUrl : undefined;
            inputs["authenticationFlowBindingOverrides"] = args ? args.authenticationFlowBindingOverrides : undefined;
            inputs["authorization"] = args ? args.authorization : undefined;
            inputs["baseUrl"] = args ? args.baseUrl : undefined;
            inputs["clientId"] = args ? args.clientId : undefined;
            inputs["clientSecret"] = args ? args.clientSecret : undefined;
            inputs["consentRequired"] = args ? args.consentRequired : undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["directAccessGrantsEnabled"] = args ? args.directAccessGrantsEnabled : undefined;
            inputs["enabled"] = args ? args.enabled : undefined;
            inputs["excludeSessionStateFromAuthResponse"] = args ? args.excludeSessionStateFromAuthResponse : undefined;
            inputs["fullScopeAllowed"] = args ? args.fullScopeAllowed : undefined;
            inputs["implicitFlowEnabled"] = args ? args.implicitFlowEnabled : undefined;
            inputs["loginTheme"] = args ? args.loginTheme : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["pkceCodeChallengeMethod"] = args ? args.pkceCodeChallengeMethod : undefined;
            inputs["realmId"] = args ? args.realmId : undefined;
            inputs["rootUrl"] = args ? args.rootUrl : undefined;
            inputs["serviceAccountsEnabled"] = args ? args.serviceAccountsEnabled : undefined;
            inputs["standardFlowEnabled"] = args ? args.standardFlowEnabled : undefined;
            inputs["validRedirectUris"] = args ? args.validRedirectUris : undefined;
            inputs["webOrigins"] = args ? args.webOrigins : undefined;
            inputs["resourceServerId"] = undefined /*out*/;
            inputs["serviceAccountUserId"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(Client.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Client resources.
 */
export interface ClientState {
    /**
     * The amount of time in seconds before an access token expires. This will override the default for the realm.
     */
    readonly accessTokenLifespan?: pulumi.Input<string>;
    /**
     * Specifies the type of client, which can be one of the following:
     */
    readonly accessType?: pulumi.Input<string>;
    /**
     * URL to the admin interface of the client.
     */
    readonly adminUrl?: pulumi.Input<string>;
    /**
     * Override realm authentication flow bindings
     */
    readonly authenticationFlowBindingOverrides?: pulumi.Input<inputs.openid.ClientAuthenticationFlowBindingOverrides>;
    /**
     * When this block is present, fine-grained authorization will be enabled for this client. The client's `accessType` must be `CONFIDENTIAL`, and `serviceAccountsEnabled` must be `true`. This block has the following arguments:
     */
    readonly authorization?: pulumi.Input<inputs.openid.ClientAuthorization>;
    /**
     * Default URL to use when the auth server needs to redirect or link back to the client.
     */
    readonly baseUrl?: pulumi.Input<string>;
    /**
     * The Client ID for this client, referenced in the URI during authentication and in issued tokens.
     */
    readonly clientId?: pulumi.Input<string>;
    /**
     * The secret for clients with an `accessType` of `CONFIDENTIAL` or `BEARER-ONLY`. This value is sensitive and should be treated with the same care as a password. If omitted, this will be generated by Keycloak.
     */
    readonly clientSecret?: pulumi.Input<string>;
    /**
     * When `true`, users have to consent to client access.
     */
    readonly consentRequired?: pulumi.Input<boolean>;
    /**
     * The description of this client in the GUI.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * When `true`, the OAuth2 Resource Owner Password Grant will be enabled for this client. Defaults to `false`.
     */
    readonly directAccessGrantsEnabled?: pulumi.Input<boolean>;
    /**
     * When `false`, this client will not be able to initiate a login or obtain access tokens. Defaults to `true`.
     */
    readonly enabled?: pulumi.Input<boolean>;
    /**
     * When `true`, the parameter `sessionState` will not be included in OpenID Connect Authentication Response.
     */
    readonly excludeSessionStateFromAuthResponse?: pulumi.Input<boolean>;
    /**
     * Allow to include all roles mappings in the access token.
     */
    readonly fullScopeAllowed?: pulumi.Input<boolean>;
    /**
     * When `true`, the OAuth2 Implicit Grant will be enabled for this client. Defaults to `false`.
     */
    readonly implicitFlowEnabled?: pulumi.Input<boolean>;
    /**
     * The client login theme. This will override the default theme for the realm.
     */
    readonly loginTheme?: pulumi.Input<string>;
    /**
     * The display name of this client in the GUI.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The challenge method to use for Proof Key for Code Exchange. Can be either `plain` or `S256` or set to empty value ``.
     */
    readonly pkceCodeChallengeMethod?: pulumi.Input<string>;
    /**
     * The realm this client is attached to.
     */
    readonly realmId?: pulumi.Input<string>;
    /**
     * (Computed) When authorization is enabled for this client, this attribute is the unique ID for the client (the same value as the `.id` attribute).
     */
    readonly resourceServerId?: pulumi.Input<string>;
    /**
     * When specified, this URL is prepended to any relative URLs found within `validRedirectUris`, `webOrigins`, and `adminUrl`. NOTE: Due to limitations in the Keycloak API, when the `rootUrl` attribute is used, the `validRedirectUris`, `webOrigins`, and `adminUrl` attributes will be required.
     */
    readonly rootUrl?: pulumi.Input<string>;
    /**
     * (Computed) When service accounts are enabled for this client, this attribute is the unique ID for the Keycloak user that represents this service account.
     */
    readonly serviceAccountUserId?: pulumi.Input<string>;
    /**
     * When `true`, the OAuth2 Client Credentials grant will be enabled for this client. Defaults to `false`.
     */
    readonly serviceAccountsEnabled?: pulumi.Input<boolean>;
    /**
     * When `true`, the OAuth2 Authorization Code Grant will be enabled for this client. Defaults to `false`.
     */
    readonly standardFlowEnabled?: pulumi.Input<boolean>;
    /**
     * A list of valid URIs a browser is permitted to redirect to after a successful login or logout. Simple
     * wildcards in the form of an asterisk can be used here. This attribute must be set if either `standardFlowEnabled` or `implicitFlowEnabled`
     * is set to `true`.
     */
    readonly validRedirectUris?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A list of allowed CORS origins. `+` can be used to permit all valid redirect URIs, and `*` can be used to permit all origins.
     */
    readonly webOrigins?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a Client resource.
 */
export interface ClientArgs {
    /**
     * The amount of time in seconds before an access token expires. This will override the default for the realm.
     */
    readonly accessTokenLifespan?: pulumi.Input<string>;
    /**
     * Specifies the type of client, which can be one of the following:
     */
    readonly accessType: pulumi.Input<string>;
    /**
     * URL to the admin interface of the client.
     */
    readonly adminUrl?: pulumi.Input<string>;
    /**
     * Override realm authentication flow bindings
     */
    readonly authenticationFlowBindingOverrides?: pulumi.Input<inputs.openid.ClientAuthenticationFlowBindingOverrides>;
    /**
     * When this block is present, fine-grained authorization will be enabled for this client. The client's `accessType` must be `CONFIDENTIAL`, and `serviceAccountsEnabled` must be `true`. This block has the following arguments:
     */
    readonly authorization?: pulumi.Input<inputs.openid.ClientAuthorization>;
    /**
     * Default URL to use when the auth server needs to redirect or link back to the client.
     */
    readonly baseUrl?: pulumi.Input<string>;
    /**
     * The Client ID for this client, referenced in the URI during authentication and in issued tokens.
     */
    readonly clientId: pulumi.Input<string>;
    /**
     * The secret for clients with an `accessType` of `CONFIDENTIAL` or `BEARER-ONLY`. This value is sensitive and should be treated with the same care as a password. If omitted, this will be generated by Keycloak.
     */
    readonly clientSecret?: pulumi.Input<string>;
    /**
     * When `true`, users have to consent to client access.
     */
    readonly consentRequired?: pulumi.Input<boolean>;
    /**
     * The description of this client in the GUI.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * When `true`, the OAuth2 Resource Owner Password Grant will be enabled for this client. Defaults to `false`.
     */
    readonly directAccessGrantsEnabled?: pulumi.Input<boolean>;
    /**
     * When `false`, this client will not be able to initiate a login or obtain access tokens. Defaults to `true`.
     */
    readonly enabled?: pulumi.Input<boolean>;
    /**
     * When `true`, the parameter `sessionState` will not be included in OpenID Connect Authentication Response.
     */
    readonly excludeSessionStateFromAuthResponse?: pulumi.Input<boolean>;
    /**
     * Allow to include all roles mappings in the access token.
     */
    readonly fullScopeAllowed?: pulumi.Input<boolean>;
    /**
     * When `true`, the OAuth2 Implicit Grant will be enabled for this client. Defaults to `false`.
     */
    readonly implicitFlowEnabled?: pulumi.Input<boolean>;
    /**
     * The client login theme. This will override the default theme for the realm.
     */
    readonly loginTheme?: pulumi.Input<string>;
    /**
     * The display name of this client in the GUI.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The challenge method to use for Proof Key for Code Exchange. Can be either `plain` or `S256` or set to empty value ``.
     */
    readonly pkceCodeChallengeMethod?: pulumi.Input<string>;
    /**
     * The realm this client is attached to.
     */
    readonly realmId: pulumi.Input<string>;
    /**
     * When specified, this URL is prepended to any relative URLs found within `validRedirectUris`, `webOrigins`, and `adminUrl`. NOTE: Due to limitations in the Keycloak API, when the `rootUrl` attribute is used, the `validRedirectUris`, `webOrigins`, and `adminUrl` attributes will be required.
     */
    readonly rootUrl?: pulumi.Input<string>;
    /**
     * When `true`, the OAuth2 Client Credentials grant will be enabled for this client. Defaults to `false`.
     */
    readonly serviceAccountsEnabled?: pulumi.Input<boolean>;
    /**
     * When `true`, the OAuth2 Authorization Code Grant will be enabled for this client. Defaults to `false`.
     */
    readonly standardFlowEnabled?: pulumi.Input<boolean>;
    /**
     * A list of valid URIs a browser is permitted to redirect to after a successful login or logout. Simple
     * wildcards in the form of an asterisk can be used here. This attribute must be set if either `standardFlowEnabled` or `implicitFlowEnabled`
     * is set to `true`.
     */
    readonly validRedirectUris?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A list of allowed CORS origins. `+` can be used to permit all valid redirect URIs, and `*` can be used to permit all origins.
     */
    readonly webOrigins?: pulumi.Input<pulumi.Input<string>[]>;
}
