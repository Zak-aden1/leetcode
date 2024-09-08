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

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
    const pre = []

    const dfs = (root) => {
        if (root === null) {
            pre.push('#')
            return
        }

        pre.push(root.val)
        dfs(root.left)
        dfs(root.right)
    }
    dfs(root)

    return pre.join(",")
};

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
    const pre = data.split(",")
    let i = 0
    const dfs = () => {
        if (pre[i] == '#') {
            i++
            return null
        }
        const node = new TreeNode(Number(pre[i]))
        i++
        node.left = dfs();
        node.right = dfs();
        return node
    }
    
    return dfs()
};


/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */