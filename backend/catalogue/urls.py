from django.urls import path
from .views import CategoryListView, CategoryDetailView, FeaturedProductListView

urlpatterns = [
    path('',                    CategoryListView.as_view(),        name='category-list'),
    path('featured/',           FeaturedProductListView.as_view(), name='featured-products'),
    path('<slug:slug>/',        CategoryDetailView.as_view(),      name='category-detail'),
]