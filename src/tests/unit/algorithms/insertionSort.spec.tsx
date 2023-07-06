import { describe, expect, test } from "vitest";
import { insertionSort } from "../../../algorithms";
import { IMovement } from "../../../interfaces";

describe("insertionSort tests", () => {
  test("should return an array of IMovement", () => {
    expect(insertionSort([9, 5, 1, 4, 4, 5, 5, 3, 15])).toBeInstanceOf<IMovement[]>
  });
});
