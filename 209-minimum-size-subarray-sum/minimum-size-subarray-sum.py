class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        l = 0
        ans = float('inf')
        comb = 0

        for r in range(len(nums)):
            comb += nums[r]
            

            while comb >= target:
                ans = min(r - l + 1, ans)
                comb -= nums[l]
                l += 1
        
        return ans if ans != float('inf') else 0