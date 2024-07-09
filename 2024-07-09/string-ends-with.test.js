import solution from "./string-ends-with.js";

import { config, assert } from "chai";
config.truncateThreshold = 0;

describe("Tests", () => {
  it("test", () => {
    assert.deepEqual(solution("abcde", "cde"), true);
    assert.deepEqual(solution("abcde", "abc"), false);
  });
});
