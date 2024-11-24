function removeDuplicates(nums: number[]): number {
    let left = 1

    for (let right = 1; right < nums.length; right++) {
        if (nums[right] !== nums[right - 1]) {
            nums[left] = nums[right]
            left++
        }
    }
    return left
    // Time: 0(n)
    // Space: 0(1)
};