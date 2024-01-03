import { describe, expect, test } from "vitest";
import { countingSortDef } from "../../../src/algorithms";
import { IMovement } from "../../../src/interfaces";

describe("countingSort tests", () => {
  test("should sort the array and return an array of IMovement", () => {
    const array = [5, 22, 12, 4, 6, 10, 16, 3, 2, 1, 9, 11];
    const mockMovements = [
      { indexA: 8, indexB: 11, swap: true },
      { indexA: 6, indexB: 10, swap: true },
      { indexA: 0, indexB: 9, swap: true },
      { indexA: 1, indexB: 11, swap: true },
      { indexA: 2, indexB: 7, swap: true },
      { indexA: 10, indexB: 10, swap: false },
      { indexA: 7, indexB: 5, swap: true },
      { indexA: 5, indexB: 4, swap: true },
      { indexA: 3, indexB: 3, swap: false },
      { indexA: 9, indexB: 4, swap: true },
      { indexA: 11, indexB: 11, swap: false },
      { indexA: 4, indexB: 4, swap: false }
    ];

    const movements = countingSortDef.executor(array);
    expect(movements).toBeInstanceOf<IMovement[]>
    expect(movements).toStrictEqual(mockMovements)
  });
});
