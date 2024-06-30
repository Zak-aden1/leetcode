class MinStack {
    private head
    // look at hint if needed
    constructor() {
        this.head = undefined
    }

    push(val: number): void {
        if(!this.head) {
            this.head = {val, min: val}
            return
        }

        const min = Math.min(val, this.head.min)

        this.head = {val, min, next: this.head}
    }

    pop(): void {
        if(!this.head) return

        this.head = this.head.next
    }

    top(): number {
        return this.head.val
    }

    getMin(): number {
        return this.head.min
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