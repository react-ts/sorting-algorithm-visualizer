import { BehaviorSubject } from "rxjs";

export const createObservable = <State extends {}> (initialState: State): [BehaviorSubject<State>, (newState: Partial<State>) => void] => {
  const obs = new BehaviorSubject<State>(initialState)
  const setNewState = (newState: Partial<State>) => {
    const previousState = obs.getValue();
    obs.next({
      ...previousState,
      ...newState
    });
  }

  return [ obs, setNewState ];
} 
