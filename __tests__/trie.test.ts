import Trie from '../utlilty/Types/Trie';

describe("Tests for tire", () => {

  it("It should contructure a trie", () => {
    let tire = new Trie();
    tire.insert("apple");
    let result = tire.search("apple");
    expect(result).toBe(true);
  })
})