// 1. String reverse with reversing of individual words
function reverseIndWords(str) {
  const arr = str.split(" ");
  const reversedArr = arr.map((item) => {
    const newStrArr = [];
    item.split("").forEach((item) => newStrArr.unshift(item));
    // or we can just return item.reverse() but i did without it
    return newStrArr.join("");
  });
  console.log(`\nReverse individual words in string: "${str}"\nResult:`);
  return reversedArr.reverse().join(" ");
}

console.log(reverseIndWords("Hello how are you?"));

// 2. String reverse without using inbult function
function reverseWithoutFunc(str) {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  console.log(`\nReverse individual words without inbuilt fns in string: "${str}"\nResult:`);
  return newStr;
}
console.log(reverseWithoutFunc("abcdef osla hey hey"));

// 3. Find factorial of user input number
function findFactorial(num) {
  if (num === 1) {
    return 1;
  } else {
    return num * findFactorial(num - 1);
  }
}

const factorial = findFactorial(4);
console.log(`\nFactorial of 5: ${factorial}`);

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
  console.log(`\nAre these ${JSON.stringify(arr)} anagram?`);
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
// checkAnagram(["Silent", "Listen"]);
// checkAnagram(["rare", "Care"]);

// 5. Swapping of 2 numbers with third variable

function swap(a, b) {
  console.log(`\nSwap 2 numbers:\nArgs: a:${a}, b:${b}`);
  let temp = a;
  a = b;
  b = temp;
  console.log(`Result: a:${a}, b:${b}`);
  return [a, b];
}

swap(2, 66);

// 6. Swapping of 2 numbers without third variable
// Method 1
function swapWithout(a, b) {
  console.log(`\nMethod 1: Swap 2 numbers without third variable:\nArgs: a:${a}, b:${b}`);
  console.log(`Result: a:${a + b - a}, b:${b + a - b}`);
  return [a + b - a, b + a - b];
}

swapWithout(4, 3);

// Method 2
function swapWithout2(a, b) {
  a = a + b;
  b = a - b;
  a = a - b;
  console.log(`\nMethod 2: Swap 2 numbers without third variable:\nArgs: a:${a}, b:${b}`);
  console.log(`Result: a:${a}, b:${b}`);
  return [a, b];
}

swapWithout2(24, 9);
