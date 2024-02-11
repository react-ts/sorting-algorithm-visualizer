import { Queue } from "queue-typescript";
import { Iterator } from "../../interfaces/Iterator";
import { Graph } from "../graph/Graph";
import { GraphNode } from '../graph/GraphNode';

export class BreadthFirst<T> implements Iterator<T>{
  graph: Graph<T>;
  visited: Map<T, boolean> = new Map();

  constructor(graph: Graph<T>){
    this.graph = graph;
  }

  private *bfs(node: GraphNode<T>): IterableIterator<GraphNode<T> | null> {
    const queue: Queue<GraphNode<T>> = new Queue();
    if(!node)
      return null;

    queue.enqueue(node);
    this.visited.set(node.data, true);

    while(queue.length > 0){
      node = queue.dequeue();
      if(!node) 
        continue;

      yield node;

      node.adjacent.forEach(node => {
        if(!this.visited.has(node.data)){
          this.visited.set(node.data, true)
          queue.enqueue(node)
        }
      })
    }
  }; 

  *getIterator(): IterableIterator<GraphNode<T> | null> {
    const { nodes } = this.graph;
    for(const [key, node] of nodes){
      if(!this.visited.has(key)){
        yield* this.bfs(node);
      }
    }
  };

  hasMore(){
    return true;
  }
}
