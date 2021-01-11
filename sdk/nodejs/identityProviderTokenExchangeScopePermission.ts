// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * ## Import
 *
 * This resource can be imported using the format `{{realm_id}}/{{provider_alias}}`, where `provider_alias` is the alias that you assign to the identity provider upon creation. Examplebash
 *
 * ```sh
 *  $ pulumi import keycloak:index/identityProviderTokenExchangeScopePermission:IdentityProviderTokenExchangeScopePermission oidc_idp_permission my-realm/myIdp
 * ```
 */
export class IdentityProviderTokenExchangeScopePermission extends pulumi.CustomResource {
    /**
     * Get an existing IdentityProviderTokenExchangeScopePermission resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IdentityProviderTokenExchangeScopePermissionState, opts?: pulumi.CustomResourceOptions): IdentityProviderTokenExchangeScopePermission {
        return new IdentityProviderTokenExchangeScopePermission(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'keycloak:index/identityProviderTokenExchangeScopePermission:IdentityProviderTokenExchangeScopePermission';

    /**
     * Returns true if the given object is an instance of IdentityProviderTokenExchangeScopePermission.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IdentityProviderTokenExchangeScopePermission {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IdentityProviderTokenExchangeScopePermission.__pulumiType;
    }

    /**
     * (Computed) Resource ID representing the identity provider, this automatically created by keycloak.
     */
    public /*out*/ readonly authorizationIdpResourceId!: pulumi.Output<string>;
    /**
     * (Computed) Resource server ID representing the realm management client on which this permission is managed.
     */
    public /*out*/ readonly authorizationResourceServerId!: pulumi.Output<string>;
    /**
     * (Computed) Permission ID representing the Permission with scope 'Token Exchange' and the resource 'authorization_idp_resource_id', this automatically created by keycloak, the policy ID will be set on this permission.
     */
    public /*out*/ readonly authorizationTokenExchangeScopePermissionId!: pulumi.Output<string>;
    /**
     * A list of IDs of the clients for which a policy will be created and set on scope based token exchange permission.
     */
    public readonly clients!: pulumi.Output<string[]>;
    /**
     * (Computed) Policy ID that will be set on the scope based token exchange permission automatically created by enabling permissions on the reference identity provider.
     */
    public /*out*/ readonly policyId!: pulumi.Output<string>;
    /**
     * Defaults to "client" This is also the only value policy type supported by this provider.
     */
    public readonly policyType!: pulumi.Output<string | undefined>;
    /**
     * Alias of the identity provider.
     */
    public readonly providerAlias!: pulumi.Output<string>;
    /**
     * The realm that the identity provider exists in.
     */
    public readonly realmId!: pulumi.Output<string>;

    /**
     * Create a IdentityProviderTokenExchangeScopePermission resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IdentityProviderTokenExchangeScopePermissionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IdentityProviderTokenExchangeScopePermissionArgs | IdentityProviderTokenExchangeScopePermissionState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as IdentityProviderTokenExchangeScopePermissionState | undefined;
            inputs["authorizationIdpResourceId"] = state ? state.authorizationIdpResourceId : undefined;
            inputs["authorizationResourceServerId"] = state ? state.authorizationResourceServerId : undefined;
            inputs["authorizationTokenExchangeScopePermissionId"] = state ? state.authorizationTokenExchangeScopePermissionId : undefined;
            inputs["clients"] = state ? state.clients : undefined;
            inputs["policyId"] = state ? state.policyId : undefined;
            inputs["policyType"] = state ? state.policyType : undefined;
            inputs["providerAlias"] = state ? state.providerAlias : undefined;
            inputs["realmId"] = state ? state.realmId : undefined;
        } else {
            const args = argsOrState as IdentityProviderTokenExchangeScopePermissionArgs | undefined;
            if ((!args || args.clients === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'clients'");
            }
            if ((!args || args.providerAlias === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'providerAlias'");
            }
            if ((!args || args.realmId === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'realmId'");
            }
            inputs["clients"] = args ? args.clients : undefined;
            inputs["policyType"] = args ? args.policyType : undefined;
            inputs["providerAlias"] = args ? args.providerAlias : undefined;
            inputs["realmId"] = args ? args.realmId : undefined;
            inputs["authorizationIdpResourceId"] = undefined /*out*/;
            inputs["authorizationResourceServerId"] = undefined /*out*/;
            inputs["authorizationTokenExchangeScopePermissionId"] = undefined /*out*/;
            inputs["policyId"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(IdentityProviderTokenExchangeScopePermission.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering IdentityProviderTokenExchangeScopePermission resources.
 */
export interface IdentityProviderTokenExchangeScopePermissionState {
    /**
     * (Computed) Resource ID representing the identity provider, this automatically created by keycloak.
     */
    readonly authorizationIdpResourceId?: pulumi.Input<string>;
    /**
     * (Computed) Resource server ID representing the realm management client on which this permission is managed.
     */
    readonly authorizationResourceServerId?: pulumi.Input<string>;
    /**
     * (Computed) Permission ID representing the Permission with scope 'Token Exchange' and the resource 'authorization_idp_resource_id', this automatically created by keycloak, the policy ID will be set on this permission.
     */
    readonly authorizationTokenExchangeScopePermissionId?: pulumi.Input<string>;
    /**
     * A list of IDs of the clients for which a policy will be created and set on scope based token exchange permission.
     */
    readonly clients?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * (Computed) Policy ID that will be set on the scope based token exchange permission automatically created by enabling permissions on the reference identity provider.
     */
    readonly policyId?: pulumi.Input<string>;
    /**
     * Defaults to "client" This is also the only value policy type supported by this provider.
     */
    readonly policyType?: pulumi.Input<string>;
    /**
     * Alias of the identity provider.
     */
    readonly providerAlias?: pulumi.Input<string>;
    /**
     * The realm that the identity provider exists in.
     */
    readonly realmId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a IdentityProviderTokenExchangeScopePermission resource.
 */
export interface IdentityProviderTokenExchangeScopePermissionArgs {
    /**
     * A list of IDs of the clients for which a policy will be created and set on scope based token exchange permission.
     */
    readonly clients: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Defaults to "client" This is also the only value policy type supported by this provider.
     */
    readonly policyType?: pulumi.Input<string>;
    /**
     * Alias of the identity provider.
     */
    readonly providerAlias: pulumi.Input<string>;
    /**
     * The realm that the identity provider exists in.
     */
    readonly realmId: pulumi.Input<string>;
}
