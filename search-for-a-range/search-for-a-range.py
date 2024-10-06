class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        l, r = 0, len(nums) -1
        
        idx = None
        while l <= r:
            m = l + ((r - l) // 2)
            
            if nums[m] == target:
                idx = m
                break
            
            if target > nums[m]:
                l = m + 1
            else:
                r = m - 1
        
        if idx == None:
            return [-1, -1]
        
        ans = [idx, idx]
        l, r = idx, idx
        while l > 0 and nums[l] == nums[l - 1]:
            l -= 1
            ans[0] = l
            
        while r < len(nums) -1 and nums[r] == nums[r + 1]:
            r += 1
            ans[1] = r
        
        return ans