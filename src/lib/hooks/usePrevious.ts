import { useEffect, useRef } from "react";

export const usePrevious = (value: any, deps: React.DependencyList) => {
  const prevRef = useRef<any>();

  useEffect(() => {
    prevRef.current = value;
  }, deps);

  return prevRef.current;
};
