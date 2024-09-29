function search(nums: number[], target: number): number {
    let lo = 0
    let hi = nums.length - 1
    
    while(lo <= hi) {
        let midpoint = Math.floor((lo + hi) / 2)
        
        if(nums[midpoint] === target) return midpoint
        
        if(nums[midpoint] > target) {
            hi = midpoint - 1
        } else {
            lo = midpoint + 1
        }
    }
    
    return -1
};