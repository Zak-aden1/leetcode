class Solution:
    def maxArea(self, height: List[int]) -> int:
        # two pointer solution
        # calc area = min(l, r) **2
        # move smaller pointer

        area = 0

        l, r = 0, len(height) -1 

        while l<= r:
            curr_area = min(height[l], height[r]) * (r - l)
            area = max(area, curr_area)

            if height[l] > height[r]:
                r -= 1
            else:
                l+= 1

        return area