import { BaseNode } from "../classes/base/BaseNode"

export interface Iterator<T> {
  getIterator: () => IterableIterator<BaseNode<T> | null>
  hasMore: () => boolean
}
