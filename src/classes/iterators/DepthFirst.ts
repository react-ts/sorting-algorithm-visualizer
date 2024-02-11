import { Iterator } from "../../interfaces/Iterator";
import { Graph } from "../graph/Graph";
import { GraphNode } from '../graph/GraphNode';

export class DepthFirst<T> implements Iterator<T>{
  private graph: Graph<T>;
  private visited: Map<T, boolean> = new Map();

  constructor(graph: Graph<T>){
    this.graph = graph;
  }

  private *dfs(node: GraphNode<T>): IterableIterator<GraphNode<T> | null> {
    if(!node) 
      return null;

    this.visited.set(node.data, true);
    
    yield node;   

    for(const adjNode of node.adjacent){
      if(!this.visited.get(adjNode.data)){
        yield* this.dfs(adjNode);
      }
    }
  }; 

  *getIterator(): IterableIterator<GraphNode<T> | null>{
    const { nodes } = this.graph;  
    for(const [key, node] of nodes){
      if(!this.visited.has(key))
        yield* this.dfs(node);
    }
  };

  hasMore(){
    return true;
  }
}
