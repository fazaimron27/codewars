/**
 * * Is it a palindrome?
 *  * Write a function that checks if a given string (case insensitive) is a palindrome.
 * _ A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.
 */

const isPalindrome = (x) =>
  x.toLowerCase().split("").reverse().join("") === x.toLowerCase();

console.log(isPalindrome("Madam"));

export default isPalindrome;
