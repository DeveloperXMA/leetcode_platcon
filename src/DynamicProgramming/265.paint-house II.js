/** There are a row of n houses, each house can be painted with one of the k colors. The cost of painting each house with a certain color is different. You have to paint all the houses such that no two adjacent houses have the same color.

// The cost of painting each house with a certain color is represented by a n x k cost matrix. For example, costs[0][0] is the cost of painting house 0 with color 0; costs[1][2] is the cost of painting house 1 with color 2, and so on... Find the minimum cost to paint all houses.

// Note:
// All costs are positive integers.

// Example:

// Input: [[1,5,3],[2,9,4]]
// Output: 5
// Explanation: Paint house 0 into color 0, paint house 1 into color 2. Minimum cost: 1 + 4 = 5; 
//              Or paint house 0 into color 2, paint house 1 into color 0. Minimum cost: 3 + 2 = 5. 
*/
/**
 * @param {number[][]} costs
 * @return {number}
 */
 var minCostII = function(costs) {
  if (costs === null || costs.length === 0) return 0;
  for (let i = 1; i < costs.length; i++) {
    for (let j = 0; j < costs[0].length; j++) {
      costs[i][j] += helper(costs, i, j);
    }
  }
  let n = costs.length - 1;
  return Math.min(...costs[n]);
};

const helper = (costs, i, j) => {
let min = Number.MAX_SAFE_INTEGER;
for (let k = 0; k < costs[0].length; k++) {
  if (k === j) continue;
  min = Math.min(costs[i - 1][k], min);
}
return min;
}