import { BaseGraphStructure } from "../base/BaseGraphStructure";
import { BreadthFirst } from "../iterators/BreadthFirst";
import { DepthFirst } from "../iterators/DepthFirst";
import { GraphNode } from './GraphNode';

export class Graph<T> extends BaseGraphStructure<GraphNode<T>> {
  nodes: Map<T, GraphNode<T>> = new Map();
  comparator: (a: T, b: T) => number;

  constructor(comparator: (a: T, b: T) => number){
    super();
    this.comparator = comparator;
  };

  addNode(data: T): GraphNode<T> {
    let node = this.nodes.get(data);
    if(node)
      return node;

    node = new GraphNode<T>(data, this.comparator);
    this.nodes.set(data, node);
    return node;
  };

  removeNode(data: T): GraphNode<T> | null {
    const nodeToRemove = this.nodes.get(data);
    if(!nodeToRemove)
      return null

    this.nodes.forEach((node) => {
      node.removeAdjacent(data);
    })

    return nodeToRemove;
  }

  addEdge(source: T, destiny: T): void {
    const sourceNode = this.addNode(source);
    const destinationNode = this.addNode(destiny);
    sourceNode.addAdjacent(destinationNode);
  }

  removeEdge(source: T, destiny: T): void {
    const sourceNode = this.nodes.get(source);
    const destinationNode = this.nodes.get(destiny);
    if(sourceNode && destinationNode)
      sourceNode.removeAdjacent(destiny);
  }

  dfs(): IterableIterator<GraphNode<T> | null> {
    return new DepthFirst<T>(this).getIterator();
  }
  
  bfs(): IterableIterator<GraphNode<T> | null> {
    return new BreadthFirst<T>(this).getIterator();
  }
  
  djikstra(): IterableIterator<GraphNode<T> | null> {
    throw new Error("Method not implemented.");
  }
};
