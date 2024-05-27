class Node {
    private isWord: boolean;
    private children: Object
    constructor() {
        this.isWord = false
        this.children = {}
    }
}

class Trie {
    private root: any;
    constructor() {
        this.root = new Node()
    }

    insert(word: string): void {
        let node = this.root

        for(let char of word) {
            if(!node.children[char]) node.children[char] = new Node()
            node = node.children[char]
        }

        node.isWord = true
    }

    search(word: string): boolean {
        let node = this.root

        for(let char of word) {
            if(!node.children[char]) return false
            node = node.children[char]
        }

        return node.isWord
    }

    startsWith(prefix: string): boolean {
        let node = this.root

        for(let char of prefix) {
            if(!node.children[char]) return false
            node = node.children[char]
        }

        return true
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */