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
 * @param {number} k
 * @return {number}
 */

var kthSmallest = function(root, k) {
    let path = []

    let inorder = (root, arr) => {
        if(root == null) return 

        if(root.left) inorder(root.left, arr)
        arr.push(root.val)
        if(root.right) inorder(root.right, arr)
    }
    
    inorder(root, path)

    console.log(path)
    return path[k - 1]
};