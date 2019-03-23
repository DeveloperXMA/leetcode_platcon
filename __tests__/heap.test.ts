import Heap from "../utlilty/Types/Heap";

describe("Test for heap", () => {
  it("It should construct a heap", () => {
    let heap = new Heap(2);
    let items = [3, 2, 1, 5, 6, 4];
    for (let number of items) {
      heap.add(number);
    }
    expect(heap.peek()).toBe(5);
  });

  it("it should return Kth largest element in array [3,2,3,1,2,4,5,5,6] when K = 4", () => {
    let heap = new Heap(4);
    let items = [3, 2, 3, 1, 2, 4, 5, 5, 6];
    for (let number of items) {
      heap.add(number);
    }
    expect(heap.peek()).toBe(4);
  });
});