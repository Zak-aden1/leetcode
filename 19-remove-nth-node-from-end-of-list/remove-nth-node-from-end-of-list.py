# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        # turtoise and hare approach
        # fast var traverse head n times
        # declare slow and loop until fast.next is None
        # detach slow.next
        # return head
        if head is None:
            return None
        
        fast = head

        i = 0
        while fast and i < n:
            fast = fast.next
            i+= 1
        
        if fast is None:
            return head.next
        
        slow = head
        while fast.next:
            slow = slow.next
            fast = fast.next
        
        slow.next = slow.next.next

        return head