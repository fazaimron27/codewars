/**
 * * Once upon a time, on a way through the old wild mountainous west,…
 * _ … a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too.
 * _ Going to one direction and coming back the opposite direction right away is a needless effort. Since this is the wild west, with dreadful weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!
 *
 * * How I crossed a mountainous desert the smart way.
 * _ The directions given to the man are, for example, the following (depending on the language):
 * _ ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
 * _ or
 * _ { "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" };
 * _ or
 * _ [North, South, South, East, West, North, West]
 *
 * _ You can immediately see that going "NORTH" and immediately "SOUTH" is not reasonable, better stay to the same place! So the task is to give to the man a simplified version of the plan. A better plan in this case is simply:
 * _ ["WEST"]
 * _ or
 * _ { "WEST" }
 * _ or
 * _ [West]
 *
 * * Other examples:
 * _ In ["NORTH", "SOUTH", "EAST", "WEST"], the direction "NORTH" + "SOUTH" is going north and coming back right away.
 * _ The path becomes ["EAST", "WEST"], now "EAST" and "WEST" annihilate each other, therefore, the final result is [] (nil in Clojure).
 * _ In ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], "NORTH" and "SOUTH" are not directly opposite but they become directly opposite after the reduction of "EAST" and "WEST" so the whole path is reducible to ["WEST", "WEST"].
 *
 * * Task
 * _ Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).
 * _     - The Haskell version takes a list of directions with data Direction = North | East | West | South.
 * _     - The Clojure version returns nil when the path is reduced to nothing.
 * _     - The Rust version takes a slice of enum Direction {North, East, West, South}.
 *
 * * See more examples in "Sample Tests:"
 * * Notes
 * _     - Not all paths can be made simpler. The path ["NORTH", "WEST", "SOUTH", "EAST"] is not reducible. "NORTH" and "WEST", "WEST" and "SOUTH", "SOUTH" and "EAST" are not directly opposite of each other and can't become such. Hence the result path is itself : ["NORTH", "WEST", "SOUTH", "EAST"].
 * _     - if you want to translate, please ask before translating.
 */

function dirReduc(arr) {
  const opposites = {
    NORTH: "SOUTH",
    SOUTH: "NORTH",
    EAST: "WEST",
    WEST: "EAST",
  };

  // * Solution 1 (if statement)
  // return arr.reduce((acc, dir) => {
  //   if (acc[acc.length - 1] === opposites[dir]) {
  //     console.log[acc.length - 1];
  //     acc.pop();
  //   } else {
  //     acc.push(dir);
  //   }
  //   return acc;
  // }, []);

  // * Solution 2 (ternary operator)
  return arr.reduce((acc, dir) => {
    acc[acc.length - 1] === opposites[dir] ? acc.pop() : acc.push(dir);
    return acc;
  }, []);
}

console.log(
  dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])
);

export default dirReduc;
