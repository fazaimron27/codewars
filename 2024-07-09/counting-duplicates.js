/**
 * * Count the number of Duplicates
 * _ Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
 *
 * _ Examples:
 * _ "abcde" -> 0 # no characters repeats more than once
 * _ "aabbcde" -> 2 # 'a' and 'b'
 * _ "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
 * _ "indivisibility" -> 1 # 'i' occurs six times
 * _ "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
 * _ "aA11" -> 2 # 'a' and '1'
 * _ "ABBA" -> 2 # 'A' and 'B' each occur twice
 */

// * Solution 1
// function duplicateCount(text) {
//   let result = 0,
//     sortingObject = {};
//   text
//     .toLowerCase()
//     .split("")
//     .map((str) => {
//       if (!sortingObject.hasOwnProperty(str)) {
//         sortingObject[str] = 0;
//       } else {
//         if (sortingObject[str] === 0) {
//           result += 1;
//         }
//         sortingObject[str] = sortingObject[str] + 1;
//       }
//     });
//   return result;
// }

// * Solution 2
const duplicateCount = (text) =>
  new Set(
    text
      .toLowerCase()
      .split("")
      .filter((e, i, a) => a.indexOf(e) !== i)
  ).size;

export default duplicateCount;
