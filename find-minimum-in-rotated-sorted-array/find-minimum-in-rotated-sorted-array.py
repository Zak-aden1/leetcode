class Solution:
    def findMin(self, nums: List[int]) -> int:
        l, r = 0, len(nums) - 1
        
        res = nums[0]
        while l <= r:
            if nums[l] < nums[r]:
                 # If the array is already sorted, the minimum is at l
                res = min(res, nums[l])
                break
            m = (l + ((r - l) // 2))
            res = min(res, nums[m])
            # Determine which side to search
            # if in left subarr -  
            # Minimum is in the right part
            if nums[m] >= nums[l]:
                l = m + 1
            else:
              # Minimum is in the left part
                r = m - 1
                
        return res