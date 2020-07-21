// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Keycloak
{
    /// <summary>
    /// The provider type for the keycloak package. By default, resources use package-wide configuration
    /// settings, however an explicit `Provider` instance may be created and passed during resource
    /// construction to achieve fine-grained programmatic control over provider settings. See the
    /// [documentation](https://www.pulumi.com/docs/reference/programming-model/#providers) for more information.
    /// </summary>
    public partial class Provider : Pulumi.ProviderResource
    {
        /// <summary>
        /// Create a Provider resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public Provider(string name, ProviderArgs? args = null, CustomResourceOptions? options = null)
            : base("keycloak", name, args ?? new ProviderArgs(), MakeResourceOptions(options, ""))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
    }

    public sealed class ProviderArgs : Pulumi.ResourceArgs
    {
        [Input("basePath")]
        public Input<string>? BasePath { get; set; }

        [Input("clientId")]
        public Input<string>? ClientId { get; set; }

        [Input("clientSecret")]
        public Input<string>? ClientSecret { get; set; }

        /// <summary>
        /// Timeout (in seconds) of the Keycloak client
        /// </summary>
        [Input("clientTimeout", json: true)]
        public Input<int>? ClientTimeout { get; set; }

        /// <summary>
        /// Whether or not to login to Keycloak instance on provider initialization
        /// </summary>
        [Input("initialLogin", json: true)]
        public Input<bool>? InitialLogin { get; set; }

        [Input("password")]
        public Input<string>? Password { get; set; }

        [Input("realm")]
        public Input<string>? Realm { get; set; }

        /// <summary>
        /// Allows x509 calls using an unknown CA certificate (for development purposes)
        /// </summary>
        [Input("rootCaCertificate")]
        public Input<string>? RootCaCertificate { get; set; }

        /// <summary>
        /// Allows ignoring insecure certificates when set to true. Defaults to false. Disabling security check is dangerous and
        /// should be avoided.
        /// </summary>
        [Input("tlsInsecureSkipVerify", json: true)]
        public Input<bool>? TlsInsecureSkipVerify { get; set; }

        /// <summary>
        /// The base URL of the Keycloak instance, before `/auth`
        /// </summary>
        [Input("url")]
        public Input<string>? Url { get; set; }

        [Input("username")]
        public Input<string>? Username { get; set; }

        public ProviderArgs()
        {
            ClientId = Utilities.GetEnv("KEYCLOAK_CLIENT_ID");
            ClientSecret = Utilities.GetEnv("KEYCLOAK_CLIENT_SECRET");
            ClientTimeout = Utilities.GetEnvInt32("KEYCLOAK_CLIENT_TIMEOUT") ?? 5;
            Password = Utilities.GetEnv("KEYCLOAK_PASSWORD");
            Realm = Utilities.GetEnv("KEYCLOAK_REALM") ?? "master";
            Url = Utilities.GetEnv("KEYCLOAK_URL");
            Username = Utilities.GetEnv("KEYCLOAK_USER");
        }
    }
}
