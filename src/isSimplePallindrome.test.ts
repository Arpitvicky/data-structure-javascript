import { describe, expect, it } from "vitest";
import {
  isPallindrome2Pointer,
  isPallindrome2PointerNonAlphanumeric,
  isSimplePallindrome,
  isSimplePallindromeNonAlphaNumeric,
} from "./isSimplePallindrome.ts";

describe("should check pallindrome if", () => {
  it("has 'madam' as input string", () => {
    expect(isSimplePallindrome("madam")).toEqual(true);
  });

  it("has 'madam' as input string", () => {
    expect(isSimplePallindrome("madame")).toEqual(false);
  });
  it("has 'A man, a plan, a canal: Panama' as input string", () => {
    expect(
      isSimplePallindromeNonAlphaNumeric("A man, a plan, a canal: Panama")
    ).toEqual(true);
  });
  it("has 'madam' as input string in 2 pointer way check", () => {
    expect(isPallindrome2Pointer("madam")).toEqual(true);
  });

  it("has 'madam' as input string in 2 pointer way check", () => {
    expect(isPallindrome2Pointer("madamw")).toEqual(false);
  });
  it("has 'm' as input string in 2 pointer way check", () => {
    expect(isPallindrome2Pointer("m")).toEqual(true);
  });

  it("has 'A man, a plan, a canal: Panama' as input string in 2 pointer way check", () => {
    expect(
      isPallindrome2PointerNonAlphanumeric("A man, a plan, a canal: Panama")
    ).toEqual(true);
  });
});
