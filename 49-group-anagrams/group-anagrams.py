class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        hash_map = {}

        for s in strs:
            key = [0] * 26

            for c in s:
                v = ord(c) - ord("a")
                key[v] += 1
            
            if tuple(key) not in hash_map:
                hash_map[tuple(key)] = [s]
            else:
                hash_map[tuple(key)].append(s)
  
        res = []

        for k  in hash_map:
            res.append(hash_map[k])
        
        return res