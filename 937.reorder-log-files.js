var reorderLogFiles = function (logs) {
  let digits = [];
  let letters = [];
  logs.forEach(log => {
    if ((/[0-9]/i).test(log[log.indexOf(" ") + 1])) {
      digits.push(log);
    } else {
      letters.push(log);
    }
  })
  letters.sort((log1, log2) => {
    return compareWords(log1, log2);
  })
  return [...letters, ...digits];
};

/**
* 
* @param {string} word1 
* @param {string} word2 
* @return {number}
*/
var compareWords = function (word1, word2) {
  let temp1 = word1.split(' ').slice(1).join(' ');
  let temp2 = word2.split(' ').slice(1).join(' ');
  if (temp1 > temp2) {
    return 1;
  } else if (temp1 < temp2) {
    return -1;
  } else {
    if (word1 < word2) {
      return -1;
    } else if (word1 > word2) {
      return 1;
    } else {
      return -1;
    }
  }
}