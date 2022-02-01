import { useState, useEffect, useCallback } from "react";
import { throttle } from "lodash";

/**
 * This hook returns the width and height of the window w/ throttle 1 sec
 * @returns size { innerWidth: number, innerHeight: number }
 */
const useWindowSize = () => {
  const [size, setSize] = useState({
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight,
  });

  // throttled set listener that runs on window resize
  const throttledSetResizeListner = useCallback(
    throttle(() => {
      // set size in state
      setSize({
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight,
      });
    }, 1000),
    []
  );

  // effect for binding resize event on window
  useEffect(() => {
    // add throttled set window resize event listener
    window.addEventListener("resize", throttledSetResizeListner);
    // remove throttled set window resize event listener
    return () =>
      window.removeEventListener("resize", throttledSetResizeListner);
  }, [throttledSetResizeListner]);

  return size;
};

export default useWindowSize;
