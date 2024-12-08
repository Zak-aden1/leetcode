class Solution:
    def sortedSquares(self, nums: List[int]) -> List[int]:
        ans = [0] * len(nums)

        left = 0
        right = len(nums) - 1
        write_pointer = len(nums) - 1

        while write_pointer >= 0:
            if nums[left]**2 > nums[right]**2:
                ans[write_pointer] = nums[left]**2
                left+= 1
            else:
                ans[write_pointer] = nums[right]**2
                right-= 1
            write_pointer-=1
        
        return ans