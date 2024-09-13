/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const arr = []

    const backtracking = (i, list, sum) => {
        if (i === candidates.length) return
        if (sum > target) return

        if (sum === target) {
            arr.push([...list])
            return
        }

        console.log(list, candidates[i], i)
        list.push(candidates[i])
        backtracking(i, list, sum + candidates[i])
        list.pop()
        backtracking(i + 1, list, sum)
    }
    backtracking(0, [], 0)

    return arr
};