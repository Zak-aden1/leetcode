class Solution:
    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
        candidates.sort()
        arr = []

        def bt(i, nums, total):
            if total == target:
                arr.append(nums.copy())
                return

            if i >= len(candidates) or total > target:
                return

            

            # include candidates[i]
            nums.append(candidates[i])
            bt(i + 1, nums, total + candidates[i])
            nums.pop()
            # skip candidates[i] and any same following num as we exlored above
            while i + 1 < len(candidates) and candidates[i] == candidates[i+1]:
                i+=1
            bt(i + 1, nums, total)

        bt(0, [], 0)

        return arr