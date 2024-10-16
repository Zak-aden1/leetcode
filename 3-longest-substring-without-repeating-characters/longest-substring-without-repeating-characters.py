class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        map = set()

        l, r = 0, 0
        score = 0
        while r < len(s):
            if s[r] not in map:
                map.add(s[r])
                r += 1
                score = max(score, r-l)
            else:
                map.remove(s[l])
                l+=1
        
        return score