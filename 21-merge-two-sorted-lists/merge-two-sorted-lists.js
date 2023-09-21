/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let newList = new ListNode(0, null)
    let dummyHead = newList

    while(list1 && list2) {
        if(list1.val < list2.val) {
            dummyHead.next = list1
            dummyHead = dummyHead.next
            list1 = list1.next
        } else {
            dummyHead.next = list2
            dummyHead = dummyHead.next
            list2 = list2.next
        }
    }


    dummyHead.next = list1 || list2

    return newList.next
};