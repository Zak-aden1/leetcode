/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let map = {}
    let arr = []

    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]] === undefined) map[nums[i]] = i
    }

    for (let i = 1; i <= nums.length; i++ ) {
        if(map[i] === undefined) {
            arr.push(i)
        }
    }

    return arr
};