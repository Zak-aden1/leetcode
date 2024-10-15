class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        map = Counter(nums)

        for k, v in map.items():
            if v > 1:
                return True
        
        return False