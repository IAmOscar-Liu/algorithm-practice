  const isValid = (state, totalNode) => {
    // state = ["R", "R", "G"]
    if (state.length == 0 || state.length == 1) return true;
    for (let i = 1; i <= state.length; i++) {
      if (state[i] == state[i - 1]) return false;
    }

    if (state.length === totalNode) return state[0] != state[totalNode - 1];
    return true;
  };

  const pickColor = (
    nodeIdx,
    currentColor,
    currentResult,
    colors,
    totalNode
  ) => {
    if (!isValid(currentResult, totalNode)) return [];
    if (nodeIdx == totalNode) return [[currentColor]];

    // console.log(
    //   `nodeIdx: ${nodeIdx}, currentResult: ${currentResult}, colors: ${colors}`
    // );

    const results = [];
    colors.forEach((color) => {
      const eachResult = pickColor(
        nodeIdx + 1,
        color,
        [...currentResult, color],
        colors,
        totalNode
      );

      if (currentColor) {
        results.push(...eachResult.map((r) => [currentColor, ...r]));
      } else {
        results.push(...eachResult);
      }
    });

    return results;
  };

  console.log(pickColor(0, null, [], ["R", "G", "B"], 4));
