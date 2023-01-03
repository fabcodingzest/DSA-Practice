// 1. String reverse with reversing of individual words
function reverseIndWords(str) {
  const arr = str.split(" ");
  const reversedArr = arr.map((item) => {
    const newStrArr = [];
    item.split("").forEach((item) => newStrArr.unshift(item));
    // or we can just return item.reverse() but i did without it
    return newStrArr.join("");
  });
  console.log(`->Reversed individual words "${reversedArr.join(" ")}"`);
  return reversedArr.join(" ");
}

// reverseIndWords("Hello how are you?");

// 2. String reverse without using inbult function
function reverseWithoutFunc(str) {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  console.log(`-> Reversed string without inbuilt function "${newStr}"`);
  return newStr;
}
// reverseWithoutFunc("abcdef osla hey hey");

// 3. Find factorial of user input number
function findFactorial(num) {
  if (num === 1) {
    return 1;
  } else {
    return num * findFactorial(num - 1);
  }
}

const factorial = findFactorial(4);
// console.log(factorial);

// 4. Check if a string is an Anagram - a string with same length and same characters
function checkChars(str1, str2) {
  const checkStr = str1
    .toLowerCase()
    .split("")
    .every((item) => {
      return str2.toLowerCase().split("").indexOf(item) !== -1;
    });
  return checkStr;
}
function checkAnagram(arr) {
  const [str1, str2] = arr;
  if (str1.length === str2.length) {
    const checkStr1 = checkChars(str1, str2);
    const checkStr2 = checkChars(str2, str1);
    const isAnagram = checkStr1 === checkStr2;
    console.log(isAnagram);
    return isAnagram;
  } else {
    return false;
  }
}
checkAnagram(["Fried", "Fired"]);
checkAnagram(["Silent", "Listen"]);
checkAnagram(["rare", "Care"]);
