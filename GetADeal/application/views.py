from django.contrib.auth.decorators import login_required
from django.db.models import Q
from django.http import HttpResponse, HttpResponseNotFound, HttpResponseRedirect
from django.shortcuts import render, Http404
from django.contrib.gis.shortcuts import render_to_kml
from .forms import ShopForm, ProductForm, NameForm, ContactMessageForm
from .models import *
from spatial.models import Buildings, Points
import random
from django.contrib.auth.models import User
import json
from django.core.serializers import serialize 


from django.db.models import Q
import random

# Create your views here.
def home(request):
    title = ":Home"
    products_all = Product.objects.all()
    something = len(Product.objects.all())
    print something
    products_random = Product.objects.all()
    categories = Category.objects.filter(parent__isnull=True)
    
    context = {
        'categories': categories,
        'products_all': products_all,
        'products_random':products_random,
        'title':title,

    }
    return render(request, "home.html", context)

def search(request):
    products = Product.objects.all()
    categories = Category.objects.filter(parent__isnull=True)

    if request.method == "GET":
        search_item = request.GET.get('q')

        items = Product.objects.filter(
            Q(name_of_product__contains=search_item)|
            Q(category__name__contains=search_item)
        )
    else:
        items = []
    context = {
        'items': items,
        'search_item': search_item,
        'categories': categories,
        'products': products,
    }
    return render(request, "search.html", context )

def searchmap(request):

    template = 'searchmap.html'
    return render(request, template, {})

def about(request):
    return render(request, "about.html")

def contact(request):
    title = 'Contact'
    form = ContactMessageForm()
    buttonmessage = "Submit"
    if request.method == 'POST':
        form = ContactMessageForm(request.POST)
        if form.is_valid():
            instance = form.save(commit=False)
            instance.save()
            helpmessage = 'Successful'
            buttonmessage = 'Create New'
            newurl = '{% url "contact" %}'
            context = {
            'title':title,
            'helpmessage':helpmessage,
            'newurl':newurl,
            'buttonmessage':buttonmessage,
            }
            return render(request,'contact.html', context)
    else:
        helpmessage = 'Fill the form below'
        context = {
        'title':title,
        'form': form,
        'helpmessage':helpmessage,
        'buttonmessage':buttonmessage,
        }

    return render(request, 'contact.html', context)

def profile(request, user_name):
    try:
        user = User.objects.filter(username=user_name)
        userdetails = UserDetail.objects.filter(user=user)
        for userdetail in userdetails:
            print userdetail.user
        context = {
        'userdetails':userdetails,
        'user':user,
        }
        template = "registration/profile.html"
        return render(request, template , context)
    except:
        return

def product(request, product_id):
    # try:
    product = Product.objects.get(id=product_id)
    products = Product.objects.filter(category=product.category)
    categories = Category.objects.filter(parent__isnull=True)
    title = 'Product'
    context = {
    'categories':categories,
    'product':product,
    'products':products,
    'title':title
    }
    template = 'product.html'
    return render(request, template, context)
    # except:
    #     raise Http404

def shop(request, shop_id):
    myshops = Shops.objects.get(id=shop_id)
    my_shops = Shops.objects.filter(id=shop_id)
    shop_building = Buildings.objects.filter(id=myshops.building.id)
    shopproducts = myshops.product_set.all()
    shopmap = serialize('geojson',my_shops)
    shopbuildingmap = serialize('geojson',shop_building)
    title = 'Shop'
    categories = Category.objects.filter(parent__isnull=True)
    template = 'shop.html'
    context = {
    'categories':categories,
    'myshops':myshops,
    'shopmap':shopmap,
    'title':title,
    'shopproducts':shopproducts,
    'shopbuildingmap':shopbuildingmap
    }
    return render(request, template, context)

@login_required
def createshop(request):
    # if this is a POST request we need to process the form data
    if request.method == 'POST':
        # create a form instance and populate it with data from the request:
        form = ShopForm(request.POST)
        # check whether it's valid:
        if form.is_valid():
            # process the data in form.cleaned_data as required
            # ...
            # redirect to a new URL:
            return render(request, 'createshop.html', {})

    # if a GET (or any other method) we'll create a blank form
    else:
        form = ShopForm()

    return render(request, 'createshop.html', {'form': form})


@login_required
def createproduct(request):
    title = ":Create Product"
    context = {}
    template = "createproduct.html"
  
    if request.method == 'POST':
        form = ProductForm(request.POST)
        if form.is_valid():
            instance = form.save(commit=False)
            title = "Your product has been created successfully"
            context = {
            'title':title
            }
            print instance
            instance.save()
            return render(request, template, context)
    else:
        form = ProductForm
        context = {
        'title':title,
        'form':form,
        }
    return render(request, template, context)