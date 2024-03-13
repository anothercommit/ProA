import requests
from bs4 import BeautifulSoup


def writeParsedFile(name, soup):
    with open(name, "w", encoding="utf-8") as file:
        content = str(soup.prettify())
        file.write(content)

def writeBinaryFile(name, req):
    with open(name, "wb") as file:
        file.write(req.content)


url = "https://www.deviantart.com/aenami"
res = requests.get(url)
res.raise_for_status()

soup = BeautifulSoup(res.content, 'html.parser').find_all('img', attrs={'srcset': True})

# El slice es para sacar el " 2x" del final
images = [img["srcset"][:-3] for img in soup]


for i in range(3):   
    writeBinaryFile(f"Alena Aenami {i}.jpg", requests.get(images[i]))