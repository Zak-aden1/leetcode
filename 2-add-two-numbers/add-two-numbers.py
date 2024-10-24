# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode(0)
        temp = dummy
        r = 0
        while l1 or l2:
            val = r
            if l1:
                val+= l1.val
                l1 = l1.next
            if l2:
                val+= l2.val
                l2 = l2.next
            
            n = val % 10
            r = val // 10
            temp.next = ListNode(n)
            temp = temp.next

        if r > 0:
            temp.next = ListNode(r)

        return dummy.next