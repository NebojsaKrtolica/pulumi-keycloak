// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class HardcodedRoleIdentityMapper extends pulumi.CustomResource {
    /**
     * Get an existing HardcodedRoleIdentityMapper resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: HardcodedRoleIdentityMapperState, opts?: pulumi.CustomResourceOptions): HardcodedRoleIdentityMapper {
        return new HardcodedRoleIdentityMapper(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'keycloak:index/hardcodedRoleIdentityMapper:HardcodedRoleIdentityMapper';

    /**
     * Returns true if the given object is an instance of HardcodedRoleIdentityMapper.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is HardcodedRoleIdentityMapper {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === HardcodedRoleIdentityMapper.__pulumiType;
    }

    public readonly extraConfig!: pulumi.Output<{[key: string]: any} | undefined>;
    /**
     * IDP Alias
     */
    public readonly identityProviderAlias!: pulumi.Output<string>;
    /**
     * IDP Mapper Name
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Realm Name
     */
    public readonly realm!: pulumi.Output<string>;
    /**
     * Role Name
     */
    public readonly role!: pulumi.Output<string | undefined>;

    /**
     * Create a HardcodedRoleIdentityMapper resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: HardcodedRoleIdentityMapperArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: HardcodedRoleIdentityMapperArgs | HardcodedRoleIdentityMapperState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as HardcodedRoleIdentityMapperState | undefined;
            inputs["extraConfig"] = state ? state.extraConfig : undefined;
            inputs["identityProviderAlias"] = state ? state.identityProviderAlias : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["realm"] = state ? state.realm : undefined;
            inputs["role"] = state ? state.role : undefined;
        } else {
            const args = argsOrState as HardcodedRoleIdentityMapperArgs | undefined;
            if ((!args || args.identityProviderAlias === undefined) && !opts.urn) {
                throw new Error("Missing required property 'identityProviderAlias'");
            }
            if ((!args || args.realm === undefined) && !opts.urn) {
                throw new Error("Missing required property 'realm'");
            }
            inputs["extraConfig"] = args ? args.extraConfig : undefined;
            inputs["identityProviderAlias"] = args ? args.identityProviderAlias : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["realm"] = args ? args.realm : undefined;
            inputs["role"] = args ? args.role : undefined;
        }
        if (!opts.version) {
            opts = pulumi.mergeOptions(opts, { version: utilities.getVersion()});
        }
        super(HardcodedRoleIdentityMapper.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering HardcodedRoleIdentityMapper resources.
 */
export interface HardcodedRoleIdentityMapperState {
    extraConfig?: pulumi.Input<{[key: string]: any}>;
    /**
     * IDP Alias
     */
    identityProviderAlias?: pulumi.Input<string>;
    /**
     * IDP Mapper Name
     */
    name?: pulumi.Input<string>;
    /**
     * Realm Name
     */
    realm?: pulumi.Input<string>;
    /**
     * Role Name
     */
    role?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a HardcodedRoleIdentityMapper resource.
 */
export interface HardcodedRoleIdentityMapperArgs {
    extraConfig?: pulumi.Input<{[key: string]: any}>;
    /**
     * IDP Alias
     */
    identityProviderAlias: pulumi.Input<string>;
    /**
     * IDP Mapper Name
     */
    name?: pulumi.Input<string>;
    /**
     * Realm Name
     */
    realm: pulumi.Input<string>;
    /**
     * Role Name
     */
    role?: pulumi.Input<string>;
}
