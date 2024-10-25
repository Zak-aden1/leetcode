class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        # sliding window maybe
        # max = maxf - length <= k
        # use 26 arr for chars using ascii
        # loop through string
        # add to arr
        # check if maxf - length of window <= k
        # if so add orther wide move left pointer

        count = [0] * 26

        l = 0
        maxV = 0

        for r in range(len(s)):
            count[ord(s[r]) - ord("A")] += 1

            if (r - l + 1) - max(count) <=  k:
                maxV = max(r - l + 1, maxV)
            else:
                count[ord(s[l]) - ord("A")] -= 1
                l +=1
        
        return maxV
