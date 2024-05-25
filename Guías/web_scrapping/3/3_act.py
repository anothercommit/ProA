import requests
import re
from joa import headers
from bs4 import BeautifulSoup


def getPageContent(name="filo.news.html"):
    try:
        with open(name, "r") as file:
            return BeautifulSoup(file.read(), "html.parser")

    except Exception:
        writePage()

    with open(name, "r") as file:
        return BeautifulSoup(file.read(), "html.parser")


def writePage():
    try:
        res = requests.get(URL, headers=headers)
        res.raise_for_status()
        soup = BeautifulSoup(res.content, "html.parser")

    except Exception:
        print("Not able to connect to: ", URL)

    else:
        with open("filo.news.html", "w", encoding="utf-8") as file:
            content = str(soup.prettify())
            file.write(content)


URL = "https://www.filo.news"
sopa = getPageContent()
a_tags = sopa.find_all(href=re.compile(r"/noticia/"))

hrefs = [tag.get("href") for tag in a_tags]

noticias = []
for href in hrefs:
    noticias.append(requests.get(f"{URL}{href}"))

contenidos = []
for noticia in noticias:
    soup = BeautifulSoup(noticia.content, "lxml")
    texto = [p.get_text() for p in soup.find_all("p")]
    contenidos.append(" ".join(texto))

for i in contenidos:
    print("---------------------------------------------")
    print(i)
    print()
