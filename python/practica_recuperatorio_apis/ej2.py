import requests
import json


ciudad = input("ingrese la ciudad de la que desea ver el clima: ").lower()
api_key = "be4170681fc73993b30273b3079e4b51"

url = f"http://api.openweathermap.org/geo/1.0/direct?q={ciudad}&limit=5&appid={api_key}"
res = requests.get(url)
res.raise_for_status()

diccionario = json.loads(res.content)
city = diccionario[0]
print(city)

url = f"https://api.openweathermap.org/data/2.5/weather?lat={city["lat"]}&lon={city["lon"]}&appid={api_key}"
res = requests.get(url)
res.raise_for_status()

diccionario = json.loads(res.content)
print(diccionario)
