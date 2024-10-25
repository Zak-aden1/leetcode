class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        arr = []

        def backtrack(arr, comb, i):
            if i == len(nums):
                arr.append(comb[:])
                return
            if len(comb) == len(nums):
                arr.append(comb[:])
                return

            comb.append(nums[i])
            backtrack(arr, comb, i + 1)
            comb.pop()
            backtrack(arr, comb, i + 1)
        backtrack(arr, [], 0)

        return arr
