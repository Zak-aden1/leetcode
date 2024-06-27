function twoSum(numbers: number[], target: number): number[] {
    let low = 0
    let high = numbers.length -1

    while(low < high) {
        let sum = numbers[high] + numbers[low]
        if(sum === target) {
            return [low + 1, high + 1]
        } else if(sum > target) {
            high--
        } else {
            low++
        }
    }

    return []
};