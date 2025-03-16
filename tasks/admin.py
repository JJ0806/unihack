from django.contrib import admin
from django.contrib.auth.models import User
from tasks.models import Assessment

# Register your models here.
admin.site.register(User)
admin.site.register(Assessment)
