// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Keycloak.Inputs
{

    public sealed class GetRealmWebAuthnPasswordlessPolicyArgs : Pulumi.InvokeArgs
    {
        [Input("acceptableAaguids", required: true)]
        private List<string>? _acceptableAaguids;
        public List<string> AcceptableAaguids
        {
            get => _acceptableAaguids ?? (_acceptableAaguids = new List<string>());
            set => _acceptableAaguids = value;
        }

        [Input("attestationConveyancePreference", required: true)]
        public string AttestationConveyancePreference { get; set; } = null!;

        [Input("authenticatorAttachment", required: true)]
        public string AuthenticatorAttachment { get; set; } = null!;

        [Input("avoidSameAuthenticatorRegister", required: true)]
        public bool AvoidSameAuthenticatorRegister { get; set; }

        [Input("createTimeout", required: true)]
        public int CreateTimeout { get; set; }

        [Input("relyingPartyEntityName", required: true)]
        public string RelyingPartyEntityName { get; set; } = null!;

        [Input("relyingPartyId", required: true)]
        public string RelyingPartyId { get; set; } = null!;

        [Input("requireResidentKey", required: true)]
        public string RequireResidentKey { get; set; } = null!;

        [Input("signatureAlgorithms", required: true)]
        private List<string>? _signatureAlgorithms;
        public List<string> SignatureAlgorithms
        {
            get => _signatureAlgorithms ?? (_signatureAlgorithms = new List<string>());
            set => _signatureAlgorithms = value;
        }

        [Input("userVerificationRequirement", required: true)]
        public string UserVerificationRequirement { get; set; } = null!;

        public GetRealmWebAuthnPasswordlessPolicyArgs()
        {
        }
    }
}
