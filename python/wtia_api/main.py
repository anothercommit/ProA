import requests
import json
import webbrowser

api_url = "https://api.wheretheiss.at/v1/satellites/25544"
res = requests.get(api_url)
iss_data = json.loads(res.content)

final_url = (
    f"https://www.google.com/maps/place/{
        iss_data['latitude']},{iss_data['longitude']}"
)

webbrowser.open_new(final_url)
