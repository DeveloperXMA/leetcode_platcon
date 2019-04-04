import Heap from "../utlilty/Types/Heap";

describe("Test for heap", () => {
  it("It should construct a heap", () => {
    let heap = new Heap(7);
    heap.add(3);
    heap.add(9);
    heap.add(1);
    heap.add(7);
    heap.add(6);
    heap.add(100);
    heap.add(4);
    console.log(heap.items);
  })
});