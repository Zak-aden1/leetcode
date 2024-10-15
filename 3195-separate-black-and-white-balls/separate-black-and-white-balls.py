class Solution:
    def minimumSteps(self, s: str) -> int:
        total = 0
        b = 0

        for i, char in enumerate(s):
            if char == "0":
                total += b
            else:
                b += 1
        
        return total