  const maxContiguousSubArraySum = (arr) => {
    let sum = arr[0];
    let maxSum = arr[0];
    let startAt = 0;
    let endAt = 1;
    for (let i = 1; i < arr.length; i++) {
      if (sum < 0 && arr[i] > sum) {
        sum = arr[i];
        maxSum = arr[i];
        startAt = i;
        endAt = i + 1;
      } else {
        sum += arr[i];
        if (sum > maxSum) {
          endAt = i + 1;
          maxSum = sum;
        }
      }
    }
    console.log(
      `startAt: ${startAt}, endAt: ${endAt}, sum: ${sum}, maxSum: ${maxSum}`
    );
  };

  maxContiguousSubArraySum([-2, 1, -3, 4, -1]);  // startAt: 3, endAt: 4, sum: 3, maxSum: 4
  maxContiguousSubArraySum([-2, 1, -3, 4, -1, 2]);  // startAt: 3, endAt: 6, sum: 5, maxSum: 5
  maxContiguousSubArraySum([-2, 1, -3, 4, -1, 2, 1]);  // startAt: 3, endAt: 7, sum: 6, maxSum: 6
  maxContiguousSubArraySum([-2, 1, -3, 4, -1, 2, 1, -5]); // startAt: 3, endAt: 7, sum: 1, maxSum: 6
  maxContiguousSubArraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]); // startAt: 3, endAt: 7, sum: 5, maxSum: 6
  maxContiguousSubArraySum([-3, -2, -1, -9]);  // startAt: 2, endAt: 3, sum: -10, maxSum: -1
