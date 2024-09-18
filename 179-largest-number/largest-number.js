/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    let strArr = []
    let ans = []

    for (num of nums) {
        let str = String(num)
        strArr.push(str)
    }
    strArr.sort((a, b) => (b  + a) - (a + b))

    if (strArr[0] == 0) return '0'

    return strArr.join('')
};