/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function reverseOddLevels(root: TreeNode | null): TreeNode | null {
    
    const dfs = (leftChild, rightChild, level) => {
        if (!leftChild || !rightChild) return

        if (level % 2 === 0) {
            let temp = leftChild.val
            leftChild.val = rightChild.val
            rightChild.val = temp
        }

        dfs(leftChild.left, rightChild.right, level + 1)
        dfs(leftChild.right, rightChild.left, level + 1)
    }

    dfs(root.left, root.right, 0)

    return root
};