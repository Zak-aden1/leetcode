# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def splitListToParts(self, head: Optional[ListNode], k: int) -> List[Optional[ListNode]]:
        ans = [None] * k

        size = 0

        curr = head
        while curr:
            size += 1
            curr = curr.next

        splitLength = size // k
        r = size % k

        curr = head

        for i in range(k):
            dummyHead = ListNode(0)
            tail = dummyHead

            currSplit = splitLength
            if r > 0:
                r-= 1
                currSplit += 1
            
            for j in range(currSplit):
                tail.next = ListNode(curr.val)
                tail = tail.next
                curr = curr.next
            ans[i] = dummyHead.next
        

        return ans