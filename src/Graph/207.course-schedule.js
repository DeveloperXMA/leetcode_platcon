/*
 * @lc app=leetcode id=207 lang=javascript
 *
 * [207] Course Schedule
 */
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
// This is to decide a directed cycle has a cycle or not

var canFinish = function(numCourses, prerequisites) {
    let graph = {};
    for (let i = 0; i < numCourses; i++) {
      graph[i] = [];
    }
    for (let require of prerequisites) {
      let i = require[1], j = require[0];
      console.log(graph[i]);
      graph[i].push(j);
    }
    let visited = {};
    let recStack = {};

    function dfsFromNode(node, visited, recStack) {
      if (!visited[node]) {
        visited[node] = true;
        recStack[node] = true;
        let children = graph[node];
        for (let v of children) {
          if (!visited[v] && dfsFromNode(v, visited, recStack)) {
            return true;
          } else if (recStack[v]) {
            return true;
          }
        }
      }
      recStack[node] = false;
      return false;
    }

    for (let i = 0; i < numCourses; i++) {
      if (dfsFromNode(i, visited, recStack)) {
        return false;
      }
    }
    return true;
};