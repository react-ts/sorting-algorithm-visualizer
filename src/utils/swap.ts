declare global {
  interface Array<T> {
    swap(i: number, j: number): Array<T>;
    voidSwap(i: number, j: number): void;
    partialSwap(i:number,j: number): Array<T>;
  }
}

Array.prototype.swap = function (indexA: number, indexB: number): number[] {
  const stored = this[indexA];
  this[indexA] = this[indexB];
  this[indexB] = stored
  return [...this];
}

Array.prototype.voidSwap = function (indexA: number, indexB: number): void {
  const stored = this[indexA];
  this[indexA] = this[indexB];
  this[indexB] = stored
}

export { };
