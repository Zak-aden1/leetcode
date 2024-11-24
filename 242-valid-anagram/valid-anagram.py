class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        s_map = Counter(s)
        t_map = Counter(t)

        if len(s_map) != len(t_map):
            return False
    
        for key in s_map:
            if s_map[key] != t_map[key]:
                return False
        
        return True