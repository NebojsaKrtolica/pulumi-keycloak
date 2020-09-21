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

__all__ = ['Client']


class Client(pulumi.CustomResource):
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 access_token_lifespan: Optional[pulumi.Input[str]] = None,
                 access_type: Optional[pulumi.Input[str]] = None,
                 admin_url: Optional[pulumi.Input[str]] = None,
                 authentication_flow_binding_overrides: Optional[pulumi.Input[pulumi.InputType['ClientAuthenticationFlowBindingOverridesArgs']]] = None,
                 authorization: Optional[pulumi.Input[pulumi.InputType['ClientAuthorizationArgs']]] = None,
                 base_url: Optional[pulumi.Input[str]] = None,
                 client_id: Optional[pulumi.Input[str]] = None,
                 client_secret: Optional[pulumi.Input[str]] = None,
                 consent_required: Optional[pulumi.Input[bool]] = None,
                 description: Optional[pulumi.Input[str]] = None,
                 direct_access_grants_enabled: Optional[pulumi.Input[bool]] = None,
                 enabled: Optional[pulumi.Input[bool]] = None,
                 exclude_session_state_from_auth_response: Optional[pulumi.Input[bool]] = None,
                 full_scope_allowed: Optional[pulumi.Input[bool]] = None,
                 implicit_flow_enabled: Optional[pulumi.Input[bool]] = None,
                 login_theme: Optional[pulumi.Input[str]] = None,
                 name: Optional[pulumi.Input[str]] = None,
                 pkce_code_challenge_method: Optional[pulumi.Input[str]] = None,
                 realm_id: Optional[pulumi.Input[str]] = None,
                 root_url: Optional[pulumi.Input[str]] = None,
                 service_accounts_enabled: Optional[pulumi.Input[bool]] = None,
                 standard_flow_enabled: Optional[pulumi.Input[bool]] = None,
                 valid_redirect_uris: Optional[pulumi.Input[Sequence[pulumi.Input[str]]]] = None,
                 web_origins: Optional[pulumi.Input[Sequence[pulumi.Input[str]]]] = None,
                 __props__=None,
                 __name__=None,
                 __opts__=None):
        """
        Allows for creating and managing Keycloak clients that use the OpenID Connect protocol.

        Clients are entities that can use Keycloak for user authentication. Typically,
        clients are applications that redirect users to Keycloak for authentication
        in order to take advantage of Keycloak's user sessions for SSO.

        ## Example Usage

        ```python
        import pulumi
        import pulumi_keycloak as keycloak

        realm = keycloak.Realm("realm",
            realm="my-realm",
            enabled=True)
        openid_client = keycloak.openid.Client("openidClient",
            realm_id=realm.id,
            client_id="test-client",
            enabled=True,
            access_type="CONFIDENTIAL",
            valid_redirect_uris=["http://localhost:8080/openid-callback"],
            login_theme="keycloak")
        ```

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] access_token_lifespan: The amount of time in seconds before an access token expires. This will override the default for the realm.
        :param pulumi.Input[str] access_type: Specifies the type of client, which can be one of the following:
        :param pulumi.Input[str] admin_url: URL to the admin interface of the client.
        :param pulumi.Input[pulumi.InputType['ClientAuthenticationFlowBindingOverridesArgs']] authentication_flow_binding_overrides: Override realm authentication flow bindings
        :param pulumi.Input[pulumi.InputType['ClientAuthorizationArgs']] authorization: When this block is present, fine-grained authorization will be enabled for this client. The client's `access_type` must be `CONFIDENTIAL`, and `service_accounts_enabled` must be `true`. This block has the following arguments:
        :param pulumi.Input[str] base_url: Default URL to use when the auth server needs to redirect or link back to the client.
        :param pulumi.Input[str] client_id: The Client ID for this client, referenced in the URI during authentication and in issued tokens.
        :param pulumi.Input[str] client_secret: The secret for clients with an `access_type` of `CONFIDENTIAL` or `BEARER-ONLY`. This value is sensitive and should be treated with the same care as a password. If omitted, this will be generated by Keycloak.
        :param pulumi.Input[bool] consent_required: When `true`, users have to consent to client access.
        :param pulumi.Input[str] description: The description of this client in the GUI.
        :param pulumi.Input[bool] direct_access_grants_enabled: When `true`, the OAuth2 Resource Owner Password Grant will be enabled for this client. Defaults to `false`.
        :param pulumi.Input[bool] enabled: When `false`, this client will not be able to initiate a login or obtain access tokens. Defaults to `true`.
        :param pulumi.Input[bool] exclude_session_state_from_auth_response: When `true`, the parameter `session_state` will not be included in OpenID Connect Authentication Response.
        :param pulumi.Input[bool] full_scope_allowed: Allow to include all roles mappings in the access token.
        :param pulumi.Input[bool] implicit_flow_enabled: When `true`, the OAuth2 Implicit Grant will be enabled for this client. Defaults to `false`.
        :param pulumi.Input[str] login_theme: The client login theme. This will override the default theme for the realm.
        :param pulumi.Input[str] name: The display name of this client in the GUI.
        :param pulumi.Input[str] pkce_code_challenge_method: The challenge method to use for Proof Key for Code Exchange. Can be either `plain` or `S256` or set to empty value ``.
        :param pulumi.Input[str] realm_id: The realm this client is attached to.
        :param pulumi.Input[str] root_url: When specified, this URL is prepended to any relative URLs found within `valid_redirect_uris`, `web_origins`, and `admin_url`. NOTE: Due to limitations in the Keycloak API, when the `root_url` attribute is used, the `valid_redirect_uris`, `web_origins`, and `admin_url` attributes will be required.
        :param pulumi.Input[bool] service_accounts_enabled: When `true`, the OAuth2 Client Credentials grant will be enabled for this client. Defaults to `false`.
        :param pulumi.Input[bool] standard_flow_enabled: When `true`, the OAuth2 Authorization Code Grant will be enabled for this client. Defaults to `false`.
        :param pulumi.Input[Sequence[pulumi.Input[str]]] valid_redirect_uris: A list of valid URIs a browser is permitted to redirect to after a successful login or logout. Simple
               wildcards in the form of an asterisk can be used here. This attribute must be set if either `standard_flow_enabled` or `implicit_flow_enabled`
               is set to `true`.
        :param pulumi.Input[Sequence[pulumi.Input[str]]] web_origins: A list of allowed CORS origins. `+` can be used to permit all valid redirect URIs, and `*` can be used to permit all origins.
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

            __props__['access_token_lifespan'] = access_token_lifespan
            if access_type is None:
                raise TypeError("Missing required property 'access_type'")
            __props__['access_type'] = access_type
            __props__['admin_url'] = admin_url
            __props__['authentication_flow_binding_overrides'] = authentication_flow_binding_overrides
            __props__['authorization'] = authorization
            __props__['base_url'] = base_url
            if client_id is None:
                raise TypeError("Missing required property 'client_id'")
            __props__['client_id'] = client_id
            __props__['client_secret'] = client_secret
            __props__['consent_required'] = consent_required
            __props__['description'] = description
            __props__['direct_access_grants_enabled'] = direct_access_grants_enabled
            __props__['enabled'] = enabled
            __props__['exclude_session_state_from_auth_response'] = exclude_session_state_from_auth_response
            __props__['full_scope_allowed'] = full_scope_allowed
            __props__['implicit_flow_enabled'] = implicit_flow_enabled
            __props__['login_theme'] = login_theme
            __props__['name'] = name
            __props__['pkce_code_challenge_method'] = pkce_code_challenge_method
            if realm_id is None:
                raise TypeError("Missing required property 'realm_id'")
            __props__['realm_id'] = realm_id
            __props__['root_url'] = root_url
            __props__['service_accounts_enabled'] = service_accounts_enabled
            __props__['standard_flow_enabled'] = standard_flow_enabled
            __props__['valid_redirect_uris'] = valid_redirect_uris
            __props__['web_origins'] = web_origins
            __props__['resource_server_id'] = None
            __props__['service_account_user_id'] = None
        super(Client, __self__).__init__(
            'keycloak:openid/client:Client',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name: str,
            id: pulumi.Input[str],
            opts: Optional[pulumi.ResourceOptions] = None,
            access_token_lifespan: Optional[pulumi.Input[str]] = None,
            access_type: Optional[pulumi.Input[str]] = None,
            admin_url: Optional[pulumi.Input[str]] = None,
            authentication_flow_binding_overrides: Optional[pulumi.Input[pulumi.InputType['ClientAuthenticationFlowBindingOverridesArgs']]] = None,
            authorization: Optional[pulumi.Input[pulumi.InputType['ClientAuthorizationArgs']]] = None,
            base_url: Optional[pulumi.Input[str]] = None,
            client_id: Optional[pulumi.Input[str]] = None,
            client_secret: Optional[pulumi.Input[str]] = None,
            consent_required: Optional[pulumi.Input[bool]] = None,
            description: Optional[pulumi.Input[str]] = None,
            direct_access_grants_enabled: Optional[pulumi.Input[bool]] = None,
            enabled: Optional[pulumi.Input[bool]] = None,
            exclude_session_state_from_auth_response: Optional[pulumi.Input[bool]] = None,
            full_scope_allowed: Optional[pulumi.Input[bool]] = None,
            implicit_flow_enabled: Optional[pulumi.Input[bool]] = None,
            login_theme: Optional[pulumi.Input[str]] = None,
            name: Optional[pulumi.Input[str]] = None,
            pkce_code_challenge_method: Optional[pulumi.Input[str]] = None,
            realm_id: Optional[pulumi.Input[str]] = None,
            resource_server_id: Optional[pulumi.Input[str]] = None,
            root_url: Optional[pulumi.Input[str]] = None,
            service_account_user_id: Optional[pulumi.Input[str]] = None,
            service_accounts_enabled: Optional[pulumi.Input[bool]] = None,
            standard_flow_enabled: Optional[pulumi.Input[bool]] = None,
            valid_redirect_uris: Optional[pulumi.Input[Sequence[pulumi.Input[str]]]] = None,
            web_origins: Optional[pulumi.Input[Sequence[pulumi.Input[str]]]] = None) -> 'Client':
        """
        Get an existing Client resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param pulumi.Input[str] id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] access_token_lifespan: The amount of time in seconds before an access token expires. This will override the default for the realm.
        :param pulumi.Input[str] access_type: Specifies the type of client, which can be one of the following:
        :param pulumi.Input[str] admin_url: URL to the admin interface of the client.
        :param pulumi.Input[pulumi.InputType['ClientAuthenticationFlowBindingOverridesArgs']] authentication_flow_binding_overrides: Override realm authentication flow bindings
        :param pulumi.Input[pulumi.InputType['ClientAuthorizationArgs']] authorization: When this block is present, fine-grained authorization will be enabled for this client. The client's `access_type` must be `CONFIDENTIAL`, and `service_accounts_enabled` must be `true`. This block has the following arguments:
        :param pulumi.Input[str] base_url: Default URL to use when the auth server needs to redirect or link back to the client.
        :param pulumi.Input[str] client_id: The Client ID for this client, referenced in the URI during authentication and in issued tokens.
        :param pulumi.Input[str] client_secret: The secret for clients with an `access_type` of `CONFIDENTIAL` or `BEARER-ONLY`. This value is sensitive and should be treated with the same care as a password. If omitted, this will be generated by Keycloak.
        :param pulumi.Input[bool] consent_required: When `true`, users have to consent to client access.
        :param pulumi.Input[str] description: The description of this client in the GUI.
        :param pulumi.Input[bool] direct_access_grants_enabled: When `true`, the OAuth2 Resource Owner Password Grant will be enabled for this client. Defaults to `false`.
        :param pulumi.Input[bool] enabled: When `false`, this client will not be able to initiate a login or obtain access tokens. Defaults to `true`.
        :param pulumi.Input[bool] exclude_session_state_from_auth_response: When `true`, the parameter `session_state` will not be included in OpenID Connect Authentication Response.
        :param pulumi.Input[bool] full_scope_allowed: Allow to include all roles mappings in the access token.
        :param pulumi.Input[bool] implicit_flow_enabled: When `true`, the OAuth2 Implicit Grant will be enabled for this client. Defaults to `false`.
        :param pulumi.Input[str] login_theme: The client login theme. This will override the default theme for the realm.
        :param pulumi.Input[str] name: The display name of this client in the GUI.
        :param pulumi.Input[str] pkce_code_challenge_method: The challenge method to use for Proof Key for Code Exchange. Can be either `plain` or `S256` or set to empty value ``.
        :param pulumi.Input[str] realm_id: The realm this client is attached to.
        :param pulumi.Input[str] resource_server_id: (Computed) When authorization is enabled for this client, this attribute is the unique ID for the client (the same value as the `.id` attribute).
        :param pulumi.Input[str] root_url: When specified, this URL is prepended to any relative URLs found within `valid_redirect_uris`, `web_origins`, and `admin_url`. NOTE: Due to limitations in the Keycloak API, when the `root_url` attribute is used, the `valid_redirect_uris`, `web_origins`, and `admin_url` attributes will be required.
        :param pulumi.Input[str] service_account_user_id: (Computed) When service accounts are enabled for this client, this attribute is the unique ID for the Keycloak user that represents this service account.
        :param pulumi.Input[bool] service_accounts_enabled: When `true`, the OAuth2 Client Credentials grant will be enabled for this client. Defaults to `false`.
        :param pulumi.Input[bool] standard_flow_enabled: When `true`, the OAuth2 Authorization Code Grant will be enabled for this client. Defaults to `false`.
        :param pulumi.Input[Sequence[pulumi.Input[str]]] valid_redirect_uris: A list of valid URIs a browser is permitted to redirect to after a successful login or logout. Simple
               wildcards in the form of an asterisk can be used here. This attribute must be set if either `standard_flow_enabled` or `implicit_flow_enabled`
               is set to `true`.
        :param pulumi.Input[Sequence[pulumi.Input[str]]] web_origins: A list of allowed CORS origins. `+` can be used to permit all valid redirect URIs, and `*` can be used to permit all origins.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        __props__["access_token_lifespan"] = access_token_lifespan
        __props__["access_type"] = access_type
        __props__["admin_url"] = admin_url
        __props__["authentication_flow_binding_overrides"] = authentication_flow_binding_overrides
        __props__["authorization"] = authorization
        __props__["base_url"] = base_url
        __props__["client_id"] = client_id
        __props__["client_secret"] = client_secret
        __props__["consent_required"] = consent_required
        __props__["description"] = description
        __props__["direct_access_grants_enabled"] = direct_access_grants_enabled
        __props__["enabled"] = enabled
        __props__["exclude_session_state_from_auth_response"] = exclude_session_state_from_auth_response
        __props__["full_scope_allowed"] = full_scope_allowed
        __props__["implicit_flow_enabled"] = implicit_flow_enabled
        __props__["login_theme"] = login_theme
        __props__["name"] = name
        __props__["pkce_code_challenge_method"] = pkce_code_challenge_method
        __props__["realm_id"] = realm_id
        __props__["resource_server_id"] = resource_server_id
        __props__["root_url"] = root_url
        __props__["service_account_user_id"] = service_account_user_id
        __props__["service_accounts_enabled"] = service_accounts_enabled
        __props__["standard_flow_enabled"] = standard_flow_enabled
        __props__["valid_redirect_uris"] = valid_redirect_uris
        __props__["web_origins"] = web_origins
        return Client(resource_name, opts=opts, __props__=__props__)

    @property
    @pulumi.getter(name="accessTokenLifespan")
    def access_token_lifespan(self) -> pulumi.Output[Optional[str]]:
        """
        The amount of time in seconds before an access token expires. This will override the default for the realm.
        """
        return pulumi.get(self, "access_token_lifespan")

    @property
    @pulumi.getter(name="accessType")
    def access_type(self) -> pulumi.Output[str]:
        """
        Specifies the type of client, which can be one of the following:
        """
        return pulumi.get(self, "access_type")

    @property
    @pulumi.getter(name="adminUrl")
    def admin_url(self) -> pulumi.Output[Optional[str]]:
        """
        URL to the admin interface of the client.
        """
        return pulumi.get(self, "admin_url")

    @property
    @pulumi.getter(name="authenticationFlowBindingOverrides")
    def authentication_flow_binding_overrides(self) -> pulumi.Output[Optional['outputs.ClientAuthenticationFlowBindingOverrides']]:
        """
        Override realm authentication flow bindings
        """
        return pulumi.get(self, "authentication_flow_binding_overrides")

    @property
    @pulumi.getter
    def authorization(self) -> pulumi.Output[Optional['outputs.ClientAuthorization']]:
        """
        When this block is present, fine-grained authorization will be enabled for this client. The client's `access_type` must be `CONFIDENTIAL`, and `service_accounts_enabled` must be `true`. This block has the following arguments:
        """
        return pulumi.get(self, "authorization")

    @property
    @pulumi.getter(name="baseUrl")
    def base_url(self) -> pulumi.Output[Optional[str]]:
        """
        Default URL to use when the auth server needs to redirect or link back to the client.
        """
        return pulumi.get(self, "base_url")

    @property
    @pulumi.getter(name="clientId")
    def client_id(self) -> pulumi.Output[str]:
        """
        The Client ID for this client, referenced in the URI during authentication and in issued tokens.
        """
        return pulumi.get(self, "client_id")

    @property
    @pulumi.getter(name="clientSecret")
    def client_secret(self) -> pulumi.Output[str]:
        """
        The secret for clients with an `access_type` of `CONFIDENTIAL` or `BEARER-ONLY`. This value is sensitive and should be treated with the same care as a password. If omitted, this will be generated by Keycloak.
        """
        return pulumi.get(self, "client_secret")

    @property
    @pulumi.getter(name="consentRequired")
    def consent_required(self) -> pulumi.Output[Optional[bool]]:
        """
        When `true`, users have to consent to client access.
        """
        return pulumi.get(self, "consent_required")

    @property
    @pulumi.getter
    def description(self) -> pulumi.Output[Optional[str]]:
        """
        The description of this client in the GUI.
        """
        return pulumi.get(self, "description")

    @property
    @pulumi.getter(name="directAccessGrantsEnabled")
    def direct_access_grants_enabled(self) -> pulumi.Output[Optional[bool]]:
        """
        When `true`, the OAuth2 Resource Owner Password Grant will be enabled for this client. Defaults to `false`.
        """
        return pulumi.get(self, "direct_access_grants_enabled")

    @property
    @pulumi.getter
    def enabled(self) -> pulumi.Output[Optional[bool]]:
        """
        When `false`, this client will not be able to initiate a login or obtain access tokens. Defaults to `true`.
        """
        return pulumi.get(self, "enabled")

    @property
    @pulumi.getter(name="excludeSessionStateFromAuthResponse")
    def exclude_session_state_from_auth_response(self) -> pulumi.Output[Optional[bool]]:
        """
        When `true`, the parameter `session_state` will not be included in OpenID Connect Authentication Response.
        """
        return pulumi.get(self, "exclude_session_state_from_auth_response")

    @property
    @pulumi.getter(name="fullScopeAllowed")
    def full_scope_allowed(self) -> pulumi.Output[Optional[bool]]:
        """
        Allow to include all roles mappings in the access token.
        """
        return pulumi.get(self, "full_scope_allowed")

    @property
    @pulumi.getter(name="implicitFlowEnabled")
    def implicit_flow_enabled(self) -> pulumi.Output[Optional[bool]]:
        """
        When `true`, the OAuth2 Implicit Grant will be enabled for this client. Defaults to `false`.
        """
        return pulumi.get(self, "implicit_flow_enabled")

    @property
    @pulumi.getter(name="loginTheme")
    def login_theme(self) -> pulumi.Output[Optional[str]]:
        """
        The client login theme. This will override the default theme for the realm.
        """
        return pulumi.get(self, "login_theme")

    @property
    @pulumi.getter
    def name(self) -> pulumi.Output[str]:
        """
        The display name of this client in the GUI.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter(name="pkceCodeChallengeMethod")
    def pkce_code_challenge_method(self) -> pulumi.Output[Optional[str]]:
        """
        The challenge method to use for Proof Key for Code Exchange. Can be either `plain` or `S256` or set to empty value ``.
        """
        return pulumi.get(self, "pkce_code_challenge_method")

    @property
    @pulumi.getter(name="realmId")
    def realm_id(self) -> pulumi.Output[str]:
        """
        The realm this client is attached to.
        """
        return pulumi.get(self, "realm_id")

    @property
    @pulumi.getter(name="resourceServerId")
    def resource_server_id(self) -> pulumi.Output[str]:
        """
        (Computed) When authorization is enabled for this client, this attribute is the unique ID for the client (the same value as the `.id` attribute).
        """
        return pulumi.get(self, "resource_server_id")

    @property
    @pulumi.getter(name="rootUrl")
    def root_url(self) -> pulumi.Output[Optional[str]]:
        """
        When specified, this URL is prepended to any relative URLs found within `valid_redirect_uris`, `web_origins`, and `admin_url`. NOTE: Due to limitations in the Keycloak API, when the `root_url` attribute is used, the `valid_redirect_uris`, `web_origins`, and `admin_url` attributes will be required.
        """
        return pulumi.get(self, "root_url")

    @property
    @pulumi.getter(name="serviceAccountUserId")
    def service_account_user_id(self) -> pulumi.Output[str]:
        """
        (Computed) When service accounts are enabled for this client, this attribute is the unique ID for the Keycloak user that represents this service account.
        """
        return pulumi.get(self, "service_account_user_id")

    @property
    @pulumi.getter(name="serviceAccountsEnabled")
    def service_accounts_enabled(self) -> pulumi.Output[Optional[bool]]:
        """
        When `true`, the OAuth2 Client Credentials grant will be enabled for this client. Defaults to `false`.
        """
        return pulumi.get(self, "service_accounts_enabled")

    @property
    @pulumi.getter(name="standardFlowEnabled")
    def standard_flow_enabled(self) -> pulumi.Output[Optional[bool]]:
        """
        When `true`, the OAuth2 Authorization Code Grant will be enabled for this client. Defaults to `false`.
        """
        return pulumi.get(self, "standard_flow_enabled")

    @property
    @pulumi.getter(name="validRedirectUris")
    def valid_redirect_uris(self) -> pulumi.Output[Optional[Sequence[str]]]:
        """
        A list of valid URIs a browser is permitted to redirect to after a successful login or logout. Simple
        wildcards in the form of an asterisk can be used here. This attribute must be set if either `standard_flow_enabled` or `implicit_flow_enabled`
        is set to `true`.
        """
        return pulumi.get(self, "valid_redirect_uris")

    @property
    @pulumi.getter(name="webOrigins")
    def web_origins(self) -> pulumi.Output[Optional[Sequence[str]]]:
        """
        A list of allowed CORS origins. `+` can be used to permit all valid redirect URIs, and `*` can be used to permit all origins.
        """
        return pulumi.get(self, "web_origins")

    def translate_output_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return _tables.SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

