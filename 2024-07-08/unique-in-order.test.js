import uniqueInOrder from "./unique-in-order.js";

import { config, assert } from "chai";
config.truncateThreshold = 0;

describe("Tests", () => {
  it("test", () => {
    assert.deepEqual(uniqueInOrder("AAAABBBCCDAABBB"), [
      "A",
      "B",
      "C",
      "D",
      "A",
      "B",
    ]);
  });
});
