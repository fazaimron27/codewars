/**
 * * Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
 *
 * _ For example:
 * _ uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
 * _ uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
 * _ uniqueInOrder([1,2,2,3,3])       == [1,2,3]
 */

//  * Solution 1 (for loop)
// const uniqueInOrder = (iterable) => {
//   const result = [];
//   for (let i = 0; i < iterable.length; i++) {
//     if (iterable[i] !== iterable[i + 1]) {
//       result.push(iterable[i]);
//     }
//   }
//   return result;
// };

//  * Solution 2 (filter)
const uniqueInOrder = (iterable) =>
  [...iterable].filter((element, idx, arr) => element !== arr[idx + 1]);

console.log(uniqueInOrder("AAAABBBCCDAABBB"));
console.log(uniqueInOrder("ABBCcAD"));
console.log(uniqueInOrder([1, 2, 2, 3, 3]));

export default uniqueInOrder;
