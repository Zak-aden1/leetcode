class MinStack {
    private head
    // look at hint if needed
    constructor() {
        this.head = undefined
    }

    push(val: number): void {
        if(!this.head) {
            this.head = {value: val, min: val}
            return
        }

        const newMin = val < this.head.min ? val : this.head.min

        const node = {value: val, next: this.head, min: newMin}
        this.head = node
    }

    pop(): void {
        if(!this.head) return undefined

        const head = this.head
        this.head = this.head?.next

        // free
        head.next = undefined
        return head.value
    }

    top(): number {
        return this.head?.value
    }

    getMin(): number {
        return this.head?.min
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */