/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const map = {}

    for(let item of nums) {
        if(map[item] === undefined) {
            map[item] = 1
        } else {
            return true
        }
    }

    return false
};