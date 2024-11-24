function maxArea(height: number[]): number {
    // area = min(l, r) * (r - l)
    // use a two pointer
    // if r > l, move left = r, r++
    // check if r 

    let l = 0
    let r = height.length - 1
    let max = 0

    while (l <= r) {
        let sum = Math.min(height[l], height[r]) * (r - l)
        max = Math.max(sum, max)

        if(height[r] > height[l]) {
            l++
        } else {
            r--
        }
    }

    return max
};