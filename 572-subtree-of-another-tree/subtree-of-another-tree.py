# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSubtree(self, root: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:
        if subRoot is None:
            return True
        if root is None:
            return False

        if self.isIdentical(root, subRoot):
            return True
        
        return self.isSubtree(root.left, subRoot) or self.isSubtree(root.right, subRoot)
    

    def isIdentical(self, root: Optional[TreeNode], subroot: Optional[TreeNode]) -> bool:
        if root is None and subroot is None:
            return True
        if root is None or subroot is None:
            return False
        if root.val != subroot.val:
            return False
        
        return self.isIdentical(root.left, subroot.left) and self.isIdentical(root.right, subroot.right)