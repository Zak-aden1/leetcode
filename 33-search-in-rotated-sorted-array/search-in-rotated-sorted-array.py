class Solution(object):
    def search(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """
        lo, hi = 0, len(nums) - 1

        while lo <= hi:
            m = lo + ((hi - lo) // 2)

            if nums[m] == target:
                return m
            # we are in left part of sub arrey
            if nums[m] >= nums[lo]:
                if target > nums[m]:
                    lo = m + 1
                elif target < nums[lo]:
                    lo = m + 1
                else:
                    hi = m - 1 
            # in right section
            else:
                if target < nums[m] or target > nums[hi]:
                    hi = m - 1
                else:
                    lo = m + 1
        
        return -1