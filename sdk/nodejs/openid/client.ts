// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "../types";
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
 *     extraConfig: {
 *         key1: "value1",
 *         key2: "value2",
 *     },
 * });
 * ```
 *
 * ## Import
 *
 * Clients can be imported using the format `{{realm_id}}/{{client_keycloak_id}}`, where `client_keycloak_id` is the unique ID that Keycloak assigns to the client upon creation. This value can be found in the URI when editing this client in the GUI, and is typically a GUID. Examplebash
 *
 * ```sh
 *  $ pulumi import keycloak:openid/client:Client openid_client my-realm/dcbc4c73-e478-4928-ae2e-d5e420223352
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
     * Specifying whether a "revokeOfflineAccess" event is included in the Logout Token when the Backchannel Logout URL is used. Keycloak will revoke offline sessions when receiving a Logout Token with this event.
     */
    public readonly backchannelLogoutRevokeOfflineSessions!: pulumi.Output<boolean | undefined>;
    /**
     * When `true`, a sid (session ID) claim will be included in the logout token when the backchannel logout URL is used. Defaults to `true`.
     */
    public readonly backchannelLogoutSessionRequired!: pulumi.Output<boolean | undefined>;
    /**
     * The URL that will cause the client to log itself out when a logout request is sent to this realm. If omitted, no logout request will be sent to the client is this case.
     */
    public readonly backchannelLogoutUrl!: pulumi.Output<string | undefined>;
    /**
     * Default URL to use when the auth server needs to redirect or link back to the client.
     */
    public readonly baseUrl!: pulumi.Output<string | undefined>;
    /**
     * The Client ID for this client, referenced in the URI during authentication and in issued tokens.
     */
    public readonly clientId!: pulumi.Output<string>;
    /**
     * Time a client session is allowed to be idle before it expires. Tokens are invalidated when a client session is expired. If not set it uses the standard SSO Session Idle value.
     */
    public readonly clientOfflineSessionIdleTimeout!: pulumi.Output<string | undefined>;
    /**
     * Max time before a client session is expired. Tokens are invalidated when a client session is expired. If not set, it uses the standard SSO Session Max value.
     */
    public readonly clientOfflineSessionMaxLifespan!: pulumi.Output<string | undefined>;
    /**
     * The secret for clients with an `accessType` of `CONFIDENTIAL` or `BEARER-ONLY`. This value is sensitive and should be treated with the same care as a password. If omitted, this will be generated by Keycloak.
     */
    public readonly clientSecret!: pulumi.Output<string>;
    /**
     * Time a client offline session is allowed to be idle before it expires. Offline tokens are invalidated when a client offline session is expired. If not set it uses the Offline Session Idle value.
     */
    public readonly clientSessionIdleTimeout!: pulumi.Output<string | undefined>;
    /**
     * Max time before a client offline session is expired. Offline tokens are invalidated when a client offline session is expired. If not set, it uses the Offline Session Max value.
     */
    public readonly clientSessionMaxLifespan!: pulumi.Output<string | undefined>;
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
    public readonly extraConfig!: pulumi.Output<{[key: string]: any} | undefined>;
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
     * If this is `true`, a refreshToken will be created and added to the token response. If this is `false` then no refreshToken will be generated.  Defaults to `true`.
     */
    public readonly useRefreshTokens!: pulumi.Output<boolean | undefined>;
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
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ClientState | undefined;
            inputs["accessTokenLifespan"] = state ? state.accessTokenLifespan : undefined;
            inputs["accessType"] = state ? state.accessType : undefined;
            inputs["adminUrl"] = state ? state.adminUrl : undefined;
            inputs["authenticationFlowBindingOverrides"] = state ? state.authenticationFlowBindingOverrides : undefined;
            inputs["authorization"] = state ? state.authorization : undefined;
            inputs["backchannelLogoutRevokeOfflineSessions"] = state ? state.backchannelLogoutRevokeOfflineSessions : undefined;
            inputs["backchannelLogoutSessionRequired"] = state ? state.backchannelLogoutSessionRequired : undefined;
            inputs["backchannelLogoutUrl"] = state ? state.backchannelLogoutUrl : undefined;
            inputs["baseUrl"] = state ? state.baseUrl : undefined;
            inputs["clientId"] = state ? state.clientId : undefined;
            inputs["clientOfflineSessionIdleTimeout"] = state ? state.clientOfflineSessionIdleTimeout : undefined;
            inputs["clientOfflineSessionMaxLifespan"] = state ? state.clientOfflineSessionMaxLifespan : undefined;
            inputs["clientSecret"] = state ? state.clientSecret : undefined;
            inputs["clientSessionIdleTimeout"] = state ? state.clientSessionIdleTimeout : undefined;
            inputs["clientSessionMaxLifespan"] = state ? state.clientSessionMaxLifespan : undefined;
            inputs["consentRequired"] = state ? state.consentRequired : undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["directAccessGrantsEnabled"] = state ? state.directAccessGrantsEnabled : undefined;
            inputs["enabled"] = state ? state.enabled : undefined;
            inputs["excludeSessionStateFromAuthResponse"] = state ? state.excludeSessionStateFromAuthResponse : undefined;
            inputs["extraConfig"] = state ? state.extraConfig : undefined;
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
            inputs["useRefreshTokens"] = state ? state.useRefreshTokens : undefined;
            inputs["validRedirectUris"] = state ? state.validRedirectUris : undefined;
            inputs["webOrigins"] = state ? state.webOrigins : undefined;
        } else {
            const args = argsOrState as ClientArgs | undefined;
            if ((!args || args.accessType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accessType'");
            }
            if ((!args || args.clientId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clientId'");
            }
            if ((!args || args.realmId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'realmId'");
            }
            inputs["accessTokenLifespan"] = args ? args.accessTokenLifespan : undefined;
            inputs["accessType"] = args ? args.accessType : undefined;
            inputs["adminUrl"] = args ? args.adminUrl : undefined;
            inputs["authenticationFlowBindingOverrides"] = args ? args.authenticationFlowBindingOverrides : undefined;
            inputs["authorization"] = args ? args.authorization : undefined;
            inputs["backchannelLogoutRevokeOfflineSessions"] = args ? args.backchannelLogoutRevokeOfflineSessions : undefined;
            inputs["backchannelLogoutSessionRequired"] = args ? args.backchannelLogoutSessionRequired : undefined;
            inputs["backchannelLogoutUrl"] = args ? args.backchannelLogoutUrl : undefined;
            inputs["baseUrl"] = args ? args.baseUrl : undefined;
            inputs["clientId"] = args ? args.clientId : undefined;
            inputs["clientOfflineSessionIdleTimeout"] = args ? args.clientOfflineSessionIdleTimeout : undefined;
            inputs["clientOfflineSessionMaxLifespan"] = args ? args.clientOfflineSessionMaxLifespan : undefined;
            inputs["clientSecret"] = args ? args.clientSecret : undefined;
            inputs["clientSessionIdleTimeout"] = args ? args.clientSessionIdleTimeout : undefined;
            inputs["clientSessionMaxLifespan"] = args ? args.clientSessionMaxLifespan : undefined;
            inputs["consentRequired"] = args ? args.consentRequired : undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["directAccessGrantsEnabled"] = args ? args.directAccessGrantsEnabled : undefined;
            inputs["enabled"] = args ? args.enabled : undefined;
            inputs["excludeSessionStateFromAuthResponse"] = args ? args.excludeSessionStateFromAuthResponse : undefined;
            inputs["extraConfig"] = args ? args.extraConfig : undefined;
            inputs["fullScopeAllowed"] = args ? args.fullScopeAllowed : undefined;
            inputs["implicitFlowEnabled"] = args ? args.implicitFlowEnabled : undefined;
            inputs["loginTheme"] = args ? args.loginTheme : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["pkceCodeChallengeMethod"] = args ? args.pkceCodeChallengeMethod : undefined;
            inputs["realmId"] = args ? args.realmId : undefined;
            inputs["rootUrl"] = args ? args.rootUrl : undefined;
            inputs["serviceAccountsEnabled"] = args ? args.serviceAccountsEnabled : undefined;
            inputs["standardFlowEnabled"] = args ? args.standardFlowEnabled : undefined;
            inputs["useRefreshTokens"] = args ? args.useRefreshTokens : undefined;
            inputs["validRedirectUris"] = args ? args.validRedirectUris : undefined;
            inputs["webOrigins"] = args ? args.webOrigins : undefined;
            inputs["resourceServerId"] = undefined /*out*/;
            inputs["serviceAccountUserId"] = undefined /*out*/;
        }
        if (!opts.version) {
            opts = pulumi.mergeOptions(opts, { version: utilities.getVersion()});
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
    accessTokenLifespan?: pulumi.Input<string>;
    /**
     * Specifies the type of client, which can be one of the following:
     */
    accessType?: pulumi.Input<string>;
    /**
     * URL to the admin interface of the client.
     */
    adminUrl?: pulumi.Input<string>;
    /**
     * Override realm authentication flow bindings
     */
    authenticationFlowBindingOverrides?: pulumi.Input<inputs.openid.ClientAuthenticationFlowBindingOverrides>;
    /**
     * When this block is present, fine-grained authorization will be enabled for this client. The client's `accessType` must be `CONFIDENTIAL`, and `serviceAccountsEnabled` must be `true`. This block has the following arguments:
     */
    authorization?: pulumi.Input<inputs.openid.ClientAuthorization>;
    /**
     * Specifying whether a "revokeOfflineAccess" event is included in the Logout Token when the Backchannel Logout URL is used. Keycloak will revoke offline sessions when receiving a Logout Token with this event.
     */
    backchannelLogoutRevokeOfflineSessions?: pulumi.Input<boolean>;
    /**
     * When `true`, a sid (session ID) claim will be included in the logout token when the backchannel logout URL is used. Defaults to `true`.
     */
    backchannelLogoutSessionRequired?: pulumi.Input<boolean>;
    /**
     * The URL that will cause the client to log itself out when a logout request is sent to this realm. If omitted, no logout request will be sent to the client is this case.
     */
    backchannelLogoutUrl?: pulumi.Input<string>;
    /**
     * Default URL to use when the auth server needs to redirect or link back to the client.
     */
    baseUrl?: pulumi.Input<string>;
    /**
     * The Client ID for this client, referenced in the URI during authentication and in issued tokens.
     */
    clientId?: pulumi.Input<string>;
    /**
     * Time a client session is allowed to be idle before it expires. Tokens are invalidated when a client session is expired. If not set it uses the standard SSO Session Idle value.
     */
    clientOfflineSessionIdleTimeout?: pulumi.Input<string>;
    /**
     * Max time before a client session is expired. Tokens are invalidated when a client session is expired. If not set, it uses the standard SSO Session Max value.
     */
    clientOfflineSessionMaxLifespan?: pulumi.Input<string>;
    /**
     * The secret for clients with an `accessType` of `CONFIDENTIAL` or `BEARER-ONLY`. This value is sensitive and should be treated with the same care as a password. If omitted, this will be generated by Keycloak.
     */
    clientSecret?: pulumi.Input<string>;
    /**
     * Time a client offline session is allowed to be idle before it expires. Offline tokens are invalidated when a client offline session is expired. If not set it uses the Offline Session Idle value.
     */
    clientSessionIdleTimeout?: pulumi.Input<string>;
    /**
     * Max time before a client offline session is expired. Offline tokens are invalidated when a client offline session is expired. If not set, it uses the Offline Session Max value.
     */
    clientSessionMaxLifespan?: pulumi.Input<string>;
    /**
     * When `true`, users have to consent to client access.
     */
    consentRequired?: pulumi.Input<boolean>;
    /**
     * The description of this client in the GUI.
     */
    description?: pulumi.Input<string>;
    /**
     * When `true`, the OAuth2 Resource Owner Password Grant will be enabled for this client. Defaults to `false`.
     */
    directAccessGrantsEnabled?: pulumi.Input<boolean>;
    /**
     * When `false`, this client will not be able to initiate a login or obtain access tokens. Defaults to `true`.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * When `true`, the parameter `sessionState` will not be included in OpenID Connect Authentication Response.
     */
    excludeSessionStateFromAuthResponse?: pulumi.Input<boolean>;
    extraConfig?: pulumi.Input<{[key: string]: any}>;
    /**
     * Allow to include all roles mappings in the access token.
     */
    fullScopeAllowed?: pulumi.Input<boolean>;
    /**
     * When `true`, the OAuth2 Implicit Grant will be enabled for this client. Defaults to `false`.
     */
    implicitFlowEnabled?: pulumi.Input<boolean>;
    /**
     * The client login theme. This will override the default theme for the realm.
     */
    loginTheme?: pulumi.Input<string>;
    /**
     * The display name of this client in the GUI.
     */
    name?: pulumi.Input<string>;
    /**
     * The challenge method to use for Proof Key for Code Exchange. Can be either `plain` or `S256` or set to empty value ``.
     */
    pkceCodeChallengeMethod?: pulumi.Input<string>;
    /**
     * The realm this client is attached to.
     */
    realmId?: pulumi.Input<string>;
    /**
     * (Computed) When authorization is enabled for this client, this attribute is the unique ID for the client (the same value as the `.id` attribute).
     */
    resourceServerId?: pulumi.Input<string>;
    /**
     * When specified, this URL is prepended to any relative URLs found within `validRedirectUris`, `webOrigins`, and `adminUrl`. NOTE: Due to limitations in the Keycloak API, when the `rootUrl` attribute is used, the `validRedirectUris`, `webOrigins`, and `adminUrl` attributes will be required.
     */
    rootUrl?: pulumi.Input<string>;
    /**
     * (Computed) When service accounts are enabled for this client, this attribute is the unique ID for the Keycloak user that represents this service account.
     */
    serviceAccountUserId?: pulumi.Input<string>;
    /**
     * When `true`, the OAuth2 Client Credentials grant will be enabled for this client. Defaults to `false`.
     */
    serviceAccountsEnabled?: pulumi.Input<boolean>;
    /**
     * When `true`, the OAuth2 Authorization Code Grant will be enabled for this client. Defaults to `false`.
     */
    standardFlowEnabled?: pulumi.Input<boolean>;
    /**
     * If this is `true`, a refreshToken will be created and added to the token response. If this is `false` then no refreshToken will be generated.  Defaults to `true`.
     */
    useRefreshTokens?: pulumi.Input<boolean>;
    /**
     * A list of valid URIs a browser is permitted to redirect to after a successful login or logout. Simple
     * wildcards in the form of an asterisk can be used here. This attribute must be set if either `standardFlowEnabled` or `implicitFlowEnabled`
     * is set to `true`.
     */
    validRedirectUris?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A list of allowed CORS origins. `+` can be used to permit all valid redirect URIs, and `*` can be used to permit all origins.
     */
    webOrigins?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a Client resource.
 */
export interface ClientArgs {
    /**
     * The amount of time in seconds before an access token expires. This will override the default for the realm.
     */
    accessTokenLifespan?: pulumi.Input<string>;
    /**
     * Specifies the type of client, which can be one of the following:
     */
    accessType: pulumi.Input<string>;
    /**
     * URL to the admin interface of the client.
     */
    adminUrl?: pulumi.Input<string>;
    /**
     * Override realm authentication flow bindings
     */
    authenticationFlowBindingOverrides?: pulumi.Input<inputs.openid.ClientAuthenticationFlowBindingOverrides>;
    /**
     * When this block is present, fine-grained authorization will be enabled for this client. The client's `accessType` must be `CONFIDENTIAL`, and `serviceAccountsEnabled` must be `true`. This block has the following arguments:
     */
    authorization?: pulumi.Input<inputs.openid.ClientAuthorization>;
    /**
     * Specifying whether a "revokeOfflineAccess" event is included in the Logout Token when the Backchannel Logout URL is used. Keycloak will revoke offline sessions when receiving a Logout Token with this event.
     */
    backchannelLogoutRevokeOfflineSessions?: pulumi.Input<boolean>;
    /**
     * When `true`, a sid (session ID) claim will be included in the logout token when the backchannel logout URL is used. Defaults to `true`.
     */
    backchannelLogoutSessionRequired?: pulumi.Input<boolean>;
    /**
     * The URL that will cause the client to log itself out when a logout request is sent to this realm. If omitted, no logout request will be sent to the client is this case.
     */
    backchannelLogoutUrl?: pulumi.Input<string>;
    /**
     * Default URL to use when the auth server needs to redirect or link back to the client.
     */
    baseUrl?: pulumi.Input<string>;
    /**
     * The Client ID for this client, referenced in the URI during authentication and in issued tokens.
     */
    clientId: pulumi.Input<string>;
    /**
     * Time a client session is allowed to be idle before it expires. Tokens are invalidated when a client session is expired. If not set it uses the standard SSO Session Idle value.
     */
    clientOfflineSessionIdleTimeout?: pulumi.Input<string>;
    /**
     * Max time before a client session is expired. Tokens are invalidated when a client session is expired. If not set, it uses the standard SSO Session Max value.
     */
    clientOfflineSessionMaxLifespan?: pulumi.Input<string>;
    /**
     * The secret for clients with an `accessType` of `CONFIDENTIAL` or `BEARER-ONLY`. This value is sensitive and should be treated with the same care as a password. If omitted, this will be generated by Keycloak.
     */
    clientSecret?: pulumi.Input<string>;
    /**
     * Time a client offline session is allowed to be idle before it expires. Offline tokens are invalidated when a client offline session is expired. If not set it uses the Offline Session Idle value.
     */
    clientSessionIdleTimeout?: pulumi.Input<string>;
    /**
     * Max time before a client offline session is expired. Offline tokens are invalidated when a client offline session is expired. If not set, it uses the Offline Session Max value.
     */
    clientSessionMaxLifespan?: pulumi.Input<string>;
    /**
     * When `true`, users have to consent to client access.
     */
    consentRequired?: pulumi.Input<boolean>;
    /**
     * The description of this client in the GUI.
     */
    description?: pulumi.Input<string>;
    /**
     * When `true`, the OAuth2 Resource Owner Password Grant will be enabled for this client. Defaults to `false`.
     */
    directAccessGrantsEnabled?: pulumi.Input<boolean>;
    /**
     * When `false`, this client will not be able to initiate a login or obtain access tokens. Defaults to `true`.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * When `true`, the parameter `sessionState` will not be included in OpenID Connect Authentication Response.
     */
    excludeSessionStateFromAuthResponse?: pulumi.Input<boolean>;
    extraConfig?: pulumi.Input<{[key: string]: any}>;
    /**
     * Allow to include all roles mappings in the access token.
     */
    fullScopeAllowed?: pulumi.Input<boolean>;
    /**
     * When `true`, the OAuth2 Implicit Grant will be enabled for this client. Defaults to `false`.
     */
    implicitFlowEnabled?: pulumi.Input<boolean>;
    /**
     * The client login theme. This will override the default theme for the realm.
     */
    loginTheme?: pulumi.Input<string>;
    /**
     * The display name of this client in the GUI.
     */
    name?: pulumi.Input<string>;
    /**
     * The challenge method to use for Proof Key for Code Exchange. Can be either `plain` or `S256` or set to empty value ``.
     */
    pkceCodeChallengeMethod?: pulumi.Input<string>;
    /**
     * The realm this client is attached to.
     */
    realmId: pulumi.Input<string>;
    /**
     * When specified, this URL is prepended to any relative URLs found within `validRedirectUris`, `webOrigins`, and `adminUrl`. NOTE: Due to limitations in the Keycloak API, when the `rootUrl` attribute is used, the `validRedirectUris`, `webOrigins`, and `adminUrl` attributes will be required.
     */
    rootUrl?: pulumi.Input<string>;
    /**
     * When `true`, the OAuth2 Client Credentials grant will be enabled for this client. Defaults to `false`.
     */
    serviceAccountsEnabled?: pulumi.Input<boolean>;
    /**
     * When `true`, the OAuth2 Authorization Code Grant will be enabled for this client. Defaults to `false`.
     */
    standardFlowEnabled?: pulumi.Input<boolean>;
    /**
     * If this is `true`, a refreshToken will be created and added to the token response. If this is `false` then no refreshToken will be generated.  Defaults to `true`.
     */
    useRefreshTokens?: pulumi.Input<boolean>;
    /**
     * A list of valid URIs a browser is permitted to redirect to after a successful login or logout. Simple
     * wildcards in the form of an asterisk can be used here. This attribute must be set if either `standardFlowEnabled` or `implicitFlowEnabled`
     * is set to `true`.
     */
    validRedirectUris?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A list of allowed CORS origins. `+` can be used to permit all valid redirect URIs, and `*` can be used to permit all origins.
     */
    webOrigins?: pulumi.Input<pulumi.Input<string>[]>;
}
