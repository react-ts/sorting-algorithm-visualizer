import { bind } from '@react-rxjs/core';
import { useEffect, useMemo } from 'react';
import { IAlgorithm } from "../../interfaces";
import { createObservable } from "../../utils";

export interface IVisualizerState {
  isPlaying: boolean,
  array: number [],
  delayTime: number,
  showNumbers: boolean,
  selectedAlgorithms: IAlgorithm [],
  menuIsOpen: boolean,
}

const [ visualizerObs, dispatch ] = createObservable<IVisualizerState>({
  isPlaying: false,
  array: [],
  delayTime: 0.19,
  showNumbers: false,
  selectedAlgorithms: [],
  menuIsOpen: false,
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
