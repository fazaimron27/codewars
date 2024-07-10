/**
 * * Reversed Strings
 *
 * _ Complete the solution so that it reverses the string passed into it.
 * _ 'world'  =>  'dlrow'
 * _ 'word'   =>  'drow'
 */

// ? First solution (for loop)
// const solution = (str) => {
//   let reversedWord = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversedWord += str[i];
//   }
//   return reversedWord;
// };

// ? Second solution (split, reverse, join)
const solution = (str) => str.split("").reverse().join("");

export default solution;
