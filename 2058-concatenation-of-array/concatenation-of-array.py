class Solution:
    def getConcatenation(self, nums: List[int]) -> List[int]:
        length = len(nums)
        double = length * 2
        arr = [0] * double

        for i in range(length):
            arr[i] = nums[i]
            arr[i + length] = nums[i]
        
        return arr
