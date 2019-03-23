type T = any;

export class TreeNode<T> {
  private val: T;
  private left: TreeNode<T>;
  private right: TreeNode<T>;

  constructor(value: T) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

export const bfs1 = (node: TreeNode<T>): T[] => {
  if (node === null) return [];
  let queue = [];
  let result = [];
  queue.push(node);
  queue.unshift('#');
  while (queue.length > 1) {
    let currentLevel = [];
    while (queue[queue.length - 1] !== '#') {
      let node = queue.pop();
      currentLevel.push(node.val);
      node.left ? queue.unshift(node.left) : null;
      node.right ? queue.unshift(node.right) : null;
    }
    result.push(currentLevel);
    queue.pop();
    queue.unshift('#');
  }
  return result;
}

export const bfs2 = (root: TreeNode<T>): T[] => {
  if (root === null) return [];
  let queue = [];
  let result = [];
  queue.push(root);
  while (queue.length > 0) {
    let size = queue.length;
    let currentLevel = [];
    for (let i = 0; i < size; i++) {
      let node = queue.pop();
      currentLevel.push(node.val);
      node.left ? queue.unshift(node.left) : null;
      node.right ? queue.unshift(node.right) : null;
    }
    result.push(currentLevel);
  }
  return result;
}
