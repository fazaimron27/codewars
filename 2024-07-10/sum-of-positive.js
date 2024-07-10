/**
 * * Sum of positive
 * _ You get an array of numbers, return the sum of all of the positives ones.
 * _ Example [1,-4,7,12] => 1 + 7 + 12 = 20
 * _ Note: if there is nothing to sum, the sum is default to 0.
 */

const positiveSum = (arr) =>
  arr.reduce((acc, curr) => (curr > 0 ? acc + curr : acc), 0);

export default positiveSum;
