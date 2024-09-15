/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    let arr = []
    
    let bt = (i, nums, sum) => {
        if (sum > n || nums.length > k) return

        if (nums.length == k && sum == n) {
            arr.push([...nums])
            return
        }

        for (; i < 10; i++) {
            nums.push(i)
            bt(i + 1, nums, sum + i)
            nums.pop()
        }
    }
    bt(1, [], 0)

    return arr
};