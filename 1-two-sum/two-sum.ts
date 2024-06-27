function twoSum(nums: number[], target: number): number[] {
    const map = {}

    for(let i = 0; i < nums.length; i++) {
        let pair = target - nums[i]
        if(map[pair] === undefined) {
            map[nums[i]] = i
        } else {
            return [i, map[pair]]
        }
    }
};