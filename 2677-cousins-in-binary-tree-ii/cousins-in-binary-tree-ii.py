# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def replaceValueInTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        levelsum = []
        q = deque([root])

        while q:
            length = len(q)
            s = 0
            for i in range(length):
                node = q.popleft()
                s += node.val
                if node.left:
                    q.append(node.left)
                if node.right:
                    q.append(node.right)
            levelsum.append(s)
        
        q = collections.deque()
        q.append(root)
        root.val = 0
        index = 1

        while q:
            length = len(q)
            for _ in range(length):
                node = q.popleft()

                sibling_sum = (
                    node.left.val if node.left else 0
                ) + (node.right.val if node.right else 0)

                if node.left:
                    node.left.val = levelsum[index] - sibling_sum
                    q.append(node.left)
                if node.right:
                    node.right.val = levelsum[index] - sibling_sum
                    q.append(node.right)
            index +=1
        
        return root


