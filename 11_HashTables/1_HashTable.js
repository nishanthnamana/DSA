class HashTable {
    constructor(size = 15) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;

        for (let i = 0; i < Math.floor(key.length, 100); i++) {
            let value = key.charCodeAt(i);

            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }

        return total;
    }

    set(key, value) {
        let index = this._hash(key);

        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }

        this.keyMap[index].push([key, value]);

        return this.keyMap;
    }

    get(key) {
        let index = this._hash(key);

        let keyArray = this.keyMap[index];

        for (let arr of keyArray) {
            if (arr[0] === key) {
                return arr[1];
            }
        }
    }

    keys() {
        let queue = this.keyMap;
        let keysArr = [];

        for (let i = 0; i < queue.length; i++) {
            if (queue[i]) {
                for (let j = 0; j < queue[i].length; j++) {
                    keysArr.push(queue[i][j][0]);
                }
            }
        }

        return keysArr;
    }

    values() {
        let queue = this.keyMap;
        let valuesArr = [];

        for (let i = 0; i < queue.length; i++) {
            if (queue[i]) {
                for (let j = 0; j < queue[i].length; j++) {
                    valuesArr.push(queue[i][j][1]);
                }
            }
        }

        return valuesArr;
    }
}

let hash = new HashTable(4);

hash.set("abc", "def");
hash.set("Hello", "Hai");
hash.set("nishanth", "sai");

console.log(hash.keyMap);

console.log(hash.get("Hello"));
console.log(hash.get("nishanth"));

console.log("---------");
console.log(hash.keys());
console.log(hash.values());
