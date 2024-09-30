type Node = {
    value: number,
    next?: Node,
    prev?: Node,
}

class CustomStack {
    private stack: number[];
    private capacity: number;

    constructor(maxSize: number) {
        this.stack = []
        this.capacity = maxSize
    }

    push(x: number): void {
        if(this.stack.length < this.capacity) {
        this.stack.push(x)
        }
    }

    pop(): number {
        return this.stack.length > 0 ? this.stack.pop() : -1
    }

    increment(k: number, val: number): void {
        for (let i = 0; i < k && i < this.stack.length; i++) {
            this.stack[i] += val
        }
    }
}

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */