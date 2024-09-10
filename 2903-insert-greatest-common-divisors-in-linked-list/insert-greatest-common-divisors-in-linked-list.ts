/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function insertGreatestCommonDivisors(head: ListNode | null): ListNode | null {
    if (head == null || head.next == null) {
        return head
    }

    const gcd = (a, b) => {
        while (b !== 0) {
            [a, b] = [b, a % b]
        }
        return a
    }

    let prev = head
    let curr = head.next

    while (curr) {
        let num = gcd(prev.val, curr.val)
        let node = new ListNode(num)
        prev.next = node
        node.next = curr

        prev = curr
        curr = curr.next
    }

    return head
};