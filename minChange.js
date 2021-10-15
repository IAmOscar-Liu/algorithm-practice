
const minChange = (amount, _coins) => {
  const coins = _coins.sort((a, b) => a - b);
  const table = Array(coins.length + 1).fill().map(() => Array(amount + 1).fill(-1));
  for (let row = 0; row <= coins.length; row++) {
      table[row][0] = 0;
  }
  
  // console.log(JSON.stringify(table));
  

  for (let row = 1; row <= coins.length; row++) {
    for (let col = 1; col <= amount; col++) {
      const prev1 = table[row - 1][col];
      let prev2 = -1;
      if (table[row][col - coins[row - 1]] > -1) {
        prev2 = table[row][col - coins[row - 1]] + 1;
      }
      
      if (prev1 == -1 && prev2 == -1) {
        continue;
      } else if (prev1 > -1 && prev2 == -1) {
        table[row][col] = prev1;
      } else if (prev1 == -1 && prev2 > -1) {
        table[row][col] = prev2;
      } else if (prev1 <= prev2) {
        table[row][col] = prev1;
      } else if (prev1 > prev2) {
        table[row][col] = prev2;
      }
    }
  } 
  
  // console.log(table[coins.length][amount]);
  return table[coins.length][amount] 
};

console.log(minChange(5, [1,2,5]));





