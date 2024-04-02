def writePointHistory(nombre: str, puntaje: str):
    try:
        with open(".log.txt", "r") as file:
            content = file.read()
            start = content.index(nombre) + len(nombre) + 2
            end = content.index("\n", start)
            content = content[:start] + puntaje + content[end:]

        with open(".log.txt", "w") as file:
            file.write(content)
    except:
        with open(".log.txt", "w") as file:
            file.write(f"{nombre}: {puntaje}\n")
        with open(".log.txt", "r") as file:
            return file.read()


writePointHistory("joaco", str(666666))
