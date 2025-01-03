# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
        
        def dfs(p, q):
            # structure check
            if p is None and q is None:
                return True
            if p is None or q is None:
                return False
            # value check
            if p.val != q.val:
                return False
            
            return dfs(p.left, q.left) and dfs(p.right, q.right)
        
        return dfs(p, q)
            
