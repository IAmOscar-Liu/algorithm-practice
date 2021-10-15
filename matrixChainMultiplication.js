const dispResult = (matrixKeys, solutionTable, currentSolution) => {
  if (currentSolution[0] == currentSolution[1])
    return matrixKeys[currentSolution[0] - 1];
  const solution =
    solutionTable[currentSolution[0] - 1][currentSolution[1] - 1];
  return (
    "(" +
    dispResult(matrixKeys, solutionTable, [currentSolution[0], solution]) +
    dispResult(matrixKeys, solutionTable, [solution + 1, currentSolution[1]]) +
    ")"
  );
};

const matrixChainMultiplication = (matrixes) => {
  const numOfMatrix = Object.keys(matrixes).length;
  const matrixKeys = Object.keys(matrixes);

  if (numOfMatrix <= 1) return "(" + matrixKeys.join("") + ")" + " cost: 0";

  const d = Object.values(matrixes)
    .map((v, idx) => (idx == 0 ? [v[0], v[1]] : v[1]))
    .flat();
  const matrixTable = Array(numOfMatrix)
    .fill()
    .map((a) => Array(numOfMatrix).fill(0));
  const solutionTable = Array(numOfMatrix)
    .fill()
    .map((a) => Array(numOfMatrix).fill(null));

  for (let diff = 1; diff <= numOfMatrix - 1; diff++) {
    for (let row = 1; row <= numOfMatrix - diff; row++) {
      const col = row + diff;
      // console.log("row:", row, " col:", col);
      let min = Infinity;
      let bracketEnd;
      for (let k = row; k < col; k++) {
        const cost =
          matrixTable[row - 1][k - 1] +
          matrixTable[k][col - 1] +
          d[row - 1] * d[k] * d[col];
        if (cost < min) {
          min = cost;
          bracketEnd = k;
        }
      }
      matrixTable[row - 1][col - 1] = min;
      solutionTable[row - 1][col - 1] = bracketEnd;
    }
  }
  // show results
  console.log(
    "best solution of solving matrix multiplication " +
      matrixKeys
        .map((k) => `${k}(${matrixes[k][0]}*${matrixes[k][1]})`)
        .join(",")
  );
  matrixTable.forEach((tt) =>
    console.log(
      "[" +
        tt
          .map((t) => t.toString())
          .map((t) => " ".repeat(7 - t.length) + t)
          .join(",") +
        "]"
    )
  );

  return (
    dispResult(matrixKeys, solutionTable, [1, numOfMatrix]) +
    " cost: " +
    matrixTable[0][numOfMatrix - 1]
  );
};

const matrixes_1 = {
  A1: [8, 4],
  A2: [4, 10],
  A3: [10, 3],
  A4: [3, 20],
  A5: [20, 4],
};

const matrixes_2 = {
  B1: [5, 4],
  B2: [4, 6],
  B3: [6, 2],
  B4: [2, 7],
};
console.log(matrixChainMultiplication(matrixes_1));
console.log(matrixChainMultiplication(matrixes_2));
