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
    /// Allows for creating and managing roles within Keycloak.
    /// 
    /// Roles allow you define privileges within Keycloak and map them to users and groups.
    /// 
    /// ## Example Usage
    /// ### Realm Role)
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
    ///         var realmRole = new Keycloak.Role("realmRole", new Keycloak.RoleArgs
    ///         {
    ///             RealmId = realm.Id,
    ///             Description = "My Realm Role",
    ///         });
    ///     }
    /// 
    /// }
    /// ```
    /// ### Client Role)
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
    ///         var openidClient = new Keycloak.OpenId.Client("openidClient", new Keycloak.OpenId.ClientArgs
    ///         {
    ///             RealmId = realm.Id,
    ///             ClientId = "client",
    ///             Enabled = true,
    ///             AccessType = "CONFIDENTIAL",
    ///             ValidRedirectUris = 
    ///             {
    ///                 "http://localhost:8080/openid-callback",
    ///             },
    ///         });
    ///         var clientRole = new Keycloak.Role("clientRole", new Keycloak.RoleArgs
    ///         {
    ///             RealmId = realm.Id,
    ///             ClientId = keycloak_client.Openid_client.Id,
    ///             Description = "My Client Role",
    ///         });
    ///     }
    /// 
    /// }
    /// ```
    /// ### Composite Role)
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
    ///         // realm roles
    ///         var createRole = new Keycloak.Role("createRole", new Keycloak.RoleArgs
    ///         {
    ///             RealmId = realm.Id,
    ///         });
    ///         var readRole = new Keycloak.Role("readRole", new Keycloak.RoleArgs
    ///         {
    ///             RealmId = realm.Id,
    ///         });
    ///         var updateRole = new Keycloak.Role("updateRole", new Keycloak.RoleArgs
    ///         {
    ///             RealmId = realm.Id,
    ///         });
    ///         var deleteRole = new Keycloak.Role("deleteRole", new Keycloak.RoleArgs
    ///         {
    ///             RealmId = realm.Id,
    ///         });
    ///         // client role
    ///         var openidClient = new Keycloak.OpenId.Client("openidClient", new Keycloak.OpenId.ClientArgs
    ///         {
    ///             RealmId = realm.Id,
    ///             ClientId = "client",
    ///             Enabled = true,
    ///             AccessType = "CONFIDENTIAL",
    ///             ValidRedirectUris = 
    ///             {
    ///                 "http://localhost:8080/openid-callback",
    ///             },
    ///         });
    ///         var clientRole = new Keycloak.Role("clientRole", new Keycloak.RoleArgs
    ///         {
    ///             RealmId = realm.Id,
    ///             ClientId = keycloak_client.Openid_client.Id,
    ///             Description = "My Client Role",
    ///         });
    ///         var adminRole = new Keycloak.Role("adminRole", new Keycloak.RoleArgs
    ///         {
    ///             RealmId = realm.Id,
    ///             CompositeRoles = 
    ///             {
    ///                 createRole.Id,
    ///                 readRole.Id,
    ///                 updateRole.Id,
    ///                 deleteRole.Id,
    ///                 clientRole.Id,
    ///             },
    ///         });
    ///     }
    /// 
    /// }
    /// ```
    /// </summary>
    public partial class Role : Pulumi.CustomResource
    {
        /// <summary>
        /// When specified, this role will be created as a client role attached to the client with the provided ID
        /// </summary>
        [Output("clientId")]
        public Output<string?> ClientId { get; private set; } = null!;

        /// <summary>
        /// When specified, this role will be a composite role, composed of all roles that have an ID present within this list.
        /// </summary>
        [Output("compositeRoles")]
        public Output<ImmutableArray<string>> CompositeRoles { get; private set; } = null!;

        /// <summary>
        /// The description of the role
        /// </summary>
        [Output("description")]
        public Output<string?> Description { get; private set; } = null!;

        /// <summary>
        /// The name of the role
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// The realm this role exists within.
        /// </summary>
        [Output("realmId")]
        public Output<string> RealmId { get; private set; } = null!;


        /// <summary>
        /// Create a Role resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public Role(string name, RoleArgs args, CustomResourceOptions? options = null)
            : base("keycloak:index/role:Role", name, args ?? new RoleArgs(), MakeResourceOptions(options, ""))
        {
        }

        private Role(string name, Input<string> id, RoleState? state = null, CustomResourceOptions? options = null)
            : base("keycloak:index/role:Role", name, state, MakeResourceOptions(options, id))
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
        /// Get an existing Role resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static Role Get(string name, Input<string> id, RoleState? state = null, CustomResourceOptions? options = null)
        {
            return new Role(name, id, state, options);
        }
    }

    public sealed class RoleArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// When specified, this role will be created as a client role attached to the client with the provided ID
        /// </summary>
        [Input("clientId")]
        public Input<string>? ClientId { get; set; }

        [Input("compositeRoles")]
        private InputList<string>? _compositeRoles;

        /// <summary>
        /// When specified, this role will be a composite role, composed of all roles that have an ID present within this list.
        /// </summary>
        public InputList<string> CompositeRoles
        {
            get => _compositeRoles ?? (_compositeRoles = new InputList<string>());
            set => _compositeRoles = value;
        }

        /// <summary>
        /// The description of the role
        /// </summary>
        [Input("description")]
        public Input<string>? Description { get; set; }

        /// <summary>
        /// The name of the role
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// The realm this role exists within.
        /// </summary>
        [Input("realmId", required: true)]
        public Input<string> RealmId { get; set; } = null!;

        public RoleArgs()
        {
        }
    }

    public sealed class RoleState : Pulumi.ResourceArgs
    {
        /// <summary>
        /// When specified, this role will be created as a client role attached to the client with the provided ID
        /// </summary>
        [Input("clientId")]
        public Input<string>? ClientId { get; set; }

        [Input("compositeRoles")]
        private InputList<string>? _compositeRoles;

        /// <summary>
        /// When specified, this role will be a composite role, composed of all roles that have an ID present within this list.
        /// </summary>
        public InputList<string> CompositeRoles
        {
            get => _compositeRoles ?? (_compositeRoles = new InputList<string>());
            set => _compositeRoles = value;
        }

        /// <summary>
        /// The description of the role
        /// </summary>
        [Input("description")]
        public Input<string>? Description { get; set; }

        /// <summary>
        /// The name of the role
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// The realm this role exists within.
        /// </summary>
        [Input("realmId")]
        public Input<string>? RealmId { get; set; }

        public RoleState()
        {
        }
    }
}
