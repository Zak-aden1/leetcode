function twoSum(nums: number[], target: number): number[] {
    // create a hash map
    // loop through list
    // check if num - target = key in map
    // add to map with num as key and val is how many
    const map = {}

    for(let i = 0; i < nums.length; i++) {
        const el = nums[i]
        const comPair = target - el
        if(map[comPair] == null) {
            map[el] = i
        } else {
            return [map[comPair], i]
        }
    }


};