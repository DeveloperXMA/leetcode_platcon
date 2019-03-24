/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
export const myPow = (x: number, n: number): number => {
  if (n === 0) return 1;
  if (n < 0) {
    n = -n;
    x = 1 / x;
  }
  if (n % 2 === 0) {
    return myPow(x * x, Math.floor(n / 2));
  } else {
    return x * myPow(x * x, Math.floor(n / 2));
  }
};
