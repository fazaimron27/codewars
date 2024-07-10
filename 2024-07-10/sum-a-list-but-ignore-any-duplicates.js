/**
 * * Please write a function that sums a list, but ignores any duplicated items in the list.
 *
 * _ For instance, for the list [3, 4, 3, 6] the function should return 10,
 * _ and for the list [1, 10, 3, 10, 10] the function should return 4.
 */

const sumNoDuplicates = (numList) =>
  numList
    .filter((num, _, arr) => arr.indexOf(num) === arr.lastIndexOf(num))
    .reduce((acc, curr) => acc + curr, 0);

export default sumNoDuplicates;
