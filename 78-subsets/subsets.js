/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const arr = []
    
    const dfs = (i, list) => {
        if (i === nums.length) {    
            arr.push([...list])
        return
        }

        // creates decision tree where we make 2 distinct choices
        dfs(i + 1, list)
        dfs(i + 1, [...list, nums[i]])
    }
    dfs(0, [])

    return arr
};