/* Given the root of a binary tree, invert the tree, and return its root.

 */

// My Solution:

var invertTree = function (root) {
  if (root == null) {
    return root;
  }

  invertTree(root.left);
  invertTree(root.right);

  current = root.left;

  root.left = root.right;
  root.right = current;

  return root;
};
