from django.contrib import admin
from .models import Enquiry
# Register your models here.


@admin.register(Enquiry)
class EnquiryAdmin(admin.ModelAdmin):
    list_display  = ['full_name', 'phone', 'category', 'status', 'submitted_at']
    list_editable = ['status']
    list_filter   = ['status', 'category']
    search_fields = ['full_name', 'phone', 'email', 'message']
    readonly_fields = ['full_name', 'phone', 'email', 'category', 'message', 'submitted_at']