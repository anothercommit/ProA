def sortList(list):
    f = len(list)
    while f > 1:
        ultimo = 0
        for i in range(1, f):
            print(list, list[i])
            if list[i-1] > list[i]:
                list[i], list[i-1] = list[i-1], list[i]
                ultimo = i
        f = ultimo
    return list


def bSearch(n: int, list) -> bool:
    mi = len(list) // 2
    mn = list[mi]
    if n == mn:
        return True
    elif len(list) == 1:
        return False
    if (n > mn):
        return bSearch(n, list[mi+1:])
    else:
        return bSearch(n, list[:mi])


def askForNumber(m="Enter the number you want to look for: ") -> int:
    try:
        n = int(input(m))
    except:
        return askForAmount("That's not a number! Please enter a number to look for: ")
    return n


def askForAmount(m="Enter the amount of numbers you want in the list: ") -> int:
    try:
        amount = int(input(m))
        if (amount < 1):
            return askForAmount("That's not a valid number! please enter a number bigger than 0: ")
    except:
        return askForAmount("That's not a valid number! please enter a number bigger than 0: ")
    return amount


def createList():
    list = []
    amount: int = askForAmount()
    i: int = 0

    while (i != amount):
        try:
            list.append(int(input("Enter any number: ")))
            i += 1
        except:
            print("That's not a number! Try again")

    return list


# userList = createList()
# numToSearch = askForNumber()

sortList([1, 0, 2, 3, 4, 1])
# print(bSearch(numToSearch, sortList(userList)))
