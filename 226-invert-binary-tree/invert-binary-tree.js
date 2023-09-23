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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(root === null) return null
    const arr = [root]
    while(arr.length) {
        const node = arr.pop();

        let tmp = node.left
        node.left = node.right
        node.right = tmp

        if(node.left !== null) arr.push(node.left)
        if(node.right !== null) arr.push(node.right)
    }

    return root
};