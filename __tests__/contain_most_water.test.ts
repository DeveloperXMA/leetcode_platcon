import { maxArea } from "../src/contain_most_water";

describe("Test for contain most water", () => {
  it("[1,8,6,2,5,4,8,3,7] should return 49", () => {
    const result = maxArea([1,8,6,2,5,4,8,3,7]);
    expect(result).toEqual(49);
  });
})