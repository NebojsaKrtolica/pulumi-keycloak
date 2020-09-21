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
    public sealed class RealmWebAuthnPasswordlessPolicy
    {
        /// <summary>
        /// A set of AAGUIDs for which an authenticator can be registered.
        /// </summary>
        public readonly ImmutableArray<string> AcceptableAaguids;
        /// <summary>
        /// The preference of how to generate a WebAuthn attestation statement. Valid options are `not specified`, `none`, `indirect`, `direct`, or `enterprise`. Defaults to `not specified`.
        /// </summary>
        public readonly string? AttestationConveyancePreference;
        /// <summary>
        /// The acceptable attachment pattern for the WebAuthn authenticator. Valid options are `not specified`, `platform`, or `cross-platform`. Defaults to `not specified`.
        /// </summary>
        public readonly string? AuthenticatorAttachment;
        /// <summary>
        /// When `true`, Keycloak will avoid registering the authenticator for WebAuthn if it has already been registered. Defaults to `false`.
        /// </summary>
        public readonly bool? AvoidSameAuthenticatorRegister;
        /// <summary>
        /// The timeout value for creating a user's public key credential in seconds. When set to `0`, this timeout option is not adapted. Defaults to `0`.
        /// </summary>
        public readonly int? CreateTimeout;
        /// <summary>
        /// A human readable server name for the WebAuthn Relying Party. Defaults to `keycloak`.
        /// </summary>
        public readonly string? RelyingPartyEntityName;
        /// <summary>
        /// The WebAuthn relying party ID.
        /// </summary>
        public readonly string? RelyingPartyId;
        /// <summary>
        /// Specifies whether or not a public key should be created to represent the resident key. Valid options are `not specified`, `Yes`, or `No`. Defaults to `not specified`.
        /// </summary>
        public readonly string? RequireResidentKey;
        /// <summary>
        /// A set of signature algorithms that should be used for the authentication assertion. Valid options at the time these docs were written are `ES256`, `ES384`, `ES512`, `RS256`, `RS384`, `RS512`, and `RS1`.
        /// </summary>
        public readonly ImmutableArray<string> SignatureAlgorithms;
        /// <summary>
        /// Specifies the policy for verifying a user logging in via WebAuthn. Valid options are `not specified`, `required`, `preferred`, or `discouraged`. Defaults to `not specified`.
        /// </summary>
        public readonly string? UserVerificationRequirement;

        [OutputConstructor]
        private RealmWebAuthnPasswordlessPolicy(
            ImmutableArray<string> acceptableAaguids,

            string? attestationConveyancePreference,

            string? authenticatorAttachment,

            bool? avoidSameAuthenticatorRegister,

            int? createTimeout,

            string? relyingPartyEntityName,

            string? relyingPartyId,

            string? requireResidentKey,

            ImmutableArray<string> signatureAlgorithms,

            string? userVerificationRequirement)
        {
            AcceptableAaguids = acceptableAaguids;
            AttestationConveyancePreference = attestationConveyancePreference;
            AuthenticatorAttachment = authenticatorAttachment;
            AvoidSameAuthenticatorRegister = avoidSameAuthenticatorRegister;
            CreateTimeout = createTimeout;
            RelyingPartyEntityName = relyingPartyEntityName;
            RelyingPartyId = relyingPartyId;
            RequireResidentKey = requireResidentKey;
            SignatureAlgorithms = signatureAlgorithms;
            UserVerificationRequirement = userVerificationRequirement;
        }
    }
}
