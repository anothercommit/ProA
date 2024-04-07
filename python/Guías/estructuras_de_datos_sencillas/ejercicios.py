# ej1
def partList(l: list, k: int) -> list:
    mayor = []
    menor = []
    for n in l:
        if n < k:
            menor.append(n)
        else:
            mayor.append(n)
    return menor + mayor


# ej2
def rotateList(l: list[int], k: int) -> list[int]:
    return l[k:] + l[:k]


# ej3
def sumMatrix(m1: list, m2: list) -> list[int] | None:
    for x in range(len(m1)):
        for y in range(len(m1[0])):
            try:
                m1[x][y] += m2[x][y]
            except:
                print("¡Error (sumMatrix)! Las matrices deben tener el mismo tamaño")
                return None
    return m1


# ej4
def multMatrix(m1: list, m2: list) -> list | None:
    matriz = []
    try:
        for y in range(len(m1)):
            fila = []
            for x in range(len(m2[0])):
                num = 0
                for z in range(len(m2)):
                    num += m1[y][z] * m2[z][x]
                fila.append(num)
            matriz.append(fila)
        return matriz
    except:
        print("¡Error (multMatrix)! Las matrices deben tener el mismo tamaño")
        return None


# ej5
# no entiendo la diferencia con el ej4


# ej6
def invert(d: dict[str, int]) -> dict[int, list[str]]:
    inverted = {}
    for num in d.values():
        keys = []
        for k, v in d.items():
            if num == v:
                keys.append(k)
        inverted[num] = keys
    return inverted
