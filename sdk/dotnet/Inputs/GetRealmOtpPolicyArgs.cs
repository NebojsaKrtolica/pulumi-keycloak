// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Keycloak.Inputs
{

    public sealed class GetRealmOtpPolicyInputArgs : Pulumi.ResourceArgs
    {
        [Input("algorithm", required: true)]
        public Input<string> Algorithm { get; set; } = null!;

        [Input("digits", required: true)]
        public Input<int> Digits { get; set; } = null!;

        [Input("initialCounter", required: true)]
        public Input<int> InitialCounter { get; set; } = null!;

        [Input("lookAheadWindow", required: true)]
        public Input<int> LookAheadWindow { get; set; } = null!;

        [Input("period", required: true)]
        public Input<int> Period { get; set; } = null!;

        [Input("type", required: true)]
        public Input<string> Type { get; set; } = null!;

        public GetRealmOtpPolicyInputArgs()
        {
        }
    }
}
