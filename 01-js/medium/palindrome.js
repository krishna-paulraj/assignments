/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let main_str = str
    .toLowerCase()
    .split("")
    .filter(
      (char) =>
        char !== " " &&
        char !== "?" &&
        char !== "," &&
        char !== "!" &&
        char !== "."
    )
    .join("");

  let str_copy = main_str
    .toLowerCase()
    .split("")
    .filter(
      (char) =>
        char !== " " &&
        char !== "?" &&
        char !== "," &&
        char !== "!" &&
        char !== "."
    )
    .reverse()
    .join("");
  console.log(main_str, str_copy);
  return main_str === str_copy ? true : false;
}

console.log(isPalindrome("racecar!"));

module.exports = isPalindrome;
