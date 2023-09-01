class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let node = new Node(val);

        if (!this.head) {
            this.head = this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }

        this.length++;

        return this;
    }

    pop() {
        if (this.length === 0) {
            return undefined;
        }

        let node = this.tail;

        if (this.length === 1) {
            this.head = this.tail = null;
        } else {
            this.tail = node.prev;
            this.tail.next = null;
            node.prev = null;
        }

        this.length--;

        return node;
    }

    shift() {
        if (this.length === 0) {
            return undefined;
        }

        let node = this.head;

        if (this.length === 1) {
            this.head = this.tail = null;
        } else {
            this.head = node.next;
            this.head.prev = null;
            node.next = null;
        }

        this.length--;

        return node;
    }

    unshift(val) {
        let node = new Node(val);

        if (this.length === 0) {
            this.head = this.tail = node;
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }

        this.length++;

        return this;
    }

    get(index) {
        if (this.length === 0 || index >= this.length) {
            return null;
        }

        let middle = Math.floor(this.length / 2);
        let node;

        if (index <= middle) {
            node = this.head;

            for (let i = 0; i < index; i++) {
                node = node.next;
            }
        } else {
            node = this.tail;

            for (let i = this.length - 1; i > index; i--) {
                node = node.prev;
            }
        }

        return node;
    }

    set(index, val) {
        let node = this.get(index);

        if (node !== null) {
            node.val = val;
            return true;
        }

        return false;
    }

    insert(index, val) {
        if (index < 0 || index > this.length) {
            return false;
        }

        if (index === 0) {
            this.unshift(val);
        } else if (index === this.length) {
            this.push(val);
        } else {
            let newNode = new Node(val);

            let previous = this.get(index - 1);
            let current = previous.next;

            newNode.prev = previous;
            previous.next = newNode;

            newNode.next = current;
            current.prev = newNode;

            this.length++;
        }

        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) {
            return false;
        }

        if (index === 0) {
            this.shift();
        } else if (index === this.length - 1) {
            this.pop();
        } else {
            let current = this.get(index);
            let previous = current.prev;
            let next = current.next;

            previous.next = next;
            next.prev = previous;

            current.next = null;
            current.prev = null;

            this.length--;
        }

        return true;
    }
}
