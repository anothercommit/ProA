import requests
import pyperclip
from bs4 import BeautifulSoup
from joa import headers


def guardarPagina(num, req):
    soup = BeautifulSoup(req.content, "html.parser")

    with open(f"{num}.html", "w", encoding="utf-8") as file:
        content = str(soup.prettify())
        file.write(content)


descargas = 0

while True:
    url = pyperclip.waitForNewPaste()
    req = requests.get(url, headers=headers)

    try:
        req.raise_for_status()
    except Exception:
        print("Not able to connect to: ", url)
        continue

    descargas += 1
    print(url, "\n", descargas)
    guardarPagina(descargas, req)
