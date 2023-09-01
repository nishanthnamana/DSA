class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val) {
        let node = new Node(val);

        if (!this.head) {
            this.head = this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }

        this.length++;

        return this.length;
    }

    dequeue() {
        if (this.length === 0) return null;

        let node = this.head;
        if (this.length === 1) {
            this.head = this.tail = null;
        } else {
            this.head = node.next;
            node.next = null;
        }

        this.length--;

        return node.val;
    }
}
