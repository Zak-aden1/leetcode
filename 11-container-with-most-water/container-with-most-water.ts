function maxArea(height: number[]): number {
    let left = 0
    let right = height.length - 1
    let sum = 0

    while(left < right) {
        let area = (right - left) * Math.min(height[left], height[right])
        sum = Math.max(sum, area)
        if(height[left] < height[right]) {
            left++
        } else {
            right--
        }
    }

    return sum
};