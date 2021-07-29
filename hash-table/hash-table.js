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
    // this.resizeCount = 0;
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
    // if (this.resizeCount > 0)
    return this.hash(key) % this.capacity;
  }

  read(key) {
    let index = this.hashMod(key);
    let targetEle = this.data[index];

    while (targetEle && targetEle.key !== key) {
      targetEle = targetEle.next;
    }
    // console.log(targetEle.value);
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
    this.count = 0;
    let nullArray = new Array(this.capacity * 2).fill(null);
    this.capacity *= 2;
    let ogData = this.data;
    this.data = nullArray;
    for (let element of ogData) {
      if (element && !element.next) {
        this.insert(element.key, element.value)
      } else if (!element) {
        continue;
      } else {
        while (element) {
          this.insert(element.key, element.value)
          element = element.next;
        }
      }
    }


    // Fill this in
    // console.log(this.data);

  }


  delete(key) {
    let index = this.hashMod(key);
    if (this.data[index].key === key) {
      if (this.data[index].next === null) {
        this.data[index] = null;
        this.count--;
      }
    } else {
        let curr = this.data[index];
        let prev = null;
        // let next = this.data[index].next;
        while (curr && curr.key !== key) {
          prev = curr;
          curr = curr.next;
        }
        if (curr) {
        prev.next = curr.next;
        curr.next = null;
        this.count--;
        } else {
          throw new Error("invalid key");
        }
    }
  }
    // Fill this in


}


module.exports = HashTable;
