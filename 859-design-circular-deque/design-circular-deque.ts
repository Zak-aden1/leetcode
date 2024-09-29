type Node = {
    value: number,
    next?: Node,
    prev?: Node,
}
class MyCircularDeque {
    private head: Node;
    private tail: Node;
    private length: number
    private capacity: number

    constructor(k: number) {
        this.head = this.tail = undefined
        this.length = 0
        this.capacity = k

    }

    insertFront(value: number): boolean {
        if(this.length == this.capacity) return false
        this.length++
        if(!this.head) {
            this.head = this.tail = {value}
            return true
        }

        const node = { value, next: this.head}
        this.head.prev = node
        this.head = node
        return true
    }

    insertLast(value: number): boolean {
        if(this.length === this.capacity) return false
        this.length++
        if(!this.head) {
            this.head = this.tail = { value }
            return true
        }

        const node = { value, prev: this.tail}
        this.tail.next = node
        this.tail = node
        return true
    }

    deleteFront(): boolean {
        if(this.length === 0) return false

        if (this.length === 1) {
            this.head = this.tail = undefined
        } else {
        this.head = this.head.next
        }

        this.length--
        return true
    }

    deleteLast(): boolean {
        if(this.length === 0) return false
        if (this.length === 1) {
            this.head = this.tail = undefined
        } else {
            this.tail = this.tail.prev
        }
        this.length--
        return true
    }

    getFront(): number {
        return !this.isEmpty() ? this.head?.value : -1
    }

    getRear(): number {
        console.log(this.tail?.value)
        return !this.isEmpty() ? this.tail?.value : -1
    }

    isEmpty(): boolean {
        return this.length === 0
    }

    isFull(): boolean {
        return this.length === this.capacity
    }
}

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */