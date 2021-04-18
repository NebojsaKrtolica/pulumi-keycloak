# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union, overload
from . import _utilities

__all__ = ['GroupArgs', 'Group']

@pulumi.input_type
class GroupArgs:
    def __init__(__self__, *,
                 realm_id: pulumi.Input[str],
                 attributes: Optional[pulumi.Input[Mapping[str, Any]]] = None,
                 name: Optional[pulumi.Input[str]] = None,
                 parent_id: Optional[pulumi.Input[str]] = None):
        """
        The set of arguments for constructing a Group resource.
        :param pulumi.Input[str] realm_id: The realm this group exists in.
        :param pulumi.Input[Mapping[str, Any]] attributes: A map representing attributes for the group. In order to add multivalue attributes, use `##` to seperate the values. Max length for each value is 255 chars
        :param pulumi.Input[str] name: The name of the group.
        :param pulumi.Input[str] parent_id: The ID of this group's parent. If omitted, this group will be defined at the root level.
        """
        pulumi.set(__self__, "realm_id", realm_id)
        if attributes is not None:
            pulumi.set(__self__, "attributes", attributes)
        if name is not None:
            pulumi.set(__self__, "name", name)
        if parent_id is not None:
            pulumi.set(__self__, "parent_id", parent_id)

    @property
    @pulumi.getter(name="realmId")
    def realm_id(self) -> pulumi.Input[str]:
        """
        The realm this group exists in.
        """
        return pulumi.get(self, "realm_id")

    @realm_id.setter
    def realm_id(self, value: pulumi.Input[str]):
        pulumi.set(self, "realm_id", value)

    @property
    @pulumi.getter
    def attributes(self) -> Optional[pulumi.Input[Mapping[str, Any]]]:
        """
        A map representing attributes for the group. In order to add multivalue attributes, use `##` to seperate the values. Max length for each value is 255 chars
        """
        return pulumi.get(self, "attributes")

    @attributes.setter
    def attributes(self, value: Optional[pulumi.Input[Mapping[str, Any]]]):
        pulumi.set(self, "attributes", value)

    @property
    @pulumi.getter
    def name(self) -> Optional[pulumi.Input[str]]:
        """
        The name of the group.
        """
        return pulumi.get(self, "name")

    @name.setter
    def name(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "name", value)

    @property
    @pulumi.getter(name="parentId")
    def parent_id(self) -> Optional[pulumi.Input[str]]:
        """
        The ID of this group's parent. If omitted, this group will be defined at the root level.
        """
        return pulumi.get(self, "parent_id")

    @parent_id.setter
    def parent_id(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "parent_id", value)


@pulumi.input_type
class _GroupState:
    def __init__(__self__, *,
                 attributes: Optional[pulumi.Input[Mapping[str, Any]]] = None,
                 name: Optional[pulumi.Input[str]] = None,
                 parent_id: Optional[pulumi.Input[str]] = None,
                 path: Optional[pulumi.Input[str]] = None,
                 realm_id: Optional[pulumi.Input[str]] = None):
        """
        Input properties used for looking up and filtering Group resources.
        :param pulumi.Input[Mapping[str, Any]] attributes: A map representing attributes for the group. In order to add multivalue attributes, use `##` to seperate the values. Max length for each value is 255 chars
        :param pulumi.Input[str] name: The name of the group.
        :param pulumi.Input[str] parent_id: The ID of this group's parent. If omitted, this group will be defined at the root level.
        :param pulumi.Input[str] path: (Computed) The complete path of the group. For example, the child group's path in the example configuration would be `/parent-group/child-group`.
        :param pulumi.Input[str] realm_id: The realm this group exists in.
        """
        if attributes is not None:
            pulumi.set(__self__, "attributes", attributes)
        if name is not None:
            pulumi.set(__self__, "name", name)
        if parent_id is not None:
            pulumi.set(__self__, "parent_id", parent_id)
        if path is not None:
            pulumi.set(__self__, "path", path)
        if realm_id is not None:
            pulumi.set(__self__, "realm_id", realm_id)

    @property
    @pulumi.getter
    def attributes(self) -> Optional[pulumi.Input[Mapping[str, Any]]]:
        """
        A map representing attributes for the group. In order to add multivalue attributes, use `##` to seperate the values. Max length for each value is 255 chars
        """
        return pulumi.get(self, "attributes")

    @attributes.setter
    def attributes(self, value: Optional[pulumi.Input[Mapping[str, Any]]]):
        pulumi.set(self, "attributes", value)

    @property
    @pulumi.getter
    def name(self) -> Optional[pulumi.Input[str]]:
        """
        The name of the group.
        """
        return pulumi.get(self, "name")

    @name.setter
    def name(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "name", value)

    @property
    @pulumi.getter(name="parentId")
    def parent_id(self) -> Optional[pulumi.Input[str]]:
        """
        The ID of this group's parent. If omitted, this group will be defined at the root level.
        """
        return pulumi.get(self, "parent_id")

    @parent_id.setter
    def parent_id(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "parent_id", value)

    @property
    @pulumi.getter
    def path(self) -> Optional[pulumi.Input[str]]:
        """
        (Computed) The complete path of the group. For example, the child group's path in the example configuration would be `/parent-group/child-group`.
        """
        return pulumi.get(self, "path")

    @path.setter
    def path(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "path", value)

    @property
    @pulumi.getter(name="realmId")
    def realm_id(self) -> Optional[pulumi.Input[str]]:
        """
        The realm this group exists in.
        """
        return pulumi.get(self, "realm_id")

    @realm_id.setter
    def realm_id(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "realm_id", value)


