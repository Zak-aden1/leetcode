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
 * @return {boolean}
 */
var isBalanced = function(root) {

    const dfs = (root) => {
        if(!root) return 1

        let left = dfs(root.left)
        let right = dfs(root.right)

     if(left === -1 || right === -1) return -1
    if(Math.abs(left - right) > 1) return -1

    return 1 + Math.max(left, right)
    }

    if(dfs(root) === -1) return false

    return true
};