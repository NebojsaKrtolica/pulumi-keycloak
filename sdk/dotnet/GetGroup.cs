// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Keycloak
{
    public static class GetGroup
    {
        public static Task<GetGroupResult> InvokeAsync(GetGroupArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetGroupResult>("keycloak:index/getGroup:getGroup", args ?? new GetGroupArgs(), options.WithVersion());
    }


    public sealed class GetGroupArgs : Pulumi.InvokeArgs
    {
        [Input("name", required: true)]
        public string Name { get; set; } = null!;

        [Input("realmId", required: true)]
        public string RealmId { get; set; } = null!;

        public GetGroupArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetGroupResult
    {
        /// <summary>
        /// The provider-assigned unique ID for this managed resource.
        /// </summary>
        public readonly string Id;
        public readonly string Name;
        public readonly string RealmId;

        [OutputConstructor]
        private GetGroupResult(
            string id,

            string name,

            string realmId)
        {
            Id = id;
            Name = name;
            RealmId = realmId;
        }
    }
}
