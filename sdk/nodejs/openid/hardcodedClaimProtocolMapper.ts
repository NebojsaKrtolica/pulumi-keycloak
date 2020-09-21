// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * ## # keycloak.openid.HardcodedClaimProtocolMapper
 *
 * Allows for creating and managing hardcoded claim protocol mappers within
 * Keycloak.
 *
 * Hardcoded claim protocol mappers allow you to define a claim with a hardcoded
 * value. Protocol mappers can be defined for a single client, or they can
 * be defined for a client scope which can be shared between multiple different
 * clients.
 *
 * ### Example Usage (Client)
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as keycloak from "@pulumi/keycloak";
 *
 * const realm = new keycloak.Realm("realm", {
 *     enabled: true,
 *     realm: "my-realm",
 * });
 * const openidClient = new keycloak.openid.Client("openid_client", {
 *     accessType: "CONFIDENTIAL",
 *     clientId: "test-client",
 *     enabled: true,
 *     realmId: realm.id,
 *     validRedirectUris: ["http://localhost:8080/openid-callback"],
 * });
 * const hardcodedClaimMapper = new keycloak.openid.HardcodedClaimProtocolMapper("hardcoded_claim_mapper", {
 *     claimName: "foo",
 *     claimValue: "bar",
 *     clientId: openidClient.id,
 *     realmId: realm.id,
 * });
 * ```
 *
 * ### Example Usage (Client Scope)
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as keycloak from "@pulumi/keycloak";
 *
 * const realm = new keycloak.Realm("realm", {
 *     enabled: true,
 *     realm: "my-realm",
 * });
 * const clientScope = new keycloak.openid.ClientScope("client_scope", {
 *     realmId: realm.id,
 * });
 * const hardcodedClaimMapper = new keycloak.openid.HardcodedClaimProtocolMapper("hardcoded_claim_mapper", {
 *     claimName: "foo",
 *     claimValue: "bar",
 *     clientScopeId: clientScope.id,
 *     realmId: realm.id,
 * });
 * ```
 *
 * ### Argument Reference
 *
 * The following arguments are supported:
 *
 * - `realmId` - (Required) The realm this protocol mapper exists within.
 * - `clientId` - (Required if `clientScopeId` is not specified) The client this protocol mapper is attached to.
 * - `clientScopeId` - (Required if `clientId` is not specified) The client scope this protocol mapper is attached to.
 * - `name` - (Required) The display name of this protocol mapper in the GUI.
 * - `claimName` - (Required) The name of the claim to insert into a token.
 * - `claimValue` - (Required) The hardcoded value of the claim.
 * - `claimValueType` - (Optional) The claim type used when serializing JSON tokens. Can be one of `String`, `JSON`, `long`, `int`, or `boolean`. Defaults to `String`.
 * - `addToIdToken` - (Optional) Indicates if the property should be added as a claim to the id token. Defaults to `true`.
 * - `addToAccessToken` - (Optional) Indicates if the property should be added as a claim to the access token. Defaults to `true`.
 * - `addToUserinfo` - (Optional) Indicates if the property should be added as a claim to the UserInfo response body. Defaults to `true`.
 */
export class HardcodedClaimProtocolMapper extends pulumi.CustomResource {
    /**
     * Get an existing HardcodedClaimProtocolMapper resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: HardcodedClaimProtocolMapperState, opts?: pulumi.CustomResourceOptions): HardcodedClaimProtocolMapper {
        return new HardcodedClaimProtocolMapper(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'keycloak:openid/hardcodedClaimProtocolMapper:HardcodedClaimProtocolMapper';

    /**
     * Returns true if the given object is an instance of HardcodedClaimProtocolMapper.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is HardcodedClaimProtocolMapper {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === HardcodedClaimProtocolMapper.__pulumiType;
    }

    /**
     * Indicates if the attribute should be a claim in the access token.
     */
    public readonly addToAccessToken!: pulumi.Output<boolean | undefined>;
    /**
     * Indicates if the attribute should be a claim in the id token.
     */
    public readonly addToIdToken!: pulumi.Output<boolean | undefined>;
    /**
     * Indicates if the attribute should appear in the userinfo response body.
     */
    public readonly addToUserinfo!: pulumi.Output<boolean | undefined>;
    public readonly claimName!: pulumi.Output<string>;
    public readonly claimValue!: pulumi.Output<string>;
    /**
     * Claim type used when serializing tokens.
     */
    public readonly claimValueType!: pulumi.Output<string | undefined>;
    /**
     * The mapper's associated client. Cannot be used at the same time as client_scope_id.
     */
    public readonly clientId!: pulumi.Output<string | undefined>;
    /**
     * The mapper's associated client scope. Cannot be used at the same time as client_id.
     */
    public readonly clientScopeId!: pulumi.Output<string | undefined>;
    /**
     * A human-friendly name that will appear in the Keycloak console.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The realm id where the associated client or client scope exists.
     */
    public readonly realmId!: pulumi.Output<string>;

