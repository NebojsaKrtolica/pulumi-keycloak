// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * Allows for creating and managing `aes-generated` Realm keystores within Keycloak.
 *
 * A realm keystore manages generated key pairs that are used by Keycloak to perform cryptographic signatures and encryption.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as keycloak from "@pulumi/keycloak";
 *
 * const realm = new keycloak.Realm("realm", {realm: "my-realm"});
 * const keystoreAesGenerated = new keycloak.RealmKeystoreAesGenerated("keystoreAesGenerated", {
 *     realmId: realm.realm,
 *     enabled: true,
 *     active: true,
 *     priority: 100,
 *     secretSize: 16,
 * });
 * ```
 *
 * ## Import
 *
 * Realm keys can be imported using realm name and keystore id, you can find it in web UI. Examplebash
 *
 * ```sh
 *  $ pulumi import keycloak:index/realmKeystoreAesGenerated:RealmKeystoreAesGenerated keystore_aes_generated my-realm/my-realm/618cfba7-49aa-4c09-9a19-2f699b576f0b
 * ```
 */
export class RealmKeystoreAesGenerated extends pulumi.CustomResource {
    /**
     * Get an existing RealmKeystoreAesGenerated resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RealmKeystoreAesGeneratedState, opts?: pulumi.CustomResourceOptions): RealmKeystoreAesGenerated {
        return new RealmKeystoreAesGenerated(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'keycloak:index/realmKeystoreAesGenerated:RealmKeystoreAesGenerated';

    /**
     * Returns true if the given object is an instance of RealmKeystoreAesGenerated.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RealmKeystoreAesGenerated {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RealmKeystoreAesGenerated.__pulumiType;
    }

    /**
     * When `false`, key in not used for signing. Defaults to `true`.
     */
    public readonly active!: pulumi.Output<boolean | undefined>;
    /**
     * When `false`, key is not accessible in this realm. Defaults to `true`.
     */
    public readonly enabled!: pulumi.Output<boolean | undefined>;
    /**
     * Display name of provider when linked in admin console.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Priority for the provider. Defaults to `0`
     */
    public readonly priority!: pulumi.Output<number | undefined>;
    /**
     * The realm this keystore exists in.
     */
    public readonly realmId!: pulumi.Output<string>;
    /**
     * Size in bytes for the generated AES Key. Size 16 is for AES-128, Size 24 for AES-192 and Size 32 for AES-256. WARN: Bigger keys then 128 bits are not allowed on some JDK implementations. Defaults to `16`.
     */
    public readonly secretSize!: pulumi.Output<number | undefined>;

    /**
     * Create a RealmKeystoreAesGenerated resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RealmKeystoreAesGeneratedArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RealmKeystoreAesGeneratedArgs | RealmKeystoreAesGeneratedState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as RealmKeystoreAesGeneratedState | undefined;
            inputs["active"] = state ? state.active : undefined;
            inputs["enabled"] = state ? state.enabled : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["priority"] = state ? state.priority : undefined;
            inputs["realmId"] = state ? state.realmId : undefined;
            inputs["secretSize"] = state ? state.secretSize : undefined;
        } else {
            const args = argsOrState as RealmKeystoreAesGeneratedArgs | undefined;
            if ((!args || args.realmId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'realmId'");
            }
            inputs["active"] = args ? args.active : undefined;
            inputs["enabled"] = args ? args.enabled : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["priority"] = args ? args.priority : undefined;
            inputs["realmId"] = args ? args.realmId : undefined;
            inputs["secretSize"] = args ? args.secretSize : undefined;
        }
        if (!opts.version) {
            opts = pulumi.mergeOptions(opts, { version: utilities.getVersion()});
        }
        super(RealmKeystoreAesGenerated.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering RealmKeystoreAesGenerated resources.
 */
export interface RealmKeystoreAesGeneratedState {
    /**
     * When `false`, key in not used for signing. Defaults to `true`.
     */
    readonly active?: pulumi.Input<boolean>;
    /**
     * When `false`, key is not accessible in this realm. Defaults to `true`.
     */
    readonly enabled?: pulumi.Input<boolean>;
    /**
     * Display name of provider when linked in admin console.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Priority for the provider. Defaults to `0`
     */
    readonly priority?: pulumi.Input<number>;
    /**
     * The realm this keystore exists in.
     */
    readonly realmId?: pulumi.Input<string>;
    /**
     * Size in bytes for the generated AES Key. Size 16 is for AES-128, Size 24 for AES-192 and Size 32 for AES-256. WARN: Bigger keys then 128 bits are not allowed on some JDK implementations. Defaults to `16`.
     */
    readonly secretSize?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a RealmKeystoreAesGenerated resource.
 */
export interface RealmKeystoreAesGeneratedArgs {
    /**
     * When `false`, key in not used for signing. Defaults to `true`.
     */
    readonly active?: pulumi.Input<boolean>;
    /**
     * When `false`, key is not accessible in this realm. Defaults to `true`.
     */
    readonly enabled?: pulumi.Input<boolean>;
    /**
     * Display name of provider when linked in admin console.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Priority for the provider. Defaults to `0`
     */
    readonly priority?: pulumi.Input<number>;
    /**
     * The realm this keystore exists in.
     */
    readonly realmId: pulumi.Input<string>;
    /**
     * Size in bytes for the generated AES Key. Size 16 is for AES-128, Size 24 for AES-192 and Size 32 for AES-256. WARN: Bigger keys then 128 bits are not allowed on some JDK implementations. Defaults to `16`.
     */
    readonly secretSize?: pulumi.Input<number>;
}
