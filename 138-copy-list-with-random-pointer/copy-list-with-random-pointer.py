"""
# Definition for a Node.
class Node:
    def __init__(self, x: int, next: 'Node' = None, random: 'Node' = None):
        self.val = int(x)
        self.next = next
        self.random = random
"""

class Solution:
    def copyRandomList(self, head: 'Optional[Node]') -> 'Optional[Node]':
        if head is None:
            return head
        hashmap = {}

        curr = head

        while curr:
            hashmap[curr] = ListNode(curr.val)
            curr = curr.next
        
        print(hashmap)

        curr = head

        while curr:
            hashmap[curr].next = hashmap[curr.next] if curr.next else None
            hashmap[curr].random = hashmap[curr.random] if curr.random else None
            curr = curr.next
        
        return hashmap[head]