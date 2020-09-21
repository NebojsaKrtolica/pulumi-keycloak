// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Allows for creating and managing SAML Identity Providers within Keycloak.
 *
 * SAML (Security Assertion Markup Language) identity providers allows users to authenticate through a third-party system using the SAML protocol.
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
 * const realmSamlIdentityProvider = new keycloak.saml.IdentityProvider("realmSamlIdentityProvider", {
 *     realm: realm.id,
 *     alias: "my-saml-idp",
 *     singleSignOnServiceUrl: "https://domain.com/adfs/ls/",
 *     singleLogoutServiceUrl: "https://domain.com/adfs/ls/?wa=wsignout1.0",
 *     backchannelSupported: true,
 *     postBindingResponse: true,
 *     postBindingLogout: true,
 *     postBindingAuthnRequest: true,
 *     storeToken: false,
 *     trustEmail: true,
 *     forceAuthn: true,
 * });
 * ```
 */
export class IdentityProvider extends pulumi.CustomResource {
    /**
     * Get an existing IdentityProvider resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IdentityProviderState, opts?: pulumi.CustomResourceOptions): IdentityProvider {
        return new IdentityProvider(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'keycloak:saml/identityProvider:IdentityProvider';

    /**
     * Returns true if the given object is an instance of IdentityProvider.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IdentityProvider {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IdentityProvider.__pulumiType;
    }

    /**
     * When `true`, new users will be able to read stored tokens. This will automatically assign the `broker.read-token` role. Defaults to `false`.
     */
    public readonly addReadTokenRoleOnCreate!: pulumi.Output<boolean | undefined>;
    /**
     * The unique name of identity provider.
     */
    public readonly alias!: pulumi.Output<string>;
    /**
     * Authenticate users by default. Defaults to `false`.
     */
    public readonly authenticateByDefault!: pulumi.Output<boolean | undefined>;
    /**
     * Does the external IDP support back-channel logout ?.
     */
    public readonly backchannelSupported!: pulumi.Output<boolean | undefined>;
    /**
     * The display name for the realm that is shown when logging in to the admin console.
     */
    public readonly displayName!: pulumi.Output<string | undefined>;
    /**
     * When `false`, users and clients will not be able to access this realm. Defaults to `true`.
     */
    public readonly enabled!: pulumi.Output<boolean | undefined>;
    /**
     * Alias of authentication flow, which is triggered after first login with this identity provider. Term 'First Login' means that there is not yet existing Keycloak account linked with the authenticated identity provider account. Defaults to `first broker login`.
     */
    public readonly firstBrokerLoginFlowAlias!: pulumi.Output<string | undefined>;
    /**
     * Indicates whether the identity provider must authenticate the presenter directly rather than rely on a previous security context.
     */
    public readonly forceAuthn!: pulumi.Output<boolean | undefined>;
    /**
     * If hidden, then login with this provider is possible only if requested explicitly, e.g. using the 'kc_idp_hint' parameter.
     */
    public readonly hideOnLoginPage!: pulumi.Output<boolean | undefined>;
    /**
     * Internal Identity Provider Id
     */
    public /*out*/ readonly internalId!: pulumi.Output<string>;
    /**
     * When `true`, users cannot login using this provider, but their existing accounts will be linked when possible. Defaults to `false`.
     */
    public readonly linkOnly!: pulumi.Output<boolean | undefined>;
    /**
     * Specifies the URI reference corresponding to a name identifier format. Defaults to empty.
     */
    public readonly nameIdPolicyFormat!: pulumi.Output<string | undefined>;
    /**
     * Indicates whether the AuthnRequest must be sent using HTTP-POST binding. If false, HTTP-REDIRECT binding will be used.
     */
    public readonly postBindingAuthnRequest!: pulumi.Output<boolean | undefined>;
    /**
     * Indicates whether to respond to requests using HTTP-POST binding. If false, HTTP-REDIRECT binding will be used.
     */
    public readonly postBindingLogout!: pulumi.Output<boolean | undefined>;
    /**
     * Indicates whether to respond to requests using HTTP-POST binding. If false, HTTP-REDIRECT binding will be used..
     */
    public readonly postBindingResponse!: pulumi.Output<boolean | undefined>;
    /**
     * Alias of authentication flow, which is triggered after each login with this identity provider. Useful if you want additional verification of each user authenticated with this identity provider (for example OTP). Leave this empty if you don't want any additional authenticators to be triggered after login with this identity provider. Also note, that authenticator implementations must assume that user is already set in ClientSession as identity provider already set it. Defaults to empty.
     */
    public readonly postBrokerLoginFlowAlias!: pulumi.Output<string | undefined>;
    /**
     * The name of the realm. This is unique across Keycloak.
     */
    public readonly realm!: pulumi.Output<string>;
    /**
     * Signing Algorithm. Defaults to empty.
     */
    public readonly signatureAlgorithm!: pulumi.Output<string | undefined>;
    /**
     * Signing Certificate.
     */
    public readonly signingCertificate!: pulumi.Output<string | undefined>;
    /**
     * The Url that must be used to send logout requests.
     */
    public readonly singleLogoutServiceUrl!: pulumi.Output<string | undefined>;
    /**
     * The Url that must be used to send authentication requests (SAML AuthnRequest).
     */
    public readonly singleSignOnServiceUrl!: pulumi.Output<string>;
    /**
     * When `true`, tokens will be stored after authenticating users. Defaults to `true`.
     */
    public readonly storeToken!: pulumi.Output<boolean | undefined>;
    /**
     * When `true`, email addresses for users in this provider will automatically be verified regardless of the realm's email verification policy. Defaults to `false`.
     */
    public readonly trustEmail!: pulumi.Output<boolean | undefined>;
    /**
     * Enable/disable signature validation of SAML responses.
     */
    public readonly validateSignature!: pulumi.Output<boolean | undefined>;
    /**
     * Indicates whether this service provider expects an encrypted Assertion.
     */
    public readonly wantAssertionsEncrypted!: pulumi.Output<boolean | undefined>;
    /**
     * Indicates whether this service provider expects a signed Assertion.
     */
    public readonly wantAssertionsSigned!: pulumi.Output<boolean | undefined>;
    /**
     * Sign Key Transformer. Defaults to empty.
     */
    public readonly xmlSignKeyInfoKeyNameTransformer!: pulumi.Output<string | undefined>;

    /**
     * Create a IdentityProvider resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IdentityProviderArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IdentityProviderArgs | IdentityProviderState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as IdentityProviderState | undefined;
            inputs["addReadTokenRoleOnCreate"] = state ? state.addReadTokenRoleOnCreate : undefined;
            inputs["alias"] = state ? state.alias : undefined;
            inputs["authenticateByDefault"] = state ? state.authenticateByDefault : undefined;
            inputs["backchannelSupported"] = state ? state.backchannelSupported : undefined;
            inputs["displayName"] = state ? state.displayName : undefined;
            inputs["enabled"] = state ? state.enabled : undefined;
            inputs["firstBrokerLoginFlowAlias"] = state ? state.firstBrokerLoginFlowAlias : undefined;
            inputs["forceAuthn"] = state ? state.forceAuthn : undefined;
            inputs["hideOnLoginPage"] = state ? state.hideOnLoginPage : undefined;
            inputs["internalId"] = state ? state.internalId : undefined;
            inputs["linkOnly"] = state ? state.linkOnly : undefined;
            inputs["nameIdPolicyFormat"] = state ? state.nameIdPolicyFormat : undefined;
            inputs["postBindingAuthnRequest"] = state ? state.postBindingAuthnRequest : undefined;
            inputs["postBindingLogout"] = state ? state.postBindingLogout : undefined;
            inputs["postBindingResponse"] = state ? state.postBindingResponse : undefined;
            inputs["postBrokerLoginFlowAlias"] = state ? state.postBrokerLoginFlowAlias : undefined;
            inputs["realm"] = state ? state.realm : undefined;
            inputs["signatureAlgorithm"] = state ? state.signatureAlgorithm : undefined;
            inputs["signingCertificate"] = state ? state.signingCertificate : undefined;
            inputs["singleLogoutServiceUrl"] = state ? state.singleLogoutServiceUrl : undefined;
            inputs["singleSignOnServiceUrl"] = state ? state.singleSignOnServiceUrl : undefined;
            inputs["storeToken"] = state ? state.storeToken : undefined;
            inputs["trustEmail"] = state ? state.trustEmail : undefined;
            inputs["validateSignature"] = state ? state.validateSignature : undefined;
            inputs["wantAssertionsEncrypted"] = state ? state.wantAssertionsEncrypted : undefined;
            inputs["wantAssertionsSigned"] = state ? state.wantAssertionsSigned : undefined;
            inputs["xmlSignKeyInfoKeyNameTransformer"] = state ? state.xmlSignKeyInfoKeyNameTransformer : undefined;
        } else {
            const args = argsOrState as IdentityProviderArgs | undefined;
            if (!args || args.alias === undefined) {
                throw new Error("Missing required property 'alias'");
            }
            if (!args || args.realm === undefined) {
                throw new Error("Missing required property 'realm'");
            }
            if (!args || args.singleSignOnServiceUrl === undefined) {
                throw new Error("Missing required property 'singleSignOnServiceUrl'");
            }
            inputs["addReadTokenRoleOnCreate"] = args ? args.addReadTokenRoleOnCreate : undefined;
            inputs["alias"] = args ? args.alias : undefined;
            inputs["authenticateByDefault"] = args ? args.authenticateByDefault : undefined;
            inputs["backchannelSupported"] = args ? args.backchannelSupported : undefined;
            inputs["displayName"] = args ? args.displayName : undefined;
            inputs["enabled"] = args ? args.enabled : undefined;
            inputs["firstBrokerLoginFlowAlias"] = args ? args.firstBrokerLoginFlowAlias : undefined;
            inputs["forceAuthn"] = args ? args.forceAuthn : undefined;
            inputs["hideOnLoginPage"] = args ? args.hideOnLoginPage : undefined;
            inputs["linkOnly"] = args ? args.linkOnly : undefined;
            inputs["nameIdPolicyFormat"] = args ? args.nameIdPolicyFormat : undefined;
            inputs["postBindingAuthnRequest"] = args ? args.postBindingAuthnRequest : undefined;
            inputs["postBindingLogout"] = args ? args.postBindingLogout : undefined;
            inputs["postBindingResponse"] = args ? args.postBindingResponse : undefined;
            inputs["postBrokerLoginFlowAlias"] = args ? args.postBrokerLoginFlowAlias : undefined;
            inputs["realm"] = args ? args.realm : undefined;
            inputs["signatureAlgorithm"] = args ? args.signatureAlgorithm : undefined;
            inputs["signingCertificate"] = args ? args.signingCertificate : undefined;
            inputs["singleLogoutServiceUrl"] = args ? args.singleLogoutServiceUrl : undefined;
            inputs["singleSignOnServiceUrl"] = args ? args.singleSignOnServiceUrl : undefined;
            inputs["storeToken"] = args ? args.storeToken : undefined;
            inputs["trustEmail"] = args ? args.trustEmail : undefined;
            inputs["validateSignature"] = args ? args.validateSignature : undefined;
            inputs["wantAssertionsEncrypted"] = args ? args.wantAssertionsEncrypted : undefined;
            inputs["wantAssertionsSigned"] = args ? args.wantAssertionsSigned : undefined;
            inputs["xmlSignKeyInfoKeyNameTransformer"] = args ? args.xmlSignKeyInfoKeyNameTransformer : undefined;
            inputs["internalId"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(IdentityProvider.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering IdentityProvider resources.
 */
export interface IdentityProviderState {
    /**
     * When `true`, new users will be able to read stored tokens. This will automatically assign the `broker.read-token` role. Defaults to `false`.
     */
    readonly addReadTokenRoleOnCreate?: pulumi.Input<boolean>;
    /**
     * The unique name of identity provider.
     */
    readonly alias?: pulumi.Input<string>;
    /**
     * Authenticate users by default. Defaults to `false`.
     */
    readonly authenticateByDefault?: pulumi.Input<boolean>;
    /**
     * Does the external IDP support back-channel logout ?.
     */
    readonly backchannelSupported?: pulumi.Input<boolean>;
    /**
     * The display name for the realm that is shown when logging in to the admin console.
     */
    readonly displayName?: pulumi.Input<string>;
    /**
     * When `false`, users and clients will not be able to access this realm. Defaults to `true`.
     */
    readonly enabled?: pulumi.Input<boolean>;
    /**
     * Alias of authentication flow, which is triggered after first login with this identity provider. Term 'First Login' means that there is not yet existing Keycloak account linked with the authenticated identity provider account. Defaults to `first broker login`.
     */
    readonly firstBrokerLoginFlowAlias?: pulumi.Input<string>;
    /**
     * Indicates whether the identity provider must authenticate the presenter directly rather than rely on a previous security context.
     */
    readonly forceAuthn?: pulumi.Input<boolean>;
    /**
     * If hidden, then login with this provider is possible only if requested explicitly, e.g. using the 'kc_idp_hint' parameter.
     */
    readonly hideOnLoginPage?: pulumi.Input<boolean>;
    /**
     * Internal Identity Provider Id
     */
    readonly internalId?: pulumi.Input<string>;
    /**
     * When `true`, users cannot login using this provider, but their existing accounts will be linked when possible. Defaults to `false`.
     */
    readonly linkOnly?: pulumi.Input<boolean>;
    /**
     * Specifies the URI reference corresponding to a name identifier format. Defaults to empty.
     */
    readonly nameIdPolicyFormat?: pulumi.Input<string>;
    /**
     * Indicates whether the AuthnRequest must be sent using HTTP-POST binding. If false, HTTP-REDIRECT binding will be used.
     */
    readonly postBindingAuthnRequest?: pulumi.Input<boolean>;
    /**
     * Indicates whether to respond to requests using HTTP-POST binding. If false, HTTP-REDIRECT binding will be used.
     */
    readonly postBindingLogout?: pulumi.Input<boolean>;
    /**
     * Indicates whether to respond to requests using HTTP-POST binding. If false, HTTP-REDIRECT binding will be used..
     */
    readonly postBindingResponse?: pulumi.Input<boolean>;
    /**
     * Alias of authentication flow, which is triggered after each login with this identity provider. Useful if you want additional verification of each user authenticated with this identity provider (for example OTP). Leave this empty if you don't want any additional authenticators to be triggered after login with this identity provider. Also note, that authenticator implementations must assume that user is already set in ClientSession as identity provider already set it. Defaults to empty.
     */
    readonly postBrokerLoginFlowAlias?: pulumi.Input<string>;
    /**
     * The name of the realm. This is unique across Keycloak.
     */
    readonly realm?: pulumi.Input<string>;
    /**
     * Signing Algorithm. Defaults to empty.
     */
    readonly signatureAlgorithm?: pulumi.Input<string>;
    /**
     * Signing Certificate.
     */
    readonly signingCertificate?: pulumi.Input<string>;
    /**
     * The Url that must be used to send logout requests.
     */
    readonly singleLogoutServiceUrl?: pulumi.Input<string>;
    /**
     * The Url that must be used to send authentication requests (SAML AuthnRequest).
     */
    readonly singleSignOnServiceUrl?: pulumi.Input<string>;
    /**
     * When `true`, tokens will be stored after authenticating users. Defaults to `true`.
     */
    readonly storeToken?: pulumi.Input<boolean>;
    /**
     * When `true`, email addresses for users in this provider will automatically be verified regardless of the realm's email verification policy. Defaults to `false`.
     */
    readonly trustEmail?: pulumi.Input<boolean>;
    /**
     * Enable/disable signature validation of SAML responses.
     */
    readonly validateSignature?: pulumi.Input<boolean>;
    /**
     * Indicates whether this service provider expects an encrypted Assertion.
     */
    readonly wantAssertionsEncrypted?: pulumi.Input<boolean>;
    /**
     * Indicates whether this service provider expects a signed Assertion.
     */
    readonly wantAssertionsSigned?: pulumi.Input<boolean>;
    /**
     * Sign Key Transformer. Defaults to empty.
     */
    readonly xmlSignKeyInfoKeyNameTransformer?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a IdentityProvider resource.
 */
export interface IdentityProviderArgs {
    /**
     * When `true`, new users will be able to read stored tokens. This will automatically assign the `broker.read-token` role. Defaults to `false`.
     */
    readonly addReadTokenRoleOnCreate?: pulumi.Input<boolean>;
    /**
     * The unique name of identity provider.
     */
    readonly alias: pulumi.Input<string>;
    /**
     * Authenticate users by default. Defaults to `false`.
     */
    readonly authenticateByDefault?: pulumi.Input<boolean>;
    /**
     * Does the external IDP support back-channel logout ?.
     */
    readonly backchannelSupported?: pulumi.Input<boolean>;
    /**
     * The display name for the realm that is shown when logging in to the admin console.
     */
    readonly displayName?: pulumi.Input<string>;
    /**
     * When `false`, users and clients will not be able to access this realm. Defaults to `true`.
     */
    readonly enabled?: pulumi.Input<boolean>;
    /**
     * Alias of authentication flow, which is triggered after first login with this identity provider. Term 'First Login' means that there is not yet existing Keycloak account linked with the authenticated identity provider account. Defaults to `first broker login`.
     */
    readonly firstBrokerLoginFlowAlias?: pulumi.Input<string>;
    /**
     * Indicates whether the identity provider must authenticate the presenter directly rather than rely on a previous security context.
     */
    readonly forceAuthn?: pulumi.Input<boolean>;
    /**
     * If hidden, then login with this provider is possible only if requested explicitly, e.g. using the 'kc_idp_hint' parameter.
     */
    readonly hideOnLoginPage?: pulumi.Input<boolean>;
    /**
     * When `true`, users cannot login using this provider, but their existing accounts will be linked when possible. Defaults to `false`.
     */
    readonly linkOnly?: pulumi.Input<boolean>;
    /**
     * Specifies the URI reference corresponding to a name identifier format. Defaults to empty.
     */
    readonly nameIdPolicyFormat?: pulumi.Input<string>;
    /**
     * Indicates whether the AuthnRequest must be sent using HTTP-POST binding. If false, HTTP-REDIRECT binding will be used.
     */
    readonly postBindingAuthnRequest?: pulumi.Input<boolean>;
    /**
     * Indicates whether to respond to requests using HTTP-POST binding. If false, HTTP-REDIRECT binding will be used.
     */
    readonly postBindingLogout?: pulumi.Input<boolean>;
    /**
     * Indicates whether to respond to requests using HTTP-POST binding. If false, HTTP-REDIRECT binding will be used..
     */
    readonly postBindingResponse?: pulumi.Input<boolean>;
    /**
     * Alias of authentication flow, which is triggered after each login with this identity provider. Useful if you want additional verification of each user authenticated with this identity provider (for example OTP). Leave this empty if you don't want any additional authenticators to be triggered after login with this identity provider. Also note, that authenticator implementations must assume that user is already set in ClientSession as identity provider already set it. Defaults to empty.
     */
    readonly postBrokerLoginFlowAlias?: pulumi.Input<string>;
    /**
     * The name of the realm. This is unique across Keycloak.
     */
    readonly realm: pulumi.Input<string>;
    /**
     * Signing Algorithm. Defaults to empty.
     */
    readonly signatureAlgorithm?: pulumi.Input<string>;
    /**
     * Signing Certificate.
     */
    readonly signingCertificate?: pulumi.Input<string>;
    /**
     * The Url that must be used to send logout requests.
     */
    readonly singleLogoutServiceUrl?: pulumi.Input<string>;
    /**
     * The Url that must be used to send authentication requests (SAML AuthnRequest).
     */
    readonly singleSignOnServiceUrl: pulumi.Input<string>;
    /**
     * When `true`, tokens will be stored after authenticating users. Defaults to `true`.
     */
    readonly storeToken?: pulumi.Input<boolean>;
    /**
     * When `true`, email addresses for users in this provider will automatically be verified regardless of the realm's email verification policy. Defaults to `false`.
     */
    readonly trustEmail?: pulumi.Input<boolean>;
    /**
     * Enable/disable signature validation of SAML responses.
     */
    readonly validateSignature?: pulumi.Input<boolean>;
    /**
     * Indicates whether this service provider expects an encrypted Assertion.
     */
    readonly wantAssertionsEncrypted?: pulumi.Input<boolean>;
    /**
     * Indicates whether this service provider expects a signed Assertion.
     */
    readonly wantAssertionsSigned?: pulumi.Input<boolean>;
    /**
     * Sign Key Transformer. Defaults to empty.
     */
    readonly xmlSignKeyInfoKeyNameTransformer?: pulumi.Input<string>;
}
