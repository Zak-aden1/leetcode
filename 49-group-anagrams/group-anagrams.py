class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        hash_map = {}

        for char in strs:
            sort = ''.join(sorted(char))
            print(char, sort)

            if sort in hash_map:
                hash_map[sort].append(char)
            else:
                hash_map[sort] = [char]
        
        res = []
        print(hash_map)

        for k  in hash_map:
            res.append(hash_map[k])
        
        return res