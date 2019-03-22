import getRow from "../src/Recursion/Pascal_triangle";

test("1 should return [1, 1]", () => {
  expect(getRow(1)).toEqual([1, 1]);
});

test("3 should return [1, 3, 3, 1]", () => {
  expect(getRow(3)).toEqual([1, 3, 3, 1]);
});
