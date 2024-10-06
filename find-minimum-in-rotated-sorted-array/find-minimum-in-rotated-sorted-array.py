class Solution:
    def findMin(self, nums: List[int]) -> int:
        l, r = 0, len(nums) - 1
        
        res = nums[0]
        while l < r:
            m = l + ((r - l) // 2)
            # if in left subarr
            if nums[m] > nums[r]:
                l = m + 1
            else:
                res = min(res, nums[m])
                r = m
                
        return nums[l]