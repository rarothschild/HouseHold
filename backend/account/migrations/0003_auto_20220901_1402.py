# Generated by Django 3.2.5 on 2022-09-01 21:02

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0002_alter_user_gender'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='admin',
            new_name='is_admin',
        ),
        migrations.RenameField(
            model_name='user',
            old_name='staff',
            new_name='is_staff',
        ),
    ]