import { BaseNode } from "../base/BaseNode";

export class GraphNode<T> extends BaseNode<T>{
  adjacent: GraphNode<T>[];
  comparator: (a: T, b: T) => number;
  getData: () => T;

  constructor(data: T, comparator: (a: T, b: T) => number){
    super(data);
    this.adjacent = [];
    this.comparator = comparator;
    this.getData = () => data;
  };

  addAdjacent(node: GraphNode<T>): void {
    this.adjacent.push(node);
  }

  removeAdjacent(data: T): GraphNode<T> | null {
    const index = this.adjacent.findIndex((node) => this.comparator(node.data, data) === 0)
    if (index > -1){
      return this.adjacent.splice(index, 1)[0]
    }
    return null;
  }
};
