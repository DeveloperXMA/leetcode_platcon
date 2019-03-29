import { myPow } from "../src/Recursion/pow";

describe("Test for Power function", () => {
  it("2's 4 power should return 16", () => {
    const result = myPow(2,4);
    expect(result).toEqual(16);
  });

  it("2's -4 power should return 1/16", () => {
    const result = myPow(2, -4);
    expect(result).toEqual(0.0625);
  });
})