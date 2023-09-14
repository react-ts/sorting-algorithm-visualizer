import { RefCallback, useCallback, useEffect, useRef, useState } from "react";
import { usePrevious } from ".";
import { getListItemsBoundings } from "../../utils";

const createObserver = (callback: MutationCallback) => new MutationObserver(callback);
const cleanObserver = (observer: MutationObserver) => observer.disconnect();

export const useAnimation = <T extends HTMLElement> (seconds: number): { ref: RefCallback<T> } => {
  const [ element, setElement ] = useState<T>();
  const [ currentBounds, setCurrentBounds ] = useState<any>({});
  const previousBounds = usePrevious(currentBounds, [currentBounds])
  const observer = useRef<MutationObserver>();

  const ref = useCallback((node: T) => {
    setElement(node);
    setCurrentBounds(getListItemsBoundings(node));
  }, [])

  useEffect(() => {
    if(!element) return;
    if (observer.current) 
      cleanObserver(observer.current);
    
    const obs = createObserver(([{ target }]) => {
      setCurrentBounds((prevState: any) => ({ 
        ...prevState,
        ...getListItemsBoundings(target as HTMLElement) 
      }));
    });

    obs.observe(element, { childList: true })

    return () => {
      if(observer.current)
        cleanObserver(observer.current)
    };
  }, [element]);

  useEffect(() => {
    if(!previousBounds) return; 
    if(!element || !Object.keys(previousBounds).length) return;

    for(const child of element.children){
      const domNode: any = child;
      const previousItemPosition = previousBounds[child.id];
      const currentItemPosition = currentBounds[child.id];
      const changeInX = previousItemPosition.left - currentItemPosition.left;
      if (changeInX) {
        requestAnimationFrame(() => {
          domNode.style.transform = `translateX(${changeInX}px)`;
          domNode.style.transition = "transform 0s";
          requestAnimationFrame(() => {
            domNode.style.transform = "";
            domNode.style.transition = `transform ${seconds}s`;
          });
        });
      }
    }
       
  }, [currentBounds, previousBounds, element, seconds]);
  
  return { ref };
};
