class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        ans = [1] * (len(nums))

        prefix = 1
        for i in range(len(nums)):
            ans[i] = prefix
            prefix *= nums[i]
        
        suff = 1
        for i in range(len(nums) -1, -1, -1):
            ans[i] = ans[i] * suff
            suff = suff * nums[i]
        
        return ans
    
    
        