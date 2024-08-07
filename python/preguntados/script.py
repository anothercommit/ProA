import json
import os

# import pprint as p
import random as r
import time as t

import requests
from dotenv import load_dotenv

headers = {
    # 'Device-Memory': '8',
    # 'DPR': '1',
    # 'VIEWPORT-WIDTH': '1362',
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


def writePointHistory(nombre: str, puntaje: str):
    try:
        with open(".log.txt", "r") as file:
            content = file.read()
            try:
                start = content.index(nombre) + len(nombre) + 2
                end = content.index("\n", start)
                content = content[:start] + puntaje + content[end:]
            except Exception:
                content += f"{nombre}: {puntaje}\n"

        with open(".log.txt", "w") as file:
            file.write(content)
    except Exception:
        with open(".log.txt", "w") as file:
            file.write(f"{nombre}: {puntaje}\n")


def getRandomGame(dev: str):
    url = f"https://api.rawg.io/api/games?key={
        API_KEY}&exclude_additions=true&developers={dev}"
    print("-", end="")
    # print('\n', url)
    res = requests.get(url, headers=headers)
    res.raise_for_status()
    juego = json.loads(res.text)
    return r.choice(juego["results"])


def getOneDevFourGames():
    games = []
    devs = [*developers]
    for _ in range(4):
        dev = devs.pop(r.randrange(len(devs)))
        game = getRandomGame(dev[1])
        games.append({"name": game["name"], "dev": dev[0]})

    return (*games,)


def gameLoop():
    player = input("Introduce to nombre: ")
    puntaje = 0
    for _ in range(4):
        # temp = getOneDevFourGames()
        temp = (
            {"dev": "Valve Software", "name": "Counter-Strike: Condition Zero"},
            {"dev": "Team Cherry", "name": "Hollow Knight"},
            {"dev": "FromSoftware", "name": "Enchanted Arms"},
            {"dev": "Ubisoft Montreal", "name": "Prince of Persia (2008)"},
        )

        rightAns = r.choice(temp)["dev"]

        print(f"\nCual de estos juegos fue desarrollado por {rightAns}")
        start = t.time()

        for i in range(4):
            print(f"{i+1}) {temp[i]['name']}")

        ans = int(input("1-4: "))
        suma = (50 - int(t.time() - start)) * 10

        if temp[ans - 1]["dev"] == rightAns:
            print(f"✅Correcto! +{suma}")
            puntaje += suma
        else:
            print("❌Incorrecto!")

    print(f"Jugadxr: {player};\tPuntaje: {puntaje}")
    writePointHistory(player, str(puntaje))


load_dotenv()
API_KEY = os.environ.get("API_KEY")

developers = (
    ["Valve Software", "valve-software"],
    ["Team Cherry", "team-cherry"],
    ["FromSoftware", "fromsoftware"],
    ["Ubisoft Montreal", "ubisoft-montreal"],
    ["Arkane Studios", "arkane-studios"],
    ["Riot Games", "riot-games"],
)

gameLoop()
