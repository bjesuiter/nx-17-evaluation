import { sum, sum2 } from "./sum";
import { describe, expect, it } from "vitest";

describe("sum", () => {
  it("should return the sum of two numbers", () => {
    const result = sum(2, 3);
    expect(result).toEqual(5);
  });

  it("should return 0 when both numbers are 0", () => {
    const result = sum(0, 0);
    expect(result).toEqual(0);
  });

  it("should return the same number when one of the numbers is 0", () => {
    const result1 = sum(5, 0);
    const result2 = sum(0, 5);
    expect(result1).toEqual(5);
    expect(result2).toEqual(5);
  });
});

describe("sum2", () => {
  it("should return the sum of two numbers", () => {
    const result = sum2(2, 3);
    expect(result).toEqual(5);
  });

  it("should return 0 when both numbers are 0", () => {
    const result = sum2(0, 0);
    expect(result).toEqual(0);
  });

  it("should return the same number when one of the numbers is 0", () => {
    const result1 = sum2(5, 0);
    const result2 = sum2(0, 5);
    expect(result1).toEqual(5);
    expect(result2).toEqual(5);
  });
});
