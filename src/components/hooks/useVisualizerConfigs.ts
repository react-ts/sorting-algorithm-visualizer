import { bind } from '@react-rxjs/core';
import { useEffect, useMemo } from 'react';
import { IMovement } from "../../interfaces";
import { createObservable, generate } from "../../utils";

export interface IVisualizerState {
  isPlaying: boolean,
  array: number [],
  algorithms: ((array: number []) => IMovement []) [],
}

const [ visualizerObs, dispatch ] = createObservable<IVisualizerState>({
  isPlaying: false,
  array: generate(15),
  algorithms: []
})

const [ useVisualizerConfigsHook, useVisualizerConfigsHookObs$ ] = bind(visualizerObs);

export const useVisualizerConfigs = () : [ IVisualizerState, typeof dispatch ]  => {
  const suscription = useMemo(() => useVisualizerConfigsHookObs$.subscribe(), [useVisualizerConfigsHookObs$]);
  const state = useVisualizerConfigsHook();

  useEffect(() => {
    return () => {
      suscription.unsubscribe()
    }
  }, [useVisualizerConfigsHookObs$])
  
  return [ state, dispatch ];
};
