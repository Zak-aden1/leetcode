/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let max = 0

    const dfs = (root) => {
        if (root == null) return 0

        let left = dfs(root.left)
        let right = dfs(root.right)

        max = Math.max( max,left + right)

        return 1 + Math.max(left, right)
    }

    dfs(root)

    return max
};