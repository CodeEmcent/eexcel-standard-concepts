from django.contrib import admin
from .models import Category, Product
# Register your models here.


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display  = ['name', 'slug', 'order', 'is_active']
    list_editable = ['order', 'is_active']
    prepopulated_fields = {'slug': ('name',)}
    search_fields = ['name']


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display  = ['name', 'category', 'is_active', 'is_featured']
    list_editable = ['is_active', 'is_featured']
    list_filter   = ['category', 'is_active', 'is_featured']
    prepopulated_fields = {'slug': ('name',)}
    search_fields = ['name', 'category__name']