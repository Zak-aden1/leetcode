class MyQueue {
    private first: number[] 
    private second: number[] 
    constructor() {
        this.first = []
        this.second = []
    }

    push(x: number): void {
        this.first.push(x)
    }

    pop(): number {
        while(this.first.length > 0) {
            this.second.push(this.first.pop())
        }
        const record = this.second.pop()

        while(this.second.length > 0) {
            this.first.push(this.second.pop())
        }
        return record
    }

    peek(): number {
        while(this.first.length > 0) {
            this.second.push(this.first.pop())
        }
        const record = this.second.pop()
        this.second.push(record)

        while(this.second.length > 0) {
            this.first.push(this.second.pop())
        }
        return record
    }

    empty(): boolean {
        return this.first.length === 0
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */