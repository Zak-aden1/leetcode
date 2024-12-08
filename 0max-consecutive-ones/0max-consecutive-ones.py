class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        max1 = 0
        curr = 0
        
        for num in nums:
            if num == 1:
                curr += 1
                max1 = max(max1, curr)
            else:
                curr = 0
        
        return max1