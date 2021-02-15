class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}

class HashTable { // get O(1), set O(1), deleteKey O(1)

    constructor(numBuckets = 8) {
        // Initialize your buckets here

    }

    hash(key) {
        // Your hash function here. Get creative!

    }

    hashMod(key) {
        // Get index after hashing

    }

    read(key) {
        // Get a value from key

    }

    insert(key, value) {
        // Set value using key

    }

    resize() {
        // Resize bucket (occurs when load factor > 0.7)
    }

    delete(key) {

    }

}

// Node and LinkedList Implementation provided below. Do not edit!!
class _Node {

    constructor(key = null, value = null) {
        this.key = key;
        this.value = value;
        this.next = null;
        this.prev = null;
    }

    delete() {
        if (this.prev) this.prev.next = this.next;
        if (this.next) this.next.prev = this.prev;
        this.next = null;
        this.prev = null;
    }

}

class LinkedList { // search & delete O(n), search O(n), add/remove head or tail O(1)

    constructor() {
        this.head = new _Node();
        this.tail = new _Node();
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    size() {
        let node = this.head;
        let count = 0;

        while (node) {
            count++;
            node = node.next;
        }

        return count - 2; // subtract 2 so that the sentinel nodes aren't counted
    }

    get(key) {
        let node = this.head;

        while (node) {
            if (node.key === key) return node;
            node = node.next;
        }

        return false;
    }

    addToHead(key, value) {
        const newNode = new _Node(key, value);
        const oldNext = this.head.next;
        newNode.next = oldNext;
        oldNext.prev = newNode;
        newNode.prev = this.head;
        this.head.next = newNode;

        return newNode;
    }

    removeFromHead() {
        const nodeToRemove = this.head.next;
        this.head.next = nodeToRemove.next;
        nodeToRemove.next.prev = this.head;

        return nodeToRemove;
    }

    addToTail(key, value) {
        const newNode = new _Node(key, value);
        const oldPrev = this.tail.prev;
        newNode.prev = oldPrev;
        oldPrev.next = newNode;
        newNode.next = this.tail;
        this.tail.prev = newNode;

        return newNode;
    }

    removeFromTail() {
        const nodeToRemove = this.tail.prev;
        this.tail.prev = nodeToRemove.prev;
        nodeToRemove.prev.next = this.tail;

        return nodeToRemove;
    }

    deleteAt(key) {
        let nodeToDelete = this.head;

        while (nodeToDelete) {
            nodeToDelete = nodeToDelete.next;

            if (nodeToDelete.key === key) {
                const prev = nodeToDelete.prev;
                prev.next = nodeToDelete.next;
                nodeToDelete.next.prev = prev;
                return nodeToDelete;
            }
        }

        return null;
    }

    forEach(cb) {
        let node = this.head;

        while (node) {
            cb(node);
            node = node.next;
        }
    }

}

module.exports = { HashTable };