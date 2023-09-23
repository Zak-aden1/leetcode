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
var maxDepth = function(root) {
    if(root === null) return null
    const arr = [root, "stop"]
    let counter = 1

    while(arr.length > 1) {
        const node = arr.shift()

        if(node === "stop") {
            counter = counter + 1
            arr.push(node)
        } else {
            if(node.left !== null) arr.push(node.left)
            if(node.right !== null) arr.push(node.right)
        }
    }

    return counter
};