class Group(pulumi.CustomResource):
    @overload
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 attributes: Optional[pulumi.Input[Mapping[str, Any]]] = None,
                 name: Optional[pulumi.Input[str]] = None,
                 parent_id: Optional[pulumi.Input[str]] = None,
                 realm_id: Optional[pulumi.Input[str]] = None,
                 __props__=None,
                 __name__=None,
                 __opts__=None):
        """
        Allows for creating and managing Groups within Keycloak.

        Groups provide a logical wrapping for users within Keycloak. Users within a group can share attributes and roles, and
        group membership can be mapped to a claim.

        Attributes can also be defined on Groups.

        Groups can also be federated from external data sources, such as LDAP or Active Directory. This resource **should not**
        be used to manage groups that were created this way.

        ## Example Usage

        ```python
        import pulumi
        import pulumi_keycloak as keycloak

        realm = keycloak.Realm("realm",
            realm="my-realm",
            enabled=True)
        parent_group = keycloak.Group("parentGroup", realm_id=realm.id)
        child_group = keycloak.Group("childGroup",
            realm_id=realm.id,
            parent_id=parent_group.id)
        child_group_with_optional_attributes = keycloak.Group("childGroupWithOptionalAttributes",
            realm_id=realm.id,
            parent_id=parent_group.id,
            attributes={
                "foo": "bar",
                "multivalue": "value1##value2",
            })
        ```

        ## Import

        Groups can be imported using the format `{{realm_id}}/{{group_id}}`, where `group_id` is the unique ID that Keycloak assigns to the group upon creation. This value can be found in the URI when editing this group in the GUI, and is typically a GUID. Examplebash

        ```sh
         $ pulumi import keycloak:index/group:Group child_group my-realm/934a4a4e-28bd-4703-a0fa-332df153aabd
        ```

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[Mapping[str, Any]] attributes: A map representing attributes for the group. In order to add multivalue attributes, use `##` to seperate the values. Max length for each value is 255 chars
        :param pulumi.Input[str] name: The name of the group.
        :param pulumi.Input[str] parent_id: The ID of this group's parent. If omitted, this group will be defined at the root level.
        :param pulumi.Input[str] realm_id: The realm this group exists in.
        """
        ...
    @overload
    def __init__(__self__,
                 resource_name: str,
                 args: GroupArgs,
                 opts: Optional[pulumi.ResourceOptions] = None):
        """
        Allows for creating and managing Groups within Keycloak.

        Groups provide a logical wrapping for users within Keycloak. Users within a group can share attributes and roles, and
        group membership can be mapped to a claim.

        Attributes can also be defined on Groups.

        Groups can also be federated from external data sources, such as LDAP or Active Directory. This resource **should not**
        be used to manage groups that were created this way.

        ## Example Usage

        ```python
        import pulumi
        import pulumi_keycloak as keycloak

        realm = keycloak.Realm("realm",
            realm="my-realm",
            enabled=True)
        parent_group = keycloak.Group("parentGroup", realm_id=realm.id)
        child_group = keycloak.Group("childGroup",
            realm_id=realm.id,
            parent_id=parent_group.id)
        child_group_with_optional_attributes = keycloak.Group("childGroupWithOptionalAttributes",
            realm_id=realm.id,
            parent_id=parent_group.id,
            attributes={
                "foo": "bar",
                "multivalue": "value1##value2",
            })
        ```

        ## Import

        Groups can be imported using the format `{{realm_id}}/{{group_id}}`, where `group_id` is the unique ID that Keycloak assigns to the group upon creation. This value can be found in the URI when editing this group in the GUI, and is typically a GUID. Examplebash

        ```sh
         $ pulumi import keycloak:index/group:Group child_group my-realm/934a4a4e-28bd-4703-a0fa-332df153aabd
        ```

        :param str resource_name: The name of the resource.
        :param GroupArgs args: The arguments to use to populate this resource's properties.
        :param pulumi.ResourceOptions opts: Options for the resource.
        """
        ...
    def __init__(__self__, resource_name: str, *args, **kwargs):
        resource_args, opts = _utilities.get_resource_args_opts(GroupArgs, pulumi.ResourceOptions, *args, **kwargs)
        if resource_args is not None:
            __self__._internal_init(resource_name, opts, **resource_args.__dict__)
        else:
            __self__._internal_init(resource_name, *args, **kwargs)

    def _internal_init(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 attributes: Optional[pulumi.Input[Mapping[str, Any]]] = None,
                 name: Optional[pulumi.Input[str]] = None,
                 parent_id: Optional[pulumi.Input[str]] = None,
                 realm_id: Optional[pulumi.Input[str]] = None,
                 __props__=None,
                 __name__=None,
                 __opts__=None):
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
            __props__ = GroupArgs.__new__(GroupArgs)

            __props__.__dict__["attributes"] = attributes
            __props__.__dict__["name"] = name
            __props__.__dict__["parent_id"] = parent_id
            if realm_id is None and not opts.urn:
                raise TypeError("Missing required property 'realm_id'")
            __props__.__dict__["realm_id"] = realm_id
            __props__.__dict__["path"] = None
        super(Group, __self__).__init__(
            'keycloak:index/group:Group',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name: str,
            id: pulumi.Input[str],
            opts: Optional[pulumi.ResourceOptions] = None,
            attributes: Optional[pulumi.Input[Mapping[str, Any]]] = None,
            name: Optional[pulumi.Input[str]] = None,
            parent_id: Optional[pulumi.Input[str]] = None,
            path: Optional[pulumi.Input[str]] = None,
            realm_id: Optional[pulumi.Input[str]] = None) -> 'Group':
        """
        Get an existing Group resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param pulumi.Input[str] id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[Mapping[str, Any]] attributes: A map representing attributes for the group. In order to add multivalue attributes, use `##` to seperate the values. Max length for each value is 255 chars
        :param pulumi.Input[str] name: The name of the group.
        :param pulumi.Input[str] parent_id: The ID of this group's parent. If omitted, this group will be defined at the root level.
        :param pulumi.Input[str] path: (Computed) The complete path of the group. For example, the child group's path in the example configuration would be `/parent-group/child-group`.
        :param pulumi.Input[str] realm_id: The realm this group exists in.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = _GroupState.__new__(_GroupState)

        __props__.__dict__["attributes"] = attributes
        __props__.__dict__["name"] = name
        __props__.__dict__["parent_id"] = parent_id
        __props__.__dict__["path"] = path
        __props__.__dict__["realm_id"] = realm_id
        return Group(resource_name, opts=opts, __props__=__props__)

    @property
    @pulumi.getter
    def attributes(self) -> pulumi.Output[Optional[Mapping[str, Any]]]:
        """
        A map representing attributes for the group. In order to add multivalue attributes, use `##` to seperate the values. Max length for each value is 255 chars
        """
        return pulumi.get(self, "attributes")

    @property
    @pulumi.getter
    def name(self) -> pulumi.Output[str]:
        """
        The name of the group.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="parentId")
    def parent_id(self) -> pulumi.Output[Optional[str]]:
        """
        The ID of this group's parent. If omitted, this group will be defined at the root level.
        """
        return pulumi.get(self, "parent_id")

    @property
    @pulumi.getter
    def path(self) -> pulumi.Output[str]:
        """
        (Computed) The complete path of the group. For example, the child group's path in the example configuration would be `/parent-group/child-group`.
        """
        return pulumi.get(self, "path")

    @property
    @pulumi.getter(name="realmId")
    def realm_id(self) -> pulumi.Output[str]:
        """
        The realm this group exists in.
        """
        return pulumi.get(self, "realm_id")

