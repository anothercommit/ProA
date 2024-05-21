import requests
import json

url = "https://api.wheretheiss.at/v1/satellites/25544"
res = requests.get(url)
iss_data = json.loads(res.content)

location = (
    f"https://www.google.com/maps/place/{iss_data['latitude']},{iss_data['longitude']}"
)
