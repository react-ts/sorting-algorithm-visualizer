import { describe, expect, test } from "vitest";
import { mergeSortDef } from "../../../src/algorithms";
import { IMovement } from "../../../src/interfaces";

describe("mergeSort tests", () => {
  test("should sort the array and return an array of IMovement", () => {
    const array = [5,22, 12, 4, 6, 10, 16, 3, 2, 1, 9, 11];
    const mockMovements = [
      { indexA: 0, indexB: 0, swap: false },
      { indexA: 1, indexB: 1, swap: false },
      { indexA: 0, indexB: 0, swap: false },
      { indexA: 2, indexB: 1, swap: true },
      { indexA: 2, indexB: 2, swap: false },
      { indexA: 3, indexB: 3, swap: false },
      { indexA: 4, indexB: 4, swap: false },
      { indexA: 3, indexB: 3, swap: false },
      { indexA: 4, indexB: 4, swap: false },
      { indexA: 5, indexB: 5, swap: false },
      { indexA: 3, indexB: 0, swap: true },
      { indexA: 3, indexB: 1, swap: true },
      { indexA: 4, indexB: 2, swap: true },
      { indexA: 5, indexB: 3, swap: true },
      { indexA: 5, indexB: 4, swap: true },
      { indexA: 5, indexB: 5, swap: false },
      { indexA: 7, indexB: 6, swap: true },
      { indexA: 7, indexB: 7, swap: false },
      { indexA: 8, indexB: 6, swap: true },
      { indexA: 8, indexB: 7, swap: true },
      { indexA: 8, indexB: 8, swap: false },
      { indexA: 9, indexB: 9, swap: false },
      { indexA: 10, indexB: 10, swap: false },
      { indexA: 9, indexB: 9, swap: false },
      { indexA: 10, indexB: 10, swap: false },
      { indexA: 11, indexB: 11, swap: false },
      { indexA: 9, indexB: 6, swap: true },
      { indexA: 9, indexB: 7, swap: true },
      { indexA: 9, indexB: 8, swap: true },
      { indexA: 10, indexB: 9, swap: true },
      { indexA: 11, indexB: 10, swap: true },
      { indexA: 11, indexB: 11, swap: false },
      { indexA: 6, indexB: 0, swap: true },
      { indexA: 7, indexB: 1, swap: true },
      { indexA: 8, indexB: 2, swap: true },
      { indexA: 6, indexB: 3, swap: true },
      { indexA: 7, indexB: 4, swap: true },
      { indexA: 8, indexB: 5, swap: true },
      { indexA: 9, indexB: 6, swap: true },
      { indexA: 9, indexB: 7, swap: true },
      { indexA: 10, indexB: 8, swap: true },
      { indexA: 9, indexB: 9, swap: false },
      { indexA: 11, indexB: 10, swap: true },
      { indexA: 11, indexB: 11, swap: false }
    ];

    const movements = mergeSortDef.executor(array );
    expect(movements).toBeInstanceOf<IMovement[]>
    expect(movements).toStrictEqual(mockMovements)
    expect(array).toStrictEqual([1, 2, 3, 4, 5, 6, 9, 10, 11, 12, 16, 22])
  });
});
