import { describe, expect, test } from "vitest";
import { generate } from "../../../src/utils";

describe("generate tests", () => {
  test("should have length of 10", () => {
    expect(generate(10).length).toBe(10)
  });
});
