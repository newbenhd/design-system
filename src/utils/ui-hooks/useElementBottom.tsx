import { useState, useEffect, useMemo } from "react";
import { throttle } from "lodash";

/**
 *
 * Check if the user has scrolled to the bottom of an element. In this hook, a reference to the element is
 * passed so we can use the element's height and current scroll position to determine if the element is
 * scrolled to the bottom
 * @param element HTMLElement
 * @returns reachedBottom boolean
 */
const useElementBottom = (element: { current: HTMLElement }) => {
  const [reachedBottom, setReachedBottom] = useState(false);
  const handleScroll = useMemo(() => {
    return throttle(() => {
      const { current } = element; // current holds the reference to element
      // if current scroll from bottom is less than equal to 10px
      const scrollBottom =
        current.scrollHeight - current.scrollTop - current.clientHeight;
      const reachingBottom = scrollBottom <= 10;
      setReachedBottom(reachingBottom);
    }, 1000);
  }, []);

  useEffect(() => {
    const { current } = element;
    current.addEventListener("scroll", handleScroll);
    return () => current.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return reachedBottom;
};
export default useElementBottom;
