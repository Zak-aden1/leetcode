# The isBadVersion API is already defined for you.
# def isBadVersion(version: int) -> bool:

class Solution:
    def firstBadVersion(self, n: int) -> int:
        
        lo, hi = 0, n - 1
        while lo <= hi:
            m = lo + ((hi - lo) // 2)

            if isBadVersion(m) == True and isBadVersion(m - 1) != True:
                return m
            
            if isBadVersion(m) == True:
                hi = m - 1
            else:
                lo = m + 1

        return n