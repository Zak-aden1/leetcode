function combinationSum(candidates: number[], target: number): number[][] {
    let res = []

    const dfs = (i, curr, total) => {
        if (total === target) {
            res.push([...curr])
            return
        }
        if (i > candidates.length -1 || total > target) return

        // recurse with same number
        curr.push(candidates[i])
        dfs(i, curr, total + candidates[i])
        // recurse with next number
        curr.pop()
        dfs(i + 1, curr, total)
    }
    dfs(0, [], 0)

    return res
};