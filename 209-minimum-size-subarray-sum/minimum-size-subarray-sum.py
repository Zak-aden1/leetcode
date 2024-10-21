class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        # Left pointer of the sliding window
        l = 0
        # Initialize 'ans' to infinity so that any valid subarray length will be smaller
        ans = float('inf')
        # This variable keeps track of the current sum of the subarray
        comb = 0

        # Right pointer of the sliding window iterates through the array
        for r in range(len(nums)):
            comb += nums[r]  # Add the current element to the current subarray sum

            # While the sum of the current window (subarray) is greater than or equal to the target
            while comb >= target:
                # Update 'ans' to the smaller value between the current window size and 'ans'
                ans = min(r - l + 1, ans)
                # Shrink the window from the left by subtracting nums[l] and moving the left pointer
                comb -= nums[l]
                l += 1
        
        # If 'ans' is still infinity, it means no valid subarray was found, so return 0
        # Otherwise, return the minimum subarray length found
        return ans if ans != float('inf') else 0