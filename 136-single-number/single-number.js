/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const map = {}

    for(let i = 0; i < nums.length; i++) {
        map[nums[i]] = map[nums[i]] + 1 || 1
    }

    for(let num in map) {
        if (map[num] !== 2) return num
    }

    return false
};