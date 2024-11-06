def binarySearch(n, arr):
    if len(arr) == 0:
        return False

    m = len(arr) // 2
    print("len", len(arr), "m", m)

    if n == arr[m]:
        return True

    if n > arr[m]:
        return binarySearch(n, arr[m + 1 :])
    return binarySearch(n, arr[:m])


arr = [1, 2, 3, 4, 5, 6]
print(binarySearch(5, arr))
