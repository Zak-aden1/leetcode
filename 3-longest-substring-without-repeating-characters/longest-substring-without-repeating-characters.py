class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        seen = set()
        l, r = 0, 0
        ans = 0

        while r < len(s):
            if s[r] in seen:
                # pop
                seen.remove(s[l])
                l+= 1
            else:
                seen.add(s[r])
                r += 1
                ans = max(ans, r - l)
        
        return ans