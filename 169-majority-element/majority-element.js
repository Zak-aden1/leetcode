/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const map = {}

    for (let num of nums) {
        map[num] = map[num] + 1 || 1
    }

    let keys = Object.keys(map)
    let ans = keys[0]

    for (let key of keys) {
        if(map[key] > map[ans]) ans = key
    }

    console.log({map})

    return ans

};