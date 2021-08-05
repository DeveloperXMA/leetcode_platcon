// Input:
// k = 2
// keywords = ["anacell", "cetracular", "betacellular"]
// reviews = [
//   "Anacell provides the best services in the city",
//   "betacellular has awesome services",
//   "Best services provided by anacell, everyone should use anacell",
// ]

// Output:
// ["anacell", "betacellular"]

// Explanation:
// "anacell" is occuring in 2 different reviews and "betacellular" is only occuring in 1 review.

const solution = (k: number, keywords: Array<string>, reviews: Array<string>) => {
  if (keywords === null || keywords.length === 0 || k === 0) {
    return [];
  }
  let map = {};
  for (let review of reviews) {
    for (let keyword of keywords) {
      if (review.indexOf(keyword) > 0) {
        map[keyword] = map[keyword] ? map[keyword]++ : 1;
      }
    }
  }
  console.log(map);

}

let k = 2;
let keywords = ["anacell", "cetracular", "betacellular"];
let reviews = [
  "Anacell provides the best services in the city",
  "betacellular has awesome services",
  "Best services provided by anacell, everyone should use anacell",
];

solution(k, keywords, reviews);