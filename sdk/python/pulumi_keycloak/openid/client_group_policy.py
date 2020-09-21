# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from .. import _utilities, _tables
from . import outputs
from ._inputs import *

__all__ = ['ClientGroupPolicy']


class ClientGroupPolicy(pulumi.CustomResource):
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 decision_strategy: Optional[pulumi.Input[str]] = None,
                 description: Optional[pulumi.Input[str]] = None,
                 groups: Optional[pulumi.Input[Sequence[pulumi.Input[pulumi.InputType['ClientGroupPolicyGroupArgs']]]]] = None,
                 groups_claim: Optional[pulumi.Input[str]] = None,
                 logic: Optional[pulumi.Input[str]] = None,
                 name: Optional[pulumi.Input[str]] = None,
                 realm_id: Optional[pulumi.Input[str]] = None,
                 resource_server_id: Optional[pulumi.Input[str]] = None,
                 __props__=None,
                 __name__=None,
                 __opts__=None):
        """
        Create a ClientGroupPolicy resource with the given unique name, props, and options.
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
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

            if decision_strategy is None:
                raise TypeError("Missing required property 'decision_strategy'")
            __props__['decision_strategy'] = decision_strategy
            __props__['description'] = description
            if groups is None:
                raise TypeError("Missing required property 'groups'")
            __props__['groups'] = groups
            __props__['groups_claim'] = groups_claim
            __props__['logic'] = logic
            __props__['name'] = name
            if realm_id is None:
                raise TypeError("Missing required property 'realm_id'")
            __props__['realm_id'] = realm_id
            if resource_server_id is None:
                raise TypeError("Missing required property 'resource_server_id'")
            __props__['resource_server_id'] = resource_server_id
        super(ClientGroupPolicy, __self__).__init__(
            'keycloak:openid/clientGroupPolicy:ClientGroupPolicy',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name: str,
            id: pulumi.Input[str],
            opts: Optional[pulumi.ResourceOptions] = None,
            decision_strategy: Optional[pulumi.Input[str]] = None,
            description: Optional[pulumi.Input[str]] = None,
            groups: Optional[pulumi.Input[Sequence[pulumi.Input[pulumi.InputType['ClientGroupPolicyGroupArgs']]]]] = None,
            groups_claim: Optional[pulumi.Input[str]] = None,
            logic: Optional[pulumi.Input[str]] = None,
            name: Optional[pulumi.Input[str]] = None,
            realm_id: Optional[pulumi.Input[str]] = None,
            resource_server_id: Optional[pulumi.Input[str]] = None) -> 'ClientGroupPolicy':
        """
        Get an existing ClientGroupPolicy resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param pulumi.Input[str] id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        __props__["decision_strategy"] = decision_strategy
        __props__["description"] = description
        __props__["groups"] = groups
        __props__["groups_claim"] = groups_claim
        __props__["logic"] = logic
        __props__["name"] = name
        __props__["realm_id"] = realm_id
        __props__["resource_server_id"] = resource_server_id
        return ClientGroupPolicy(resource_name, opts=opts, __props__=__props__)

    @property
    @pulumi.getter(name="decisionStrategy")
    def decision_strategy(self) -> pulumi.Output[str]:
        return pulumi.get(self, "decision_strategy")

    @property
    @pulumi.getter
    def description(self) -> pulumi.Output[Optional[str]]:
        return pulumi.get(self, "description")

    @property
    @pulumi.getter
    def groups(self) -> pulumi.Output[Sequence['outputs.ClientGroupPolicyGroup']]:
        return pulumi.get(self, "groups")

    @property
    @pulumi.getter(name="groupsClaim")
    def groups_claim(self) -> pulumi.Output[Optional[str]]:
        return pulumi.get(self, "groups_claim")

    @property
    @pulumi.getter
    def logic(self) -> pulumi.Output[Optional[str]]:
        return pulumi.get(self, "logic")

    @property
    @pulumi.getter
    def name(self) -> pulumi.Output[str]:
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="realmId")
    def realm_id(self) -> pulumi.Output[str]:
        return pulumi.get(self, "realm_id")

    @property
    @pulumi.getter(name="resourceServerId")
    def resource_server_id(self) -> pulumi.Output[str]:
        return pulumi.get(self, "resource_server_id")

    def translate_output_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return _tables.SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

