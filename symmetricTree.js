var isSymmetric = function(root) {
    // Helper function that checks if two trees are mirror images
    const isMirror = (left, right) => {
        if (!left && !right) return true;
        if (!left || !right) return false;
        return left.val === right.val &&
               isMirror(left.left, right.right) &&
               isMirror(left.right, right.left);
    };
    
    return root ? isMirror(root.left, root.right) : true;
};

// Example usage with a sample binary tree structure:
// Assuming a TreeNode constructor is defined as follows:
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

// Constructing the tree: [1,2,2,3,4,4,3]
const tree = new TreeNode(1,
    new TreeNode(2, new TreeNode(3), new TreeNode(4)),
    new TreeNode(2, new TreeNode(4), new TreeNode(3))
);

console.log(isSymmetric(tree)); // Output: true
