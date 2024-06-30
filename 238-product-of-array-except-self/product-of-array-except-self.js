/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let output = []


    let curr = 1
    for(let i = 0; i < nums.length; i++) {
        output.push(curr)
        // output[i] = curr
        curr = curr * nums[i]
    }

    curr = 1
    console.log(output)
    for(let i = nums.length - 1; i >= 0; i--) {
        output[i] = output[i] * curr
        curr = curr * nums[i]
    }

    return output
};