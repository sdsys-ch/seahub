# -*- coding: utf-8 -*-
# Generated by Django 1.11.15 on 2019-01-15 03:44


from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('organizations', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='OrgSettings',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('org_id', models.IntegerField(db_index=True)),
                ('role', models.CharField(blank=True, max_length=100, null=True)),
            ],
        ),
    ]
