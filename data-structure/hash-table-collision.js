class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.size;
  }

  set(key, value) {
    const hashCodeIndex = this.hash(key);
    let bucket = this.table;

    if (!bucket[hashCodeIndex]) {
      bucket[hashCodeIndex] = [[key, value]];
    } else {
      let sameKeyItem = bucket[hashCodeIndex].find((item) => item[0] === key);

      if (sameKeyItem) {
        sameKeyItem[1] = value;
      } else {
        bucket[hashCodeIndex].push([key, value]);
      }
    }
  }

  get(key) {
    const hashCodeIndex = this.hash(key);
    // return this.table[hashCodeIndex];
    const bucket = this.table[hashCodeIndex];

    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) return sameKeyItem[1];
    }
    return null;
  }

  remove(key) {
    const hashCodeIndex = this.hash(key);
    const bucket = this.table[hashCodeIndex];

    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);

      if (sameKeyItem) {
        bucket.splice(bucket.indexOf(sameKeyItem), 1);
      }
    }
    return null;
  }

  display() {
    let result = [];

    for (let i = 0; i < this.table.length; i++) {
      const element = this.table[i];

      if (this.table[i]) {
        console.log(i, this.table[i]);
        result.push(element);
      }
    }
    return result;
  }
}

const table = new HashTable(40);
table.set("name", "Shahnewaz");
table.set("age", 30);
table.set("name", "Shahnewaz");
// table.display();

table.set("mane", 10);
table.set("mnae", 10);
table.display();

// table.remove("name");

console.log(table.get("name"));
