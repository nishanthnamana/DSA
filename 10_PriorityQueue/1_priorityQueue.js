class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(value, priority) {
        let node = new Node(value, priority);

        let queue = this.values;
        queue.push(node);

        let index = queue.length - 1;

        while (index > 0) {
            let parentIdx = Math.floor((index - 1) / 2);

            if (queue[index].priority > queue[parentIdx].priority) {
                [queue[index], queue[parentIdx]] = [
                    queue[parentIdx],
                    queue[index],
                ];

                index = parentIdx;
            } else {
                break;
            }
        }

        return queue;
    }

    dequeue() {
        let queue = this.values;
        let max = queue[0];

        if (queue.length > 1) {
            queue[0] = queue.pop();
        } else {
            queue.pop();
            return max;
        }

        let index = 0;

        while (index < queue.length) {
            let lc = 2 * index + 1;
            let rc = 2 * index + 2;
            let swapIdx = null;

            if (lc < queue.length && rc < queue.length) {
                if (
                    queue[lc].priority > queue[index].priority &&
                    queue[rc].priority > queue[index].priority
                ) {
                    swapIdx = queue[lc].priority > queue[rc].priority ? lc : rc;
                } else if (queue[lc].priority > queue[index].priority) {
                    swapIdx = lc;
                } else if (queue[rc].priority > queue[index].priority) {
                    swapIdx = rc;
                } else {
                    break;
                }

                [queue[swapIdx], queue[index]] = [queue[index], queue[swapIdx]];
                index = swapIdx;
            } else {
                break;
            }
        }

        return max;
    }
}

class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

let heap = new PriorityQueue();

heap.enqueue(41, 10);
heap.enqueue(39, 9);
heap.enqueue(33, 8);
heap.enqueue(18, 6);
heap.enqueue(27, 7);
heap.enqueue(12, 5);

console.log(heap.values); // [ 41, 39, 33, 18, 27, 12 ]

heap.enqueue(55, 11);

heap.enqueue(1, 1);

console.log(heap.values); // [ 55, 39, 41, 18, 27, 12, 33, 1 ]

heap.enqueue(100, 12);

console.log(heap.values); // [100, 55, 41, 39, 27, 12, 33, 1, 18]

heap.dequeue();

console.log(heap.values); // [55, 39, 41, 18, 27, 12, 33, 1]
