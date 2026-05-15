from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.response import Response
from .models import Enquiry
from .serializers import EnquirySerializer
# Create your views here.


class EnquiryCreateView(generics.CreateAPIView):
    queryset         = Enquiry.objects.all()
    serializer_class = EnquirySerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(
            {'message': 'Enquiry received. We will contact you shortly.'},
            status=status.HTTP_201_CREATED
        )