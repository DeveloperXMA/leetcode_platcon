/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */

var dfs = function (graph, currentNode, parentNode, visitedNodes) {
  let linkedNodes = graph[currentNode];
  for (let node of linkedNodes) {
    if (node === parentNode) {
      continue;
    } else if (visitedNodes.has(node)) {
      return false;
    } else {
      visitedNodes.add(node);
      let result =  dfs(graph, node, currentNode, visitedNodes);
      if (result === false) return false;
    }
  }
  return true;
}

var validTree = function (n, edges) {

  // the tree's edge's number is always N - 1, which N represent the number of nodes in a tree
  if (edges.length !== n - 1) return false;
  // constructure graph representation
  // take [[0,1], [1,2], [2,3], [1,3], [1,4]]
  /**
   *  
   *  { 
        0 : 1
   *    1 : 0 ,2, 3, 4
        2 : 1, 3
        3 : 2, 1
        4 : 1
   *  }
  **/
  let graph = [];
  for (let i = 0; i < n; i++) {
    graph[i] = [];
  }
  for (let edge of edges) {
    graph[edge[0]].push(edge[1]);
    graph[edge[1]].push(edge[0]);
  }
  let visited = new Set();
  visited.add(0);
  let result = dfs(graph, 0, -1, visited);
  if (result === false) return false;
  return visited.size === n ? true : false;
}