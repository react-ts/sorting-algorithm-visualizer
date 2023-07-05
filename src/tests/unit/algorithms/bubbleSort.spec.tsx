import { describe, expect, test } from "vitest";
import { bubbleSort } from "../../../algorithms";
import { IMovement } from "../../../interfaces";

describe("bubbleSort tests", () => {
  test("should return an array of IMovement", () => {
    expect(bubbleSort([4, 3, 2, 1])).toBeInstanceOf<IMovement[]>
  });
});
