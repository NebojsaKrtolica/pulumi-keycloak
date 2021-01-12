// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

export class Subflow extends pulumi.CustomResource {
    /**
     * Get an existing Subflow resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SubflowState, opts?: pulumi.CustomResourceOptions): Subflow {
        return new Subflow(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'keycloak:authentication/subflow:Subflow';

    /**
     * Returns true if the given object is an instance of Subflow.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Subflow {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Subflow.__pulumiType;
    }

    public readonly alias!: pulumi.Output<string>;
    /**
     * Might be needed to be set with certain custom subflow with specific authenticator, in general this will remain empty
     */
    public readonly authenticator!: pulumi.Output<string | undefined>;
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly parentFlowAlias!: pulumi.Output<string>;
    public readonly providerId!: pulumi.Output<string | undefined>;
    public readonly realmId!: pulumi.Output<string>;
    public readonly requirement!: pulumi.Output<string | undefined>;

    /**
     * Create a Subflow resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SubflowArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SubflowArgs | SubflowState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as SubflowState | undefined;
            inputs["alias"] = state ? state.alias : undefined;
            inputs["authenticator"] = state ? state.authenticator : undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["parentFlowAlias"] = state ? state.parentFlowAlias : undefined;
            inputs["providerId"] = state ? state.providerId : undefined;
            inputs["realmId"] = state ? state.realmId : undefined;
            inputs["requirement"] = state ? state.requirement : undefined;
        } else {
            const args = argsOrState as SubflowArgs | undefined;
            if ((!args || args.alias === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'alias'");
            }
            if ((!args || args.parentFlowAlias === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'parentFlowAlias'");
            }
            if ((!args || args.realmId === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'realmId'");
            }
            inputs["alias"] = args ? args.alias : undefined;
            inputs["authenticator"] = args ? args.authenticator : undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["parentFlowAlias"] = args ? args.parentFlowAlias : undefined;
            inputs["providerId"] = args ? args.providerId : undefined;
            inputs["realmId"] = args ? args.realmId : undefined;
            inputs["requirement"] = args ? args.requirement : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(Subflow.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Subflow resources.
 */
export interface SubflowState {
    readonly alias?: pulumi.Input<string>;
    /**
     * Might be needed to be set with certain custom subflow with specific authenticator, in general this will remain empty
     */
    readonly authenticator?: pulumi.Input<string>;
    readonly description?: pulumi.Input<string>;
    readonly parentFlowAlias?: pulumi.Input<string>;
    readonly providerId?: pulumi.Input<string>;
    readonly realmId?: pulumi.Input<string>;
    readonly requirement?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Subflow resource.
 */
export interface SubflowArgs {
    readonly alias: pulumi.Input<string>;
    /**
     * Might be needed to be set with certain custom subflow with specific authenticator, in general this will remain empty
     */
    readonly authenticator?: pulumi.Input<string>;
    readonly description?: pulumi.Input<string>;
    readonly parentFlowAlias: pulumi.Input<string>;
    readonly providerId?: pulumi.Input<string>;
    readonly realmId: pulumi.Input<string>;
    readonly requirement?: pulumi.Input<string>;
}
