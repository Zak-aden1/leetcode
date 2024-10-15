class Node:
    def __init__(self):
        self.children = [None] * 26
        self.isWord = False

class WordDictionary:

    def __init__(self):
        self.root = Node()
        

    def addWord(self, word: str) -> None:
        curr = self.root

        for char in word:
            v = ord(char) - ord("a")
            if curr.children[v] is None:
                curr.children[v] = Node()
            curr = curr.children[v]
        
        curr.isWord = True
        

    def search(self, word: str, newRoot = None) -> bool:
        # recursively
        curr = newRoot if newRoot is not None else self.root

        if not word:
            return curr.isWord

        first_char = word[0]

        if first_char == ".":
            for child in curr.children:
                if child is not None:
                    if self.search(word[1:], child):
                        return True
            return False
        v = ord(first_char) - ord("a")
        # Normal case for non-wildcard characters
        if curr.children[v] is None:
            return False
            
        return self.search(word[1:], curr.children[v])



        


# Your WordDictionary object will be instantiated and called as such:
# obj = WordDictionary()
# obj.addWord(word)
# param_2 = obj.search(word)
