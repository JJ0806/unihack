# Generated by Django 4.2.6 on 2025-03-16 03:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tasks', '0002_task_assigned_to'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='due_date',
            field=models.DateField(null=True),
        ),
    ]
