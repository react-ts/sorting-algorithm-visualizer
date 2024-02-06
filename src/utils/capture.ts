import { IMovement } from "../interfaces"

export const capture = (movements: IMovement []) => (indexA: number, indexB: number, swap: boolean = false) => {
  movements.push({
    indexA,
    indexB,
    swap
  });
}
