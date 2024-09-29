class Solution(object):
    def mySqrt(self, x):
        """
        :type x: int
        :rtype: int
        """
        idx = 0

        while idx <= x:
            if idx * idx == x:
                return idx
            if idx * idx > x:
                return idx - 1
            idx+= 1
        
        return idx