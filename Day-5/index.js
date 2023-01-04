// 1. To find a first pair from a number array whose sum is zero
function findFirstPair(arr) {
  let pairs = [];
  arr.forEach((item1, i) => {
    let pairArr = i === 0 ? arr.slice(1) : i === arr.length - 1 ? arr.slice(0, arr.length - 2) : [...arr.slice(0, i), ...arr.slice(i + 1)];

    // console.log(pairArr);
    pairArr.forEach((item2) => {
      if (item1 + item2 === 0) {
        // console.log(item1, item2 + "=" + (item1 + item2));
        pairs.push([item1, item2]);
      }
    });
  });
  console.log(`\nFind first pair whose sum is 0 without indexing in: ${JSON.stringify(arr)} without indexing\nResult: `);
  return pairs[0];
}
console.log(findFirstPair([2, 4, -2, -1, 6]));

// 2. To find a first pair from a number array whose sum is zero using indexing
function findFirstPair2(arr) {
  let pairs = [];
  for (let i = 0; i < arr.length; i++) {
    let pairArr = i === 0 ? arr.slice(1) : i === arr.length - 1 ? arr.slice(0, arr.length - 2) : [...arr.slice(0, i), ...arr.slice(i + 1)];

    // console.log(pairArr);
    for (let j = 0; j < pairArr.length; j++) {
      if (arr[i] + pairArr[j] === 0) {
        // console.log(arr[i], pairArr[j] + "=" + (arr[i] + pairArr[j]));
        pairs.push([arr[i], pairArr[j]]);
      }
    }
  }
  console.log(`\nFind first pair whose sum is 0 with indexing in: ${JSON.stringify(arr)}\nResult: `);
  return pairs[0];
}
console.log(findFirstPair2([1, 2, 4, -2, -1, 6]));

// 3. To find the largest pair of the 2 elements using indexing with unsorted elements
// Day - 6 Q - 1 :To find the largest pair of the 2 elements using indexing with sorted elements

function findLargestPair(arr) {
  let pair = [];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let pairArr = i === 0 ? arr.slice(1) : i === arr.length - 1 ? arr.slice(0, arr.length - 2) : [...arr.slice(0, i), ...arr.slice(i + 1)];

    // console.log(pairArr);
    for (let j = 0; j < pairArr.length; j++) {
      if (arr[i] + pairArr[j] > sum) {
        // console.log(arr[i], pairArr[j] + "=" + (arr[i] + pairArr[j]));
        sum = arr[i] + pairArr[j];
        pair = [arr[i], pairArr[j]];
      }
    }
  }
  console.log(`\nFind largest pair in: ${JSON.stringify(arr)}\nResult: `);
  return { pair, sum };
}
console.log(findLargestPair([1, 2, 4, 6]));
// console.log(findLargestPair([-10, -7, -2, -1, 39]));
// console.log(findLargestPair([-10, -7, -2, -1, 2, 3]));
