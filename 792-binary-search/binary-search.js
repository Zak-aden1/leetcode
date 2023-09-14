/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0
    let right = nums.length -1

    while(left <= right) {
        let midpoint = Math.floor((left + right) / 2)

        if(nums[midpoint] === target) return midpoint 
        
        if(nums[midpoint] > target) {
            right = midpoint - 1
        } else if(nums[midpoint] < target) {
            left = midpoint + 1
        }
    }

    return -1
};