# Pseudocode: bubbleSort(list)

1. f = len(list)
2. while f > 1
   1. ultimo = 0
   2. for i in range(1, f)
      1. if list[i-1] > list[i]:
         1. intercambiar a[i] por a[i-1]
         2. ultimo = i
   3. f = ultimo


procedure bubbleSort(A : list of sortable items)
    n := length(A)
    repeat
        newn := 0
        for i := 1 to n - 1 inclusive do
            if A[i - 1] > A[i] then
                swap(A[i - 1], A[i])
                newn := i
            end if
        end for
        n := newn
    until n ≤ 1
end procedure