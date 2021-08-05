class ListNode {
  referUrl: string;
  currentUrl: string;
  timestamp: number;
  sessionID: number;
  next: ListNode;

  constructor(referUrl, currentUrl, timestamp, sessionID) {
    this.referUrl = referUrl;
    this.currentUrl = currentUrl;
    this.timestamp = timestamp;
    this.sessionID = sessionID;
    this.next = null;
  }
}

class List {
  head: ListNode;
  tail: ListNode;
  map: Map<string, Set<string>>;

  constructor() {
    this.head = null;
    this.tail = null;
    this.map = new Map();
  }

  insert = (referUrl: string, currentUrl: string, timestamp:number, sessionID: number) => {
    let newNode = new ListNode(referUrl, currentUrl, timestamp, sessionID);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = this.tail.next;
    }
  }

  createGraph = () => {
    let curr = this.head;
    while (curr) {
      let currUrl = curr.currentUrl;
      let referUrl = curr.referUrl;
      if (this.map.has(currUrl)) {
        this.map.set(currUrl, this.map.get(currUrl).add(referUrl));
      } else { 
        this.map.set(currUrl, new Set());
        if (referUrl !== "") { 
          this.map.set(currUrl, this.map.get(currUrl).add(referUrl));
        }
      }
      curr = curr.next;
    }
  }

  isDirectConnect = (fromUrl: string, toUrl: string) => { 
    let set = this.map.get(toUrl);
    if (set.has(fromUrl)) {
      console.log(`${fromUrl} directly link to ${toUrl}`)
      return true;
    } else { 
      console.log(`${fromUrl} NOT directly link to ${toUrl}`)
      return false;
    }
  }

  isConnect = (fromUrl: string, toUrl: string): boolean => { 
    let visited = new Set();
    const dfs = (fromUrl, toUrl, visited) => { 
      let set = this.map.get(toUrl);
      let urls = set.values();
      let res = false;
      
      for (let url of urls) {
        if (url === 'maxinrui.com') {console.log('i am here')}
        if (visited.has(url)) {
          return res;
        } else { 
          visited.add(url);
        }
        if (url === fromUrl) {
          console.log(`${fromUrl} directly link to ${toUrl}`);
          res = true;
        } else { 
          res = res || dfs(fromUrl, url, visited);
        }
      }
      return res;
    }

    return dfs(fromUrl, toUrl, visited);
  }

}

let solution = new List();
solution.insert('', 'google.com', 0, 0);
solution.insert('', 'linkedin.com', 0, 0);
solution.insert('baidu.com', 'google.com', 9,8)
solution.insert('google.com', 'maxinrui.com', 10, 1)
solution.insert('baidu.com', 'maxinrui.com', 11, 1)
solution.insert('google.com', 'baidu.com', 3, 3);
solution.insert('linkedin.com', 'maxinrui.com', 5,6)
solution.insert('baidu.com', 'amazon.com', 2, 2);
solution.insert('facebook.com', 'uber.com', 4, 2);
solution.insert('amazon.com', 'facebook.com', 6, 5)
solution.insert('uber.com', 'amazon.com', 7, 7)
solution.insert('maxinrui.com', 'google.com', 10, 10)
solution.createGraph();
// solution.isDirectConnect('google.com', 'amazon.com')
console.log(solution.map)
// console.log('amazon to maxinrui ',solution.isConnect('amazon.com', 'maxinrui.com'));
console.log('linkedin to amazon ', solution.isConnect('linkedin.com', 'amazon.com'));
