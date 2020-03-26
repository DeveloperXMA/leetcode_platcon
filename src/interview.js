/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseWords = function (s) {
  s = s.reverse();
  for (let i = 0, j = 0; i < s.length, j < s.length;) {
    while (s[j] && s[j] !== ' ') {
      j++;
    };
    let nextStart = j + 1;
    j--;
    swap(s, i, j);
    i = nextStart;
    j = nextStart;
  }
};

const swap = function (s, i, j) {
  while (i < j) {
    [s[i], s[j]] = [s[j], s[i]];
    i++;
    j--;
  }
};

reverseWords(["t", "h", "e", " ", "s", "k", "y", " ", "i", "s", " ", "b", "l", "u", "e"])
