import { describe, expect, test } from "vitest";
import { selectionSortDef } from "../../../src/algorithms";
import { IMovement } from "../../../src/interfaces";

describe("selectionSort tests", () => {
  test("should return an array of IMovement", () => {
    const array = [5, 3, 4, 2, 1, 0, 7];
    const mockMovements = [
      { indexA: 1, indexB: 1, swap: false },
      { indexA: 1, indexB: 0, swap: true },
      { indexA: 2, indexB: 2, swap: false },
      { indexA: 2, indexB: 0, swap: true },
      { indexA: 3, indexB: 3, swap: false },
      { indexA: 3, indexB: 0, swap: true },
      { indexA: 4, indexB: 4, swap: false },
      { indexA: 4, indexB: 0, swap: true },
      { indexA: 5, indexB: 5, swap: false },
      { indexA: 5, indexB: 0, swap: true },
      { indexA: 5, indexB: 0, swap: true },
      { indexA: 2, indexB: 2, swap: false },
      { indexA: 2, indexB: 1, swap: true },
      { indexA: 3, indexB: 3, swap: false },
      { indexA: 3, indexB: 1, swap: true },
      { indexA: 4, indexB: 4, swap: false },
      { indexA: 4, indexB: 1, swap: true },
      { indexA: 5, indexB: 5, swap: false },
      { indexA: 5, indexB: 1, swap: true },
      { indexA: 5, indexB: 1, swap: true },
      { indexA: 3, indexB: 3, swap: false },
      { indexA: 3, indexB: 2, swap: true },
      { indexA: 4, indexB: 4, swap: false },
      { indexA: 4, indexB: 2, swap: true },
      { indexA: 5, indexB: 5, swap: false },
      { indexA: 5, indexB: 2, swap: true },
      { indexA: 5, indexB: 2, swap: true },
      { indexA: 4, indexB: 4, swap: false },
      { indexA: 4, indexB: 3, swap: true },
      { indexA: 5, indexB: 5, swap: false },
      { indexA: 5, indexB: 3, swap: true },
      { indexA: 5, indexB: 3, swap: true },
      { indexA: 5, indexB: 5, swap: false },
      { indexA: 5, indexB: 4, swap: true },
      { indexA: 5, indexB: 4, swap: true },
      { indexA: 5, indexB: 5, swap: true }
    ];
    const movements = selectionSortDef.executor(array);
    expect(movements).toBeInstanceOf<IMovement[]>
    expect(movements).toStrictEqual(mockMovements)
  });
});
