import { describe, expect, test } from "vitest";
import { quickSort } from "../../../algorithms";
import { IMovement } from "../../../interfaces";

describe("quickSort tests", () => {
  test("should sort the array and return an array of IMovement", () => {
    const array = [9, 1, 4, 4, 5, 5, 3, 15, 6];
    const mockMovements = [
      { indexA: 0, indexB: 0, swap: false },
      { indexA: 0, indexB: 1, swap: true },
      { indexA: 1, indexB: 2, swap: true },
      { indexA: 2, indexB: 3, swap: true },
      { indexA: 3, indexB: 4, swap: true },
      { indexA: 4, indexB: 5, swap: true },
      { indexA: 5, indexB: 6, swap: true },
      { indexA: 6, indexB: 7, swap: false },
      { indexA: 6, indexB: 8, swap: true },
      { indexA: 0, indexB: 0, swap: true },
      { indexA: 1, indexB: 1, swap: false },
      { indexA: 1, indexB: 2, swap: false },
      { indexA: 1, indexB: 3, swap: false },
      { indexA: 1, indexB: 4, swap: false },
      { indexA: 1, indexB: 5, swap: true },
      { indexA: 2, indexB: 2, swap: false },
      { indexA: 2, indexB: 3, swap: false },
      { indexA: 2, indexB: 4, swap: false },
      { indexA: 2, indexB: 5, swap: true },
      { indexA: 3, indexB: 3, swap: false },
      { indexA: 3, indexB: 4, swap: false },
      { indexA: 3, indexB: 5, swap: true },
      { indexA: 4, indexB: 4, swap: false },
      { indexA: 4, indexB: 5, swap: true },
      { indexA: 7, indexB: 7, swap: false },
      { indexA: 7, indexB: 8, swap: true }
    ];

    const movements = quickSort({ array });
    expect(movements).toBeInstanceOf<IMovement[]>
    expect(movements).toStrictEqual(mockMovements)
    expect(array).toStrictEqual([1, 3, 4, 4, 5, 5, 6, 9, 15])
  });
});
