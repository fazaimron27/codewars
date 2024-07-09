/**
 * * You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.
 * _ As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.
 *
 * _ For example(Input --> Output):
 * _ 10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 * _  1 --> [1]
 */

// * Solution 1 (for loop)
// const monkeyCount = (n) => {
//   let arr = [];
//   for (let i = 1; i <= n; i++) {
//     arr.push(i);
//   }
//   return arr;
// };

// * Solution 2 (Array.from)
const monkeyCount = (n) => Array.from({ length: n }, (_, i) => i + 1);

export default monkeyCount;
