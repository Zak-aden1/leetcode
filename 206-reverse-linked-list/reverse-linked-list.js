/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    // store next in a temp var
    // point next behind
    // and move forward down the chain

    let prev = null
    let cur = head

    while(cur) {
        let tmp = cur.next
        cur.next = prev
        prev = cur
        cur = tmp
    }

    return prev
};