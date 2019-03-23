import { initLinkedList } from "../utlilty/common";
import { LinkedList } from "../utlilty/Types/LinkedList";

describe("Tests for Linked List", () => {

  let list:LinkedList<number>;

  beforeAll(() => {
    list = initLinkedList();
  });

  it("Test iterate items", () => {
    const expected: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    list.append(5);
    list.append(6);
    list.append(7);
    list.append(8);
    list.append(9);
    list.append(10);

    let items = list.items();

    const result: number[] = [];
    while (true) {
      const next = items.next();
      if (next.done) {
        break;
      }
      result.push(next.value.value);
    }

    expect(result).toEqual(expected);
  });

  it("Test delete items", () => {
    list.delete(10);
    const array = list.toArray();
    expect(array).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  })



});