/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    // if both less than q + q go left
    // if both greater than q + q go right
    // rretu
    if(root === null) return root
    if(root.val < p.val && root.val < q.val) return lowestCommonAncestor(root.right, p, q)
    if(root.val > p.val && root.val > q.val) return lowestCommonAncestor(root.left, p, q)

    return root
};