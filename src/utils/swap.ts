declare global{
  interface Array<T> {
    swap(i: number, j: number): Array<T>;
  }
}

Array.prototype.swap = function(indexA: number, indexB: number): number []{
  const stored = this[indexA];
  this[indexA] = this[indexB];
  this[indexB] = stored
  return [ ...this ];
}

export {};
