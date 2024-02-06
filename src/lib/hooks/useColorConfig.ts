import { bind } from '@react-rxjs/core';
import { useEffect, useMemo } from "react";
import { createObservable } from "../../utils";

interface IColorState {
  mode: 'dark' | 'light'
}

const [ visualizerObs, dispatch ] = createObservable<IColorState>({
  mode: 'dark'
})

const [ useColorConfigHook, useColorConfigHookObs$ ] = bind(visualizerObs);

export const useColorConfig = () : [ IColorState, typeof dispatch ]  => {
  const subscription = useMemo(() => useColorConfigHookObs$.subscribe(), []);
  const state = useColorConfigHook();

  useEffect(() => {
    return () => {
      subscription.unsubscribe()
    }
  }, [subscription])
  
  return [ state, dispatch ];
}
