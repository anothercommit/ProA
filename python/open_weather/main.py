import requests
from dotenv import load_dotenv
import json
import os

load_dotenv()

API_KEY = os.getenv("KEY")

url = f"https://api.openweathermap.org/data/3.0/onecall/overview?lon-64.16857985920457&lat=-31.424065385058046&appid={API_KEY}"
url1 = f"https://api.openweathermap.org/data/3.0/onecall/day_summary?lat=39.099724&lon=-94.578331&date=2024-05-23&appid={API_KEY}"
url2 = f"https://api.openweathermap.org/data/3.0/onecall/day_summary?lon-64.16857985920457&lat=-31.424065385058046&appid={API_KEY}"

res = requests.get(url1)
# jeison = json.loads(res.content)

print(res.content)
