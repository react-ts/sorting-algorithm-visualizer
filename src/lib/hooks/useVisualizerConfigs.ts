import { bind } from '@react-rxjs/core';
import { useEffect, useMemo } from 'react';
import { createObservable } from "../../utils";

export interface IVisualizerState {
  play: boolean,
  array: number [],
  delayTime: number,
  menuIsOpen: boolean,
  activeStep: number
}

const [ visualizerObs, dispatch ] = createObservable<IVisualizerState>({
  play: false,
  array: [],
  delayTime: 0,
  menuIsOpen: false,
  activeStep: 0
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
