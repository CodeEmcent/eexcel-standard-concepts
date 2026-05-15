from django.shortcuts import render
from rest_framework import generics
from .models import Category, Product
from .serializers import CategorySerializer, ProductSerializer
# Create your views here.


class CategoryListView(generics.ListAPIView):
    queryset         = Category.objects.filter(is_active=True)
    serializer_class = CategorySerializer


class CategoryDetailView(generics.RetrieveAPIView):
    queryset         = Category.objects.filter(is_active=True)
    serializer_class = CategorySerializer
    lookup_field     = 'slug'


class FeaturedProductListView(generics.ListAPIView):
    queryset         = Product.objects.filter(is_active=True, is_featured=True)
    serializer_class = ProductSerializer