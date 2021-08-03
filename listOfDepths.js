let listOfDepths = (root) => {
  if (root === null) {
    return root;
  }

  let leftPointer = root;
  while (leftPointer.left !== null) {
    let currentNode = leftPointer;
    while (currentNode !== null) {
      currentNode.left.next = currentNode.right;
      if (currentNode.next != null) {
        currentNode.right.next = currentNode.next.left;
      }
      currentNode = currentNode.next;
    }
    leftPointer = leftPointer.left;
  }
  return root;
};
