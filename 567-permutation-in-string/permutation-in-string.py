class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        if s1 == "":
            return True
        if s2 == "":
            return False

        s1_map = [0] * 26
        s2_map = [0] * 26

        if len(s1) > len(s2):
            return False

        for i in range(len(s1)):
            s1_map[ord(s1[i]) - ord("a")] += 1
            s2_map[ord(s2[i]) - ord("a")] += 1

        if s1_map == s2_map:
            return True
        
        for i in range(len(s1), len(s2)):
            # rm prev
            s2_map[ord(s2[i - len(s1)]) - ord("a")] -= 1

            # add
            s2_map[ord(s2[i]) - ord("a")] += 1
            if s1_map == s2_map:
                return True
        
        return False

