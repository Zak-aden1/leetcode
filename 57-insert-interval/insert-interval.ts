function insert(intervals: number[][], newInterval: number[]): number[][] {
    let output = []

    for(let i = 0; i < intervals.length; i++) {
        let interval = intervals[i]
        if(newInterval[1] < interval[0]) {
            output.push(newInterval)
            output.push(...intervals.slice(i))
            return output
        } else if (newInterval[0] > interval[1]) {
            output.push(interval)
        } else {
            newInterval = [
                Math.min(interval[0],newInterval[0]),
                Math.max(interval[1],newInterval[1])
            ]
        }
    }

    console.log(output)
    output.push(newInterval)
    return output
};