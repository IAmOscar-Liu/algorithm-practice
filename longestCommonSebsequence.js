const longestCommonSebsequence = (a, b) => {
    const table = Array(a.length + 1)
      .fill()
      .map(() => Array(b.length + 1).fill(""));

    let alastMatchLoc = -1;
    let blastMatchLoc = -1;
    let longestA = '';
    let longestB = '';

    for (let row = 1; row <= a.length; row++) {
      for (let col = 1; col <= b.length; col++) {
        if (a[row - 1] == b[col - 1]) {
          // console.log("row: ", row, ", col: ", col)
          table[row][col] = table[row - 1][col - 1] + a[row - 1];
          if (
            table[row][col].length >= longestA.length &&
            table[row][col] != longestA
          ) {
            longestA = table[row][col];
            alastMatchLoc = row - 1;
          }
          if (
            table[row][col].length >= longestB.length &&
            table[row][col] != longestB
          ) {
            longestB = table[row][col];
            blastMatchLoc = col - 1;
          }
        } else {
          const option_1 = table[row - 1][col];
          const option_2 = table[row][col - 1];
          table[row][col] =
            option_1.length > option_2.length ? option_1 : option_2;
        }
      }
    }
    console.log(table);
    console.log("last common char at : str 1: " + alastMatchLoc + ", str 2: " + blastMatchLoc);
    return table[a.length][b.length];
};
