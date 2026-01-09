const logItems = function (array) {
  for (let i = 0; i < array.length; i++) {
    const number = i + 1;
    const value = array[i];
    console.log(`${number} - ${value}`);
  }
};
logItems(["Mango", "Poly", "Ajax"]);

const calculateEngravingPrice = function (message, pricePerWord) {
  const price = message.length * pricePerWord;
  return price;
};
console.log(calculateEngravingPrice("Hello", 55));

const findLongestWord = function (string) {
  const words = string.split(" ");
  let longestWord = "";

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
};
console.log(findLongestWord("Lorem ipsum dolor sit amet, consectetur. "));

const formatString = function (string) {
  if (string.length > 40) {
    return string.slice(0, 40) + "...";
  }
  return string;
};
console.log(formatString("qwwwwwWwwwfwwwwwwwhhsdsdasssssssssssssssssssssssss"));

const checkForSpam = function (message) {
  const messageArray = message.split(" ");
  for (const messageArray of messageArray) {
    if (messageArray === "spam") {
      return true;
    }
    if (messageArray === "sale") {
      return true;
    }
  }
  return false;
};
console.log(checkForSpam("The sale email went to spam."));
console.log(checkForSpam("I will go to the park."));

const hjshrd = function (prompt) {
  let input;
  const numbers = [];
  let total = 0;
  input = prompt;
  numbers.push(prompt);

  for (let h = 0; h < numbers.length; h++) {
    for (total of numbers) {
      total = total + numbers[h];
    }
  }
  return total;
};
prompt = prompt("Введи число");

let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt("Будь ласка, введіть число:");
  if (input === null) {
    break;
  }
  const value = Number(input);
  if (Number.isNaN(value)) {
    alert("Було введено не число, попробуйте ще раз");
    continue;
  }

  numbers.push(value);
}

if (numbers.length > 0) {
  for (const number of numbers) {
    total += number;
  }
  console.log(`Загальна сума чисел дорівнює ${total}`);
} else {
  console.log("Масив порожній, суму неможливо порахувати.");
}
