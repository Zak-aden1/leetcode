class Solution:
    def countCollisions(self, directions: str) -> int:
        left = 0
        right = len(directions) - 1

        # Skip the leftmost cars that are moving left ('L')
        while left < len(directions) and directions[left] == 'L':
            left += 1

        # Skip the rightmost cars that are moving right ('R')
        while right >= 0 and directions[right] == 'R':
            right -= 1

        # Count the remaining cars that are either moving or stationary
        count = 0
        for i in range(left, right + 1):
            if directions[i] != 'S':
                count += 1

        return count