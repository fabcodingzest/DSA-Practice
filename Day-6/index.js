// To find the index of an element from an array
function findIndex(arr, element) {
  return arr.indexOf(element);
}
console.log(findIndex([1, 2, 5, 32, 4], 5));

// Fibonacci Series (0,1,1,2,3,5,8,13....)
// Day-7 Q-1 Fibonacci Series (0,1,1,2,3,5,8,13....) where keeping in array
function fibonacci(limit) {
  let arr = [0, 1];
  for (let i = 2; i < limit; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr;
}
console.log(fibonacci(8));
