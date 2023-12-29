class MinStack {
    private min;
    private head
    constructor() {
        this.head = undefined
    }

    push(val: number): void {
        if(!this.head) {
            this.head = { value: val, min: val}
            return 
        }
        const newMin = this.head.min < val ? this.head.min : val
        const node = {value: val, next: this.head, min: newMin}

        this.head = node
    }

    pop(): void {
        if(!this.head) return undefined

        const head = this.head
        this.head = this.head.next
        return head.value
    }

    top(): number {
        if(!this.head) return undefined

        return this.head.value
    }

    getMin(): number {
        if(!this.head) return undefined

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