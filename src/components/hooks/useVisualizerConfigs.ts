import { bind } from '@react-rxjs/core';
import { useEffect, useMemo } from 'react';
import { IMovement } from "../../interfaces";
import { createObservable, generate } from "../../utils";

export interface IVisualizerState {
  isPlaying: boolean,
  array: number [],
  delayTime: number,
  showNumbers: boolean,
  algorithms: ((array: number []) => IMovement []) [],
  menuIsOpen: boolean
}

const [ visualizerObs, dispatch ] = createObservable<IVisualizerState>({
  isPlaying: false,
  array: generate(10),
  delayTime: 0.1,
  showNumbers: false,
  algorithms: [],
  menuIsOpen: false
})

const [ useVisualizerConfigsHook, useVisualizerConfigsHookObs$ ] = bind(visualizerObs);

export const useVisualizerConfigs = () : [ IVisualizerState, typeof dispatch ]  => {
  const subscription = useMemo(() => useVisualizerConfigsHookObs$.subscribe(), []);
  const state = useVisualizerConfigsHook();

  useEffect(() => {
    return () => {
      subscription.unsubscribe()
    }
  }, [subscription])
  
  return [ state, dispatch ];
};
