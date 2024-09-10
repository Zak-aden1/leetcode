# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def insertGreatestCommonDivisors(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head or not head.next:
            return head
        prev = head
        curr = head.next

        while curr:
            n = math.gcd(prev.val, curr.val)
            prev.next = ListNode(n)
            prev.next.next = curr
            
            prev = prev.next.next
            curr = curr.next
        
        return head

        

    

    def hcd(self, a, b):
        if b == 0:
            return a
        else:
            return self.hcd(b, a % b)