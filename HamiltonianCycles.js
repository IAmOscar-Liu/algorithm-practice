  const isPathOK = (path, nodeNum) => {
    if (path.length > nodeNum) return false;
    if (path.length <= 2) return true;
    if (path.slice(0, -1).includes(path[path.length - 1])) return false;
    return true;
  };

  const getCycles = (graph, nodeIdx, currentResult, start, nodeNum) => {
    if (
      currentResult.length == nodeNum + 1 &&
      currentResult[currentResult.length - 1] == start
    )
      return [currentResult];
    if (!isPathOK(currentResult, nodeNum)) return [];

    const cycles = [];
    graph[nodeIdx].forEach((neighbor) => {
      cycles.push(
        ...getCycles(
          graph,
          neighbor,
          [...currentResult, neighbor],
          start,
          nodeNum
        )
      );
    });

    return cycles;
  };

  const myGraph = {
    1: [2, 3, 5],
    2: [1, 3, 4, 5],
    3: [1, 2, 4],
    4: [2, 3, 5],
    5: [1, 2, 4],
  };
  console.log(getCycles(myGraph, 1, [1], 1, Object.keys(myGraph).length));
