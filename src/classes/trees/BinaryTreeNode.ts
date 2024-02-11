import { BaseNode } from "../base/BaseNode";

export class BinaryTreeNode<T> extends BaseNode<T>{
  getData: () => T;
  comparator: (a: T, b: T) => number;
  left: BinaryTreeNode<T> | null; 
  right: BinaryTreeNode<T> | null;

  constructor(data: T, left: BinaryTreeNode<T> | null, right: BinaryTreeNode<T> | null, comparator: (a: T, b: T) => number){
    super(data);
    this.left = left;
    this.right = right;
    this.getData = () => this.data;
    this.comparator = comparator;
  }
}
