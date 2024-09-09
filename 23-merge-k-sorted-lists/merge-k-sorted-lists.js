/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    const queue = new MinPriorityQueue({ priority: x => x.val })

    for (head of lists) {
        if (head) {
        queue.enqueue(head)
        }
    }
    const dummy = new ListNode(0)
    let tail = dummy

    while(!queue.isEmpty()) {
        const node = queue.dequeue().element

        tail.next = new ListNode(node.val)
        tail = tail.next

        if (node.next) {
            queue.enqueue(node.next)
        }
    }

    return dummy.next
};