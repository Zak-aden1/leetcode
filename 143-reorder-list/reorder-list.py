# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reorderList(self, head: Optional[ListNode]) -> None:
        """
        Do not return anything, modify head in-place instead.
        """
        slow, fast = head, head

        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
        
        mid = slow.next
        slow.next = None

        prev = None
        curr = mid
        while curr:
            temp = curr.next
            curr.next = prev

            prev = curr
            curr = temp
        
        first = head
        second = prev

        dummy = ListNode(0)
        tail = dummy
        
        while first and second:
            tail.next = first
            first = first.next
            tail = tail.next

            tail.next = second
            second = second.next
            tail = tail.next
        
        tail.next = first or second
        
        return dummy.next