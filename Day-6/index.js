// 1. Already done in Day -5 : To find the largest pair of the 2 elements using indexing with sorted elements

// 2. To find the index of an element from an array
function findIndex(arr, element) {
  console.log(`Index of ${element} in ${JSON.stringify(arr)}: `);
  return arr.indexOf(element);
}
console.log(findIndex([1, 2, 5, 32, 4], 5));
// console.log(findIndex([1, 2, 5, 32, 4], 4));

// 3. Fibonacci Series (0,1,1,2,3,5,8,13....)
// printing the elements
function fibonacci(limit) {
  let a = 0;
  let b = 1;
  let nextNum;
  console.log(`\nFibonnaci series till ${limit} elements`);
  for (let i = 0; i < limit; i++) {
    console.log(a);
    nextNum = a + b;
    a = b;
    b = nextNum;
  }
}
console.log(fibonacci(8));
// console.log(fibonacci(20));
