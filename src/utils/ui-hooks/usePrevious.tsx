import { useRef, useEffect } from "react";

/**
 * Get the previous value of a prop or state. With React class components, componentDidUpdate lifecycle
 * can be used to get the previous prop and state values. And with functional components, we can do it
 * using a custom hook, like the following:
 * @param value any
 * @returns any
 */
const usePrevious = (value: any) => {
  const ref = useRef();

  // store current value in ref
  useEffect(() => {
    ref.current = value;
  }, [value]);

  // return previous value (happens before update in useEffect above)
  return ref.current;
};

export default usePrevious;
