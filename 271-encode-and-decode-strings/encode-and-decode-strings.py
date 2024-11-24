class Codec:

    def encode(self, strs):
        s = ""

        for word in strs:
            s += str(len(word)) + "#"  + word
        
        return s
        

    def decode(self, s):
        words = []

        i = 0
        while i < len(s):
            j = i
            while s[j] != "#":
                j+= 1
            
            length = int(s[i:j])

            start = j + 1
            end = start + length
            words.append(s[start:end])
            i = j + 1 + length
        
        return words
            

        

# Your Codec object will be instantiated and called as such:
# codec = Codec()
# codec.decode(codec.encode(strs))