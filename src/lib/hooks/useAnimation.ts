import { RefCallback, useCallback, useEffect, useState } from "react";
import { usePrevious } from ".";
import { getListItemsBoundings } from "../../utils";

interface IUseAnimation {
  seconds: number,
  requestAnimFrame?: boolean
}

export const useAnimation = <T extends HTMLElement> ({
  seconds,
  requestAnimFrame = false
}: IUseAnimation): { ref: RefCallback<T> } => {
  const [ element, setElement ] = useState<T>();
  const [ currentBounds, setCurrentBounds ] = useState<any>({});
  const previousBounds = usePrevious(currentBounds, [currentBounds])

  const ref = useCallback((node: T) => {
    setElement(node);
    setCurrentBounds(getListItemsBoundings(node));
  }, [])

  useEffect(() => {
    if(!element) return;
  
    const mutationObs = new MutationObserver(([{ target }]) => {
      setCurrentBounds((prevState: any) => ({ 
        ...prevState,
        ...getListItemsBoundings(target as HTMLElement) 
      }));
    });

    const resizeObs = new ResizeObserver(([{ target }]) => {
      setCurrentBounds((prevState: any) => ({ 
        ...prevState,
        ...getListItemsBoundings(target as HTMLElement) 
      }));
    })
    
    mutationObs.observe(element, { childList: true })
    resizeObs.observe(element, { box: 'device-pixel-content-box' })

    return () => {
      mutationObs.disconnect()
      resizeObs.disconnect()
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
      if (changeInX && requestAnimFrame) {
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
       
  }, [currentBounds, previousBounds, element, seconds, requestAnimFrame]);
  
  return { ref };
};
