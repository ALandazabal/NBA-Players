""" NBA Player views."""

# Django
from django.http import HttpResponse
from django.shortcuts import render

import requests
import urllib, json

def hello_world(request):
    """Return a greeting"""

    message = 'Hello world!'

    return HttpResponse(message)


def players_list(request):
    """Return a greeting"""

    url = 'https://mach-eight.uc.r.appspot.com/'
    r = requests.get(url, timeout=20)
    #print(r.json())

    return render(request, 'feed.html', { 'players_data': r.json() })
    #return render(request, 'feed.html')