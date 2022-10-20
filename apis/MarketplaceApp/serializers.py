from rest_framework import serializers
from MarketplaceApp.models import Items

class ItemsSerializer(serializers.ModelSerializer):
    class Meta:
        model=Items 
        fields=('itemId', 'price', 'name', 'condition', 'ph', 'address', 'filename')
