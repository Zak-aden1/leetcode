/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// target - index = comPair
// target - index2 = co
var twoSum = function(nums, target) {
    const map = {}
    
    for(let i = 0; i <nums.length; i++) {
        const comPair = target - nums[i]
        if(map[comPair] !== undefined) {
            return [i, map[comPair]]
        } else {
            map[nums[i]] = i
        }
    }
};