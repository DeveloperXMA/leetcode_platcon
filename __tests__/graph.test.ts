import Graph from "../utlilty/Types/Graph";

const graph = new Graph();

describe("Tests for Graph", () => {

  beforeAll(() => {
    
    graph.addNode('A');
    graph.addNode('B');
    graph.addNode('C');
    graph.addNode('D');
    graph.addNode('E');

    graph.addEdge('A', 'B');
    graph.addEdge('D', 'E');
    graph.addEdge('C', 'E');
    graph.addEdge('A', 'D');
    graph.addEdge('A', 'C');
    graph.addEdge('E', 'B');
    graph.addEdge('D', 'B');

  })

  it("It should constrcture a graph", () => {
      console.log(graph.adjacentList);
  });

  it ("It should run bfs", () => {
    graph.bfs();
  })
})