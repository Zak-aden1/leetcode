# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:
        inorder = []

        self.dfs(root, inorder)

        return inorder[k - 1]

    
    def dfs(self, root, inorder):
        if root is None:
            return None
        
        self.dfs(root.left, inorder)
        inorder.append(root.val)
        self.dfs(root.right, inorder)
        