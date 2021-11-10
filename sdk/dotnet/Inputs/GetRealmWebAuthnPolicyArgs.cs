// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Keycloak.Inputs
{

    public sealed class GetRealmWebAuthnPolicyInputArgs : Pulumi.ResourceArgs
    {
        [Input("acceptableAaguids", required: true)]
        private InputList<string>? _acceptableAaguids;
        public InputList<string> AcceptableAaguids
        {
            get => _acceptableAaguids ?? (_acceptableAaguids = new InputList<string>());
            set => _acceptableAaguids = value;
        }

        [Input("attestationConveyancePreference", required: true)]
        public Input<string> AttestationConveyancePreference { get; set; } = null!;

        [Input("authenticatorAttachment", required: true)]
        public Input<string> AuthenticatorAttachment { get; set; } = null!;

        [Input("avoidSameAuthenticatorRegister", required: true)]
        public Input<bool> AvoidSameAuthenticatorRegister { get; set; } = null!;

        [Input("createTimeout", required: true)]
        public Input<int> CreateTimeout { get; set; } = null!;

        [Input("relyingPartyEntityName", required: true)]
        public Input<string> RelyingPartyEntityName { get; set; } = null!;

        [Input("relyingPartyId", required: true)]
        public Input<string> RelyingPartyId { get; set; } = null!;

        [Input("requireResidentKey", required: true)]
        public Input<string> RequireResidentKey { get; set; } = null!;

        [Input("signatureAlgorithms", required: true)]
        private InputList<string>? _signatureAlgorithms;
        public InputList<string> SignatureAlgorithms
        {
            get => _signatureAlgorithms ?? (_signatureAlgorithms = new InputList<string>());
            set => _signatureAlgorithms = value;
        }

        [Input("userVerificationRequirement", required: true)]
        public Input<string> UserVerificationRequirement { get; set; } = null!;

        public GetRealmWebAuthnPolicyInputArgs()
        {
        }
    }
}
