import os
import requests
import random
import json


def get_num_descarga():
    try:
        with open(LOG_FILENAME, "r") as file:
            return int(file.read())
    except Exception:
        with open(LOG_FILENAME, "w") as file:
            file.write("1")
            return 1


def write_post(json_object):
    filename = f"{DESCARGAS}post_{numero_descarga}.json"

    with open(filename, "w", encoding="utf-8") as file:
        file.write(json.dumps(json_object, indent=4))

    print("Se escribió un post en: ", filename, "\n")


DESCARGAS = "Descargas/"
LOG_FILENAME = DESCARGAS + ".log.txt"

try:
    os.mkdir(DESCARGAS)
except Exception:
    print("El directorio", DESCARGAS, "ya existe")

numero_descarga = get_num_descarga()

url = f"https://jsonplaceholder.typicode.com/posts/{random.randint(1, 100)}"
res = requests.get(url)
res.raise_for_status()

diccionario = json.loads(res.content)

write_post(diccionario)
print(diccionario)

with open(LOG_FILENAME, "w") as file:
    file.write(str(numero_descarga + 1))
