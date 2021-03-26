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

  }

  hash(key) {
    let hashValue = 0;

    for (let i = 0 ; i < key.length ; i++) {
      hashValue += key.charCodeAt(i);
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