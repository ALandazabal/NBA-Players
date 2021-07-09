""" NBA Player views."""

# Django
from django.http import HttpResponse
from django.shortcuts import render

import requests
import urllib, json

def players_list(request):
    """Return a greeting"""

    url = 'https://mach-eight.uc.r.appspot.com/'
    r = requests.get(url, timeout=20)

    return render(request, 'feed.html', { 'players_data': r.json() })