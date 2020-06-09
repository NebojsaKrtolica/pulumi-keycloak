// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

export class ClientAuthorizationResource extends pulumi.CustomResource {
    /**
     * Get an existing ClientAuthorizationResource resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ClientAuthorizationResourceState, opts?: pulumi.CustomResourceOptions): ClientAuthorizationResource {
        return new ClientAuthorizationResource(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'keycloak:openid/clientAuthorizationResource:ClientAuthorizationResource';

    /**
     * Returns true if the given object is an instance of ClientAuthorizationResource.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ClientAuthorizationResource {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ClientAuthorizationResource.__pulumiType;
    }

    public readonly attributes!: pulumi.Output<{[key: string]: any} | undefined>;
    public readonly displayName!: pulumi.Output<string | undefined>;
    public readonly iconUri!: pulumi.Output<string | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly ownerManagedAccess!: pulumi.Output<boolean | undefined>;
    public readonly realmId!: pulumi.Output<string>;
    public readonly resourceServerId!: pulumi.Output<string>;
    public readonly scopes!: pulumi.Output<string[] | undefined>;
    public readonly type!: pulumi.Output<string | undefined>;
    public readonly uris!: pulumi.Output<string[] | undefined>;

    /**
     * Create a ClientAuthorizationResource resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ClientAuthorizationResourceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ClientAuthorizationResourceArgs | ClientAuthorizationResourceState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as ClientAuthorizationResourceState | undefined;
            inputs["attributes"] = state ? state.attributes : undefined;
            inputs["displayName"] = state ? state.displayName : undefined;
            inputs["iconUri"] = state ? state.iconUri : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["ownerManagedAccess"] = state ? state.ownerManagedAccess : undefined;
            inputs["realmId"] = state ? state.realmId : undefined;
            inputs["resourceServerId"] = state ? state.resourceServerId : undefined;
            inputs["scopes"] = state ? state.scopes : undefined;
            inputs["type"] = state ? state.type : undefined;
            inputs["uris"] = state ? state.uris : undefined;
        } else {
            const args = argsOrState as ClientAuthorizationResourceArgs | undefined;
            if (!args || args.realmId === undefined) {
                throw new Error("Missing required property 'realmId'");
            }
            if (!args || args.resourceServerId === undefined) {
                throw new Error("Missing required property 'resourceServerId'");
            }
            inputs["attributes"] = args ? args.attributes : undefined;
            inputs["displayName"] = args ? args.displayName : undefined;
            inputs["iconUri"] = args ? args.iconUri : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["ownerManagedAccess"] = args ? args.ownerManagedAccess : undefined;
            inputs["realmId"] = args ? args.realmId : undefined;
            inputs["resourceServerId"] = args ? args.resourceServerId : undefined;
            inputs["scopes"] = args ? args.scopes : undefined;
            inputs["type"] = args ? args.type : undefined;
            inputs["uris"] = args ? args.uris : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(ClientAuthorizationResource.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering ClientAuthorizationResource resources.
 */
export interface ClientAuthorizationResourceState {
    readonly attributes?: pulumi.Input<{[key: string]: any}>;
    readonly displayName?: pulumi.Input<string>;
    readonly iconUri?: pulumi.Input<string>;
    readonly name?: pulumi.Input<string>;
    readonly ownerManagedAccess?: pulumi.Input<boolean>;
    readonly realmId?: pulumi.Input<string>;
    readonly resourceServerId?: pulumi.Input<string>;
    readonly scopes?: pulumi.Input<pulumi.Input<string>[]>;
    readonly type?: pulumi.Input<string>;
    readonly uris?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a ClientAuthorizationResource resource.
 */
export interface ClientAuthorizationResourceArgs {
    readonly attributes?: pulumi.Input<{[key: string]: any}>;
    readonly displayName?: pulumi.Input<string>;
    readonly iconUri?: pulumi.Input<string>;
    readonly name?: pulumi.Input<string>;
    readonly ownerManagedAccess?: pulumi.Input<boolean>;
    readonly realmId: pulumi.Input<string>;
    readonly resourceServerId: pulumi.Input<string>;
    readonly scopes?: pulumi.Input<pulumi.Input<string>[]>;
    readonly type?: pulumi.Input<string>;
    readonly uris?: pulumi.Input<pulumi.Input<string>[]>;
}
