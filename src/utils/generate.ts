export function randomIntegerArrayGenerator(arrayLenght: number): number[] {
    return Array(arrayLenght).fill(0).map(() => Math.floor(100 * Math.random()));
}