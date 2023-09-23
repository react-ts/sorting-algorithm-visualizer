import { describe, expect, test } from "vitest";
import { heapSortDef } from "../../../src/algorithms";
import { IMovement } from "../../../src/interfaces";

describe("heapSort tests", () => {
    test("should sort the array and return an array of IMovement", () => {
        const array = [8, 2, 7, 3, 6, 4, 5, 1, 9];
        const mockMovements = [
            {
                "indexA": 3,
                "indexB": 8,
                "swap": true
            },
            {
                "indexA": 1,
                "indexB": 3,
                "swap": true
            },
            {
                "indexA": 3,
                "indexB": 8,
                "swap": true
            },
            {
                "indexA": 0,
                "indexB": 1,
                "swap": true
            },
            {
                "indexA": 0,
                "indexB": 8,
                "swap": true
            },
            {
                "indexA": 0,
                "indexB": 1,
                "swap": true
            },
            {
                "indexA": 1,
                "indexB": 4,
                "swap": true
            },
            {
                "indexA": 0,
                "indexB": 7,
                "swap": true
            },
            {
                "indexA": 0,
                "indexB": 2,
                "swap": true
            },
            {
                "indexA": 2,
                "indexB": 6,
                "swap": true
            },
            {
                "indexA": 0,
                "indexB": 6,
                "swap": true
            },
            {
                "indexA": 0,
                "indexB": 1,
                "swap": true
            },
            {
                "indexA": 1,
                "indexB": 3,
                "swap": true
            },
            {
                "indexA": 0,
                "indexB": 5,
                "swap": true
            },
            {
                "indexA": 0,
                "indexB": 2,
                "swap": true
            },
            {
                "indexA": 0,
                "indexB": 4,
                "swap": true
            },
            {
                "indexA": 0,
                "indexB": 2,
                "swap": true
            },
            {
                "indexA": 0,
                "indexB": 3,
                "swap": true
            },
            {
                "indexA": 0,
                "indexB": 1,
                "swap": true
            },
            {
                "indexA": 0,
                "indexB": 2,
                "swap": true
            },
            {
                "indexA": 0,
                "indexB": 1,
                "swap": true
            }
        ];

        const movements = heapSortDef.executor(array);
        expect(movements).toBeInstanceOf<IMovement[]>
        expect(movements).toStrictEqual(mockMovements)
        expect(array).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
    });
});


