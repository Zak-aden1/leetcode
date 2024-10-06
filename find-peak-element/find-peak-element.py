class Solution(object):
    def findPeakElement(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        l, r = 0, len(nums) - 1
        
        while l <= r:
            m = l + ((r - l) //2)
            
            if m > 0 and nums[m - 1] > nums[m]:
                r = m - 1
            elif m < len(nums) - 1 and nums[m + 1] > nums[m]:
                l = m + 1
            else:
                return m
                