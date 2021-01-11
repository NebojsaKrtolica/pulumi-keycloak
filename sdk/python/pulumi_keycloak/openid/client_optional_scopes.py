# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from .. import _utilities, _tables

__all__ = ['ClientOptionalScopes']


class ClientOptionalScopes(pulumi.CustomResource):
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 client_id: Optional[pulumi.Input[str]] = None,
                 optional_scopes: Optional[pulumi.Input[Sequence[pulumi.Input[str]]]] = None,
                 realm_id: Optional[pulumi.Input[str]] = None,
                 __props__=None,
                 __name__=None,
                 __opts__=None):
        """
        ## Import

        This resource does not support import. Instead of importing, feel free to create this resource as if it did not already exist on the server.

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] client_id: The ID of the client to attach optional scopes to. Note that this is the unique ID of the client generated by Keycloak.
        :param pulumi.Input[Sequence[pulumi.Input[str]]] optional_scopes: An array of client scope names to attach to this client as optional scopes.
        :param pulumi.Input[str] realm_id: The realm this client and scopes exists in.
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
            opts.version = _utilities.get_version()
        if opts.id is None:
            if __props__ is not None:
                raise TypeError('__props__ is only valid when passed in combination with a valid opts.id to get an existing resource')
            __props__ = dict()

            if client_id is None and not opts.urn:
                raise TypeError("Missing required property 'client_id'")
            __props__['client_id'] = client_id
            if optional_scopes is None and not opts.urn:
                raise TypeError("Missing required property 'optional_scopes'")
            __props__['optional_scopes'] = optional_scopes
            if realm_id is None and not opts.urn:
                raise TypeError("Missing required property 'realm_id'")
            __props__['realm_id'] = realm_id
        super(ClientOptionalScopes, __self__).__init__(
            'keycloak:openid/clientOptionalScopes:ClientOptionalScopes',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name: str,
            id: pulumi.Input[str],
            opts: Optional[pulumi.ResourceOptions] = None,
            client_id: Optional[pulumi.Input[str]] = None,
            optional_scopes: Optional[pulumi.Input[Sequence[pulumi.Input[str]]]] = None,
            realm_id: Optional[pulumi.Input[str]] = None) -> 'ClientOptionalScopes':
        """
        Get an existing ClientOptionalScopes resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param pulumi.Input[str] id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] client_id: The ID of the client to attach optional scopes to. Note that this is the unique ID of the client generated by Keycloak.
        :param pulumi.Input[Sequence[pulumi.Input[str]]] optional_scopes: An array of client scope names to attach to this client as optional scopes.
        :param pulumi.Input[str] realm_id: The realm this client and scopes exists in.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        __props__["client_id"] = client_id
        __props__["optional_scopes"] = optional_scopes
        __props__["realm_id"] = realm_id
        return ClientOptionalScopes(resource_name, opts=opts, __props__=__props__)

    @property
    @pulumi.getter(name="clientId")
    def client_id(self) -> pulumi.Output[str]:
        """
        The ID of the client to attach optional scopes to. Note that this is the unique ID of the client generated by Keycloak.
        """
        return pulumi.get(self, "client_id")

    @property
    @pulumi.getter(name="optionalScopes")
    def optional_scopes(self) -> pulumi.Output[Sequence[str]]:
        """
        An array of client scope names to attach to this client as optional scopes.
        """
        return pulumi.get(self, "optional_scopes")

    @property
    @pulumi.getter(name="realmId")
    def realm_id(self) -> pulumi.Output[str]:
        """
        The realm this client and scopes exists in.
        """
        return pulumi.get(self, "realm_id")

    def translate_output_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return _tables.SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

