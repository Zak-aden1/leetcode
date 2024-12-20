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
    let q = [root]
    let level = 0


    while (q.length > 0) {
        let length = q.length
        let next_level = []

        for (let i = 0; i < length; i++) {
            let node = q.shift()
            next_level.push(node)
            if(node.left) {
                q.push(node.left)
            }
            if(node.right) {
                q.push(node.right)
            }
        }

        if (level % 2 === 1) {
            // switch
            let left = 0
            let right = next_level.length - 1
            while (left < right) {
                let temp = next_level[left].val
                next_level[left].val = next_level[right].val
                next_level[right].val = temp
                left++
                right--
            }
        }
        level+=1
    }

    return root
};