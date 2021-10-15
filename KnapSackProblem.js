const getResult = (products, table, [row, col]) => {
  // console.log("row: ", row, " col: ", col);
  if (table[row][col] == 0) return [];

  if (table[row][col] != table[row - 1][col]) {
    const currentProduct = products[row - 1];
    return [
      ...getResult(products, table, [row - 1, col - currentProduct.weight]),
      currentProduct,
    ];
  }

  return [...getResult(products, table, [row - 1, col])];
};

const knapSack = (products, limit) => {
  const table = Array(products.length + 1)
    .fill()
    .map((a) => Array(limit + 1).fill(0));

  for (let row = 1; row <= products.length; row++) {
    for (let col = 1; col <= limit; col++) {
      const currentProduct = products[row - 1];
      const option_1 = table[row - 1][col];
      const option_2 =
        (table[row - 1][col - currentProduct.weight] ?? -Infinity) +
        currentProduct.value;
      table[row][col] = option_1 > option_2 ? option_1 : option_2;
    }
  }

  console.log(table);
  return (
    "max value: " +
    table[products.length][limit] +
    ", products you choose: " +
    getResult(products, table, [products.length, limit])
      .map(({ id }) => "id " + id)
      .join(", ")
  );
};

const products_1 = [
  { id: 1, value: 1, weight: 2 },
  { id: 2, value: 2, weight: 3 },
  { id: 3, value: 5, weight: 4 },
  { id: 4, value: 6, weight: 5 },
];

console.log(knapSack(products_1, 8)); // max value: 8, products you choose: id 2, id 4
