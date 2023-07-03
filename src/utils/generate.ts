export const generate = (arrayLenght: number): number[] =>
  Array(arrayLenght)
    .fill(0)
    .map(() => Math.floor(100 * Math.random()));
