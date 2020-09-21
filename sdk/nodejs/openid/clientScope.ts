// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * ## # keycloak.openid.ClientScope
 *
 * Allows for creating and managing Keycloak client scopes that can be attached to
 * clients that use the OpenID Connect protocol.
 *
 * Client Scopes can be used to share common protocol and role mappings between multiple
 * clients within a realm. They can also be used by clients to conditionally request
 * claims or roles for a user based on the OAuth 2.0 `scope` parameter.
 *
 * ### Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as keycloak from "@pulumi/keycloak";
 *
 * const realm = new keycloak.Realm("realm", {
 *     enabled: true,
 *     realm: "my-realm",
 * });
 * const openidClientScope = new keycloak.openid.ClientScope("openid_client_scope", {
 *     description: "When requested, this scope will map a user's group memberships to a claim",
 *     guiOrder: 1,
 *     includeInTokenScope: true,
 *     realmId: realm.id,
 * });
 * ```
 *
 * ### Argument Reference
 *
 * The following arguments are supported:
 *
 * - `realmId` - (Required) The realm this client scope belongs to.
 * - `name` - (Required) The display name of this client scope in the GUI.
 * - `description` - (Optional) The description of this client scope in the GUI.
 * - `consentScreenText` - (Optional) When set, a consent screen will be displayed to users
 *   authenticating to clients with this scope attached. The consent screen will display the string
 *   value of this attribute.
 * - `includeInTokenScope` - (Optional) When `true`, the name of this client scope will be added to the access token property 'scope' as well as to the Token Introspection Endpoint response.
 * - `guiOrder` - (Optional) Specify order of the client scope in GUI (such as in Consent page) as integer.
 */
export class ClientScope extends pulumi.CustomResource {
    /**
     * Get an existing ClientScope resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ClientScopeState, opts?: pulumi.CustomResourceOptions): ClientScope {
        return new ClientScope(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'keycloak:openid/clientScope:ClientScope';

    /**
     * Returns true if the given object is an instance of ClientScope.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ClientScope {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ClientScope.__pulumiType;
    }

    public readonly consentScreenText!: pulumi.Output<string | undefined>;
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly guiOrder!: pulumi.Output<number | undefined>;
    public readonly includeInTokenScope!: pulumi.Output<boolean | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly realmId!: pulumi.Output<string>;

    /**
     * Create a ClientScope resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ClientScopeArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ClientScopeArgs | ClientScopeState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as ClientScopeState | undefined;
            inputs["consentScreenText"] = state ? state.consentScreenText : undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["guiOrder"] = state ? state.guiOrder : undefined;
            inputs["includeInTokenScope"] = state ? state.includeInTokenScope : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["realmId"] = state ? state.realmId : undefined;
        } else {
            const args = argsOrState as ClientScopeArgs | undefined;
            if (!args || args.realmId === undefined) {
                throw new Error("Missing required property 'realmId'");
            }
            inputs["consentScreenText"] = args ? args.consentScreenText : undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["guiOrder"] = args ? args.guiOrder : undefined;
            inputs["includeInTokenScope"] = args ? args.includeInTokenScope : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["realmId"] = args ? args.realmId : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(ClientScope.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering ClientScope resources.
 */
export interface ClientScopeState {
    readonly consentScreenText?: pulumi.Input<string>;
    readonly description?: pulumi.Input<string>;
    readonly guiOrder?: pulumi.Input<number>;
    readonly includeInTokenScope?: pulumi.Input<boolean>;
    readonly name?: pulumi.Input<string>;
    readonly realmId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ClientScope resource.
 */
export interface ClientScopeArgs {
    readonly consentScreenText?: pulumi.Input<string>;
    readonly description?: pulumi.Input<string>;
    readonly guiOrder?: pulumi.Input<number>;
    readonly includeInTokenScope?: pulumi.Input<boolean>;
    readonly name?: pulumi.Input<string>;
    readonly realmId: pulumi.Input<string>;
}
