/*
 * @lc app=leetcode id=1192 lang=javascript
 *
 * [1192] Critical Connections in a Network
 *
 * https://leetcode.com/problems/critical-connections-in-a-network/description/
 *
 * algorithms
 * Hard (48.38%)
 * Likes:    651
 * Dislikes: 60
 * Total Accepted:    32.2K
 * Total Submissions: 66.5K
 * Testcase Example:  '4\n[[0,1],[1,2],[2,0],[1,3]]'
 *
 * There are n servers numbered from 0 to n-1 connected by undirected
 * server-to-server connections forming a network where connections[i] = [a, b]
 * represents a connection between servers a and b. Any server can reach any
 * other server directly or indirectly through the network.
 * 
 * A critical connection is a connection that, if removed, will make some
 * server unable to reach some other server.
 * 
 * Return all critical connections in the network in any order.
 * 
 * 
 * Example 1:
 * 
 * 
 * 
 * 
 * Input: n = 4, connections = [[0,1],[1,2],[2,0],[1,3]]
 * Output: [[1,3]]
 * Explanation: [[3,1]] is also accepted.
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= n <= 10^5
 * n-1 <= connections.length <= 10^5
 * connections[i][0] != connections[i][1]
 * There are no repeated connections.
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
 var criticalConnections = function(n, connections) {
  if (connections === null || connections.length === 0) return [];
  
  let result = [];
  
  // 注意一定要这样初始化数组

  let graph = [...Array(n)].map(() => []);    
  // 我们先把这个节点的表示用二维数组存起来
  for (let connection of connections) {
      graph[connection[0]].push(connection[1]);
      graph[connection[1]].push(connection[0]);
  }
  
  // 然后我们要一个数组 用来存我们当前节点的最小的步数
  let steps = [...Array(n)].fill(-1);
  
  dfs(0, -1, 0, steps, graph, result);
  return result;
  
};

var dfs = function (currentNode, parentNode, stepTakenFromLastTime, steps, graph, result) {
  // 走到当前节点 我们给stepTakenFromLastTime + 1
  steps[currentNode] = stepTakenFromLastTime + 1;
  
  // 遍历她的孩子节点，试图去更新这个stepTakenFromLastTime
  for (let child of graph[currentNode]) {
      if (child === parentNode) {
          continue;
      } else if (steps[child] === -1) {
          // steps[child] 如果等于-1 代表没访问过，访问过的最少都是0
          // 这里记住用 stepTakenFromLastTime + 1 ， 而不是stepTakenFromLastTime， 因为
          steps[currentNode] = Math.min(steps[currentNode], dfs(child, currentNode, stepTakenFromLastTime + 1, steps, graph, result));
      } else {
          steps[currentNode] = Math.min(steps[child], steps[currentNode]);
      }
  }
  if (steps[currentNode] === stepTakenFromLastTime + 1 && currentNode !== 0) {
      result.push([currentNode, parentNode])
  }
}
// @lc code=end
criticalConnections(6, [[0,1],[1,2],[2,0],[1,3],[3,4],[4,5],[5,3]]);

