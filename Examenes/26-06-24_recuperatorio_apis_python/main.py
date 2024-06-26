import requests
import json
import os

PATH_DESCARGAS = "Descargas/"
PATH_IMAGENES = "Imagenes/"
LOG_FILENAME = ".log.txt"


def write_files():
    filename = f"{PATH_DESCARGAS}{numero_de_descarga}_deseados.json"

    if len(productos_deseados) > 0:
        with open(filename, "w", encoding="utf-8") as file:
            for producto in productos_deseados:
                file.write(json.dumps(producto, indent=4))

                with open(f"{PATH_IMAGENES}{numero_de_descarga}.jpg", "wb") as image:
                    res = requests.get(producto["image"])
                    image.write(res.content)

                print(
                    f"Se guardó una imagen en: {PATH_IMAGENES}{numero_de_descarga}.jpg"
                )

        print("Se escribió un archivo con los productos deseados en: ", filename)

    filename = f"{PATH_DESCARGAS}{numero_de_descarga}_no_deseados.json"

    if len(productos_no_deseados) > 0:
        with open(filename, "w", encoding="utf-8") as file:
            for producto in productos_no_deseados:
                file.write(json.dumps(producto, indent=4))

        print("Se escribió un archivo con los productos no deseados en: ", filename)


def get_num_descarga():
    try:
        with open(LOG_FILENAME, "r") as file:
            return int(file.read())
    except Exception:
        with open(LOG_FILENAME, "w") as file:
            file.write("1")
            return 1


def get_tipo_de_productos():
    return input("Especifica el tipo de productos que quieres ver: ")


os.makedirs(PATH_DESCARGAS, exist_ok=True)
os.makedirs(PATH_IMAGENES, exist_ok=True)

numero_de_descarga = get_num_descarga()

while True:
    try:
        cantidad_de_productos = int(
            input("Especifica la cantidad de productos que quieres ver: ")
        )
    except Exception:
        print("Eso no es un número! intenta de nuevo")
    else:
        break


res = requests.get(f"https://fakestoreapi.com/products?limit={cantidad_de_productos}")
productos = json.loads(res.content)

tipo_de_productos = get_tipo_de_productos().lower()
productos_deseados = []

for producto in productos:
    if tipo_de_productos in producto["category"]:
        productos_deseados.append(producto)

# añade todos los productos excepto que no estén en productos_deseados
productos_no_deseados = [p for p in productos if p not in productos_deseados]

write_files()

with open(LOG_FILENAME, "w") as file:
    file.write(str(numero_de_descarga + 1))
