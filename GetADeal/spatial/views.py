from django.shortcuts import render
from .models import *
from application.models import *
import json
from django.core.serializers import serialize
from django.core import serializers
import simplejson
# from django.db.models import get_model

# selected_model = get_model('myapp', selection)

# Create your views here.
def productmap(request):
    template = 'productmap.html'
    context = {}
    
    return render(request, template, context)

def shopmap(request):
    shops = Shops.objects.all()
    buildings = ShopBuildings.objects.all()


    data = serializers.serialize('geojson',shops)
    mybuildings = serializers.serialize('geojson',buildings)

    template = "shopmap.html"
    context = {
    'shops':shops,
    'data':data,
    'mybuildings':mybuildings,
    'buildings':buildings
    }

    return render(request, template, context)	

def directions(request):
    template = 'directions.html'
    title = 'Directons'
    context = {'title':title}
    return render(request, template, context)