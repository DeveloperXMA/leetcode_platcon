import getRow from "../src/Recursion/Pascal_triangle";

test("basic", () => {
  expect(getRow(1)).toEqual([1, 1]);
});
