// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * ## Import
 *
 * This resource does not support import. Instead of importing, feel free to create this resource as if it did not already exist on the server.
 */
export class GroupMemberships extends pulumi.CustomResource {
    /**
     * Get an existing GroupMemberships resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: GroupMembershipsState, opts?: pulumi.CustomResourceOptions): GroupMemberships {
        return new GroupMemberships(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'keycloak:index/groupMemberships:GroupMemberships';

    /**
     * Returns true if the given object is an instance of GroupMemberships.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is GroupMemberships {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === GroupMemberships.__pulumiType;
    }

    /**
     * The ID of the group this resource should manage memberships for.
     */
    public readonly groupId!: pulumi.Output<string | undefined>;
    /**
     * A list of usernames that belong to this group.
     */
    public readonly members!: pulumi.Output<string[]>;
    /**
     * The realm this group exists in.
     */
    public readonly realmId!: pulumi.Output<string>;

    /**
     * Create a GroupMemberships resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GroupMembershipsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: GroupMembershipsArgs | GroupMembershipsState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as GroupMembershipsState | undefined;
            inputs["groupId"] = state ? state.groupId : undefined;
            inputs["members"] = state ? state.members : undefined;
            inputs["realmId"] = state ? state.realmId : undefined;
        } else {
            const args = argsOrState as GroupMembershipsArgs | undefined;
            if ((!args || args.members === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'members'");
            }
            if ((!args || args.realmId === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'realmId'");
            }
            inputs["groupId"] = args ? args.groupId : undefined;
            inputs["members"] = args ? args.members : undefined;
            inputs["realmId"] = args ? args.realmId : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(GroupMemberships.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering GroupMemberships resources.
 */
export interface GroupMembershipsState {
    /**
     * The ID of the group this resource should manage memberships for.
     */
    readonly groupId?: pulumi.Input<string>;
    /**
     * A list of usernames that belong to this group.
     */
    readonly members?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The realm this group exists in.
     */
    readonly realmId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a GroupMemberships resource.
 */
export interface GroupMembershipsArgs {
    /**
     * The ID of the group this resource should manage memberships for.
     */
    readonly groupId?: pulumi.Input<string>;
    /**
     * A list of usernames that belong to this group.
     */
    readonly members: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The realm this group exists in.
     */
    readonly realmId: pulumi.Input<string>;
}