    /**
     * Create a HardcodedClaimProtocolMapper resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: HardcodedClaimProtocolMapperArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: HardcodedClaimProtocolMapperArgs | HardcodedClaimProtocolMapperState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as HardcodedClaimProtocolMapperState | undefined;
            inputs["addToAccessToken"] = state ? state.addToAccessToken : undefined;
            inputs["addToIdToken"] = state ? state.addToIdToken : undefined;
            inputs["addToUserinfo"] = state ? state.addToUserinfo : undefined;
            inputs["claimName"] = state ? state.claimName : undefined;
            inputs["claimValue"] = state ? state.claimValue : undefined;
            inputs["claimValueType"] = state ? state.claimValueType : undefined;
            inputs["clientId"] = state ? state.clientId : undefined;
            inputs["clientScopeId"] = state ? state.clientScopeId : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["realmId"] = state ? state.realmId : undefined;
        } else {
            const args = argsOrState as HardcodedClaimProtocolMapperArgs | undefined;
            if (!args || args.claimName === undefined) {
                throw new Error("Missing required property 'claimName'");
            }
            if (!args || args.claimValue === undefined) {
                throw new Error("Missing required property 'claimValue'");
            }
            if (!args || args.realmId === undefined) {
                throw new Error("Missing required property 'realmId'");
            }
            inputs["addToAccessToken"] = args ? args.addToAccessToken : undefined;
            inputs["addToIdToken"] = args ? args.addToIdToken : undefined;
            inputs["addToUserinfo"] = args ? args.addToUserinfo : undefined;
            inputs["claimName"] = args ? args.claimName : undefined;
            inputs["claimValue"] = args ? args.claimValue : undefined;
            inputs["claimValueType"] = args ? args.claimValueType : undefined;
            inputs["clientId"] = args ? args.clientId : undefined;
            inputs["clientScopeId"] = args ? args.clientScopeId : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["realmId"] = args ? args.realmId : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(HardcodedClaimProtocolMapper.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering HardcodedClaimProtocolMapper resources.
 */
export interface HardcodedClaimProtocolMapperState {
    /**
     * Indicates if the attribute should be a claim in the access token.
     */
    readonly addToAccessToken?: pulumi.Input<boolean>;
    /**
     * Indicates if the attribute should be a claim in the id token.
     */
    readonly addToIdToken?: pulumi.Input<boolean>;
    /**
     * Indicates if the attribute should appear in the userinfo response body.
     */
    readonly addToUserinfo?: pulumi.Input<boolean>;
    readonly claimName?: pulumi.Input<string>;
    readonly claimValue?: pulumi.Input<string>;
    /**
     * Claim type used when serializing tokens.
     */
    readonly claimValueType?: pulumi.Input<string>;
    /**
     * The mapper's associated client. Cannot be used at the same time as client_scope_id.
     */
    readonly clientId?: pulumi.Input<string>;
    /**
     * The mapper's associated client scope. Cannot be used at the same time as client_id.
     */
    readonly clientScopeId?: pulumi.Input<string>;
    /**
     * A human-friendly name that will appear in the Keycloak console.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The realm id where the associated client or client scope exists.
     */
    readonly realmId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a HardcodedClaimProtocolMapper resource.
 */
export interface HardcodedClaimProtocolMapperArgs {
    /**
     * Indicates if the attribute should be a claim in the access token.
     */
    readonly addToAccessToken?: pulumi.Input<boolean>;
    /**
     * Indicates if the attribute should be a claim in the id token.
     */
    readonly addToIdToken?: pulumi.Input<boolean>;
    /**
     * Indicates if the attribute should appear in the userinfo response body.
     */
    readonly addToUserinfo?: pulumi.Input<boolean>;
    readonly claimName: pulumi.Input<string>;
    readonly claimValue: pulumi.Input<string>;
    /**
     * Claim type used when serializing tokens.
     */
    readonly claimValueType?: pulumi.Input<string>;
    /**
     * The mapper's associated client. Cannot be used at the same time as client_scope_id.
     */
    readonly clientId?: pulumi.Input<string>;
    /**
     * The mapper's associated client scope. Cannot be used at the same time as client_id.
     */
    readonly clientScopeId?: pulumi.Input<string>;
    /**
     * A human-friendly name that will appear in the Keycloak console.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The realm id where the associated client or client scope exists.
     */
    readonly realmId: pulumi.Input<string>;
}
