export abstract class BaseGraphStructure<T> {
  abstract dfs (): IterableIterator<T | null>
  abstract bfs(): IterableIterator<T | null>
  abstract djikstra(): IterableIterator<T | null>
}
