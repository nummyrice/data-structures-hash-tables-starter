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
    return this.hash(key) % this.capacity;
  }

  read(key) {
    let index = this.hashMod(key);
    let targetEle = this.data[index];

    while (targetEle && targetEle.key !== key) {
      targetEle = targetEle.next;
    }
    console.log(targetEle.value);
      return targetEle.value;

  }



  insert(key, value) {
    let index = this.hashMod(key);
    let element = new KeyValuePair(key, value);
    let old = this.data[index];
    this.data[index] = element;
    element.next = old;
    this.count++;


    // let pair = new KeyValuePair(key, value);
    // let index = this.hashMod(key);

    // if (!this.data[index]) {
    //   this.data[index] = pair;
    // } else {
    //   let curr = this.data[index];
    //   let oldHead = this.data[index];
    //   while (curr && curr.key !== key) {
    //     curr = curr.next;
    //   }
    //   this.data[index] = pair;
    //   this.data[index].next = oldHead;

    // }
    // this.count++;
    // Fill this in

  }


  resize() {

    let nullArray = new Array(this.capacity).fill(null);

    this.data = this.data.concat(nullArray);
    // Fill this in
    this.capacity *= 2;
    // console.log(this.data);

  }


  delete(key) {

    // Fill this in

  }

}


module.exports = HashTable;
