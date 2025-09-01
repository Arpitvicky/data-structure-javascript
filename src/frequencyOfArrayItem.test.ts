import { describe, expect, it } from "vitest";
import { frequencyOfArrayItem } from "./frequencyOfArrayItem.ts";

describe("should test frequency of each item in an array if", () => {
  it("has valid number inputs", () => {
    const array = [2, 2, 3, 4, 5, 5, 6, 7, 8, 8];
    expect(frequencyOfArrayItem(array)).toEqual({
      2: 2,
      3: 1,
      4: 1,
      5: 2,
      6: 1,
      7: 1,
      8: 2,
    });
  });
  it("has empty array", () => {
    expect(frequencyOfArrayItem([])).toEqual(null);
  });
  it("has undefined array", () => {
    expect(frequencyOfArrayItem(undefined)).toEqual(null);
  });
});

describe("should test frequency of each item in an array with high order function if", () => {
  it("has valid number inputs", () => {
    const array = [2, 2, 3, 4, 5, 5, 6, 7, 8, 8];
    expect(frequencyOfArrayItem(array)).toEqual({
      2: 2,
      3: 1,
      4: 1,
      5: 2,
      6: 1,
      7: 1,
      8: 2,
    });
  });
  it("has empty array", () => {
    expect(frequencyOfArrayItem([])).toEqual(null);
  });
  it("has undefined", () => {
    expect(frequencyOfArrayItem(undefined)).toEqual(null);
  });
});
