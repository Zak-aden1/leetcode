class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        # backtracking
        # 
        arr = []

        def dfs(i, lists):
            if i == len(nums):
                arr.append(lists.copy())
                return
            
            lists.append(nums[i])
            dfs(i + 1, lists)
            lists.pop()
            dfs(i + 1, lists)
        
        dfs(0, [])
        return arr