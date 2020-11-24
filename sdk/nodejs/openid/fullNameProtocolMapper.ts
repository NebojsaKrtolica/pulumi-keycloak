// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Allows for creating and managing full name protocol mappers within Keycloak.
 *
 * Full name protocol mappers allow you to map a user's first and last name to the OpenID Connect `name` claim in a token.
 *
 * Protocol mappers can be defined for a single client, or they can be defined for a client scope which can be shared between
 * multiple different clients.
 *
 * ## Example Usage
 * ### Client)
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as keycloak from "@pulumi/keycloak";
 *
 * const realm = new keycloak.Realm("realm", {
 *     realm: "my-realm",
 *     enabled: true,
 * });
 * const openidClient = new keycloak.openid.Client("openidClient", {
 *     realmId: realm.id,
 *     clientId: "client",
 *     enabled: true,
 *     accessType: "CONFIDENTIAL",
 *     validRedirectUris: ["http://localhost:8080/openid-callback"],
 * });
 * const fullNameMapper = new keycloak.openid.FullNameProtocolMapper("fullNameMapper", {
 *     realmId: realm.id,
 *     clientId: openidClient.id,
 * });
 * ```
 * ### Client Scope)
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as keycloak from "@pulumi/keycloak";
 *
 * const realm = new keycloak.Realm("realm", {
 *     realm: "my-realm",
 *     enabled: true,
 * });
 * const clientScope = new keycloak.openid.ClientScope("clientScope", {realmId: realm.id});
 * const fullNameMapper = new keycloak.openid.FullNameProtocolMapper("fullNameMapper", {
 *     realmId: realm.id,
 *     clientScopeId: clientScope.id,
 * });
 * ```
 *
 * ## Import
 *
 * Protocol mappers can be imported using one of the following formats- Client`{{realm_id}}/client/{{client_keycloak_id}}/{{protocol_mapper_id}}` - Client Scope`{{realm_id}}/client-scope/{{client_scope_keycloak_id}}/{{protocol_mapper_id}}` Examplebash
 *
 * ```sh
 *  $ pulumi import keycloak:openid/fullNameProtocolMapper:FullNameProtocolMapper full_name_mapper my-realm/client/a7202154-8793-4656-b655-1dd18c181e14/71602afa-f7d1-4788-8c49-ef8fd00af0f4
 * ```
 *
 * ```sh
 *  $ pulumi import keycloak:openid/fullNameProtocolMapper:FullNameProtocolMapper full_name_mapper my-realm/client-scope/b799ea7e-73ee-4a73-990a-1eafebe8e20a/71602afa-f7d1-4788-8c49-ef8fd00af0f4
 * ```
 */
export class FullNameProtocolMapper extends pulumi.CustomResource {
    /**
     * Get an existing FullNameProtocolMapper resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FullNameProtocolMapperState, opts?: pulumi.CustomResourceOptions): FullNameProtocolMapper {
        return new FullNameProtocolMapper(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'keycloak:openid/fullNameProtocolMapper:FullNameProtocolMapper';

    /**
     * Returns true if the given object is an instance of FullNameProtocolMapper.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FullNameProtocolMapper {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FullNameProtocolMapper.__pulumiType;
    }

    /**
     * Indicates if the user's full name should be added as a claim to the access token. Defaults to `true`.
     */
    public readonly addToAccessToken!: pulumi.Output<boolean | undefined>;
    /**
     * Indicates if the user's full name should be added as a claim to the id token. Defaults to `true`.
     */
    public readonly addToIdToken!: pulumi.Output<boolean | undefined>;
    /**
     * Indicates if the user's full name should be added as a claim to the UserInfo response body. Defaults to `true`.
     */
    public readonly addToUserinfo!: pulumi.Output<boolean | undefined>;
    /**
     * The client this protocol mapper should be attached to. Conflicts with `clientScopeId`. One of `clientId` or `clientScopeId` must be specified.
     */
    public readonly clientId!: pulumi.Output<string | undefined>;
    /**
     * The client scope this protocol mapper should be attached to. Conflicts with `clientId`. One of `clientId` or `clientScopeId` must be specified.
     */
    public readonly clientScopeId!: pulumi.Output<string | undefined>;
    /**
     * The display name of this protocol mapper in the GUI.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The realm this protocol mapper exists within.
     */
    public readonly realmId!: pulumi.Output<string>;

