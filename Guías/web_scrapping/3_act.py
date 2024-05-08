import requests
import re
import pyperclip
from bs4 import BeautifulSoup

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

while True:
    url = pyperclip.waitForNewPaste()

    try:
        req = requests.get(url, headers=headers)
        req.raise_for_status()
    except:
        print("Not able to connect to: ", url)
        continue

    soup = BeautifulSoup(req.content, "html.parser")
    parrafos = soup.find_all(href=re.compile("https://www.filo.news/noticia/"))

    print(parrafos)
