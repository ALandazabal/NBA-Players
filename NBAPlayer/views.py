""" NBA Player views."""


# Django
from django.shortcuts import render

import requests


def players_list(request):
    """Return a greeting"""

    url = 'https://mach-eight.uc.r.appspot.com/'
    r = requests.get(url, timeout=20)

    return render(request, 'feed.html', {'players_data': r.json()})
