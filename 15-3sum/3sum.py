class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        res = []
        nums.sort()

        for i in range(len(nums)):
            if i > 0 and nums[i] == nums[i - 1]:
                continue

            l, r = i + 1, len(nums) - 1
            while l < r:
                s = nums[i] + nums[l] + nums[r]
                if  s == 0:
                    res.append([nums[i], nums[l], nums[r]])
                    # still need to check for more distinc vals
                    l += 1
                    while l < len(nums) and nums[l] == nums[l - 1]:
                        l += 1
                    
                elif s > 0:
                    r -= 1
                else:
                    l += 1
        
        return res
