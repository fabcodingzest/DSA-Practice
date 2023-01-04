// 1. Fibonacci Series (0,1,1,2,3,5,8,13....) where keeping in array
function fibonacci(limit) {
  let arr = [0, 1];
  for (let i = 2; i < limit; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr;
}
// console.log(fibonacci(8));

// 2. Finding a missing elements in an array and then add with existing elements. (-1 means if elements not found then it will return always -1 as per rule)
function findNumAndAdd(arr) {
  let [start, end] = [arr[0], arr[arr.length - 1]];
  let missingNum;
  let missingIndex;
  arr.forEach((item, i) => {
    if (item !== start + i) {
      if (!missingNum) {
        missingNum = start + i;
        missingIndex = i;
      }
    }
  });
  const part2OfArr =
    missingIndex === arr.length - 1 ? arr.slice(-1) : arr.slice(missingIndex);
  const newArr = [...arr.slice(0, missingIndex), missingNum, ...part2OfArr];
  console.log(`Find missing number in ${JSON.stringify(arr)}`);
  console.log(`Missing Number found: ${missingNum}`);
  return newArr;
}

console.log(
  `Updated Array: ${JSON.stringify(findNumAndAdd([2, 3, 4, 6, 7]))}\n`
);
// console.log(`Updated Array: ${JSON.stringify(findNumAndAdd([4, 5, 7]))}\n`);
// console.log(`Updated Array: ${JSON.stringify(findNumAndAdd([2, 4, 5, 6]))}\n`);

// 3. Find the missing number from an array
function findNum(arr) {
  let [start, end] = [arr[0], arr[arr.length - 1]];
  let missingNum;
  arr.forEach((item, i) => {
    if (item !== start + i) {
      if (!missingNum) {
        missingNum = start + i;
      }
    }
  });
  console.log(`Find missing number in ${JSON.stringify(arr)}`);
  return missingNum;
}

console.log(`Missing Number: ${JSON.stringify(findNum([2, 3, 4, 6, 7]))}\n`);
// console.log(`Missing Number: ${JSON.stringify(findNum([4, 5, 7]))}\n`);
// console.log(`Missing Number: ${JSON.stringify(findNum([2, 4, 5, 6]))}\n`);
