class SimpleHashMap {
    constructor() {
      this.map = {};
    }
  
    // Method to add a key-value pair
    put(key, value) {
      this.map[key] = value;
    }
  
    // Method to retrieve a value by key
    get(key) {
      return this.map[key] !== undefined ? this.map[key] : null;
    }
  
    // Method to remove a key-value pair
    remove(key) {
      if (this.map[key] !== undefined) {
        delete this.map[key];
      }
    }
  }
  
  // Example usage
  const myHashMap = new SimpleHashMap();
  myHashMap.put('name', 'Alice');
  console.log(myHashMap.get('name')); 
  myHashMap.remove('name');
  console.log(myHashMap.get('name'));