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
    let ans = new Array(k).fill(null)

    let size = 0
    let curr = head
    while (curr) {
        size++
        curr = curr.next
    }

    let splitLength = Math.floor(size / k)
    let r = size % k

    curr = head
    let prev = curr
    for (let i = 0; i < k; i++) {
        let part = curr

        let currSplitLength = splitLength
        if (r > 0) {
            r--
            currSplitLength++
        }

        for(let j = 0; j < currSplitLength; j++) {
            prev = curr
            if(curr) {
                curr = curr.next
            }
        }
        // prev?.next = null
        if(prev) prev.next = null
        ans[i] = part
    }

    return ans
};