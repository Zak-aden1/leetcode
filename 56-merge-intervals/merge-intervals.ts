function merge(intervals: number[][]): number[][] {
    intervals = intervals.sort((a, b) => a[0] - b[0])
    let output = []
    let prev = intervals[0]

    for (let i = 1; i < intervals.length; i++) {
        if(prev[1] >= intervals[i][0]) {
            prev[1] = Math.max(prev[1], intervals[i][1])
        } else {
            output.push(prev)
            prev = intervals[i]
        }
    }

    output.push(prev)
    return output
};