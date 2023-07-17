import { describe, expect, test } from "vitest";
import { IMovement } from "../../../interfaces";
import { capture } from "../../../utils";

describe("capture tests", () => {
  test("should save all movements in the array", () => {
    const movements: IMovement [] = [];
    const captureCurried = capture(movements)
    const result = [
      {indexA: 0, indexB: 1, swap: false },
      {indexA: 1, indexB: 2, swap: false },
      {indexA: 2, indexB: 3, swap: false },
      {indexA: 3, indexB: 4, swap: false },
      {indexA: 4, indexB: 5, swap: false },
      {indexA: 5, indexB: 6, swap: false },
      {indexA: 6, indexB: 7, swap: false },
      {indexA: 7, indexB: 8, swap: false },
      {indexA: 8, indexB: 9, swap: false },
      {indexA: 9, indexB: 10, swap: false }
    ];

    for (let i = 0; i < 10; i++){
      captureCurried(i, i+1);
    }

    expect(movements).toHaveLength(10)
    expect(movements).toStrictEqual(result)
  });
});
