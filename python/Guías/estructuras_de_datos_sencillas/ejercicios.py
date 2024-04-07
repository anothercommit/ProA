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
def sumMatrix(m1: list, m2: list):
    for x in range(len(m1)):
        for y in range(len(m1[0])):
            try:
                m1[x][y] += m2[x][y]
            except:
                print("¡Error (sumMatrix)! Las matrices deben tener el mismo tamaño")
                return None
    return m1

# ej4

