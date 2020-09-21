// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Keycloak.Authentication
{
    /// <summary>
    /// ## # keycloak.authentication.Execution
    /// 
    /// Allows for managing an authentication execution.
    /// 
    /// ### Example Usage
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
    ///             Enabled = true,
    ///             Realm = "my-realm",
    ///         });
    ///         var flow = new Keycloak.Authentication.Flow("flow", new Keycloak.Authentication.FlowArgs
    ///         {
    ///             Alias = "my-flow-alias",
    ///             RealmId = realm.Id,
    ///         });
    ///         var execution = new Keycloak.Authentication.Execution("execution", new Keycloak.Authentication.ExecutionArgs
    ///         {
    ///             Authenticator = "identity-provider-redirector",
    ///             ParentFlowAlias = flow.Alias,
    ///             RealmId = realm.Id,
    ///             Requirement = "REQUIRED",
    ///         });
    ///     }
    /// 
    /// }
    /// ```
    /// 
    /// ### Argument Reference
    /// 
    /// The following arguments are supported:
    /// 
    /// - `realm_id` - (Required) The realm the authentication execution exists in.
    /// - `parent_flow_alias` - (Required) The flow this execution is attached to.
    /// - `authenticator` - (Required) The name of the authenticator.
    /// - `requirement`- (Optional) The requirement setting, which can be one of the following:
    ///   - - `REQUIRED`
    ///   - - `ALTERNATIVE`
    ///   - - `DISABLED`
    /// </summary>
    public partial class Execution : Pulumi.CustomResource
    {
        [Output("authenticator")]
        public Output<string> Authenticator { get; private set; } = null!;

        [Output("parentFlowAlias")]
        public Output<string> ParentFlowAlias { get; private set; } = null!;

        [Output("realmId")]
        public Output<string> RealmId { get; private set; } = null!;

        [Output("requirement")]
        public Output<string?> Requirement { get; private set; } = null!;


        /// <summary>
        /// Create a Execution resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public Execution(string name, ExecutionArgs args, CustomResourceOptions? options = null)
            : base("keycloak:authentication/execution:Execution", name, args ?? new ExecutionArgs(), MakeResourceOptions(options, ""))
        {
        }

        private Execution(string name, Input<string> id, ExecutionState? state = null, CustomResourceOptions? options = null)
            : base("keycloak:authentication/execution:Execution", name, state, MakeResourceOptions(options, id))
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
        /// Get an existing Execution resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static Execution Get(string name, Input<string> id, ExecutionState? state = null, CustomResourceOptions? options = null)
        {
            return new Execution(name, id, state, options);
        }
    }

    public sealed class ExecutionArgs : Pulumi.ResourceArgs
    {
        [Input("authenticator", required: true)]
        public Input<string> Authenticator { get; set; } = null!;

        [Input("parentFlowAlias", required: true)]
        public Input<string> ParentFlowAlias { get; set; } = null!;

        [Input("realmId", required: true)]
        public Input<string> RealmId { get; set; } = null!;

        [Input("requirement")]
        public Input<string>? Requirement { get; set; }

        public ExecutionArgs()
        {
        }
    }

    public sealed class ExecutionState : Pulumi.ResourceArgs
    {
        [Input("authenticator")]
        public Input<string>? Authenticator { get; set; }

        [Input("parentFlowAlias")]
        public Input<string>? ParentFlowAlias { get; set; }

        [Input("realmId")]
        public Input<string>? RealmId { get; set; }

        [Input("requirement")]
        public Input<string>? Requirement { get; set; }

        public ExecutionState()
        {
        }
    }
}
