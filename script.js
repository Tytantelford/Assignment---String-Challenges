//1
function isString(input) {
  return typeof input === "string";
}

console.log(isString("abc"));
console.log(isString(190));

//2
const isBlankString = function (input) {
  if (typeof input !== "string") {
    return false;
  }

  if (input.trim() === "") {
    return true;
  }

  return false;
};

console.log(isBlankString(""));
console.log(isBlankString(" "));
console.log(isBlankString("fjfjf"));

//3
let captializeFirst = "abcdef";
captializeFirst =
  captializeFirst.charAt(0).toUpperCase() + captializeFirst.slice(1);
console.log(captializeFirst);

//4
let name = "Ryan Curtis";
let parts = name.split(" ");
let abbr = parts[0] + " " + parts[1].charAt(0) + ".";

console.log(abbr);

//5
let sentence = "I am a long sentence";
let length = 6;
sentence.slice(2);
let newSentence = sentence.slice(0, length);
console.log(newSentence + "...");

//6
const string = "The practitioners grappled on the road side!";
newString = string.slice(18);
console.log(newString);
