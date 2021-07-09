# Django
from django.test import TestCase
from django.test import Client


class NBAPlayerTests(TestCase):

    def setUp(self):
        # Setup a client
        self.client = Client()

    def test_check_players_list_link(self):
        # Issue a GET request.
        response = self.client.get('/#data-table/')

        # Check that the response is 200 ok
        self.assertEqual(response.status_code, 200)

    def test_check_matching_player_link(self):
        # Issue a GET request.
        response = self.client.get('/#matching-players/')

        # Check that the response is 200 ok
        self.assertEqual(response.status_code, 200)

    def test_check_use_template(self):

        response = self.client.get('/#matching-players/')
        self.assertEqual(response.status_code, 200)

        #Check we used correct template
        self.assertTemplateUsed(response, 'matching_players.html')