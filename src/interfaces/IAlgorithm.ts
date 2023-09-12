import { IMovement } from "./IMovement";

export interface IAlgorithm {
  name: string,
  description?: string,
  complexity: string,
  executor: (array: number []) => IMovement []
}
