// Use these to store the key/value pairs in your hash table
class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable { // get O(1), set O(1), delete O(1)

  constructor(numBuckets = 2) {
    // Initialize your buckets here
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(numBuckets).fill(null);

  }

  hash(key) {
    let hashValue = 0;

    for (let i = 0 ; i < key.length ; i++) {
      hashValue += key.charCodeAt(key[i]);
    }

    return hashValue;
  }

  hashMod(key) {
    // Get index after hashing
    return this.hash(key) % this.data.length;
  }

  read(key) {

    // Fill this in

  }


  insert(key, value) {
    let pair = new KeyValuePair(key, value);
    let index = this.hashMod(key);

    if (!this.data[index]) {
      this.data[index] = pair;
    } else {
      let curr = this.data[index];
      while (curr && curr.key !== key) {
        curr = curr.next;
      }
      this.data[index] = pair;
      this.data[index].next = curr;

    }
    this.count++;
    // Fill this in

  }


  resize() {

    // Fill this in

  }


  delete(key) {

    // Fill this in

  }

}


module.exports = HashTable;
