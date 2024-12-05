function majorityElement(nums: number[]): number {
    const map = {}

    for (let num of nums) {
        map[num] = map[num] + 1 || 1
    }

    let maxNum = nums[0]
    let maxVal = 0

    for (let numKey in map) {
        if(map[numKey] > maxVal) {
            maxNum = +numKey
            maxVal = map[numKey]
        }
    }

    return maxNum
};