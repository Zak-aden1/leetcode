class Solution:
    def subsetsWithDup(self, nums: List[int]) -> List[List[int]]:
        arr = []
        nums.sort()

        def bt(i, lists):
            if i == len(nums):
                arr.append(lists.copy())
                return
            
            lists.append(nums[i])
            bt(i + 1, lists)
            while i+1 < len(nums) and nums[i] == nums[i+1]:
                i+= 1
            lists.pop()
            bt(i+1, lists)
        bt(0, [])

        return arr
