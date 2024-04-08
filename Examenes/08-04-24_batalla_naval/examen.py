from random import randint


def mainLoop():
    intentos = 0
    dim = setDimensions()
    matriz = createMatrix(dim["f"], dim["c"])
    barco = {"x": randint(0, dim["f"] - 1), "y": randint(0, dim["c"] - 1)}
    while True:
        printMatrix(matriz)
        move = makeGuess(dim)
        if move == barco:
            print(f"¡Ganaste en {intentos} intento/s! el barco estaba en {barco}")
            printMatrixWithShip(matriz, barco)
            break
        else:
            intentos += 1
            print(f"El barco no está en {move}. Intentos: {intentos}")
            matriz[move["x"]][move["y"]] = "x"


def setDimensions():
    dim = {}
    while True:
        try:
            dim["f"] = int(input("Ingrese la cantidad de filas que desea: "))
            dim["c"] = int(input("Ingrese la cantidad de columnas que desea: "))
        except:
            print("¡Eso no es un número! vuelva a intentar")
        else:
            if dim["f"] > 0 or dim["c"] > 0:
                return dim
            else:
                print("No puede introducir un número menor a 0. Vuelva a intentar")


def makeGuess(d) -> dict[str, int]:
    while(True):
        try:
            x = int(input("Eliga a donde atacar en x: "))
            y = int(input("Eliga a donde atacar en y: "))
        except:
            print("¡Eso no es un número!")
        else:
            if 0 <= y < d["c"] and 0 <= x < d["f"]:
                break
            else:
                print("Número por fuera de las dimensiones de la matriz. Intente de nuevo")
    return {"x": x, "y": y}


def printMatrix(m):
    for x in range(len(m)):
        for y in range(len(m[x])):
            print(m[x][y], end=",\t")
        print()
    print()


def printMatrixWithShip(m: list[list], c: dict[str, int]):
    x = c["x"]
    y = c["y"]
    # Si tan solo hubiera podido copiarlo...
    printMatrix(m[:x] + [m[x][:y] + ["🚢"] + m[x][y + 1 :]] + m[x + 1 :])


def createMatrix(f, c):
    m = []
    for x in range(f):
        fila = []
        for y in range(c):
            while True:
                try:
                    columna = int(input(f"Ingrese un número para ({x},{y}): "))
                except:
                    print("¡Eso no es un número!")
                else:
                    break
            fila.append(columna)
        m.append(fila)
    return m


mainLoop()
