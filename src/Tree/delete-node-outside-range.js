{
  // BASE CASE 
  if (root == null) {
    return null;
  }

  // FIRST FIX THE LEFT AND 
  // RIGHT SUBTREE OF ROOT 
  root.left = removeOutsideRange(root.left,
    min, max);
  root.right = removeOutsideRange(root.right,
    min, max);

  // NOW FIX THE ROOT. THERE ARE  
  // TWO POSSIBLE CASES FOR THE ROOT 
  // 1. a) Root's key is smaller than 
  // min value(root is not in range) 
  if (root.key < min) {
    Node rchild = root.right;
    root = null;
    return rchild;
  }

  // 1. b) Root's key is greater than  
  // max value (Root is not in range) 
  if (root.key > max) {
    Node lchild = root.left;
    root = null;
    return lchild;
  }

  // 2. Root in range 
  return root; 
}