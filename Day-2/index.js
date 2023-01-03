// 1. String reverse with reversing of individual words
function reverseIndWords(str) {
  const arr = str.split(" ");
  const reversedArr = arr.map((item) => {
    const newStrArr = [];
    item.split("").forEach((item) => newStrArr.unshift(item));
    // or we can just return item.reverse() but i did without it
    return newStrArr.join("");
  });
  console.log(`Reversed individual words "${reversedArr.join(" ")}"`);
  return reversedArr.join(" ");
}

reverseIndWords("Hello how are you?");

