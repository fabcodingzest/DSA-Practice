// Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

// Implement the LRUCache class:

// LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
// int get(int key) Return the value of the key if the key exists, otherwise return -1.
// void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
// The functions get and put must each run in O(1) average time complexity.

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.cache = new Map();
  this.capacity = capacity;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  const data = this.cache;
  if (data.has(key)) {
    // NOTE: We update the recent (search) even while getting the result
    const value = data.get(key);
    data.delete(key);
    data.set(key, value);
    return data.get(key);
  } else {
    return -1;
  }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  let data = this.cache;
  let capacity = this.capacity;
  const exists = data.has(key);
  const firstKey = data.keys().next().value;
  if (exists) {
    data.delete(key);
  } else {
    data.set(key, value);
    if (data.size > capacity) {
      data.delete(firstKey);
    }
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
const obj = new LRUCache(2);
// console.log(obj);
obj.put(1, 1);
obj.put(2, 2);
console.log(obj.get(1));
obj.put(3, 3);
console.log(obj.get(2));
obj.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
console.log(obj.get(1)); // return -1 (not found)
console.log(obj.get(3)); // return 3
console.log(obj.get(4));
