/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let slow = head
    let fast = head
    isCycle = false

    while(fast && fast.next) {
        slow = slow.next
        fast = fast.next.next

        if(slow === fast) {
            fast = head

            while(fast !== slow) {
                slow = slow.next
                fast = fast.next
            }
            return slow
            }
    }

    // if (isCycle) {
    // let temp = head

    // while(temp !== slow) {
    //     temp = temp.next
    //     slow = slow.next
    // }
    // return temp
    // }

    return null
};