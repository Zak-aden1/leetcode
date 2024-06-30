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

function findTarget(root: TreeNode | null, k: number): boolean {
    if (!root || k == undefined) return false;
    const map = {}

    const dfs = (node) => {
        if (node === null) return false
        if(map[k - node.val])return true;
        map[node.val] = true

        return dfs(node.left) || dfs(node.right)
    }

    return dfs(root)
};