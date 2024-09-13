class Solution:
    def subsetsWithDup(self, nums: List[int]) -> List[List[int]]:
        if len(nums) <= 0:
            return []
        arr = []
        nums.sort()

        def backtrack(i, sub):
            if i >= len(nums):
                arr.append(sub[::])
                return
            
            # all subsets include nums[i]
            sub.append(nums[i])
            backtrack(i + 1, sub)
            # all subsets that don't include nums[i]
            sub.pop()
            while i + 1 < len(nums) and nums[i] == nums[i + 1]:
                i+= 1
            backtrack(i + 1, sub)
        backtrack(0, [])

        return arr