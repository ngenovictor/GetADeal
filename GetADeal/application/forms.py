from django.contrib.gis import forms
from .models import Shops, Product, ContactMessage
from leaflet.forms.widgets import LeafletWidget




class ShopForm(forms.ModelForm):
	class Meta:
		model = Shops
		
		fields = [
		'owner',
		'name_of_shop',
		'address',
		'tel_no',
		'county',
		'town',
		'building',
		'room_no',
		'describe_the_location',
		'describe_the_shop',
		'location',
		]
		widgets = {'location': LeafletWidget()}
class ProductForm(forms.ModelForm):
	class Meta:
		model = Product
		fields = [
		'name_of_product',
		'price',
		'picture',
		'category',
		'shop',
		'quantity',
		'describe_the_item',
		]
class ContactMessageForm(forms.ModelForm):
	class Meta:
		model = ContactMessage
		fields = [
		'name',
		'email_address',
		'message_content',
		]

class NameForm(forms.Form):
    your_name = forms.CharField(label='Your name', max_length=100)