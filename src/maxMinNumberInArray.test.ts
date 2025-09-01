import { describe, expect, it } from "vitest";
import { maxMinNumberInArray } from "./maxMinNumberInArray.ts";

describe("should return max and min number in array if", () => {
  it("has [1, 22, 8, 3] as input pattern", () => {
    expect(maxMinNumberInArray([1, 22, 8, 3])).toEqual({ max: 22, min: 1 });
  });
  it("has [-1, -22, -8, -3] as input pattern", () => {
    expect(maxMinNumberInArray([-1, -22, -8, -3])).toEqual({
      max: -1,
      min: -22,
    });
  });

  it("has [] as input pattern", () => {
    expect(maxMinNumberInArray([])).toEqual(null);
  });

  it("has undefined as input pattern", () => {
    expect(maxMinNumberInArray(undefined)).toEqual(null);
  });
});
