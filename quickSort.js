const quickSort = (arr) => {
    const swap = (arr, l, r) => {
        const tmp = arr[l];
        arr[l] = arr[r];
        arr[r] = tmp;
    }
    
    const partition = (arr, left, right) => {
        let l = left, j = right;
    
        while (l < j) {
            do { l ++ } while (l > left && arr[l] <= arr[left])
            do { j -- } while (j < right && arr[j] > arr[left])
    
            if (l < j) swap(arr, l, j);
        }
        swap(arr, left, j);
        return j;
    }
    
    const doQuickSort = (arr, left, right) => {
        if (left < right) {
            const j = partition(arr, left, right);
            doQuickSort(arr, left, j);
            doQuickSort(arr, j + 1, right);
        }
    }
    
    doQuickSort(arr, 0, arr.length);
    return arr;
}

console.log(quickSort([7, 1, 3, 6, 4, 10, 9]));
console.log(quickSort([5, 10, 7, 2, 6, 9, 3, 8, 1, 4]));
