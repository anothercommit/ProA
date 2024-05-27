import requests
import random
import json


def get_num_descarga():
    try:
        with open(".log.txt", "r") as file:
            return int(file.read())
    except Exception:
        with open(".log.txt", "w") as file:
            file.write("1")
            return 1


def actualizar_num_descarga(num):
    with open(".log.txt", "w") as file:
        file.write(str(num + 1))


# ej1
def ej1():
    numero_descarga = get_num_descarga()
    url = f"https://jsonplaceholder.typicode.com/posts/{random.randint(1, 100)}" res = requests.get(url)
    res.raise_for_status()
    diccionario = json.loads(res.content)

    with open(f"post_{numero_descarga}.json", "w", encoding="utf-8") as file:
        file.write(json.dumps(diccionario, indent=4))

    print(diccionario)

    actualizar_num_descarga(numero_descarga)


# ej 2
def ej2():
    ciudad = input("ingrese la ciudad de la que desea ver el clima: ").lower()
    api_key = "be4170681fc73993b30273b3079e4b51"
    url = f"http://api.openweathermap.org/geo/1.0/direct?q={ciudad}&limit=5&appid={api_key}"
    res = requests.get(url)
    diccionario = json.loads(res.content)

    url = f"https://api.openweathermap.org/data/2.5/weather?lat={diccionario["lat"]}&lon={diccionario["long"]}&appid={api_key}"
    # No llegue :(


ej2()
