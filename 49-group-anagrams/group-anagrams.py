class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        # only consist of 26 characters
        # can use count - arr[26] and make that = key
        hashmap = {}

        for s in strs:
            key = [0] * 26
            for char in s:
                key[ord(char) - ord("a")] += 1
            if tuple(key) not in hashmap:
                hashmap[tuple(key)] = [s]
            else:
                hashmap[tuple(key)].append(s)
        
        res = []
        for k in hashmap:
            res.append(hashmap[k])
        
        return res