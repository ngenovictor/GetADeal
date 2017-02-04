from django.db import models
from django.core.urlresolvers import reverse
from django.contrib.gis.db import models as gismodels
from django.contrib import admin
from django.conf import settings
from spatial.models import Buildings

class UserDetail(models.Model):
    MALE = 'M'
    FEMALE = 'F'
    UNDEFINED = 'U'
    GENDER_CHOICES = (
        (MALE, 'Male'),
        (FEMALE,'Female'),
        (UNDEFINED,'Undefined'),

        )
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    profile_pic = models.ImageField(upload_to='users',null=True)
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES,default=UNDEFINED)
    # profile_pic
    # mobile phone
    #social sites provide usernames only for twitter/googleplus/facebook/youtube/whatever
    # 
    def __unicode__(self):
        return self.user.username
    def get_absolute_url(self):
        return reverse("accounts/profile", kwargs={"user_name": self.user})

class Shops(models.Model):
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    name_of_shop = models.CharField(max_length=50)
    address = models.CharField(max_length=50)
    tel_no = models.IntegerField()
    county = models.CharField(max_length=50)
    town = models.CharField(max_length=50)
    building = models.ForeignKey(Buildings, null=True, related_name='shops_name')
    location = gismodels.PointField(srid=4326, null=True)
    room_no = models.IntegerField()
    describe_the_location = models.TextField(max_length=200)
    describe_the_shop = models.TextField(max_length=200)
    objects = gismodels.GeoManager()
    picture = models.ImageField(upload_to='shops',null=True)
    #add social sites such as facebook, twitter, etc website

    def __unicode__(self):
        return self.name_of_shop

    def get_absolute_url(self):
        return reverse("shop", kwargs={"shop_id": self.id})

    class Meta:
        verbose_name_plural = "shops"

class Category(models.Model):
    name = models.CharField(max_length=50)
    parent = models.ForeignKey('self', related_name="sub_categories", null=True, blank=True)   

    def __unicode__(self):
        return self.name
    class Meta:
        verbose_name_plural = "category"

class Product(models.Model):
    name_of_product = models.CharField(max_length=50)
    price = models.IntegerField()
    picture = models.ImageField(upload_to='products', null=True)
    shop = models.ForeignKey(Shops)
    category = models.ForeignKey(Category, null=True)
    quantity = models.CharField(max_length=50)
    describe_the_item = models.TextField(max_length=200)
    slug = models.SlugField(unique=True)
    discount = models.IntegerField(null=True)

    def __unicode__(self):
        return self.name_of_product
    def get_absolute_url(self):
        return reverse("product", kwargs={"product_id": self.id})
      


class ContactMessage(models.Model):
    name = models.CharField(max_length=50, null=True)
    email_address = models.EmailField(max_length=254,null=True)
    message_content = models.TextField(max_length=500,null=True)
    created = models.DateTimeField(auto_now_add=True, null=True, blank=False)



class Try(models.Model):
    name = models.CharField(max_length=50)
    building = models.ForeignKey(Buildings, null=True)

