type Node = {
    val: number,
    next?: Node,
    prev?: Node
}

class LRUCache<K, V> {
    private head?: Node
    private tail?: Node
    private lookup: Map<number, Node>;
    private reverseLookup: Map<Node, number>;
    private length: number


    constructor(private capacity: number) {
        this.capacity = capacity
        this.head = this.tail = undefined
        this.length = 0
        this.lookup = new Map()
        this.reverseLookup = new Map()
    }

    get(key: number): number {
        // get node with key
        // if key doesn't exist return -1
        const node = this.lookup.get(key)
        if(!node) return -1

        // detach it
        this.detach(node)
        // prepend it
        this.prepend(node)
        // return val
        return node.val
    }

    put(key: number, value: number): void {
        // get node with key
        // if key doesn't exist
        // create node and prepend it
        // increase length
        // trim cache if over capacity
        let node = this.lookup.get(key)
        if(!node) {
            node = { val: value } as Node
            this.length++
            this.prepend(node)
            this.trim()
            this.lookup.set(key, node)
            this.reverseLookup.set(node, key)
        } else {
            this.detach(node)
            this.prepend(node)
            node.val = value
        }

        // if it does
        // detach
        // prepend
    }
    private detach(node: Node): void {
        if(node === this.head) {
            this.head = this.head?.next
        }
        if (node === this.tail) {
            this.tail = this.tail?.prev
        }

        if(node.next) {
            node.next.prev = node.prev
        }
        if(node.prev) {
            node.prev.next = node.next
        }
        node.next = undefined
        node.prev = undefined
    }
    private prepend(node: Node): void {
        if(!this.head) {
            this.head = this.tail = node
            return
        }

        this.head.prev = node
        node.next = this.head
        this.head = node
    }
    private trim(): void {
        if(this.length <= this.capacity) return
        this.length--

        const tail = this.tail
        this.detach(tail)

        const key = this.reverseLookup.get(tail) as number
        this.lookup.delete(key)
        this.reverseLookup.delete(tail)
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */