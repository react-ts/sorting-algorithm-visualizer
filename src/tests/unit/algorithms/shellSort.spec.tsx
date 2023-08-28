import { describe, expect, test } from "vitest";
import { shellSort } from "../../../algorithms";
import { IMovement } from "../../../interfaces";

describe("insertionSort tests", () => {
  test("should return an array of IMovement", () => {
    expect(shellSort([9, 5, 1, 4, 4, 5, 5, 3, 15])).toBeInstanceOf<IMovement[]>
  });
});
