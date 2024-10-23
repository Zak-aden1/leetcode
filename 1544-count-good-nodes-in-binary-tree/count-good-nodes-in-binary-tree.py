# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def goodNodes(self, root: TreeNode) -> int:
        self.good = 0
        
        def dfs(root, ma):
            if root is None:
                return 0
            
            if root.val >= ma:
                self.good += 1

            dfs(root.left, max(ma, root.val))
            dfs(root.right, max(ma, root.val))
        
        dfs(root, root.val)
        
        return self.good