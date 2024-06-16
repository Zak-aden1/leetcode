/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let pre = []
    let suff = []
    pre[0] = 1
    suff[nums.length - 1] = 1;

    for(let i = 1; i < nums.length; i++ ) {
        pre[i] = pre[i - 1] * nums[i - 1]
    }

    for(let i = nums.length -2; i >= 0; i--) {
        suff[i] = suff[i + 1] * nums[i + 1]
    }

    let ans = []

    for(let i = 0; i < nums.length; i++) {
        ans[i] = pre[i] * suff[i]
    }

    console.log(pre, suff)
    return ans
};