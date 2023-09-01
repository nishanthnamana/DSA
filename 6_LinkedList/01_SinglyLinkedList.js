class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
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
      this.tail = node;
    }

    this.length++;

    return this;
  }

  pop() {
    if (this.length === 0) {
      return undefined;
    }

    let current = this.head;
    let previous = null;

    if (this.length === 1) {
      this.head = this.tail = null;
    } else {
      while (current.next) {
        previous = current;
        current = current.next;
      }

      previous.next = null;
      this.tail = previous;
    }

    this.length--;

    return current;
  }

  shift() {
    if (this.length === 0) {
      return undefined;
    }

    let current = this.head;

    if (this.length === 1) {
      this.head = this.tail = null;
    } else {
      let temp = this.head.next;
      this.head = temp;
      current.next = null;
    }

    this.length--;

    return current;
  }

  unshift(val) {
    let node = new Node(val);

    if (this.length === 0) {
      this.head = this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.length++;

    return this;
  }

  get(index) {
    if (index < 0 || this.length <= index) {
      return null;
    }

    let current = this.head;

    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    return current;
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
      let node = new Node(val);
      let current = this.get(index);
      let previous = this.get(index - 1);

      node.next = current;
      previous.next = node;

      this.length++;
    }

    return true;
  }

  set(index, val) {
    if (index < 0 || index > this.length) {
      return false;
    }

    let node = this.get(index);
    node.val = val;

    return true;
  }

  delete(index) {
    if (index < 0 || index >= this.length) {
      return false;
    }

    if (index === 0) {
      this.shift();
    } else if (index === this.length - 1) {
      this.pop();
    } else {
      let currentNode = this.get(index);
      let previousNode = this.get(index - 1);
      let nextNode = this.get(index + 1);

      previousNode.next = nextNode;
      currentNode.next = null;

      this.length--;
    }

    return true;
  }

  reverse() {
    if (this.length === 0) return null;

    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }
}

let sll = new SinglyLinkedList();
console.log(sll.push("Hello"));

console.log(sll.push("Hai"));

console.log(sll);
console.log(sll.shift());
console.log(sll);
console.log(sll.shift());
console.log(sll);
console.log(sll.shift());
console.log(sll);
