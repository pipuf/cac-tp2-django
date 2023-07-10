from sucursales.models import Sucursal
from sucursalesAPI.serializers import SucursalSerializer,ListaSucursalesSerializer
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


class ListaSucursales(APIView):
    """
    Lista todas las sucursales
    """
    def get(self, request, format=None):
        sucursales = Sucursal.objects.all()
        serializer = ListaSucursalesSerializer(sucursales, many=True)
        return Response(serializer.data)

    # def post(self, request, format=None):
    #     serializer = SucursalSerializer(data=request.data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data, status=status.HTTP_201_CREATED)
    #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class DetalleSucursal(APIView):
    """
    Retrieve, update or delete a snippet instance.
    """
    def get_object(self, pk):
        try:
            return Sucursal.objects.get(pk=pk)
        except Sucursal.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        sucursal = self.get_object(pk)
        serializer = SucursalSerializer(sucursal)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        snippet = self.get_object(pk)
        serializer = SucursalSerializer(snippet, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        sucursal = self.get_object(pk)
        sucursal.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
