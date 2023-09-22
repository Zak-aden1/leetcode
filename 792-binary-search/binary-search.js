/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let min = 0;
    let max = nums.length -1

    while(min <= max) {
        let midpoint = Math.floor((min + max) / 2)

        if(nums[midpoint] === target) return midpoint

        if(nums[midpoint] > target) {
            max = midpoint -1
        } else {
            min = midpoint + 1
        }
    }

    return -1
};