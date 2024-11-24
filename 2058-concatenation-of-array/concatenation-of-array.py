class Solution:
    def getConcatenation(self, nums: List[int]) -> List[int]:
        length = len(nums)
        double = length**2
        arr = []

        for num in nums:
            arr.append(num)
        for num in nums:
            arr.append(num)

        # for i in range(length):
        #     arr.append(nums[i])

        return arr