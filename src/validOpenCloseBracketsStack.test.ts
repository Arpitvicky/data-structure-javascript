import { describe, expect, it } from "vitest";
import { validOpenCloseBracketsStack } from "./validOpenCloseBracketsStack.ts";

describe("should check string for valid open close pair brackets nesting if", () => {
  it("has '[]' as input pattern", () => {
    expect(validOpenCloseBracketsStack("[]")).toEqual(true);
  });
  it("has '{[]}' as input pattern", () => {
    expect(validOpenCloseBracketsStack("{[]}")).toEqual(true);
  });

  it("has '{[}]' as input pattern", () => {
    expect(validOpenCloseBracketsStack("{[}]")).toEqual(false);
  });

  it("has '{{[[(())]]}}' as input pattern", () => {
    expect(validOpenCloseBracketsStack("{{[[(())]]}}")).toEqual(true);
  });
  it("has '' as input pattern", () => {
    expect(validOpenCloseBracketsStack("")).toEqual(false);
  });
});
