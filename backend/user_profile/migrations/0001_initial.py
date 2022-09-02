# Generated by Django 3.2.5 on 2022-09-01 20:53

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('account', '0001_initial'),
        ('residence', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='UserProfile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Alias', models.CharField(default='', max_length=255)),
                ('residences', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='residence.residence')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='account.user')),
            ],
        ),
    ]
