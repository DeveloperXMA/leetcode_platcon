function Node (val) {
  this.val = val;
  this.children = new Map();
  this.list = new Set();
}

function Trie () {
  this.root = new Node(null);
}

Trie.prototype.insert = function (word) {
  let curr = this.root;
  for (let character of word) {
    if (curr.children.has(character)) {
      curr = curr.children.get(character);
      curr.list.add(word);
    } else {
      curr.children.set(character, new Node(character));
      curr = curr.children.get(character);
      curr.list.add(word);
    }
  }
}

Trie.prototype.search = function (word) {
  let curr = this.root;
  let result = [];

  this.dfs(curr, word, 0, result);
  console.log('result would be ', result);
}

Trie.prototype.dfs = function (curr, word, index, result) {
  if (index === word.length) {
    for (let val of curr.list) {
      result.push(val);
      console.log(val);
    }
    return;
  }
  if (curr.children.has(word[index])) {
    this.dfs(curr.children.get(word[index]), word, index + 1, result);
  } else {
    for (const [key, value] of curr.children.entries()) {
      this.dfs(value, word, index, result);
    }
  }
}



var suggestedProducts = function(products, searchWord) {
    let trie = new Trie();
    for (let product of products) {
      trie.insert(product);
    }
    trie.search("pt");
};

var printList = function (set) {
  for (let value of set.values()) {
    console.log(value);
  }
}

suggestedProducts(["mobile","mouse","moneypot","monitor","mousepad"],"mouse")


