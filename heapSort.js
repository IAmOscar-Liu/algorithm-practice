const dispHeap = (arr) => {
  console.log(arr);
  const height = Math.floor(Math.log2(arr.length)) + 1;
  const numOfEachLayer = Array(height)
    .fill(0)
    .map((_, i) => Math.pow(2, i));
  const copyArr = [...arr];
  let layerIdx = 0;
  while (copyArr.length > 0) {
    const nodeInThisLayer = [];
    for (let i = 0; i < numOfEachLayer[layerIdx]; i++) {
      if (copyArr[0]) nodeInThisLayer.push(copyArr.shift());
      else break;
    }
    console.log(nodeInThisLayer.join(" "));
    layerIdx++;
    nodeInThisLayer.splice(0, nodeInThisLayer.length);
  }
};

const swap = (a, l, r) => {
  const tmp = a[l];
  a[l] = a[r];
  a[r] = tmp;
};

const doHeapify = (arr, idx) => {
  if (arr[idx] == undefined || arr[idx] == null) return;
  if (arr[2 * idx] == undefined && arr[2 * idx + 1] == undefined) return;
  const leftChildIdx = 2 * idx;
  const rightChildIdx = 2 * idx + 1;
  if (
    arr[leftChildIdx] >= (arr[rightChildIdx] || -Infinity) &&
    arr[idx] < arr[leftChildIdx]
  ) {
    swap(arr, idx, leftChildIdx);
    doHeapify(arr, leftChildIdx);
    return;
  }
  if (
    arr[rightChildIdx] &&
    arr[rightChildIdx] > arr[leftChildIdx] &&
    arr[idx] < arr[rightChildIdx]
  ) {
    swap(arr, idx, rightChildIdx);
    doHeapify(arr, rightChildIdx);
    return;
  }
};

const doHeapSort = (arr) => {
  // [null, 100, 60, 99, 22, 15, 70, 80, 10, 5, 8, 4, 45, 25, 3, 50]
  const copyArr = [...arr];
  const results = [];
  while (copyArr.length > 1) {
    swap(copyArr, 1, copyArr.length - 1);
    results.unshift(copyArr.pop());
    doHeapify(copyArr, 1);
  }
  return results;
};

const headSort = (arr) => {
  if (arr.length == 0) return [];

  console.log("before heapify");
  dispHeap(arr);
  const newArr = [null, ...arr];
  for (let i = newArr.length - 1; i >= 1; i--) {
    doHeapify(newArr, i);
  }
  console.log("after heapify");
  dispHeap(newArr.slice(1));
  console.log("headSort results");
  return doHeapSort(newArr);
};

headSort([50, 5, 3, 10, 8, 25, 100, 60, 22, 15, 4, 45, 70, 99, 80]);
