class Node:
    def __init__(self):
        self.children = [None] * 26
        self.isWord = False

class WordDictionary:

    def __init__(self):
        self.root = Node()
        

    def addWord(self, word: str) -> None:
        # loop through word and add to children
        # time Complexity: O(L) where l = len(word)
        curr = self.root

        for c in word:
            v = ord(c) - ord("a")
            if curr.children[v] is None:
                curr.children[v] = Node()
            curr = curr.children[v]
        
        curr.isWord = True
        

    def search(self, word: str, newRoot = None) -> bool:
        curr = self.root if newRoot is None else newRoot

        if not word:
            return curr.isWord

        c = word[0]
        
        if c == ".":
            # Try all children without modifying curr
            for i in range(len(curr.children)):
                if curr.children[i] is not None:
                    # Recurse with the next character of the word and the child node
                    if self.search(word[1:], curr.children[i]):
                        return True
            return False
        
        # Normal case for non-wildcard characters
        v = ord(c) - ord("a")
        if curr.children[v] is None:
            return False
        curr = curr.children[v]

        return self.search(word[1:], curr)


        


# Your WordDictionary object will be instantiated and called as such:
# obj = WordDictionary()
# obj.addWord(word)
# param_2 = obj.search(word)
