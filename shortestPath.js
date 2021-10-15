const graph = {
    // [nextNode, cost]
    1: [
        [2, 9],
        [3, 7],
        [4, 3],
        [5, 2],
    ],
    2: [
        [6, 4],
        [7, 2],
        [8, 1],
    ],
    3: [
        [6, 2],
        [7, 7],
    ],
    4: [[8, 11]],
    5: [
        [7, 11],
        [8, 8],
    ],
    6: [
        [9, 6],
        [10, 5],
    ],
    7: [
        [9, 4],
        [10, 3],
    ],
    8: [
        [10, 5],
        [11, 6],
    ],
    9: [[12, 4]],
    10: [[12, 2]],
    11: [[12, 5]],
    12: [[12, 0]],
};

const searchOrder = [];
const BFS = () => {
    const queue = [12];
    const visited = new Set();
    while (queue.length > 0) {
        let current = queue.shift();

        if (visited.has(current)) continue;

        visited.add(current);
        searchOrder.push(current);
        Object.keys(graph)
          .map((k) => parseInt(k))
          .forEach((key) => {
              graph[key].forEach((p) => {
              if (p[0] == current) queue.push(key);
          });
        });
    }
    // Test
    // console.log(searchOrder);
    // debugger;
};
BFS();

const table = {};
for (let i = 1; i <= 12; i++) {
    table[i] = { cost: Infinity, nextNode: null };
}

console.log(searchOrder);
console.log(table);

table[12].cost = 0;
table[12].nextNode = null;
searchOrder.shift();

searchOrder.forEach((node) => {
    let min = Infinity;
    let best;
    graph[node].forEach((nextNode) => {
        if (nextNode[1] + table[nextNode[0]].cost < min) {
            min = nextNode[1] + table[nextNode[0]].cost;
            best = { cost: min, nextNode: nextNode[0] };
        }
    });
    table[node] = best;
});

console.log(table);

const showResult = () => {
    let start = 1;
    let resultStr =
        "node 1 to node 12, total cost: " +
        table[start].cost +
        ", path: " +
        start;
    while (table[start].nextNode) {
        start = table[start].nextNode;
        resultStr += " -> " + start;
    }
    return resultStr;
};
console.log(showResult());
