# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union, overload
from .. import _utilities

__all__ = [
    'GetClientInstallationProviderResult',
    'AwaitableGetClientInstallationProviderResult',
    'get_client_installation_provider',
    'get_client_installation_provider_output',
]

@pulumi.output_type
class GetClientInstallationProviderResult:
    """
    A collection of values returned by getClientInstallationProvider.
    """
    def __init__(__self__, client_id=None, id=None, provider_id=None, realm_id=None, value=None):
        if client_id and not isinstance(client_id, str):
            raise TypeError("Expected argument 'client_id' to be a str")
        pulumi.set(__self__, "client_id", client_id)
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        pulumi.set(__self__, "id", id)
        if provider_id and not isinstance(provider_id, str):
            raise TypeError("Expected argument 'provider_id' to be a str")
        pulumi.set(__self__, "provider_id", provider_id)
        if realm_id and not isinstance(realm_id, str):
            raise TypeError("Expected argument 'realm_id' to be a str")
        pulumi.set(__self__, "realm_id", realm_id)
        if value and not isinstance(value, str):
            raise TypeError("Expected argument 'value' to be a str")
        pulumi.set(__self__, "value", value)

    @property
    @pulumi.getter(name="clientId")
    def client_id(self) -> str:
        return pulumi.get(self, "client_id")

    @property
    @pulumi.getter
    def id(self) -> str:
        """
        The provider-assigned unique ID for this managed resource.
        """
        return pulumi.get(self, "id")

    @property
    @pulumi.getter(name="providerId")
    def provider_id(self) -> str:
        return pulumi.get(self, "provider_id")

    @property
    @pulumi.getter(name="realmId")
    def realm_id(self) -> str:
        return pulumi.get(self, "realm_id")

    @property
    @pulumi.getter
    def value(self) -> str:
        """
        (Computed) The returned document needed for SAML installation.
        """
        return pulumi.get(self, "value")


class AwaitableGetClientInstallationProviderResult(GetClientInstallationProviderResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetClientInstallationProviderResult(
            client_id=self.client_id,
            id=self.id,
            provider_id=self.provider_id,
            realm_id=self.realm_id,
            value=self.value)


def get_client_installation_provider(client_id: Optional[str] = None,
                                     provider_id: Optional[str] = None,
                                     realm_id: Optional[str] = None,
                                     opts: Optional[pulumi.InvokeOptions] = None) -> AwaitableGetClientInstallationProviderResult:
    """
    This data source can be used to retrieve Installation Provider of a SAML Client.

    ## Example Usage

    In the example below, we extract the SAML metadata IDPSSODescriptor to pass it to the AWS IAM SAML Provider.

    ```python
    import pulumi
    import pulumi_aws as aws
    import pulumi_keycloak as keycloak

    realm = keycloak.Realm("realm",
        realm="my-realm",
        enabled=True)
    saml_client = keycloak.saml.Client("samlClient",
        realm_id=realm.id,
        client_id="test-saml-client",
        sign_documents=False,
        sign_assertions=True,
        include_authn_statement=True,
        signing_certificate=(lambda path: open(path).read())("saml-cert.pem"),
        signing_private_key=(lambda path: open(path).read())("saml-key.pem"))
    saml_idp_descriptor = pulumi.Output.all(realm.id, saml_client.id).apply(lambda realmId, samlClientId: keycloak.saml.get_client_installation_provider(realm_id=realm_id,
        client_id=saml_client_id,
        provider_id="saml-idp-descriptor"))
    default = aws.iam.SamlProvider("default", saml_metadata_document=saml_idp_descriptor.value)
    ```


    :param str client_id: The ID of the SAML client. The `id` attribute of a `keycloak_client` resource should be used here.
    :param str provider_id: The ID of the SAML installation provider. Could be one of `saml-idp-descriptor`, `keycloak-saml`, `saml-sp-descriptor`, `keycloak-saml-subsystem`, `mod-auth-mellon`, etc.
    :param str realm_id: The realm that the SAML client exists within.
    """
    __args__ = dict()
    __args__['clientId'] = client_id
    __args__['providerId'] = provider_id
    __args__['realmId'] = realm_id
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = _utilities.get_version()
    __ret__ = pulumi.runtime.invoke('keycloak:saml/getClientInstallationProvider:getClientInstallationProvider', __args__, opts=opts, typ=GetClientInstallationProviderResult).value

    return AwaitableGetClientInstallationProviderResult(
        client_id=__ret__.client_id,
        id=__ret__.id,
        provider_id=__ret__.provider_id,
        realm_id=__ret__.realm_id,
        value=__ret__.value)


@_utilities.lift_output_func(get_client_installation_provider)
def get_client_installation_provider_output(client_id: Optional[pulumi.Input[str]] = None,
                                            provider_id: Optional[pulumi.Input[str]] = None,
                                            realm_id: Optional[pulumi.Input[str]] = None,
                                            opts: Optional[pulumi.InvokeOptions] = None) -> pulumi.Output[GetClientInstallationProviderResult]:
    """
    This data source can be used to retrieve Installation Provider of a SAML Client.

    ## Example Usage

    In the example below, we extract the SAML metadata IDPSSODescriptor to pass it to the AWS IAM SAML Provider.

    ```python
    import pulumi
    import pulumi_aws as aws
    import pulumi_keycloak as keycloak

    realm = keycloak.Realm("realm",
        realm="my-realm",
        enabled=True)
    saml_client = keycloak.saml.Client("samlClient",
        realm_id=realm.id,
        client_id="test-saml-client",
        sign_documents=False,
        sign_assertions=True,
        include_authn_statement=True,
        signing_certificate=(lambda path: open(path).read())("saml-cert.pem"),
        signing_private_key=(lambda path: open(path).read())("saml-key.pem"))
    saml_idp_descriptor = pulumi.Output.all(realm.id, saml_client.id).apply(lambda realmId, samlClientId: keycloak.saml.get_client_installation_provider(realm_id=realm_id,
        client_id=saml_client_id,
        provider_id="saml-idp-descriptor"))
    default = aws.iam.SamlProvider("default", saml_metadata_document=saml_idp_descriptor.value)
    ```


    :param str client_id: The ID of the SAML client. The `id` attribute of a `keycloak_client` resource should be used here.
    :param str provider_id: The ID of the SAML installation provider. Could be one of `saml-idp-descriptor`, `keycloak-saml`, `saml-sp-descriptor`, `keycloak-saml-subsystem`, `mod-auth-mellon`, etc.
    :param str realm_id: The realm that the SAML client exists within.
    """
    ...
