import requests
from bs4 import BeautifulSoup


def writeParsedFile(name, res):
    res = BeautifulSoup(res.content, 'html.parser')
    with open(name, "w", encoding="utf-8") as file:
        content = str(res.prettify())
        file.write(content)


def writeBinaryFile(name, req):
    with open(name, "wb") as file:
        file.write(req.content)


headers = {
    # DEVICE-MEMORY	8
    # DPR	1
    # VIEWPORT-WIDTH	1362
    # RTT	100
    # DOWNLINK	10
    # ECT	4g
    # SEC-CH-UA	"Chromium";v="123", "Not:A-Brand";v="8"
    # SEC-CH-UA-MOBILE	?0
    # SEC-CH-UA-FULL-VERSION	"123.0.6312.46"
    # SEC-CH-UA-ARCH	"x86"
    # SEC-CH-UA-PLATFORM	"Linux"
    # SEC-CH-UA-PLATFORM-VERSION	"6.6.21"
    # SEC-CH-UA-MODEL	""
    # SEC-CH-PREFERS-COLOR-SCHEME	dark
    # SEC-CH-PREFERS-REDUCED-MOTION	no-preference
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'Sec-Fetch-Site': 'same-origin',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-User': '?1',
    'Sec-Fetch-Dest': 'document',
    'Accept-Encoding': 'gzip, deflate, br, zstd',
    'Accept-Language': 'es,en-US;q=0.9,en;q=0.8',
}

url = "https://www.artstation.com/aenamiart"
res = requests.get(url, headers=headers)
res.raise_for_status()

a = "gallery-grid-link"
soup = BeautifulSoup(res.content, 'html.parser').find_all(
    'a', attrs={'class': True})

# writeParsedFile('artStation.html', res)

for s in soup:
    # writeBinaryFile(f"Alena Aenami {i}.jpg", requests.get(images[i]))
    print(s['class'])
