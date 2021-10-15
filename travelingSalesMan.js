const graph = [
[0, 10, 15, 20],
[5, 0, 9, 10],
[6, 13, 0, 12],
[8, 8, 9, 0],
];
const travelingSalesMan = (currentPath, from, to) => {
if (from != null && to == 1)
  return { shortestPath: currentPath, dist: graph[from - 1][to - 1] };

let min = Infinity;
let shortestPath;
if (currentPath.length == 4) {
  const result = travelingSalesMan([...currentPath, 1], to, 1);
  min = result.dist + graph[from - 1][to - 1];
  shortestPath = result.shortestPath;
} else {
  [1, 2, 3, 4].forEach((nextNode) => {
    if (!currentPath.includes(nextNode)) {
      const result = travelingSalesMan(
        [...currentPath, nextNode],
        to,
        nextNode
      );
      const distToNextNode =
        from == null
          ? result.dist
          : result.dist + graph[from - 1][to - 1];
      if (distToNextNode < min) {
        min = distToNextNode;
        shortestPath = result.shortestPath;
      }
    }
  });
}
return { shortestPath, dist: min };
};

console.log(travelingSalesMan([1], null, 1));
// console.log(travelingSalesMan([1, 2, 3, 4, 1], 4, 1));
