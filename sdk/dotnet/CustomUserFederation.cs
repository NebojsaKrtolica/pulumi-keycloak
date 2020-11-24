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
    /// ## Import
    /// 
    /// Custom user federation providers can be imported using the format `{{realm_id}}/{{custom_user_federation_id}}`. The ID of the custom user federation provider can be found within the Keycloak GUI and is typically a GUIDbash
    /// 
    /// ```sh
    ///  $ pulumi import keycloak:index/customUserFederation:CustomUserFederation custom_user_federation my-realm/af2a6ca3-e4d7-49c3-b08b-1b3c70b4b860
    /// ```
    /// </summary>
    public partial class CustomUserFederation : Pulumi.CustomResource
    {
        /// <summary>
        /// Can be one of `DEFAULT`, `EVICT_DAILY`, `EVICT_WEEKLY`, `MAX_LIFESPAN`, or `NO_CACHE`. Defaults to `DEFAULT`.
        /// </summary>
        [Output("cachePolicy")]
        public Output<string?> CachePolicy { get; private set; } = null!;

        /// <summary>
        /// The provider configuration handed over to your custom user federation provider.
        /// </summary>
        [Output("config")]
        public Output<ImmutableDictionary<string, object>?> Config { get; private set; } = null!;

        /// <summary>
        /// When `false`, this provider will not be used when performing queries for users. Defaults to `true`.
        /// </summary>
        [Output("enabled")]
        public Output<bool?> Enabled { get; private set; } = null!;

        /// <summary>
        /// Display name of the provider when displayed in the console.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// Must be set to the realms' `internal_id`  when it differs from the realm. This can happen when existing resources are imported into the state.
        /// </summary>
        [Output("parentId")]
        public Output<string?> ParentId { get; private set; } = null!;

        /// <summary>
        /// Priority of this provider when looking up users. Lower values are first. Defaults to `0`.
        /// </summary>
        [Output("priority")]
        public Output<int?> Priority { get; private set; } = null!;

        /// <summary>
        /// The unique ID of the custom provider, specified in the `getId` implementation for the `UserStorageProviderFactory` interface.
        /// </summary>
        [Output("providerId")]
        public Output<string> ProviderId { get; private set; } = null!;

        /// <summary>
        /// The realm that this provider will provide user federation for.
        /// </summary>
        [Output("realmId")]
        public Output<string> RealmId { get; private set; } = null!;


        /// <summary>
        /// Create a CustomUserFederation resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public CustomUserFederation(string name, CustomUserFederationArgs args, CustomResourceOptions? options = null)
            : base("keycloak:index/customUserFederation:CustomUserFederation", name, args ?? new CustomUserFederationArgs(), MakeResourceOptions(options, ""))
        {
        }

        private CustomUserFederation(string name, Input<string> id, CustomUserFederationState? state = null, CustomResourceOptions? options = null)
            : base("keycloak:index/customUserFederation:CustomUserFederation", name, state, MakeResourceOptions(options, id))
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
        /// <summary>
        /// Get an existing CustomUserFederation resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static CustomUserFederation Get(string name, Input<string> id, CustomUserFederationState? state = null, CustomResourceOptions? options = null)
        {
            return new CustomUserFederation(name, id, state, options);
        }
    }

    public sealed class CustomUserFederationArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Can be one of `DEFAULT`, `EVICT_DAILY`, `EVICT_WEEKLY`, `MAX_LIFESPAN`, or `NO_CACHE`. Defaults to `DEFAULT`.
        /// </summary>
        [Input("cachePolicy")]
        public Input<string>? CachePolicy { get; set; }

        [Input("config")]
        private InputMap<object>? _config;

        /// <summary>
        /// The provider configuration handed over to your custom user federation provider.
        /// </summary>
        public InputMap<object> Config
        {
            get => _config ?? (_config = new InputMap<object>());
            set => _config = value;
        }

        /// <summary>
        /// When `false`, this provider will not be used when performing queries for users. Defaults to `true`.
        /// </summary>
        [Input("enabled")]
        public Input<bool>? Enabled { get; set; }

        /// <summary>
        /// Display name of the provider when displayed in the console.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// Must be set to the realms' `internal_id`  when it differs from the realm. This can happen when existing resources are imported into the state.
        /// </summary>
        [Input("parentId")]
        public Input<string>? ParentId { get; set; }

        /// <summary>
        /// Priority of this provider when looking up users. Lower values are first. Defaults to `0`.
        /// </summary>
        [Input("priority")]
        public Input<int>? Priority { get; set; }

        /// <summary>
        /// The unique ID of the custom provider, specified in the `getId` implementation for the `UserStorageProviderFactory` interface.
        /// </summary>
        [Input("providerId", required: true)]
        public Input<string> ProviderId { get; set; } = null!;

        /// <summary>
        /// The realm that this provider will provide user federation for.
        /// </summary>
        [Input("realmId", required: true)]
        public Input<string> RealmId { get; set; } = null!;

        public CustomUserFederationArgs()
        {
        }
    }

    public sealed class CustomUserFederationState : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Can be one of `DEFAULT`, `EVICT_DAILY`, `EVICT_WEEKLY`, `MAX_LIFESPAN`, or `NO_CACHE`. Defaults to `DEFAULT`.
        /// </summary>
        [Input("cachePolicy")]
        public Input<string>? CachePolicy { get; set; }

        [Input("config")]
        private InputMap<object>? _config;

        /// <summary>
        /// The provider configuration handed over to your custom user federation provider.
        /// </summary>
        public InputMap<object> Config
        {
            get => _config ?? (_config = new InputMap<object>());
            set => _config = value;
        }

        /// <summary>
        /// When `false`, this provider will not be used when performing queries for users. Defaults to `true`.
        /// </summary>
        [Input("enabled")]
        public Input<bool>? Enabled { get; set; }

        /// <summary>
        /// Display name of the provider when displayed in the console.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// Must be set to the realms' `internal_id`  when it differs from the realm. This can happen when existing resources are imported into the state.
        /// </summary>
        [Input("parentId")]
        public Input<string>? ParentId { get; set; }

        /// <summary>
        /// Priority of this provider when looking up users. Lower values are first. Defaults to `0`.
        /// </summary>
        [Input("priority")]
        public Input<int>? Priority { get; set; }

        /// <summary>
        /// The unique ID of the custom provider, specified in the `getId` implementation for the `UserStorageProviderFactory` interface.
        /// </summary>
        [Input("providerId")]
        public Input<string>? ProviderId { get; set; }

        /// <summary>
        /// The realm that this provider will provide user federation for.
        /// </summary>
        [Input("realmId")]
        public Input<string>? RealmId { get; set; }

        public CustomUserFederationState()
        {
        }
    }
}
