import requests
import re
import pyperclip
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
        req = requests.get(URL, headers=headers)
        req.raise_for_status()
        soup = BeautifulSoup(req.content, "html.parser")

    except Exception:
        print("Not able to connect to: ", URL)

    else:
        with open("filo.news.html", "w", encoding="utf-8") as file:
            content = str(soup.prettify())
            file.write(content)


headers = {
    "Upgrade-Insecure-Requests": "1",
    "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "Sec-Fetch-Site": "same-origin",
    "Sec-Fetch-Mode": "navigate",
    "Sec-Fetch-User": "?1",
    "Sec-Fetch-Dest": "document",
    "Accept-Encoding": "gzip, deflate, br, zstd",
    "Accept-Language": "es,en-US;q=0.9,en;q=0.8",
}

URL = pyperclip.waitForPaste()

# while True:
#     URL = pyperclip.waitForPaste()

#     sopa = getPageContent()
#     noticias = sopa.find_all("<a>", href=re.compile("/noticia/"))

#     print(noticias)
