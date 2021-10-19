const diffStrCount = (a, b) => {
  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] != b[i]) diff++;
  }
  return diff;
};

const circularPermutationBinary = (binaryLength, startsWith) => {
  if (startsWith.length == binaryLength) return [startsWith];

  const results = [];

  const leftResults = circularPermutationBinary(
    binaryLength,
    startsWith + "0"
  );

  const rightResults = circularPermutationBinary(
    binaryLength,
    startsWith + "1"
  );

  if (
    diffStrCount(
      leftResults[leftResults.length - 1],
      rightResults[0]
    ) > 1
  ) {
    results.push(...leftResults, ...rightResults.reverse());
  } else {
    results.push(...leftResults, ...rightResults);
  }
  return results;
};

console.log(circularPermutationBinary(4, ""));
console.log(circularPermutationBinary(5, ""));
