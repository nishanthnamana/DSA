class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let node = new Node(value);

        if (!this.root) {
            this.root = node;
            return this;
        }

        let current = this.root;
        while (true) {
            if (current.value === value) {
                return undefined;
            } else {
                if (current.value > value) {
                    if (current.left === null) {
                        current.left = node;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if (current.value < value) {
                    if (current.right === null) {
                        current.right = node;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }

    find(value) {
        let current = this.root;

        while (true) {
            if (current === null) {
                return false;
            } else if (current.value === value) {
                return true;
            } else if (current.value > value) {
                current = current.left;
            } else if (current.value < value) {
                current = current.right;
            }
        }
    }
}

let tree = new BinarySearchTree();

console.log(tree.insert(40));
console.log(tree.insert(23));
console.log(tree.insert(55));

console.log(tree.find(23));
console.log(tree.find(55));
console.log(tree.find(60));
