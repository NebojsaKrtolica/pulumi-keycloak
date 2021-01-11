# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from .. import _utilities, _tables

__all__ = ['MsadLdsUserAccountControlMapper']


class MsadLdsUserAccountControlMapper(pulumi.CustomResource):
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 ldap_user_federation_id: Optional[pulumi.Input[str]] = None,
                 name: Optional[pulumi.Input[str]] = None,
                 realm_id: Optional[pulumi.Input[str]] = None,
                 __props__=None,
                 __name__=None,
                 __opts__=None):
        """
        Allows for creating and managing MSAD-LDS user account control mappers for Keycloak
        users federated via LDAP.

        The MSAD-LDS (Microsoft Active Directory Lightweight Directory Service) user account control mapper is specific
        to LDAP user federation providers that are pulling from AD-LDS, and it can propagate
        AD-LDS user state to Keycloak in order to enforce settings like expired passwords
        or disabled accounts.

        ## Example Usage

        ```python
        import pulumi
        import pulumi_keycloak as keycloak

        realm = keycloak.Realm("realm",
            realm="my-realm",
            enabled=True)
        ldap_user_federation = keycloak.ldap.UserFederation("ldapUserFederation",
            realm_id=realm.id,
            username_ldap_attribute="cn",
            rdn_ldap_attribute="cn",
            uuid_ldap_attribute="objectGUID",
            user_object_classes=[
                "person",
                "organizationalPerson",
                "user",
            ],
            connection_url="ldap://my-ad-server",
            users_dn="dc=example,dc=org",
            bind_dn="cn=admin,dc=example,dc=org",
            bind_credential="admin")
        msad_lds_user_account_control_mapper = keycloak.ldap.MsadLdsUserAccountControlMapper("msadLdsUserAccountControlMapper",
            realm_id=realm.id,
            ldap_user_federation_id=ldap_user_federation.id)
        ```

        ## Import

        LDAP mappers can be imported using the format `{{realm_id}}/{{ldap_user_federation_id}}/{{ldap_mapper_id}}`. The ID of the LDAP user federation provider and the mapper can be found within the Keycloak GUI, and they are typically GUIDs. Examplebash

        ```sh
         $ pulumi import keycloak:ldap/msadLdsUserAccountControlMapper:MsadLdsUserAccountControlMapper msad_lds_user_account_control_mapper my-realm/af2a6ca3-e4d7-49c3-b08b-1b3c70b4b860/3d923ece-1a91-4bf7-adaf-3b82f2a12b67
        ```

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] ldap_user_federation_id: The ID of the LDAP user federation provider to attach this mapper to.
        :param pulumi.Input[str] name: Display name of this mapper when displayed in the console.
        :param pulumi.Input[str] realm_id: The realm that this LDAP mapper will exist in.
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

            if ldap_user_federation_id is None and not opts.urn:
                raise TypeError("Missing required property 'ldap_user_federation_id'")
            __props__['ldap_user_federation_id'] = ldap_user_federation_id
            __props__['name'] = name
            if realm_id is None and not opts.urn:
                raise TypeError("Missing required property 'realm_id'")
            __props__['realm_id'] = realm_id
        super(MsadLdsUserAccountControlMapper, __self__).__init__(
            'keycloak:ldap/msadLdsUserAccountControlMapper:MsadLdsUserAccountControlMapper',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name: str,
            id: pulumi.Input[str],
            opts: Optional[pulumi.ResourceOptions] = None,
            ldap_user_federation_id: Optional[pulumi.Input[str]] = None,
            name: Optional[pulumi.Input[str]] = None,
            realm_id: Optional[pulumi.Input[str]] = None) -> 'MsadLdsUserAccountControlMapper':
        """
        Get an existing MsadLdsUserAccountControlMapper resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param pulumi.Input[str] id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] ldap_user_federation_id: The ID of the LDAP user federation provider to attach this mapper to.
        :param pulumi.Input[str] name: Display name of this mapper when displayed in the console.
        :param pulumi.Input[str] realm_id: The realm that this LDAP mapper will exist in.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        __props__["ldap_user_federation_id"] = ldap_user_federation_id
        __props__["name"] = name
        __props__["realm_id"] = realm_id
        return MsadLdsUserAccountControlMapper(resource_name, opts=opts, __props__=__props__)

    @property
    @pulumi.getter(name="ldapUserFederationId")
    def ldap_user_federation_id(self) -> pulumi.Output[str]:
        """
        The ID of the LDAP user federation provider to attach this mapper to.
        """
        return pulumi.get(self, "ldap_user_federation_id")

    @property
    @pulumi.getter
    def name(self) -> pulumi.Output[str]:
        """
        Display name of this mapper when displayed in the console.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="realmId")
    def realm_id(self) -> pulumi.Output[str]:
        """
        The realm that this LDAP mapper will exist in.
        """
        return pulumi.get(self, "realm_id")

    def translate_output_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return _tables.SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

