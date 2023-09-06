class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(val) {
        let heap = this.values;
        heap.push(val);

        let index = heap.length - 1;

        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);

            if (heap[index] > heap[parentIndex]) {
                [heap[index], heap[parentIndex]] = [
                    heap[parentIndex],
                    heap[index],
                ];

                index = parentIndex;
            } else {
                return this.values;
            }
        }

        return this.values;
    }

    extractMax() {
        let heap = this.values;

        let max = heap[0];

        if (heap.length > 1) {
            heap[0] = heap.pop();
        } else {
            heap.pop();
            return max;
        }

        let index = 0;

        //Bubble-Down
        while (index < heap.length) {
            let lc = 2 * index + 1;
            let rc = 2 * index + 2;
            let swapIdx = null;

            if (lc < heap.length && rc < heap.length) {
                if (heap[lc] > heap[index] && heap[rc] > heap[index]) {
                    swapIdx = heap[lc] > heap[rc] ? lc : rc;
                } else if (heap[lc] > heap[index]) {
                    swapIdx = lc;
                } else if (heap[rc] > heap[index]) {
                    swapIdx = rc;
                } else {
                    break;
                }

                [heap[index], heap[swapIdx]] = [heap[swapIdx], heap[index]];
                index = swapIdx;
            } else {
                break;
            }
        }

        return max;
    }
}

let heap = new MaxBinaryHeap();

heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);

console.log(heap.values); // [ 41, 39, 33, 18, 27, 12 ]

heap.insert(55);

heap.insert(1);

console.log(heap.values); // [ 55, 39, 41, 18, 27, 12, 33, 1 ]

heap.insert(100);

console.log(heap.values); // [100, 55, 41, 39, 27, 12, 33, 1, 18]

heap.extractMax(); // [55, 39, 41, 18, 27, 12, 33, 1]
