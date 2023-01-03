// DAY - 1
// 1. Remove Duplicate characters from String
// Method 1
function removeDuplicate(str) {
  let newStr = Array.from(new Set(str.toLowerCase().split("")))
    .join("")
    .trim();
  console.log(`=======remove duplicates method 1======`);
  console.log(`Old String was "${str}"`);
  console.log(`New String is "${newStr}"`);
  console.log(`======end=======\n`);
  return newStr;
}
// removeDuplicate("Hello  ")
removeDuplicate("Whatever");

// Method 2
function removeDuplicate2(str) {
  let newArr = [];
  str
    .toLowerCase()
    .split("")
    .map((item) => (newArr.indexOf(item) === -1 ? newArr.push(item) : null));
  const newStr = newArr.join("").trim();
  console.log(`======remove duplicates method 2=======`);
  console.log(`Old String was "${str}"`);
  console.log(`New String is "${newStr}"`);
  console.log(`======end=======\n`);
  return newStr;
}
// removeDuplicate2("Hello")
removeDuplicate2("La la la la la");

// 2. Remove Duplicate characters from array of element and find the count of an elements using set
// Method 1
function findCount(arr) {
  const set = Array.from(new Set(arr));
  const obj = {};
  arr.forEach((item) =>
    !obj[item] ? (obj[item] = 1) : (obj[item] = obj[item] + 1)
  );
  console.log("===set and number of elements===");
  console.log(`orginal array`);
  console.log(arr);
  console.log("results:");
  console.log(obj);
  console.log(set);
  console.log("======end=======\n");
  return obj;
}

findCount([1, 2, 4, 2, 4, 3]);

// 3. Remove Duplicate characters from array of element using filter

function removeDupFilter(arr) {
  const newArray = arr.filter((item, i) => arr.indexOf(item) === i);
  console.log("====remove duplicate with filter====");
  console.log(`orginal array`);
  console.log(arr);
  console.log("results:");
  console.log(newArray);
  console.log("======end======\n");
  return newArray;
}

removeDupFilter([2, 6, 2, 1, 3, 2, 4, 2]);

// 4. String reverse without reversing of individual words (Array of elements can be reverse with reverse() method but for string it is won't possible so required to split and then join

function reverseStr(str) {
  const newStrArr = [];
  str.split(" ").forEach((item) => newStrArr.unshift(item));
  console.log("===reverse string without reverse()===");
  console.log(`orginal string "${str}"`);
  console.log("results:");
  console.log(newStrArr.join(" "));
  console.log("======end======\n");
  return newStrArr.join("");
}

reverseStr("Washington DC is the capital of America");