    /**
     * Create a FullNameProtocolMapper resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FullNameProtocolMapperArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: FullNameProtocolMapperArgs | FullNameProtocolMapperState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as FullNameProtocolMapperState | undefined;
            inputs["addToAccessToken"] = state ? state.addToAccessToken : undefined;
            inputs["addToIdToken"] = state ? state.addToIdToken : undefined;
            inputs["addToUserinfo"] = state ? state.addToUserinfo : undefined;
            inputs["clientId"] = state ? state.clientId : undefined;
            inputs["clientScopeId"] = state ? state.clientScopeId : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["realmId"] = state ? state.realmId : undefined;
        } else {
            const args = argsOrState as FullNameProtocolMapperArgs | undefined;
            if (!args || args.realmId === undefined) {
                throw new Error("Missing required property 'realmId'");
            }
            inputs["addToAccessToken"] = args ? args.addToAccessToken : undefined;
            inputs["addToIdToken"] = args ? args.addToIdToken : undefined;
            inputs["addToUserinfo"] = args ? args.addToUserinfo : undefined;
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
        super(FullNameProtocolMapper.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering FullNameProtocolMapper resources.
 */
export interface FullNameProtocolMapperState {
    /**
     * Indicates if the user's full name should be added as a claim to the access token. Defaults to `true`.
     */
    readonly addToAccessToken?: pulumi.Input<boolean>;
    /**
     * Indicates if the user's full name should be added as a claim to the id token. Defaults to `true`.
     */
    readonly addToIdToken?: pulumi.Input<boolean>;
    /**
     * Indicates if the user's full name should be added as a claim to the UserInfo response body. Defaults to `true`.
     */
    readonly addToUserinfo?: pulumi.Input<boolean>;
    /**
     * The client this protocol mapper should be attached to. Conflicts with `clientScopeId`. One of `clientId` or `clientScopeId` must be specified.
     */
    readonly clientId?: pulumi.Input<string>;
    /**
     * The client scope this protocol mapper should be attached to. Conflicts with `clientId`. One of `clientId` or `clientScopeId` must be specified.
     */
    readonly clientScopeId?: pulumi.Input<string>;
    /**
     * The display name of this protocol mapper in the GUI.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The realm this protocol mapper exists within.
     */
    readonly realmId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a FullNameProtocolMapper resource.
 */
export interface FullNameProtocolMapperArgs {
    /**
     * Indicates if the user's full name should be added as a claim to the access token. Defaults to `true`.
     */
    readonly addToAccessToken?: pulumi.Input<boolean>;
    /**
     * Indicates if the user's full name should be added as a claim to the id token. Defaults to `true`.
     */
    readonly addToIdToken?: pulumi.Input<boolean>;
    /**
     * Indicates if the user's full name should be added as a claim to the UserInfo response body. Defaults to `true`.
     */
    readonly addToUserinfo?: pulumi.Input<boolean>;
    /**
     * The client this protocol mapper should be attached to. Conflicts with `clientScopeId`. One of `clientId` or `clientScopeId` must be specified.
     */
    readonly clientId?: pulumi.Input<string>;
    /**
     * The client scope this protocol mapper should be attached to. Conflicts with `clientId`. One of `clientId` or `clientScopeId` must be specified.
     */
    readonly clientScopeId?: pulumi.Input<string>;
    /**
     * The display name of this protocol mapper in the GUI.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The realm this protocol mapper exists within.
     */
    readonly realmId: pulumi.Input<string>;
}
