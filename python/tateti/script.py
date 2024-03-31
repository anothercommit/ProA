import os


def selFigura():
    while True:
        try:
            figura = int(input("Elija con qué jugar: (1) x | (2) o: "))
        except:
            print("¡Debía insertar un número! Intente de nuevo")
            continue

        if figura == 1:
            p[0]["figura"] = "x"
            p[1]["figura"] = "o"
            break
        elif figura == 2:
            p[0]["figura"] = "o"
            p[1]["figura"] = "x"
            break
        else:
            print("¡Ese no es un número válido! Intente de nuevo")


def printTablero():
    os.system("cls" if os.name == "nt" else "clear")

    t = tablero[:]
    for i in range(9):
        t["".join(t).index(" . ") + 1] = f"{jugadas[i]}"
    print("".join(t))


def newMove(figura):
    while True:
        try:
            move = int(input(f"Poner {figura} en (1-9): "))
        except:
            print("¡Eso no es un número! Intente de nuevo")
            continue

        if 0 < move < 10 and jugadas[move - 1] == " ":
            jugadas[move - 1] = figura
            break
        else:
            print("¡Número invalido o lugar no disponible!")


def checkWin():
    j = jugadas  # Para que sea más fácil de leer

    for i in range(3):
        # Filas
        if j[i * 3] != " " and j[i * 3] == j[i * 3 + 1] == j[i * 3 + 2]:
            return True

        # Columnas
        elif j[i] != " " and j[i] == j[i + 3] == j[i + 6]:
            return True

    # Diagonales
    if j[0] != " " and j[0] == j[4] == j[8]:
        return True
    if j[6] != " " and j[6] == j[4] == j[2]:
        return True

    else:
        return False


def checkEmpate():
    if " " not in jugadas:
        return True
    return False


def playLoop():
    currentP = 0
    printTablero()

    while True:
        print(f"Turno de {p[currentP]['nombre']}")
        newMove(p[currentP]["figura"])
        printTablero()

        if checkWin():
            print(f"¡{p[currentP]['nombre']} ganó!")
            break

        elif checkEmpate():
            print(f"¡Empate!")
            break

        currentP = 1 if currentP == 0 else 0


p = [
    {"nombre": "", "figura": ""},
    {"nombre": "", "figura": ""},
]

jugadas = [" ", " ", " ", " ", " ", " ", " ", " ", " "]

tablero = list(
    """
-------------   -------------
| . | . | . |   | 1 | 2 | 3 |
-------------   -------------
| . | . | . |   | 4 | 5 | 6 |
-------------   -------------
| . | . | . |   | 7 | 8 | 9 |
-------------   -------------

"""
)

p[0]["nombre"] = input("(p1) Escribe tu nombre: ")

selFigura()

p[1]["nombre"] = input("(p2) Escribe tu nombre: ")

playLoop()
