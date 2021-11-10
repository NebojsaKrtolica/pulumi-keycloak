// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * ## Import
 *
 * This resource can be imported using the format `{{realm_id}}/{{group_id}}`, where `group_id` is the unique ID that Keycloak assigns to the group upon creation. This value can be found in the URI when editing this group in the GUI, and is typically a GUID. Examplebash
 *
 * ```sh
 *  $ pulumi import keycloak:index/groupRoles:GroupRoles group_roles my-realm/18cc6b87-2ce7-4e59-bdc8-b9d49ec98a94
 * ```
 */
export class GroupRoles extends pulumi.CustomResource {
    /**
     * Get an existing GroupRoles resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: GroupRolesState, opts?: pulumi.CustomResourceOptions): GroupRoles {
        return new GroupRoles(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'keycloak:index/groupRoles:GroupRoles';

    /**
     * Returns true if the given object is an instance of GroupRoles.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is GroupRoles {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === GroupRoles.__pulumiType;
    }

    /**
     * Indicates if the list of roles is exhaustive. In this case, roles that are manually added to the group will be removed. Defaults to `true`.
     */
    public readonly exhaustive!: pulumi.Output<boolean | undefined>;
    /**
     * The ID of the group this resource should manage roles for.
     */
    public readonly groupId!: pulumi.Output<string>;
    /**
     * The realm this group exists in.
     */
    public readonly realmId!: pulumi.Output<string>;
    /**
     * A list of role IDs to map to the group.
     */
    public readonly roleIds!: pulumi.Output<string[]>;

    /**
     * Create a GroupRoles resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GroupRolesArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: GroupRolesArgs | GroupRolesState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as GroupRolesState | undefined;
            inputs["exhaustive"] = state ? state.exhaustive : undefined;
            inputs["groupId"] = state ? state.groupId : undefined;
            inputs["realmId"] = state ? state.realmId : undefined;
            inputs["roleIds"] = state ? state.roleIds : undefined;
        } else {
            const args = argsOrState as GroupRolesArgs | undefined;
            if ((!args || args.groupId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'groupId'");
            }
            if ((!args || args.realmId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'realmId'");
            }
            if ((!args || args.roleIds === undefined) && !opts.urn) {
                throw new Error("Missing required property 'roleIds'");
            }
            inputs["exhaustive"] = args ? args.exhaustive : undefined;
            inputs["groupId"] = args ? args.groupId : undefined;
            inputs["realmId"] = args ? args.realmId : undefined;
            inputs["roleIds"] = args ? args.roleIds : undefined;
        }
        if (!opts.version) {
            opts = pulumi.mergeOptions(opts, { version: utilities.getVersion()});
        }
        super(GroupRoles.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering GroupRoles resources.
 */
export interface GroupRolesState {
    /**
     * Indicates if the list of roles is exhaustive. In this case, roles that are manually added to the group will be removed. Defaults to `true`.
     */
    exhaustive?: pulumi.Input<boolean>;
    /**
     * The ID of the group this resource should manage roles for.
     */
    groupId?: pulumi.Input<string>;
    /**
     * The realm this group exists in.
     */
    realmId?: pulumi.Input<string>;
    /**
     * A list of role IDs to map to the group.
     */
    roleIds?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a GroupRoles resource.
 */
export interface GroupRolesArgs {
    /**
     * Indicates if the list of roles is exhaustive. In this case, roles that are manually added to the group will be removed. Defaults to `true`.
     */
    exhaustive?: pulumi.Input<boolean>;
    /**
     * The ID of the group this resource should manage roles for.
     */
    groupId: pulumi.Input<string>;
    /**
     * The realm this group exists in.
     */
    realmId: pulumi.Input<string>;
    /**
     * A list of role IDs to map to the group.
     */
    roleIds: pulumi.Input<pulumi.Input<string>[]>;
}
