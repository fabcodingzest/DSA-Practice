// 1. To check the string or number is palindrome or not( ex: 121,madam,anna) using reverse method

function checkPalindrome(str) {
  const lowerCaseStr = str.toLowerCase();
  console.log(`\nIs ${str} a palindrome? `);
  return lowerCaseStr === lowerCaseStr.split("").reverse().join("");
}

console.log(checkPalindrome("omo"));
// console.log(checkPalindrome("wowoWo"));

// 2. To check the string or number is palindrome or not( ex: 121,madam,anna) using diving length by 2 and then comparing
function reverseString(str) {
  const reversedStr = [];
  for (let i = str.split("").length - 1; i >= 0; i--) {
    reversedStr.push(str[i]);
  }
  return reversedStr;
}
function compareVals(p1, p2) {
  const isPalindrome = p1.split("").every((item, i) => {
    return item === p2[i];
  });
  return isPalindrome;
}
function checkPalindrome2(str) {
  const strLength = str.length;
  let mid = Math.floor(strLength / 2);
  let mid2 = strLength % 2 === 0 ? mid + 1 : mid;
  const [part1, part2] = [str.split("").slice(0, mid).join(""), str.split("").slice(-mid2).join("")];
  const reversedPt2 = reverseString(part2);
  const isPalindrome = compareVals(part1, reversedPt2);
  console.log(`\nIs ${str} a palindrome? `);
  return isPalindrome;
}
console.log(checkPalindrome2("rarel"));
console.log(checkPalindrome2("aclblca"));
// console.log(checkPalindrome2("aclbaca"));
// console.log(checkPalindrome2("abba"));
// console.log(checkPalindrome2("aclsca"));

// Interview Class notes Jan 4, 2022
// map polyfill ✅
// append child and append ✅
// scope chaining ✅
// polyfill ✅
// prototype ✅
// @layer for specificity ✅
// Async and defer in html ✅
// stale closure ✅
// method chaining ✅
// promise chaining ✅
Array.prototype.myMap = function (fn) {
  let newArr = [];
  const arr = this;
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = fn(arr[i]); // execute the function
  }
  return newArr;
};
// console.log([1, 2, 3].myMap((item) => item / 2));

// 3. To find longest word from a string using (for of Loop) means iterate by an elements not by indexing

function findLongestWord(str) {
  const arr = str.replace(/[\.\?\!]/gi, "").split(" ");
  let longestWord = arr[0];
  for (const word of arr) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  console.log("\nWithout Indexing");
  console.log(`The longest word in string "${str}":`);

  return longestWord;
}

console.log(findLongestWord("Hello my name is Fabeha!"));

// 4. To find longest word from a string using functions

function findLongestWord2(str) {
  const arr = str.replace(/[\.\?\!]/gi, "").split(" ");
  let longestWord = arr[0];
  arr.forEach((item) => {
    if (item.length > longestWord.length) {
      longestWord = item;
    }
  });
  console.log("\nWith Indexing");
  console.log(`The longest word in string "${str}":`);
  return longestWord;
}
console.log(findLongestWord2("Hello are you supa chamchi?"));
