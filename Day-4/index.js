// 1. To find longest word from a string using custom code
function findLongestWord(str) {
  const arr = str.replace(/[\.\?\!]/gi, "").split(" ");
  let longestWord = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > longestWord.length) {
      longestWord = arr[i];
    }
  }
  console.log(`Find Longest Word from "${str}"`);

  return longestWord;
}
console.log(
  `Result: ${findLongestWord("Hello my name is Fabeha supa chamchi?")}\n`
);

// 2. To find longest common string from array of strings
function longestCommonStr(arr) {
  const setArr = Array.from(new Set(arr));
  const obj = {};
  setArr.forEach((item) => (obj[item] = 0));
  arr.forEach((item) => {
    if (setArr.indexOf(item) !== -1) {
      obj[item] += 1;
    }
  });
  const longestCommonStr = setArr[0];
  for (let word in obj) {
    if (word > longestCommonStr) {
      word = longestCommonStr;
    }
  }
  console.log(`Find Longest Common Word from ${JSON.stringify(arr)}`);
  return longestCommonStr;
}
console.log(`Result: ${longestCommonStr(["ab", "fab", "ab", "new"])}\n`);

// 3. To find vowels and its count in a given string
function findVowelsCount(str) {
  const vowelCount = { a: 0, e: 0, i: 0, o: 0, u: 0 };
  const arr = str.toLowerCase().split("");
  arr.forEach((item) => {
    if (vowelCount[item] !== undefined) {
      vowelCount[item] += 1;
    }
  });
  console.log(`Find Vowel count in "${str}"`);
  return vowelCount;
}
console.log(`Result: ${JSON.stringify(findVowelsCount("Fabeha"))}\n`);
// console.log(`Result: ${JSON.stringify(findVowelsCount("aeiijkfevqwoi"))}\n`);

// 4. To find character occurance from the string
function findCharNums(str) {
  const strArr = str
    .toLowerCase()
    .replace(/[^A-Za-z0-9]/gi, "")
    .split("");
  const charArr = Array.from(new Set(strArr));
  const charTracker = {};
  for (let char of charArr) {
    charTracker[char] = 0;
  }

  strArr.forEach((item) => {
    charTracker[item] += 1;
  });
  console.log(`Find Char count in "${str}"`);
  return charTracker;
}
console.log(`Result: ${JSON.stringify(findCharNums("aeiijevqwoi"),null,2)}\n`);
