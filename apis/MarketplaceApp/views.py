from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from MarketplaceApp.models import Items
from MarketplaceApp.serializers import ItemsSerializer

from django.core.files.storage import default_storage

@csrf_exempt
def itemApi(request,id=0):
    if request.method=='GET':
        items = Items.objects.all()
        items_serializer=ItemsSerializer(items,many=True)
        return JsonResponse(items_serializer.data,safe=False)
    elif request.method=='POST':
        item_data=JSONParser().parse(request)
        items_serializer=ItemsSerializer(data=item_data["ad"])
        if items_serializer.is_valid():
            items_serializer.save()
            return JsonResponse("Added Successfully",safe=False)
        return JsonResponse("Failed to Add",safe=False)
    elif request.method=='PUT':
        item_data=JSONParser().parse(request)
        item=Items.objects.get(itemId=item_data['itemId'])
        items_serializer=ItemsSerializer(item,data=item_data)
        if items_serializer.is_valid():
            items_serializer.save()
            return JsonResponse("Updated Successfully",safe=False)
        return JsonResponse("Failed to Update")
    elif request.method=='DELETE':
        item=Items.objects.get(itemId=id)
        item.delete()
        return JsonResponse("Deleted Successfully",safe=False)

@csrf_exempt
def saveImage(request):
    print(request.FILES)
    file=request.FILES['file']
    file_name=default_storage.save(file.name,file)
    return JsonResponse(file_name,safe=False)