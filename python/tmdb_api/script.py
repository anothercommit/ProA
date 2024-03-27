import os, json
import requests
import pprint as p
from dotenv import load_dotenv


load_dotenv()
url = ""
API_KEY = os.environ.get('API_KEY')
URL_API_KEY = f"{API_KEY}"