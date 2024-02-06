import { describe, expect, test } from "vitest";
import { bubbleSortDef } from "../../../src/algorithms";
import { IMovement } from "../../../src/interfaces";

describe("bubbleSort tests", () => {
  test("should return an array of IMovement", () => {
    expect(bubbleSortDef.executor([4, 3, 2, 1])).toBeInstanceOf<IMovement[]>
  });
});
