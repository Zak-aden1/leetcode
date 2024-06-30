function combinationSum(candidates: number[], target: number): number[][] {
    let output = []

    const dfs = (i, curr, total) => {
        if(target === total) {
            output.push([...curr])
            return
        }
        if(total > target || i > candidates.length -1) return

        curr.push(candidates[i])
        dfs(i, curr, total + candidates[i])
        curr.pop()
        dfs(i + 1, curr, total)
    }

    dfs(0, [], 0)

    return output
};