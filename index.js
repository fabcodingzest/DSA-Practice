// Fibonacci Series (0,1,1,2,3,5,8,13....) where keeping in array
function fibonacci(limit) {
  let arr = [0, 1];
  for (let i = 2; i < limit; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr;
}
console.log(fibonacci(8));

// Finding a missing elements in an array and then add with existing elements. (-1 means if elements not found then it will return always -1 as per rule)

// Find the missing number from an array
