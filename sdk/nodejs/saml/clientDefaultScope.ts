// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * ## Import
 *
 * This resource does not support import. Instead of importing, feel free to create this resource as if it did not already exist on the server.
 */
export class ClientDefaultScope extends pulumi.CustomResource {
    /**
     * Get an existing ClientDefaultScope resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ClientDefaultScopeState, opts?: pulumi.CustomResourceOptions): ClientDefaultScope {
        return new ClientDefaultScope(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'keycloak:saml/clientDefaultScope:ClientDefaultScope';

    /**
     * Returns true if the given object is an instance of ClientDefaultScope.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ClientDefaultScope {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ClientDefaultScope.__pulumiType;
    }

    /**
     * The ID of the client to attach default scopes to. Note that this is the unique ID of the client generated by Keycloak.
     */
    public readonly clientId!: pulumi.Output<string>;
    /**
     * An array of client scope names to attach to this client.
     */
    public readonly defaultScopes!: pulumi.Output<string[]>;
    /**
     * The realm this client and scopes exists in.
     */
    public readonly realmId!: pulumi.Output<string>;

    /**
     * Create a ClientDefaultScope resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ClientDefaultScopeArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ClientDefaultScopeArgs | ClientDefaultScopeState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as ClientDefaultScopeState | undefined;
            inputs["clientId"] = state ? state.clientId : undefined;
            inputs["defaultScopes"] = state ? state.defaultScopes : undefined;
            inputs["realmId"] = state ? state.realmId : undefined;
        } else {
            const args = argsOrState as ClientDefaultScopeArgs | undefined;
            if (!args || args.clientId === undefined) {
                throw new Error("Missing required property 'clientId'");
            }
            if (!args || args.defaultScopes === undefined) {
                throw new Error("Missing required property 'defaultScopes'");
            }
            if (!args || args.realmId === undefined) {
                throw new Error("Missing required property 'realmId'");
            }
            inputs["clientId"] = args ? args.clientId : undefined;
            inputs["defaultScopes"] = args ? args.defaultScopes : undefined;
            inputs["realmId"] = args ? args.realmId : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(ClientDefaultScope.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering ClientDefaultScope resources.
 */
export interface ClientDefaultScopeState {
    /**
     * The ID of the client to attach default scopes to. Note that this is the unique ID of the client generated by Keycloak.
     */
    readonly clientId?: pulumi.Input<string>;
    /**
     * An array of client scope names to attach to this client.
     */
    readonly defaultScopes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The realm this client and scopes exists in.
     */
    readonly realmId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ClientDefaultScope resource.
 */
export interface ClientDefaultScopeArgs {
    /**
     * The ID of the client to attach default scopes to. Note that this is the unique ID of the client generated by Keycloak.
     */
    readonly clientId: pulumi.Input<string>;
    /**
     * An array of client scope names to attach to this client.
     */
    readonly defaultScopes: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The realm this client and scopes exists in.
     */
    readonly realmId: pulumi.Input<string>;
}
