class Node:
    def __init__(self, val: int, key: int):
        self.val = val
        self.key = key
        self.next = None
        self.prev = None

class LRUCache:

    def __init__(self, capacity: int):
        self.capacity = capacity
        self.length = 0
        self.head = None
        self.tail = None
        self.lookup = {}

    def get(self, key: int) -> int:
        if key not in self.lookup:
            return -1
        
        node = self.lookup[key]
        self.__detach(node)
        self.__prepend(node)

        return node.val
        

    def put(self, key: int, value: int) -> None:
        if key in self.lookup:
            node = self.lookup[key]
            self.__detach(node)
            self.__prepend(node)
            node.val = value
        else:
            node = Node(value, key)
            self.length += 1
            self.__prepend(node)
            self.__trim()
            self.lookup[key] = node
        
    def __detach(self, node):
        if node == self.head:
            self.head = self.head.next
        if node == self.tail:
            self.tail = self.tail.prev
        
        if node.next:
            node.next.prev = node.prev
        if node.prev:
            node.prev.next = node.next
        
        node.next, node.prev = None, None
    
    def __prepend(self, node):
        if not self.head:
            self.head = node
            self.tail = node
            return
        
        node.next = self.head
        self.head.prev = node
        self.head = node
    
    def __trim(self):
        if self.length <= self.capacity:
            return
        self.length -= 1
        
        tail = self.tail
        self.__detach(tail)
        del self.lookup[tail.key]


# Your LRUCache object will be instantiated and called as such:
# obj = LRUCache(capacity)
# param_1 = obj.get(key)
# obj.put(key,value)