class Solution:
    def combinationSum3(self, k: int, n: int) -> List[List[int]]:
        arr = []

        def bt(i, nums, s):
            if s > n or len(nums) > k:
                return
            
            if s == n and len(nums) == k:
                arr.append(nums.copy())
                return

            for x in range(i, 10):
                nums.append(x)
                bt(x + 1, nums, s + x)
                nums.pop()
        
        bt(1, [], 0)
        return arr