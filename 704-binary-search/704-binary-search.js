/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let leftIndex = 0;
    let rightIndex = nums.length - 1;
    
    while(leftIndex <= rightIndex) {
        const midpoint = Math.floor((leftIndex + rightIndex) /2)
        
        if(nums[midpoint] === target) return midpoint;
        
        if(target > nums[midpoint]) {
            leftIndex = midpoint + 1
        } else {
            rightIndex = midpoint - 1
        }
    }
    return - 1
};