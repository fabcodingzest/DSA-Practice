// DAY - 1
// 1. Remove Duplicate characters from String
// Method 1
function removeDuplicate(str) {
  let newStr = Array.from(new Set(str.toLowerCase().split("")))
    .join("")
    .trim();
  console.log(`\nMethod 1: Remove duplicates in "${str}"\nResult:`);
  return newStr;
}
// console.log(removeDuplicate("Hello  "))
console.log(removeDuplicate("Whatever"));

// Method 2
function removeDuplicate2(str) {
  let newArr = [];
  str
    .toLowerCase()
    .split("")
    .map((item) => (newArr.indexOf(item) === -1 ? newArr.push(item) : null));
  const newStr = newArr.join("").trim();
  console.log(`\nMethod 2: Remove duplicates in "${str}"\nResult:`);
  return newStr;
}
// console.log(removeDuplicate2("Hello"))
console.log(removeDuplicate2("La la la la la"));

// 2. Remove Duplicate characters from array of element and find the count of an elements using set
// Method 1
function findCount(arr) {
  const set = Array.from(new Set(arr));
  const obj = {};
  arr.forEach((item) => (!obj[item] ? (obj[item] = 1) : (obj[item] = obj[item] + 1)));
  console.log(`\nFind count of each element in: ${JSON.stringify(arr)}\nResult: `);
  return obj;
}

console.log(findCount([1, 2, 4, 2, 4, 3]));

// 3. Remove Duplicate characters from array of element using filter

function removeDupFilter(arr) {
  const newArray = arr.filter((item, i) => arr.indexOf(item) === i);
  console.log(`\nRemove duplicate with filter in: ${JSON.stringify(arr)}\nResult:`);
  return newArray;
}

console.log(removeDupFilter([2, 6, 2, 1, 3, 2, 4, 2]));

// 4. String reverse without reversing of individual words (Array of elements can be reverse with reverse() method but for string it is won't possible so required to split and then join

function reverseStr(str) {
  const newStrArr = [];
  str.split(" ").forEach((item) => newStrArr.unshift(item));
  console.log(`\nReverse string: "${str}" without reverse()`);
  console.log("Result:");
  return newStrArr.join(" ");
}

console.log(reverseStr("Washington DC is the capital of America"));
console.log(reverseStr("Hello how are you?"));
