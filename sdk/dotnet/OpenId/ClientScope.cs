// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Keycloak.OpenId
{
    /// <summary>
    /// Allows for creating and managing Keycloak client scopes that can be attached to clients that use the OpenID Connect protocol.
    /// 
    /// Client Scopes can be used to share common protocol and role mappings between multiple clients within a realm. They can also
    /// be used by clients to conditionally request claims or roles for a user based on the OAuth 2.0 `scope` parameter.
    /// 
    /// ## Example Usage
    /// 
    /// ```csharp
    /// using Pulumi;
    /// using Keycloak = Pulumi.Keycloak;
    /// 
    /// class MyStack : Stack
    /// {
    ///     public MyStack()
    ///     {
    ///         var realm = new Keycloak.Realm("realm", new Keycloak.RealmArgs
    ///         {
    ///             Realm = "my-realm",
    ///             Enabled = true,
    ///         });
    ///         var openidClientScope = new Keycloak.OpenId.ClientScope("openidClientScope", new Keycloak.OpenId.ClientScopeArgs
    ///         {
    ///             RealmId = realm.Id,
    ///             Description = "When requested, this scope will map a user's group memberships to a claim",
    ///             IncludeInTokenScope = true,
    ///             GuiOrder = 1,
    ///         });
    ///     }
    /// 
    /// }
    /// ```
    /// </summary>
    public partial class ClientScope : Pulumi.CustomResource
    {
        /// <summary>
        /// When set, a consent screen will be displayed to users authenticating to clients with this scope attached. The consent screen will display the string value of this attribute.
        /// </summary>
        [Output("consentScreenText")]
        public Output<string?> ConsentScreenText { get; private set; } = null!;

        /// <summary>
        /// The description of this client scope in the GUI.
        /// </summary>
        [Output("description")]
        public Output<string?> Description { get; private set; } = null!;

        /// <summary>
        /// Specify order of the client scope in GUI (such as in Consent page) as integer.
        /// </summary>
        [Output("guiOrder")]
        public Output<int?> GuiOrder { get; private set; } = null!;

        /// <summary>
        /// When `true`, the name of this client scope will be added to the access token property 'scope' as well as to the Token Introspection Endpoint response.
        /// </summary>
        [Output("includeInTokenScope")]
        public Output<bool?> IncludeInTokenScope { get; private set; } = null!;

        /// <summary>
        /// The display name of this client scope in the GUI.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// The realm this client scope belongs to.
        /// </summary>
        [Output("realmId")]
        public Output<string> RealmId { get; private set; } = null!;


        /// <summary>
        /// Create a ClientScope resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public ClientScope(string name, ClientScopeArgs args, CustomResourceOptions? options = null)
            : base("keycloak:openid/clientScope:ClientScope", name, args ?? new ClientScopeArgs(), MakeResourceOptions(options, ""))
        {
        }

        private ClientScope(string name, Input<string> id, ClientScopeState? state = null, CustomResourceOptions? options = null)
            : base("keycloak:openid/clientScope:ClientScope", name, state, MakeResourceOptions(options, id))
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
        /// Get an existing ClientScope resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static ClientScope Get(string name, Input<string> id, ClientScopeState? state = null, CustomResourceOptions? options = null)
        {
            return new ClientScope(name, id, state, options);
        }
    }

    public sealed class ClientScopeArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// When set, a consent screen will be displayed to users authenticating to clients with this scope attached. The consent screen will display the string value of this attribute.
        /// </summary>
        [Input("consentScreenText")]
        public Input<string>? ConsentScreenText { get; set; }

        /// <summary>
        /// The description of this client scope in the GUI.
        /// </summary>
        [Input("description")]
        public Input<string>? Description { get; set; }

        /// <summary>
        /// Specify order of the client scope in GUI (such as in Consent page) as integer.
        /// </summary>
        [Input("guiOrder")]
        public Input<int>? GuiOrder { get; set; }

        /// <summary>
        /// When `true`, the name of this client scope will be added to the access token property 'scope' as well as to the Token Introspection Endpoint response.
        /// </summary>
        [Input("includeInTokenScope")]
        public Input<bool>? IncludeInTokenScope { get; set; }

        /// <summary>
        /// The display name of this client scope in the GUI.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// The realm this client scope belongs to.
        /// </summary>
        [Input("realmId", required: true)]
        public Input<string> RealmId { get; set; } = null!;

        public ClientScopeArgs()
        {
        }
    }

    public sealed class ClientScopeState : Pulumi.ResourceArgs
    {
        /// <summary>
        /// When set, a consent screen will be displayed to users authenticating to clients with this scope attached. The consent screen will display the string value of this attribute.
        /// </summary>
        [Input("consentScreenText")]
        public Input<string>? ConsentScreenText { get; set; }

        /// <summary>
        /// The description of this client scope in the GUI.
        /// </summary>
        [Input("description")]
        public Input<string>? Description { get; set; }

        /// <summary>
        /// Specify order of the client scope in GUI (such as in Consent page) as integer.
        /// </summary>
        [Input("guiOrder")]
        public Input<int>? GuiOrder { get; set; }

        /// <summary>
        /// When `true`, the name of this client scope will be added to the access token property 'scope' as well as to the Token Introspection Endpoint response.
        /// </summary>
        [Input("includeInTokenScope")]
        public Input<bool>? IncludeInTokenScope { get; set; }

        /// <summary>
        /// The display name of this client scope in the GUI.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// The realm this client scope belongs to.
        /// </summary>
        [Input("realmId")]
        public Input<string>? RealmId { get; set; }

        public ClientScopeState()
        {
        }
    }
}
