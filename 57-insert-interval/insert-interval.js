/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    const output = []

    for(let i = 0; i < intervals.length; i++) {
        if(newInterval[1] < intervals[i][0]) {
            output.push(newInterval)
            output.push(...intervals.slice(i))
            return output
        } else if (newInterval[0] > intervals[i][1]) {
            output.push(intervals[i])
        } else {
            newInterval = [
                Math.min(newInterval[0], intervals[i][0]),
                Math.max(newInterval[1], intervals[i][1])
            ]
        }
    }

    output.push(newInterval)
    return output
};