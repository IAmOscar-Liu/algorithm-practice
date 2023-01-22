const mergeSort = (arr) => {
    const sort2Arr = (a, b) => {
        let i = 0, j = 0;
        const results = [];
        while (a.length > 0 && b.length > 0) {
            if (a[0] <= b[0]) results.push(a.shift());
            else results.push(b.shift());
        }

        if (a.length > 0) results.push(...a);
        if (b.length > 0) results.push(...b);
        return results;
    } 

    const doMergeSort = (arr) => {
        if (arr.length <= 1) return arr;
        
        const mid = Math.floor(arr.length / 2);
        const left = arr.slice(0, mid);
        const right = arr.slice(mid);

        return sort2Arr(doMergeSort(left), doMergeSort(right));
    }

    return doMergeSort(arr);
}

  console.log(mergeSort([100, 32, 5, 9, 2]));
  console.log(mergeSort([9, 3, 7, 5, 6, 4, 8, 2]));
