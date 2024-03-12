import requests
from bs4 import BeautifulSoup


def writeFile(name, soup):
    with open(name, "w", encoding="utf-8") as file:
        content = str(soup.prettify())
        file.write(content)


artStationUrl = "https://brockhoferart.com/projects"
res = requests.get(artStationUrl)
res.raise_for_status()

artStationSoup = BeautifulSoup(res.content, 'html.parser')
images = artStationSoup.find_all('img', attrs={'data-src': True})

for img in images:
    print(img['data-src'])
    # meterlos todos en un array y asi writearlos
