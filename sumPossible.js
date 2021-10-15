const sumPossible = (amount, _coins) => {
  const coins = _coins.sort((a, b) => a - b);
  const table = Array(coins.length + 1).fill().map(() => Array(amount + 1).fill(false));
  for (let row = 0; row <= coins.length; row++) {
      table[row][0] = true;
  }
  
  // console.log(JSON.stringify(table));
  

  for (let row = 1; row <= coins.length; row++) {
    for (let col = 1; col <= amount; col++) {
      const prev1 = table[row - 1][col];
      const prev2 = !!table[row][col - coins[row - 1]]
      table[row][col] = prev1 || prev2;
    }
  } 
  
  // console.log(table);
  return (table[coins.length][amount]);
};

sumPossible(5, [1, 2, 5])
sumPossible(9, [2,4])
