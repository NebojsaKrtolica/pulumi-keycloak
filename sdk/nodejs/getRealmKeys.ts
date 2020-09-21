// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getRealmKeys(args: GetRealmKeysArgs, opts?: pulumi.InvokeOptions): Promise<GetRealmKeysResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("keycloak:index/getRealmKeys:getRealmKeys", {
        "algorithms": args.algorithms,
        "realmId": args.realmId,
        "statuses": args.statuses,
    }, opts);
}

/**
 * A collection of arguments for invoking getRealmKeys.
 */
export interface GetRealmKeysArgs {
    readonly algorithms?: string[];
    readonly realmId: string;
    readonly statuses?: string[];
}

/**
 * A collection of values returned by getRealmKeys.
 */
export interface GetRealmKeysResult {
    readonly algorithms?: string[];
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly keys: outputs.GetRealmKeysKey[];
    readonly realmId: string;
    readonly statuses?: string[];
}
