/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const n = nums.length;
    let expcted = (n * (n + 1)) / 2
    let sum = 0

    for(let i= 0; i < nums.length; i++) {
        sum += nums[i]
    }
    
    return expcted - sum
};