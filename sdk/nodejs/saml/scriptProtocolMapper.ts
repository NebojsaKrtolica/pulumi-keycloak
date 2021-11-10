// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Allows for creating and managing script protocol mappers for SAML clients within Keycloak.
 *
 * Script protocol mappers evaluate a JavaScript function to produce an attribute value based on context information.
 *
 * Protocol mappers can be defined for a single client, or they can be defined for a client scope which can be shared between
 * multiple different clients.
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
 * const samlClient = new keycloak.saml.Client("samlClient", {
 *     realmId: realm.id,
 *     clientId: "saml-client",
 * });
 * const samlScriptMapper = new keycloak.saml.ScriptProtocolMapper("samlScriptMapper", {
 *     realmId: realm.id,
 *     clientId: samlClient.id,
 *     script: "exports = 'foo';",
 *     samlAttributeName: "displayName",
 *     samlAttributeNameFormat: "Unspecified",
 * });
 * ```
 *
 * ## Import
 *
 * Protocol mappers can be imported using one of the following formats- Client`{{realm_id}}/client/{{client_keycloak_id}}/{{protocol_mapper_id}}` - Client Scope`{{realm_id}}/client-scope/{{client_scope_keycloak_id}}/{{protocol_mapper_id}}` Examplebash
 *
 * ```sh
 *  $ pulumi import keycloak:saml/scriptProtocolMapper:ScriptProtocolMapper saml_script_mapper my-realm/client/a7202154-8793-4656-b655-1dd18c181e14/71602afa-f7d1-4788-8c49-ef8fd00af0f4
 * ```
 *
 * ```sh
 *  $ pulumi import keycloak:saml/scriptProtocolMapper:ScriptProtocolMapper saml_script_mapper my-realm/client-scope/b799ea7e-73ee-4a73-990a-1eafebe8e20a/71602afa-f7d1-4788-8c49-ef8fd00af0f4
 * ```
 */
export class ScriptProtocolMapper extends pulumi.CustomResource {
    /**
     * Get an existing ScriptProtocolMapper resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ScriptProtocolMapperState, opts?: pulumi.CustomResourceOptions): ScriptProtocolMapper {
        return new ScriptProtocolMapper(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'keycloak:saml/scriptProtocolMapper:ScriptProtocolMapper';

    /**
     * Returns true if the given object is an instance of ScriptProtocolMapper.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ScriptProtocolMapper {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ScriptProtocolMapper.__pulumiType;
    }

    /**
     * The client this protocol mapper should be attached to. Conflicts with `clientScopeId`. One of `clientId` or `clientScopeId` must be specified.
     */
    public readonly clientId!: pulumi.Output<string | undefined>;
    /**
     * The client scope this protocol mapper should be attached to. Conflicts with `clientId`. One of `clientId` or `clientScopeId` must be specified.
     */
    public readonly clientScopeId!: pulumi.Output<string | undefined>;
    /**
     * An optional human-friendly name for this attribute.
     */
    public readonly friendlyName!: pulumi.Output<string | undefined>;
    /**
     * The display name of this protocol mapper in the GUI.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The realm this protocol mapper exists within.
     */
    public readonly realmId!: pulumi.Output<string>;
    /**
     * The name of the SAML attribute.
     */
    public readonly samlAttributeName!: pulumi.Output<string>;
    /**
     * The SAML attribute Name Format. Can be one of `Unspecified`, `Basic`, or `URI Reference`.
     */
    public readonly samlAttributeNameFormat!: pulumi.Output<string>;
    /**
     * JavaScript code to compute the attribute value.
     */
    public readonly script!: pulumi.Output<string>;
    /**
     * When `true`, all values will be stored under one attribute with multiple attribute values. Defaults to `true`.
     */
    public readonly singleValueAttribute!: pulumi.Output<boolean | undefined>;

    /**
     * Create a ScriptProtocolMapper resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ScriptProtocolMapperArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ScriptProtocolMapperArgs | ScriptProtocolMapperState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ScriptProtocolMapperState | undefined;
            inputs["clientId"] = state ? state.clientId : undefined;
            inputs["clientScopeId"] = state ? state.clientScopeId : undefined;
            inputs["friendlyName"] = state ? state.friendlyName : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["realmId"] = state ? state.realmId : undefined;
            inputs["samlAttributeName"] = state ? state.samlAttributeName : undefined;
            inputs["samlAttributeNameFormat"] = state ? state.samlAttributeNameFormat : undefined;
            inputs["script"] = state ? state.script : undefined;
            inputs["singleValueAttribute"] = state ? state.singleValueAttribute : undefined;
        } else {
            const args = argsOrState as ScriptProtocolMapperArgs | undefined;
            if ((!args || args.realmId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'realmId'");
            }
            if ((!args || args.samlAttributeName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'samlAttributeName'");
            }
            if ((!args || args.samlAttributeNameFormat === undefined) && !opts.urn) {
                throw new Error("Missing required property 'samlAttributeNameFormat'");
            }
            if ((!args || args.script === undefined) && !opts.urn) {
                throw new Error("Missing required property 'script'");
            }
            inputs["clientId"] = args ? args.clientId : undefined;
            inputs["clientScopeId"] = args ? args.clientScopeId : undefined;
            inputs["friendlyName"] = args ? args.friendlyName : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["realmId"] = args ? args.realmId : undefined;
            inputs["samlAttributeName"] = args ? args.samlAttributeName : undefined;
            inputs["samlAttributeNameFormat"] = args ? args.samlAttributeNameFormat : undefined;
            inputs["script"] = args ? args.script : undefined;
            inputs["singleValueAttribute"] = args ? args.singleValueAttribute : undefined;
        }
        if (!opts.version) {
            opts = pulumi.mergeOptions(opts, { version: utilities.getVersion()});
        }
        super(ScriptProtocolMapper.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering ScriptProtocolMapper resources.
 */
export interface ScriptProtocolMapperState {
    /**
     * The client this protocol mapper should be attached to. Conflicts with `clientScopeId`. One of `clientId` or `clientScopeId` must be specified.
     */
    clientId?: pulumi.Input<string>;
    /**
     * The client scope this protocol mapper should be attached to. Conflicts with `clientId`. One of `clientId` or `clientScopeId` must be specified.
     */
    clientScopeId?: pulumi.Input<string>;
    /**
     * An optional human-friendly name for this attribute.
     */
    friendlyName?: pulumi.Input<string>;
    /**
     * The display name of this protocol mapper in the GUI.
     */
    name?: pulumi.Input<string>;
    /**
     * The realm this protocol mapper exists within.
     */
    realmId?: pulumi.Input<string>;
    /**
     * The name of the SAML attribute.
     */
    samlAttributeName?: pulumi.Input<string>;
    /**
     * The SAML attribute Name Format. Can be one of `Unspecified`, `Basic`, or `URI Reference`.
     */
    samlAttributeNameFormat?: pulumi.Input<string>;
    /**
     * JavaScript code to compute the attribute value.
     */
    script?: pulumi.Input<string>;
    /**
     * When `true`, all values will be stored under one attribute with multiple attribute values. Defaults to `true`.
     */
    singleValueAttribute?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a ScriptProtocolMapper resource.
 */
export interface ScriptProtocolMapperArgs {
    /**
     * The client this protocol mapper should be attached to. Conflicts with `clientScopeId`. One of `clientId` or `clientScopeId` must be specified.
     */
    clientId?: pulumi.Input<string>;
    /**
     * The client scope this protocol mapper should be attached to. Conflicts with `clientId`. One of `clientId` or `clientScopeId` must be specified.
     */
    clientScopeId?: pulumi.Input<string>;
    /**
     * An optional human-friendly name for this attribute.
     */
    friendlyName?: pulumi.Input<string>;
    /**
     * The display name of this protocol mapper in the GUI.
     */
    name?: pulumi.Input<string>;
    /**
     * The realm this protocol mapper exists within.
     */
    realmId: pulumi.Input<string>;
    /**
     * The name of the SAML attribute.
     */
    samlAttributeName: pulumi.Input<string>;
    /**
     * The SAML attribute Name Format. Can be one of `Unspecified`, `Basic`, or `URI Reference`.
     */
    samlAttributeNameFormat: pulumi.Input<string>;
    /**
     * JavaScript code to compute the attribute value.
     */
    script: pulumi.Input<string>;
    /**
     * When `true`, all values will be stored under one attribute with multiple attribute values. Defaults to `true`.
     */
    singleValueAttribute?: pulumi.Input<boolean>;
}
