class Node:
    def __init__(self):
        self.children = [None] * 26
        self.isWord = False

class Trie:

    def __init__(self):
        # use a linked list
        # node = {children [26], isWord: true/false}
        self.head = Node()
        

    def insert(self, word: str) -> None:

        # check if char in our linked list
        # if not create node for char val 
            # so children[char] = node
        # else:
            # curr = children[charr]
        
        # char.isTrue = true
        curr = self.head
        for char in word:
            v = ord(char) - ord("a")
            if curr.children[v] is None:
                curr.children[v] = Node()
            curr = curr.children[v]
        curr.isWord = True
        

    def search(self, word: str) -> bool:
        # if char not in list,
            # return false 
        # curr = list[char]
        # return if last word.isWord = true
        curr = self.head
        for c in word:
            v = ord(c) - ord("a")
            if  curr.children[v] is None:
                return False
            curr = curr.children[v]

        return curr.isWord == True

    def startsWith(self, prefix: str) -> bool:
        # keep looping until end
        curr = self.head
        for c in prefix:
            v = ord(c) - ord("a")
            if curr.children[v] is None:
                return False
            curr = curr.children[v]
        return True


# Your Trie object will be instantiated and called as such:
# obj = Trie()
# obj.insert(word)
# param_2 = obj.search(word)
# param_3 = obj.startsWith(prefix)