import dirReduc from "./directions-reduction.js";

import { config, assert } from "chai";
config.truncateThreshold = 0;
const deeepEqual = assert.deepEqual;

function doTest(input, expected) {
  const log = `for ${JSON.stringify(input)}\n`;
  const actual = dirReduc(input);
  deeepEqual(actual, expected, log);
}

describe("Tests", () => {
  it("test", () => {
    doTest(
      ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"],
      ["WEST"]
    );
    doTest(
      ["NORTH", "WEST", "SOUTH", "EAST"],
      ["NORTH", "WEST", "SOUTH", "EAST"]
    );
    doTest(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"], []);
  });
});
