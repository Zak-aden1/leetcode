function maxArea(height: number[]): number {
    let left = 0
    let right = height.length - 1
    let max = 0

    while(left < right) {
        let sum = (right - left) * Math.min(height[left], height[right])
        max = Math.max(sum, max)

        if(height[left] > height[right]) {
            right--
        } else {
            left++
        }
    }

    return max
};