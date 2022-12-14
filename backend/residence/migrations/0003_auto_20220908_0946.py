# Generated by Django 3.2.5 on 2022-09-08 16:46

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('residence', '0002_residence_tenants'),
    ]

    operations = [
        migrations.RenameField(
            model_name='residence',
            old_name='address',
            new_name='city',
        ),
        migrations.AddField(
            model_name='residence',
            name='propertyOwner',
            field=models.ManyToManyField(related_name='propertyOwner', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='residence',
            name='streetAddress',
            field=models.CharField(default='', max_length=255),
        ),
        migrations.AddField(
            model_name='residence',
            name='zipCode',
            field=models.IntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='residence',
            name='tenants',
            field=models.ManyToManyField(related_name='tenants', to=settings.AUTH_USER_MODEL),
        ),
    ]
