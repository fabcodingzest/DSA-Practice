// To find the index of an element from an array
function findIndex(arr, element) {
  return arr.indexOf(element);
}
// console.log(findIndex([1, 2, 5, 32, 4], 5));

// Fibonacci Series (0,1,1,2,3,5,8,13....)
// printing the elements
function fibonacci(limit) {
  let a = 0;
  let b = 1;
  let nextNum;
  for (let i = 0; i < limit; i++) {
    console.log(a);
    nextNum = a + b;
    a = b;
    b = nextNum;
  }
}
console.log(fibonacci(20));
