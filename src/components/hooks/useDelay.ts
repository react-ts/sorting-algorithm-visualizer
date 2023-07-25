import { useCallback } from "react";

export const useDelay = (seconds: number) => 
  useCallback((async () => {
    await new Promise(resolve => (
      setTimeout(resolve, seconds * 1000)
    ));
}), []);
