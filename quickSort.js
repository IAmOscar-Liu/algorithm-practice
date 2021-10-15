const swap = (a, i, j) => {
  const tmp = a[i];
  a[i] = a[j];
  a[j] = tmp;
};

const partition = (arr) => {
  let i = 0;
  let j = arr.length;
  let pivot = arr[0];
  while (i < j) {
    do {
      i++;
    } while (arr[i] <= pivot);

    do {
      j--;
    } while (arr[j] > pivot);
    if (i < j) swap(arr, i, j);
  }
  swap(arr, 0, j);
  return [arr, j];
};

const quickSort = (arr) => {
  if (arr.length == 0) return arr;
  
  const [newArr, j] = partition([...arr]);
  const head = quickSort(newArr.slice(0, j));
  const tail = quickSort(newArr.slice(j + 1));
  return [...head, newArr[j], ...tail];
};

console.log(quickSort([7, 1, 3, 6, 4, 10, 9]));
