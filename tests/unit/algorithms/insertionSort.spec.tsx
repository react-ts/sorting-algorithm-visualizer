import { describe, expect, test } from "vitest";
import { insertionSortDef } from "../../../src/algorithms";
import { IMovement } from "../../../src/interfaces";

describe("insertionSort tests", () => {
  test("should return an array of IMovement", () => {
    expect(insertionSortDef.executor([9, 5, 1, 4, 4, 5, 5, 3, 15])).toBeInstanceOf<IMovement[]>
  });
});
