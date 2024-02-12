export abstract class BaseNode<T> {
  data: T;
  abstract getData: () => T;
  constructor(data: T){
    this.data = data;
  }
}
