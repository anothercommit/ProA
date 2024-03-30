def writePointHistory(nombre: str, puntaje: str):
    with open(".log.txt", "a") as file:
        file.write(f"{nombre}: {puntaje}\n")

    with open(".log.txt", "r") as file:
        file_contents = file.read()

    return file_contents

a = (1,2,3)
b = (*a,)
print(*b, sep=', ')
