export default class Graph {

  adjacentList: Object;

  constructor() {
    this.adjacentList = {};
  }

  public addNode = (node: any): void => {
    this.adjacentList[node] = [];
  }

  public addEdge = (node1: any, node2: any): void => {
    this.adjacentList[node1].push(node2);
  }

  private dfsFromNode = (node: any, visited: Object) => {
    if (!visited[node]) {
      visited[node] = true;
      console.log(`DFS visiting ${node} `);
      const neighbors = this.adjacentList[node];
      for (let v of neighbors) {
        this.dfsFromNode(v, visited);
      }
    }
  }

  public dfs = () => {
    const nodes = Object.keys(this.adjacentList);
    const visited = {};
    for (let node of nodes) {
      this.dfsFromNode(node, visited);
    }
  }

  private bfsFromNode = (node: any, visited: Object) => {
    if (!visited[node]) {
      visited[node] = true;
      const queue = [];
      queue.unshift(node);
      while (queue.length > 0) {
        const currentNode = queue.pop();
        console.log(`current BFS node ${currentNode}`);
        const neighbors = this.adjacentList[currentNode];
        for (let v of neighbors) {
          if (!visited[v]) {
            queue.unshift(v);
            visited[v] = true;
          }
        }
      }
    }
  }

  public bfs = () => {
    const nodes = Object.keys(this.adjacentList);
    const visited = {};
    for (let node of nodes) {
      this.bfsFromNode(node, visited);
    }
  }

  public detectCycle = (): boolean => {
    const nodes = Object.keys(this.adjacentList);
    const visit = {};
    const recStack = {};
    for (let node of nodes) {
      if (this.detectCycleFromNode(node, visit, recStack)) {
        console.log(`there is a cycle`);
        return true;
      }
    }
    console.log(`there is no cycle`);
    return false;
  }

  /**
   * @param node: the node current perform DFS
   * @param visited: use to denote the visited nodes
   * @param recStack: this is called back edges, used to store the node itself and the nodes that it comes from.
   * @returns It will return where the DFS from this node contains a cycle in a direct Graph
   */
  private detectCycleFromNode = (node: any, visited: Object, recStack: Object): boolean => {
    // Check to make sure we haven't already visited this node. If we have, there is no need to visit it again.
    if (!visited[node]) {
      visited[node] = true;
      recStack[node] = true;
      const neighbors = this.adjacentList[node];
      for (let v of neighbors) {
        console.log(`parent is ${node}, Child ${v}`); 
        if (!visited[v] && this.detectCycleFromNode(v, visited, recStack)) {
          return true;
        } else if (recStack[v]) {
          return true;
        }
      }
    }
    // It the node isn't in out recStack, then we pop it off the recursion stack
    // So we won't get a false positive as we traverse another path through the graph.
    recStack[node] = false;
    return false;
  }
}