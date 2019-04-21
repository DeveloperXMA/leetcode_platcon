export class TrieNode {
  val: string;
  isWord: boolean;
  children: Map<string, TrieNode>;

  constructor(val) {
    this.val = val;
    this.isWord = false;
    this.children = new Map();
  }
}

export default class Trie {

  root: TrieNode;

  constructor() {
    this.root = new TrieNode(null);
  }

  public insert = (word: string): void => {
    let currentNode = this.root;
    for (let i = 0; i < word.length; i++) {
      if (currentNode.children.has(word[i])) {
        currentNode = currentNode.children.get(word[i]);
      } else {
        currentNode.children.set(word[i], new TrieNode(word[i]));
        currentNode = currentNode.children.get(word[i]);
      }
      if (i + 1 === word.length) {
        currentNode.isWord = true;
      }
    }
  }

  public search = (word: string): boolean => {
    let currentNode = this.root;
    for (let character of word) {
      if (currentNode.children.has(character) === false) {
        return false;
      } else {
        currentNode = currentNode.children.get(character);
      }
    }
    return currentNode.isWord ? true : false;
  }

  public startWith = (prefix: string): boolean => {
    let currentNode = this.root;
    for (let character of prefix) {
      if (currentNode.children.has(character) === false) {
        return false;
      } else {
        currentNode = currentNode.children.get(character);
      }
    }
    return true;
  }
}