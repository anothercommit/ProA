def isCapicua(str):
    if len(str) == 0:
        return True

    return isCapicua(str[1:-1]) if str[0] == str[-1] else False


print(isCapicua("oso"))
print(isCapicua("reconocer"))
print(isCapicua("capicua"))
