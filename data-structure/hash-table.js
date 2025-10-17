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
    this.table[hashCodeIndex] = value;
  }

  get(key) {
    const hashCodeIndex = this.hash(key);
    return this.table[hashCodeIndex];
  }

  remove(key) {
    const hashCodeIndex = this.hash(key);
    this.table[hashCodeIndex] = undefined;
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
// table.display();

table.set("mane", 10);
table.display();

// console.log(table.display()); // Example usage
