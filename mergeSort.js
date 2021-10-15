  const sort2Arr = (a, b) => {
    let i = 0;
    let j = 0;
    let results = [];
    while (true) {
      const cmpA = a[i];
      const cmpB = b[j];

      if (!cmpA) {
        results.push(...b.slice(j));
        break;
      }
      if (!cmpB) {
        results.push(...a.slice(i));
        break;
      }

      if (cmpA < cmpB) {
        results.push(cmpA);
        i++;
      } else {
        results.push(cmpB);
        j++;
      }
    }

    return results;
  };

  const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return sort2Arr(mergeSort(left), mergeSort(right));
  };

  console.log(mergeSort([100, 32, 5, 9, 2]));
  console.log(mergeSort([9, 3, 7, 5, 6, 4, 8, 2]));
