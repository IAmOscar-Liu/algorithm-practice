const sumAllPossible = (amount, _coins) => {
  const coins = _coins.sort((a, b) => a - b);
  const table = Array(coins.length + 1).fill().map(() => Array(amount + 1).fill([]));
  for (let row = 0; row <= coins.length; row++) {
      table[row][0] = [[]];
  }
  
  // console.log(JSON.stringify(table));
  

  for (let row = 1; row <= coins.length; row++) {
    for (let col = 1; col <= amount; col++) {
      const prev1 = table[row - 1][col];
      table[row][col] = [...table[row][col], ...prev1];
      if (table[row][col - coins[row - 1]]) {
        const prev2 = table[row][col - coins[row - 1]].map(p => [...p, coins[row - 1]]);        
        table[row][col] = [...table[row][col], ...prev2];

      }
    }
  } 
  
  return table[coins.length][amount];
};

sumAllPossible(8, [1,2,5])
sumAllPossible(9, [2,4])
