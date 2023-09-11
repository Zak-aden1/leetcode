/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const map = {}

    for (let i = 0; i < nums.length; i ++) {
        if(map[nums[i]] === undefined) {
            map[nums[i]] = true
        } else {
            return true
        }
    }

    return false
};