/**
 * * Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
 * _ moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
 */

// * Solution 1 (forEach)
// function moveZeros(arr) {
//   const result = [];
//   arr.forEach((element) => {
//     if (element !== 0) {
//       result.push(element);
//     }
//   });

//   const zeroCount = arr.length - result.length;
//   for (let i = 0; i < zeroCount; i++) {
//     result.push(0);
//   }

//   return result;
// }

// * Solution 2 (filter)
function moveZeros(arr) {
  return arr.filter((x) => x !== 0).concat(arr.filter((x) => x === 0));
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));

export default moveZeros;
