class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hashmap = {}

        for i in range(len(nums)):
            pair = target - nums[i]
            if pair not in hashmap:
                hashmap[nums[i]] = i
            else:
                return [i, hashmap[pair]]