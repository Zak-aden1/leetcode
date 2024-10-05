class Solution(object):
    def mySqrt(self, x):
        """
        :type x: int
        :rtype: int
        """
        l, r = 0, x
        res = 0
        while l <= r:
            m = l + ((r - l) // 2)
            
            if m**2 == x:
                return m
            
            if m**2 > x:
                r = m - 1
            else:
                res = m
                l = m + 1
        
        return res