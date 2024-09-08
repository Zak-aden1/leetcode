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

function splitListToParts(head: ListNode | null, k: number): Array<ListNode | null> {
    // initial array with k size fill with null
    let ans = new Array(k).fill(null)

    // find the size of the listNode
    let size = 0
    let curr = head

    while(curr) {
        size++
        curr = curr.next
    }

    // find split length and remainder (if theres any)
    let splitLength = Math.floor(size / k)
    let remainder = size % k

    curr = head
    // loop through k
    for (let i = 0; i < k; i++) {
        let dummyHead = new ListNode(0)
        let tail = dummyHead

        let currSize = splitLength
        if(remainder > 0) {
            currSize++
            remainder--
        }
        for (let j = 0; j < currSize; j++) {
            tail.next = new ListNode(curr.val)
            tail = tail.next
            curr = curr.next
        }
        ans[i] = dummyHead.next
    }

    return ans
};