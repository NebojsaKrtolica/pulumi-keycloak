// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class UserTemplateImporterIdentityProviderMapper extends pulumi.CustomResource {
    /**
     * Get an existing UserTemplateImporterIdentityProviderMapper resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: UserTemplateImporterIdentityProviderMapperState, opts?: pulumi.CustomResourceOptions): UserTemplateImporterIdentityProviderMapper {
        return new UserTemplateImporterIdentityProviderMapper(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'keycloak:index/userTemplateImporterIdentityProviderMapper:UserTemplateImporterIdentityProviderMapper';

    /**
     * Returns true if the given object is an instance of UserTemplateImporterIdentityProviderMapper.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is UserTemplateImporterIdentityProviderMapper {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === UserTemplateImporterIdentityProviderMapper.__pulumiType;
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
     * Username For Template Import
     */
    public readonly template!: pulumi.Output<string | undefined>;

    /**
     * Create a UserTemplateImporterIdentityProviderMapper resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: UserTemplateImporterIdentityProviderMapperArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: UserTemplateImporterIdentityProviderMapperArgs | UserTemplateImporterIdentityProviderMapperState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as UserTemplateImporterIdentityProviderMapperState | undefined;
            inputs["extraConfig"] = state ? state.extraConfig : undefined;
            inputs["identityProviderAlias"] = state ? state.identityProviderAlias : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["realm"] = state ? state.realm : undefined;
            inputs["template"] = state ? state.template : undefined;
        } else {
            const args = argsOrState as UserTemplateImporterIdentityProviderMapperArgs | undefined;
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
            inputs["template"] = args ? args.template : undefined;
        }
        if (!opts.version) {
            opts = pulumi.mergeOptions(opts, { version: utilities.getVersion()});
        }
        super(UserTemplateImporterIdentityProviderMapper.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering UserTemplateImporterIdentityProviderMapper resources.
 */
export interface UserTemplateImporterIdentityProviderMapperState {
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
     * Username For Template Import
     */
    template?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a UserTemplateImporterIdentityProviderMapper resource.
 */
export interface UserTemplateImporterIdentityProviderMapperArgs {
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
     * Username For Template Import
     */
    template?: pulumi.Input<string>;
}
