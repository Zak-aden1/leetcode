# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def insertGreatestCommonDivisors(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if head is None or head.next is None:
            return head
        
        prev = head
        curr = head.next

        while curr:
            num = math.gcd(prev.val, curr.val)

            node = ListNode(num)
            prev.next = node
            node.next = curr

            prev = curr
            curr = curr.next
        
        return head