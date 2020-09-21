// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

/**
 * This data source can be used to fetch properties of a Keycloak role for
 * usage with other resources, such as `keycloak.GroupRoles`.
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
 * const offlineAccess = realm.id.apply(id => keycloak.getRole({
 *     realmId: id,
 *     name: "offline_access",
 * }));
 * const group = new keycloak.Group("group", {realmId: realm.id});
 * const groupRoles = new keycloak.GroupRoles("groupRoles", {
 *     realmId: realm.id,
 *     groupId: group.id,
 *     roleIds: [offlineAccess.id],
 * });
 * ```
 */
export function getRole(args: GetRoleArgs, opts?: pulumi.InvokeOptions): Promise<GetRoleResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("keycloak:index/getRole:getRole", {
        "clientId": args.clientId,
        "name": args.name,
        "realmId": args.realmId,
    }, opts);
}

/**
 * A collection of arguments for invoking getRole.
 */
export interface GetRoleArgs {
    /**
     * When specified, this role is assumed to be a client role belonging to the client with the provided ID. The `id` attribute of a `keycloakClient` resource should be used here.
     */
    readonly clientId?: string;
    /**
     * The name of the role.
     */
    readonly name: string;
    /**
     * The realm this role exists within.
     */
    readonly realmId: string;
}

/**
 * A collection of values returned by getRole.
 */
export interface GetRoleResult {
    readonly clientId?: string;
    /**
     * (Computed) The description of the role.
     */
    readonly description: string;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly name: string;
    readonly realmId: string;
}
