from django.db import models
from django.utils import timezone

from seahub.base.fields import LowerCaseCharField


class ReceivedShares(models.Model):

    # https://cs3org.github.io/OCM-API/docs.html

    class Meta:
        db_table = 'ocm_via_webdav_received_shares'

    description = models.CharField(max_length=255, blank=True, null=True)
    name = models.CharField(max_length=255)
    owner = models.CharField(max_length=255, db_index=True)
    owner_display_name = models.CharField(max_length=255, blank=True, null=True)
    protocol_name = models.CharField(max_length=255)
    shared_secret = models.CharField(max_length=255, db_index=True)
    permissions = models.CharField(max_length=255)
    provider_id = models.CharField(max_length=255, db_index=True)
    resource_type = models.CharField(max_length=255, db_index=True)
    share_type = models.CharField(max_length=255, db_index=True)
    share_with = models.CharField(max_length=255, db_index=True)
    shared_by = models.CharField(max_length=255, db_index=True)
    shared_by_display_name = models.CharField(max_length=255, blank=True, null=True)
    ctime = models.DateTimeField(default=timezone.now)
    is_dir = models.BooleanField(default=False)


class RemoteShares(models.Model):

    class Meta:
        db_table = 'ocm_via_webdav_remote_shares'

    username = LowerCaseCharField(max_length=255, db_index=True)
    repo_id = models.CharField(max_length=36, db_index=True)
    path = models.CharField(max_length=1024, db_index=True)
    is_dir = models.BooleanField(default=True)
    ctime = models.DateTimeField(default=timezone.now)
    received = models.BooleanField(default=False)

    description = models.CharField(max_length=255, blank=True, null=True)
    protocol_name = models.CharField(max_length=255)
    permissions = models.CharField(max_length=255)
    shared_secret = models.CharField(max_length=255, db_index=True)
    resource_type = models.CharField(max_length=255, db_index=True)
    share_type = models.CharField(max_length=255, db_index=True)
    share_with = models.CharField(max_length=255, db_index=True)
