# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Union
from . import utilities, tables


class IdentityProviderTokenExchangeScopePermission(pulumi.CustomResource):
    authorization_idp_resource_id: pulumi.Output[str]
    """
    Resource id representing the identity provider, this automatically created by keycloak
    """
    authorization_resource_server_id: pulumi.Output[str]
    """
    Resource server id representing the realm management client on which this permission is managed
    """
    authorization_token_exchange_scope_permission_id: pulumi.Output[str]
    """
    Permission id representing the Permission with scope 'Token Exchange' and the resource 'authorization_idp_resource_id',
    this automatically created by keycloak, the policy id will be set on this permission
    """
    clients: pulumi.Output[list]
    """
    Ids of the clients for which a policy will be created and set on scope based token exchange permission
    """
    policy_id: pulumi.Output[str]
    """
    Policy id that will be set on the scope based token exchange permission automatically created by enabling permissions on
    the reference identity provider
    """
    policy_type: pulumi.Output[str]
    """
    Type of policy that is created. At the moment only 'client' type is supported
    """
    provider_alias: pulumi.Output[str]
    realm_id: pulumi.Output[str]
    def __init__(__self__, resource_name, opts=None, clients=None, policy_type=None, provider_alias=None, realm_id=None, __props__=None, __name__=None, __opts__=None):
        """
        Create a IdentityProviderTokenExchangeScopePermission resource with the given unique name, props, and options.
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[list] clients: Ids of the clients for which a policy will be created and set on scope based token exchange permission
        :param pulumi.Input[str] policy_type: Type of policy that is created. At the moment only 'client' type is supported
        """
        if __name__ is not None:
            warnings.warn("explicit use of __name__ is deprecated", DeprecationWarning)
            resource_name = __name__
        if __opts__ is not None:
            warnings.warn("explicit use of __opts__ is deprecated, use 'opts' instead", DeprecationWarning)
            opts = __opts__
        if opts is None:
            opts = pulumi.ResourceOptions()
        if not isinstance(opts, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')
        if opts.version is None:
            opts.version = utilities.get_version()
        if opts.id is None:
            if __props__ is not None:
                raise TypeError('__props__ is only valid when passed in combination with a valid opts.id to get an existing resource')
            __props__ = dict()

            if clients is None:
                raise TypeError("Missing required property 'clients'")
            __props__['clients'] = clients
            __props__['policy_type'] = policy_type
            if provider_alias is None:
                raise TypeError("Missing required property 'provider_alias'")
            __props__['provider_alias'] = provider_alias
            if realm_id is None:
                raise TypeError("Missing required property 'realm_id'")
            __props__['realm_id'] = realm_id
            __props__['authorization_idp_resource_id'] = None
            __props__['authorization_resource_server_id'] = None
            __props__['authorization_token_exchange_scope_permission_id'] = None
            __props__['policy_id'] = None
        super(IdentityProviderTokenExchangeScopePermission, __self__).__init__(
            'keycloak:index/identityProviderTokenExchangeScopePermission:IdentityProviderTokenExchangeScopePermission',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, authorization_idp_resource_id=None, authorization_resource_server_id=None, authorization_token_exchange_scope_permission_id=None, clients=None, policy_id=None, policy_type=None, provider_alias=None, realm_id=None):
        """
        Get an existing IdentityProviderTokenExchangeScopePermission resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] authorization_idp_resource_id: Resource id representing the identity provider, this automatically created by keycloak
        :param pulumi.Input[str] authorization_resource_server_id: Resource server id representing the realm management client on which this permission is managed
        :param pulumi.Input[str] authorization_token_exchange_scope_permission_id: Permission id representing the Permission with scope 'Token Exchange' and the resource 'authorization_idp_resource_id',
               this automatically created by keycloak, the policy id will be set on this permission
        :param pulumi.Input[list] clients: Ids of the clients for which a policy will be created and set on scope based token exchange permission
        :param pulumi.Input[str] policy_id: Policy id that will be set on the scope based token exchange permission automatically created by enabling permissions on
               the reference identity provider
        :param pulumi.Input[str] policy_type: Type of policy that is created. At the moment only 'client' type is supported
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        __props__["authorization_idp_resource_id"] = authorization_idp_resource_id
        __props__["authorization_resource_server_id"] = authorization_resource_server_id
        __props__["authorization_token_exchange_scope_permission_id"] = authorization_token_exchange_scope_permission_id
        __props__["clients"] = clients
        __props__["policy_id"] = policy_id
        __props__["policy_type"] = policy_type
        __props__["provider_alias"] = provider_alias
        __props__["realm_id"] = realm_id
        return IdentityProviderTokenExchangeScopePermission(resource_name, opts=opts, __props__=__props__)

    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop
