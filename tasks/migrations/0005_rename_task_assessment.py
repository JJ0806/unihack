# Generated by Django 4.2.6 on 2025-03-16 05:21

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tasks', '0004_remove_task_completed'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Task',
            new_name='Assessment',
        ),
    ]
