# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

# Export this package's modules as members:
from .audience_protocol_mapper import *
from .audience_resolve_protocol_mappter import *
from .client import *
from .client_aggregate_policy import *
from .client_authorization_permission import *
from .client_authorization_resource import *
from .client_authorization_scope import *
from .client_default_scopes import *
from .client_group_policy import *
from .client_js_policy import *
from .client_optional_scopes import *
from .client_permissions import *
from .client_policy import *
from .client_role_policy import *
from .client_scope import *
from .client_service_account_realm_role import *
from .client_service_account_role import *
from .client_time_policy import *
from .client_user_policy import *
from .full_name_protocol_mapper import *
from .get_client import *
from .get_client_authorization_policy import *
from .get_client_service_account_user import *
from .group_membership_protocol_mapper import *
from .hardcoded_claim_protocol_mapper import *
from .hardcoded_role_protocol_mapper import *
from .script_protocol_mapper import *
from .user_attribute_protocol_mapper import *
from .user_client_role_protocol_mapper import *
from .user_property_protocol_mapper import *
from .user_realm_role_protocol_mapper import *
from .user_session_note_protocol_mapper import *
from ._inputs import *
from . import outputs

def _register_module():
    import pulumi
    from .. import _utilities


    class Module(pulumi.runtime.ResourceModule):
        _version = _utilities.get_semver_version()

        def version(self):
            return Module._version

        def construct(self, name: str, typ: str, urn: str) -> pulumi.Resource:
            if typ == "keycloak:openid/audienceProtocolMapper:AudienceProtocolMapper":
                return AudienceProtocolMapper(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "keycloak:openid/audienceResolveProtocolMappter:AudienceResolveProtocolMappter":
                return AudienceResolveProtocolMappter(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "keycloak:openid/client:Client":
                return Client(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "keycloak:openid/clientAggregatePolicy:ClientAggregatePolicy":
                return ClientAggregatePolicy(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "keycloak:openid/clientAuthorizationPermission:ClientAuthorizationPermission":
                return ClientAuthorizationPermission(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "keycloak:openid/clientAuthorizationResource:ClientAuthorizationResource":
                return ClientAuthorizationResource(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "keycloak:openid/clientAuthorizationScope:ClientAuthorizationScope":
                return ClientAuthorizationScope(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "keycloak:openid/clientDefaultScopes:ClientDefaultScopes":
                return ClientDefaultScopes(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "keycloak:openid/clientGroupPolicy:ClientGroupPolicy":
                return ClientGroupPolicy(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "keycloak:openid/clientJsPolicy:ClientJsPolicy":
                return ClientJsPolicy(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "keycloak:openid/clientOptionalScopes:ClientOptionalScopes":
                return ClientOptionalScopes(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "keycloak:openid/clientPermissions:ClientPermissions":
                return ClientPermissions(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "keycloak:openid/clientPolicy:ClientPolicy":
                return ClientPolicy(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "keycloak:openid/clientRolePolicy:ClientRolePolicy":
                return ClientRolePolicy(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "keycloak:openid/clientScope:ClientScope":
                return ClientScope(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "keycloak:openid/clientServiceAccountRealmRole:ClientServiceAccountRealmRole":
                return ClientServiceAccountRealmRole(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "keycloak:openid/clientServiceAccountRole:ClientServiceAccountRole":
                return ClientServiceAccountRole(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "keycloak:openid/clientTimePolicy:ClientTimePolicy":
                return ClientTimePolicy(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "keycloak:openid/clientUserPolicy:ClientUserPolicy":
                return ClientUserPolicy(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "keycloak:openid/fullNameProtocolMapper:FullNameProtocolMapper":
                return FullNameProtocolMapper(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "keycloak:openid/groupMembershipProtocolMapper:GroupMembershipProtocolMapper":
                return GroupMembershipProtocolMapper(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "keycloak:openid/hardcodedClaimProtocolMapper:HardcodedClaimProtocolMapper":
                return HardcodedClaimProtocolMapper(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "keycloak:openid/hardcodedRoleProtocolMapper:HardcodedRoleProtocolMapper":
                return HardcodedRoleProtocolMapper(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "keycloak:openid/scriptProtocolMapper:ScriptProtocolMapper":
                return ScriptProtocolMapper(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "keycloak:openid/userAttributeProtocolMapper:UserAttributeProtocolMapper":
                return UserAttributeProtocolMapper(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "keycloak:openid/userClientRoleProtocolMapper:UserClientRoleProtocolMapper":
                return UserClientRoleProtocolMapper(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "keycloak:openid/userPropertyProtocolMapper:UserPropertyProtocolMapper":
                return UserPropertyProtocolMapper(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "keycloak:openid/userRealmRoleProtocolMapper:UserRealmRoleProtocolMapper":
                return UserRealmRoleProtocolMapper(name, pulumi.ResourceOptions(urn=urn))
            elif typ == "keycloak:openid/userSessionNoteProtocolMapper:UserSessionNoteProtocolMapper":
                return UserSessionNoteProtocolMapper(name, pulumi.ResourceOptions(urn=urn))
            else:
                raise Exception(f"unknown resource type {typ}")


    _module_instance = Module()
    pulumi.runtime.register_resource_module("keycloak", "openid/audienceProtocolMapper", _module_instance)
    pulumi.runtime.register_resource_module("keycloak", "openid/audienceResolveProtocolMappter", _module_instance)
    pulumi.runtime.register_resource_module("keycloak", "openid/client", _module_instance)
    pulumi.runtime.register_resource_module("keycloak", "openid/clientAggregatePolicy", _module_instance)
    pulumi.runtime.register_resource_module("keycloak", "openid/clientAuthorizationPermission", _module_instance)
    pulumi.runtime.register_resource_module("keycloak", "openid/clientAuthorizationResource", _module_instance)
    pulumi.runtime.register_resource_module("keycloak", "openid/clientAuthorizationScope", _module_instance)
    pulumi.runtime.register_resource_module("keycloak", "openid/clientDefaultScopes", _module_instance)
    pulumi.runtime.register_resource_module("keycloak", "openid/clientGroupPolicy", _module_instance)
    pulumi.runtime.register_resource_module("keycloak", "openid/clientJsPolicy", _module_instance)
    pulumi.runtime.register_resource_module("keycloak", "openid/clientOptionalScopes", _module_instance)
    pulumi.runtime.register_resource_module("keycloak", "openid/clientPermissions", _module_instance)
    pulumi.runtime.register_resource_module("keycloak", "openid/clientPolicy", _module_instance)
    pulumi.runtime.register_resource_module("keycloak", "openid/clientRolePolicy", _module_instance)
    pulumi.runtime.register_resource_module("keycloak", "openid/clientScope", _module_instance)
    pulumi.runtime.register_resource_module("keycloak", "openid/clientServiceAccountRealmRole", _module_instance)
    pulumi.runtime.register_resource_module("keycloak", "openid/clientServiceAccountRole", _module_instance)
    pulumi.runtime.register_resource_module("keycloak", "openid/clientTimePolicy", _module_instance)
    pulumi.runtime.register_resource_module("keycloak", "openid/clientUserPolicy", _module_instance)
    pulumi.runtime.register_resource_module("keycloak", "openid/fullNameProtocolMapper", _module_instance)
    pulumi.runtime.register_resource_module("keycloak", "openid/groupMembershipProtocolMapper", _module_instance)
    pulumi.runtime.register_resource_module("keycloak", "openid/hardcodedClaimProtocolMapper", _module_instance)
    pulumi.runtime.register_resource_module("keycloak", "openid/hardcodedRoleProtocolMapper", _module_instance)
    pulumi.runtime.register_resource_module("keycloak", "openid/scriptProtocolMapper", _module_instance)
    pulumi.runtime.register_resource_module("keycloak", "openid/userAttributeProtocolMapper", _module_instance)
    pulumi.runtime.register_resource_module("keycloak", "openid/userClientRoleProtocolMapper", _module_instance)
    pulumi.runtime.register_resource_module("keycloak", "openid/userPropertyProtocolMapper", _module_instance)
    pulumi.runtime.register_resource_module("keycloak", "openid/userRealmRoleProtocolMapper", _module_instance)
    pulumi.runtime.register_resource_module("keycloak", "openid/userSessionNoteProtocolMapper", _module_instance)

_register_module()
