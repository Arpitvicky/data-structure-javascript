import { describe, expect, it } from "vitest";
import { maxSumInArray } from "./maxSumInArray.ts";

describe("should return maximum consecutive numbers sum in an array if", () => {
  it("has [1, -2, 1, 3] as input pattern", () => {
    const inputArray = [1, -2, 1, 3];
    expect(maxSumInArray(inputArray)).toEqual({
      maxSum: 4,
      firstIndex: 2,
      lastIndex: 3,
    });
  });

  it("has [12, -40, 20, -11, 30, -31, 1, -10] as input pattern", () => {
    const inputArray = [12, -40, 20, -11, 30, -31, 1, -10];
    expect(maxSumInArray(inputArray)).toEqual({
      maxSum: 39,
      firstIndex: 2,
      lastIndex: 4,
    });
  });

  it("has all negative numbers as input pattern", () => {
    const inputArray = [-2, -1, -3];
    expect(maxSumInArray(inputArray)).toEqual({
      maxSum: -1,
      firstIndex: 1,
      lastIndex: 1,
    });
  });

  it("has empty array as input", () => {
    expect(maxSumInArray([])).toEqual(null);
  });

  it("has undefined as input", () => {
    expect(maxSumInArray(undefined)).toEqual(null);
  });
  it("has single item in an array as input", () => {
    expect(maxSumInArray([4])).toEqual({
      maxSum: 4,
      firstIndex: 0,
      lastIndex: 0,
    });
  });
});
