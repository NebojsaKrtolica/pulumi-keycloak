// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Keycloak.OpenId.Inputs
{

    public sealed class ClientAuthorizationArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// When `true`, resources can be managed remotely by the resource server. Defaults to `false`.
        /// </summary>
        [Input("allowRemoteResourceManagement")]
        public Input<bool>? AllowRemoteResourceManagement { get; set; }

        /// <summary>
        /// Dictates how the policies associated with a given permission are evaluated and how a final decision is obtained. Could be one of `AFFIRMATIVE`, `CONSENSUS`, or `UNANIMOUS`. Applies to permissions.
        /// </summary>
        [Input("decisionStrategy")]
        public Input<string>? DecisionStrategy { get; set; }

        /// <summary>
        /// When `true`, defaults set by Keycloak will be respected. Defaults to `false`.
        /// </summary>
        [Input("keepDefaults")]
        public Input<bool>? KeepDefaults { get; set; }

        /// <summary>
        /// Dictates how policies are enforced when evaluating authorization requests. Can be one of `ENFORCING`, `PERMISSIVE`, or `DISABLED`.
        /// </summary>
        [Input("policyEnforcementMode", required: true)]
        public Input<string> PolicyEnforcementMode { get; set; } = null!;

        public ClientAuthorizationArgs()
        {
        }
    }
}
