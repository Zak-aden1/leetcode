/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = {}

    for(let i = 0; i < nums.length; i++) {
        const comPair = target - nums[i]

        if(map[comPair] === undefined) {
            map[nums[i]] = i
        } else {
            return [i, map[comPair]]
        }
    }
};