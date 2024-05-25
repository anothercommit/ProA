import requests
import pyperclip
from bs4 import BeautifulSoup
from joa import headers


parrafosScrapeados = []
descargas = 0

while True:
    url = pyperclip.waitForNewPaste()

    try:
        req = requests.get(url, headers=headers)
        req.raise_for_status()
    except Exception:
        print("Not able to connect to: ", url)
        continue

    soup = BeautifulSoup(req.content, "html.parser")

    parrafosScrapeados.append(soup.find_all("p"))
    print(parrafosScrapeados[descargas])

    descargas += 1
