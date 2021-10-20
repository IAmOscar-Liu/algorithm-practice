const longestCommonSebsequence = (a, b) => {
  const table = Array(b.length + 1)
    .fill()
    .map(() => Array(a.length + 1).fill(""));

  for (let row = 1; row <= b.length; row++) {
    for (let col = 1; col <= a.length; col++) {
      if (a[col - 1] == b[row - 1]) {
        table[row][col] = table[row - 1][col - 1] + a[col - 1];
      } else {
        const option_1 = table[row - 1][col];
        const option_2 = table[row][col - 1];
        table[row][col] =
          option_1.length > option_2.length ? option_1 : option_2;
      }
    }
  }
  return table[b.length][a.length];
};

console.log(longestCommonSebsequence("aggtab", "gxtxayb"));
