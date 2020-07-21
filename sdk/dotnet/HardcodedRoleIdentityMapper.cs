// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Keycloak
{
    public partial class HardcodedRoleIdentityMapper : Pulumi.CustomResource
    {
        [Output("extraConfig")]
        public Output<ImmutableDictionary<string, object>?> ExtraConfig { get; private set; } = null!;

        /// <summary>
        /// IDP Alias
        /// </summary>
        [Output("identityProviderAlias")]
        public Output<string> IdentityProviderAlias { get; private set; } = null!;

        /// <summary>
        /// IDP Mapper Name
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// Realm Name
        /// </summary>
        [Output("realm")]
        public Output<string> Realm { get; private set; } = null!;

        /// <summary>
        /// Role Name
        /// </summary>
        [Output("role")]
        public Output<string?> Role { get; private set; } = null!;


        /// <summary>
        /// Create a HardcodedRoleIdentityMapper resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public HardcodedRoleIdentityMapper(string name, HardcodedRoleIdentityMapperArgs args, CustomResourceOptions? options = null)
            : base("keycloak:index/hardcodedRoleIdentityMapper:HardcodedRoleIdentityMapper", name, args ?? new HardcodedRoleIdentityMapperArgs(), MakeResourceOptions(options, ""))
        {
        }

        private HardcodedRoleIdentityMapper(string name, Input<string> id, HardcodedRoleIdentityMapperState? state = null, CustomResourceOptions? options = null)
            : base("keycloak:index/hardcodedRoleIdentityMapper:HardcodedRoleIdentityMapper", name, state, MakeResourceOptions(options, id))
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
        /// Get an existing HardcodedRoleIdentityMapper resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static HardcodedRoleIdentityMapper Get(string name, Input<string> id, HardcodedRoleIdentityMapperState? state = null, CustomResourceOptions? options = null)
        {
            return new HardcodedRoleIdentityMapper(name, id, state, options);
        }
    }

    public sealed class HardcodedRoleIdentityMapperArgs : Pulumi.ResourceArgs
    {
        [Input("extraConfig")]
        private InputMap<object>? _extraConfig;
        public InputMap<object> ExtraConfig
        {
            get => _extraConfig ?? (_extraConfig = new InputMap<object>());
            set => _extraConfig = value;
        }

        /// <summary>
        /// IDP Alias
        /// </summary>
        [Input("identityProviderAlias", required: true)]
        public Input<string> IdentityProviderAlias { get; set; } = null!;

        /// <summary>
        /// IDP Mapper Name
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// Realm Name
        /// </summary>
        [Input("realm", required: true)]
        public Input<string> Realm { get; set; } = null!;

        /// <summary>
        /// Role Name
        /// </summary>
        [Input("role")]
        public Input<string>? Role { get; set; }

        public HardcodedRoleIdentityMapperArgs()
        {
        }
    }

    public sealed class HardcodedRoleIdentityMapperState : Pulumi.ResourceArgs
    {
        [Input("extraConfig")]
        private InputMap<object>? _extraConfig;
        public InputMap<object> ExtraConfig
        {
            get => _extraConfig ?? (_extraConfig = new InputMap<object>());
            set => _extraConfig = value;
        }

        /// <summary>
        /// IDP Alias
        /// </summary>
        [Input("identityProviderAlias")]
        public Input<string>? IdentityProviderAlias { get; set; }

        /// <summary>
        /// IDP Mapper Name
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// Realm Name
        /// </summary>
        [Input("realm")]
        public Input<string>? Realm { get; set; }

        /// <summary>
        /// Role Name
        /// </summary>
        [Input("role")]
        public Input<string>? Role { get; set; }

        public HardcodedRoleIdentityMapperState()
        {
        }
    }
}
