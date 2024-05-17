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
 * @return {number[]}
 */
var rightSideView = function(root) {
    if(root === null) return []
        const arr = [root, 's']
    const right = []

    while(arr.length > 1) {
        const node = arr.shift()

        if(arr[0] === 's') {
            right.push(node.val)
        }

        if(node === 's') {
            arr.push(node)
        } else {
            if(node.left) arr.push(node.left)
            if(node.right) arr.push(node.right)
        }
    }

    return right
};