const quickSort = (arr, left = 0, right = arr.length - 1) => {
    const swap = (i , j) => {
        const tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }
    
    const partition = (pl, pr) => {
        let pivot = pl, i = pl, j = pr + 1;
    
        while (i < j) {
            do { i ++ } while (arr[i] <= arr[pivot])
            do { j -- } while (arr[j] > arr[pivot])
    
            if (i < j) swap(i, j);
        }
        swap(left, j);
        return j;
    }
    
    if (left < right) {
        const j = partition(left, right);
        quickSort(arr, left, j);
        quickSort(arr, j + 1, right);
    }
    
    
    return arr;
}

console.log(quickSort([7, 1, 3, 6, 4, 10, 9]));
console.log(quickSort([5, 10, 7, 2, 6, 9, 3, 8, 1, 4]));
console.log(quickSort([8, 3, 1, 7, 0, 10, 2]))
