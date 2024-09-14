class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        # decision tree
        # with num[i] and without
        # increment i
        arr = []

        def bt(i, lists):
            if i >= len(nums):
                arr.append(lists.copy())
                return
            lists.append(nums[i])
            bt(i+1, lists)
            lists.pop()
            bt(i+1, lists)
        bt(0, [])

        return arr