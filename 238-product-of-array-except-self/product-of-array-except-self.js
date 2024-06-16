/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let pre = []
    let suff = []
    pre[0] = 1
    suff[nums.length - 1] = 1;
       let ans = new Array(nums.length).fill(1)

    let curr = 1
    for(let i = 0; i < nums.length; i++ ) {
        // pre[i] = pre[i - 1] * nums[i - 1]
        ans[i] = ans[i] * curr
        curr = curr * nums[i]
    }

    curr = 1
    for(let i = nums.length - 1; i >= 0; i--) {
        // suff[i] = suff[i + 1] * nums[i + 1]
        ans[i] = ans[i] * curr
        curr = curr * nums[i]
    }

    // for(let i = 0; i < nums.length; i++) {
    //     ans[i] = pre[i] * suff[i]
    // }

    // console.log(pre, suff)
    return ans
};