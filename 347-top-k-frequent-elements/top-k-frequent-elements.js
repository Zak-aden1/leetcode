/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = {}

    for (let num of nums) {
        map[num] = map[num] + 1 || 1
    }

    const maxq =  new MinPriorityQueue()

    for(let num in map) {
        maxq.enqueue(num, map[num])
        if(maxq.size() > k) maxq.dequeue()
    }

    const arr = []
    while (maxq.size() > 0) {
        arr.push(Number(maxq.dequeue().element))
    }

    console.log(arr)
    return arr
};