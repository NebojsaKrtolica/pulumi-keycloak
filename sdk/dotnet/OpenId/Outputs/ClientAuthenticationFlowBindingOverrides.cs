// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Keycloak.OpenId.Outputs
{

    [OutputType]
    public sealed class ClientAuthenticationFlowBindingOverrides
    {
        /// <summary>
        /// Browser flow id, (flow needs to exist)
        /// </summary>
        public readonly string? BrowserId;
        /// <summary>
        /// Direct grant flow id (flow needs to exist)
        /// </summary>
        public readonly string? DirectGrantId;

        [OutputConstructor]
        private ClientAuthenticationFlowBindingOverrides(
            string? browserId,

            string? directGrantId)
        {
            BrowserId = browserId;
            DirectGrantId = directGrantId;
        }
    }
}
