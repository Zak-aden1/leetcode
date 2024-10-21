class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        # sliding window using a set
        #loop thru arr until r-l + 1 > k
        # check if it's in arr
        #if rm set[l] and incr l
        #add nums[r]
        window = set()
        l = 0

        for r in range(len(nums)):
            if nums[r] in window:
                return True
            window.add(nums[r])
            if r - l == k:
                window.remove(nums[l])
                l += 1
        
        return False