const sumOfSubset = (round, sum, target, options) => {
  if (sum == target) return [[...options.map(r => 0)]];
  if (sum > target) return [];
  if (options.length == 0) return [];

   const results = [];
   const currentOption = options[0]
   const remainOptions = options.slice(1);
   // result with round
   const resultWithRound = sumOfSubset(round + 1, sum + currentOption, target, remainOptions);
   if (resultWithRound.length > 0) {
     results.push(...resultWithRound.map(r => ([1, ...r])))
   }

   // result without round
   const resultWithoutRound = sumOfSubset(round + 1, sum, target, remainOptions);
   if (resultWithoutRound.length > 0) {
      results.push(...resultWithoutRound.map(r => ([0, ...r])))
   }
   return results;
}

sumOfSubset(0, 0, 30, [5, 10, 12, 13, 15, 18])
