// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Keycloak.Outputs
{

    [OutputType]
    public sealed class GroupPermissionsManageMembershipScope
    {
        public readonly string? DecisionStrategy;
        public readonly string? Description;
        public readonly ImmutableArray<string> Policies;

        [OutputConstructor]
        private GroupPermissionsManageMembershipScope(
            string? decisionStrategy,

            string? description,

            ImmutableArray<string> policies)
        {
            DecisionStrategy = decisionStrategy;
            Description = description;
            Policies = policies;
        }
    }
}
