class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        # sliding window of length s1
        # build a map of sliding window // arr 26 char
        # check if equal to each other
        # if not move sliding window and update map/count
        n1 = len(s1)
        n2 = len(s2)
        if n2 < n1:
            return False
        
        s1_count = [0] * 26
        s2_count = [0] * 26

        for r in range(len(s1)):
            s1_count[ord(s1[r]) - ord("a")] += 1
            s2_count[ord(s2[r]) - ord("a")] += 1
        
        if s1_count == s2_count:
            return True
        
        for r in range(n1, n2):
            s2_count[ord(s2[r - n1]) - ord("a")] -= 1
            s2_count[ord(s2[r]) - ord("a")] += 1

            if s1_count == s2_count:
                return True

        return False
