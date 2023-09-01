class BinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(val) {
        let heap = this.values;
        heap.push(val);

        if (heap.length === 1) {
            return this.value;
        }

        let index = heap.length - 1;

        while (index >= 0) {
            let parentIndex = Math.floor((index - 1) / 2);

            if (heap[index] > heap[parentIndex]) {
                [heap[index], heap[parentIndex]] = [
                    heap[parentIndex],
                    heap[index],
                ];

                index = parentIndex;
            } else {
                return this.value;
            }
        }
    }
}

let heap = new BinaryHeap();

heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);

console.log(heap.values); // [ 41, 39, 33, 18, 27, 12 ]

heap.insert(55);

console.log(heap.values); // [ 55, 39, 41, 18, 27, 12, 33 ]
