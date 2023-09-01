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

    //Root, Left, Right
    dfsPreOrder() {
        let data = [];

        function traverse(node) {
            data.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }

        traverse(this.root);

        return data;
    }

    // Left, Right, Root
    dfsPostOrder() {
        let data = [];

        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            data.push(node.value);
        }

        traverse(this.root);

        return data;
    }

    //Left, Root, Right
    dfsInOrder() {
        let data = [];

        function traverse(node) {
            if (node.left) traverse(node.left);
            data.push(node.value);
            if (node.right) traverse(node.right);
        }

        traverse(this.root);

        return data;
    }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log("DFS PreOrder -> " + tree.dfsPreOrder()); // [ 10, 6, 3, 8, 15, 20 ]
console.log("DFS PostOrder -> " + tree.dfsPostOrder()); // [ 3, 8, 6, 20, 15, 10 ]
console.log("DFS InOrder -> " + tree.dfsInOrder()); // [ 3, 6, 8, 10, 15, 20 ]
