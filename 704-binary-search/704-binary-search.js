/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let low = 0;
    let high = nums.length -1
    
    while(low <= high) {
        const midpoint = Math.floor((high + low) / 2) 
        
        if(nums[midpoint] === target) return midpoint
        
        if(nums[midpoint] < target) {
            low = midpoint + 1
        } else {
            high = midpoint - 1
        }
    }
    
    return -1 
};