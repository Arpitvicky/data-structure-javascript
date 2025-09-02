import { describe, expect, it } from "vitest";
import { hasSumPair, hasSumPairSorted } from "./hasSumPair.ts";
describe("should test if a sorted array has a pair that sums to target if", () => {
  it("has [1, 2, 3, 4, 5] as input array and 7 as target", () => {
    expect(hasSumPair([1, 2, 3, 4, 5], 7)).toEqual(true);
  });

  it("has [1, 2, 3, 4, 5] as input array and 17 as target", () => {
    expect(hasSumPair([1, 2, 3, 4, 5], 17)).toEqual(false);
  });

  it("has [1, 2, 3, 4, 5] as input array and 17 as target", () => {
    expect(hasSumPair([1, 2, 3, 4, 5], 17)).toEqual(false);
  });
  it("has [1, 2, 4, 7, 11] as input array and 9 as target", () => {
    expect(hasSumPair([1, 2, 4, 7, 11], 9)).toEqual(true);
  });

  it("has empty array as input array and anything as target", () => {
    expect(hasSumPair([], 9)).toEqual(null);
  });

  it("has empty array as input array and anything as target", () => {
    expect(hasSumPairSorted([11, 4, 2, 7, 1], 9)).toEqual(true);
  });
});
