class Solution:
    def numOfSubarrays(self, arr: List[int], k: int, threshold: int) -> int:
        # k * threshold = limit
        # sliding window
        # add until we reach k
        # check

        l = 0
        ans = 0
        av = 0
        threshold_sum = k * threshold

        for r in range(len(arr)):
            av += arr[r]
            if r - l + 1 == k:
                if av >= threshold_sum:
                    ans += 1
                av -= arr[l]
                l += 1
        return ans