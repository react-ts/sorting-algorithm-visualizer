import { describe, expect, test } from "vitest";
import { shellSort } from "../../../algorithms";
import { IMovement } from "../../../interfaces";

describe("shellSort tests", () => {
  test("should return an array of IMovement", () => {
    const array = [5, 3, 4, 7, 8, 9, 2, 1, 3, 4, 5, 0, 6, 7];
    const mockMovements = [
      { indexA: 7, indexB: 0, swap: true },
      { indexA: 0, indexB: 0, swap: true },
      { indexA: 8, indexB: 1, swap: true },
      { indexA: 9, indexB: 2, swap: true },
      { indexA: 10, indexB: 3, swap: true },
      { indexA: 3, indexB: 3, swap: true },
      { indexA: 11, indexB: 4, swap: true },
      { indexA: 4, indexB: 4, swap: true },
      { indexA: 12, indexB: 5, swap: true },
      { indexA: 5, indexB: 5, swap: true },
      { indexA: 13, indexB: 10, swap: true },
      { indexA: 3, indexB: 3, swap: true },
      { indexA: 4, indexB: 1, swap: true },
      { indexA: 1, indexB: 1, swap: true },
      { indexA: 5, indexB: 5, swap: true },
      { indexA: 6, indexB: 3, swap: true },
      { indexA: 3, indexB: 3, swap: true },
      { indexA: 7, indexB: 6, swap: true },
      { indexA: 8, indexB: 5, swap: true },
      { indexA: 5, indexB: 2, swap: true },
      { indexA: 2, indexB: 2, swap: true },
      { indexA: 9, indexB: 6, swap: true },
      { indexA: 6, indexB: 5, swap: true },
      { indexA: 10, indexB: 10, swap: true },
      { indexA: 11, indexB: 11, swap: true },
      { indexA: 12, indexB: 12, swap: true },
      { indexA: 13, indexB: 10, swap: true },
      { indexA: 1, indexB: 0, swap: true },
      { indexA: 0, indexB: 0, swap: true },
      { indexA: 2, indexB: 2, swap: true },
      { indexA: 3, indexB: 2, swap: true },
      { indexA: 2, indexB: 2, swap: true },
      { indexA: 4, indexB: 3, swap: true },
      { indexA: 5, indexB: 5, swap: true },
      { indexA: 6, indexB: 5, swap: true },
      { indexA: 7, indexB: 7, swap: true },
      { indexA: 8, indexB: 8, swap: true },
      { indexA: 9, indexB: 8, swap: true },
      { indexA: 8, indexB: 7, swap: true },
      { indexA: 10, indexB: 10, swap: true },
      { indexA: 11, indexB: 11, swap: true },
      { indexA: 12, indexB: 12, swap: true },
      { indexA: 13, indexB: 12, swap: true },
      { indexA: 12, indexB: 11, swap: true },
      { indexA: 11, indexB: 10, swap: true }
    ];
    const movements = shellSort(array);
    expect(movements).toBeInstanceOf<IMovement[]>
    expect(movements).toStrictEqual(mockMovements)
  });
});
