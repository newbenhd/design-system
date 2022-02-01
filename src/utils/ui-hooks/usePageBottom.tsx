import { useState, useEffect, useMemo } from "react";
import { throttle, debounce } from "lodash";

const usePageBottomThrottle = () => {
  const [reachedBottom, setReachedBottom] = useState(false);

  const handleScroll = useMemo(() => {
    // best practice to reduce the notifications of an event that fires multiple times like the window
    // scroll event, we can use a throttled set event listener. You can also use debounce.
    return throttle(
      () => () => {
        // The HTMLElement.offsetHeight read-only property returns the height of an element, including
        // vertical padding and borders, as an integer.
        const offsetHeight = document.documentElement.offsetHeight;
        // The read-only innerHeight property of the Window interface returns the interior height of
        // the window in pixels, including the height of the horizontal scroll bar, if present
        const innerHeight = window.innerHeight;
        // The Element.scrollTop property gets or sets the number of pixels that an element's content
        // is scrolled vertically.
        const scrollTop = document.documentElement.scrollTop; //

        // if current scroll from bottom is less than equal to 10px
        const reachingBottom = offsetHeight - (innerHeight + scrollTop) <= 10;
        setReachedBottom(reachingBottom);
      },
      1000
    );
  }, []);

  // effect for binding event listener on window scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return reachedBottom;
};

const usePageBottomDebounce = () => {
  const [reachedBottom, setReachedBottom] = useState(false);

  const handleScroll = useMemo(() => {
    // best practice to reduce the notifications of an event that fires multiple times like the window
    // scroll event, we can use a throttled set event listener. You can also use debounce.
    return debounce(() => {
      () => {
        // The HTMLElement.offsetHeight read-only property returns the height of an element, including
        // vertical padding and borders, as an integer.
        const offsetHeight = document.documentElement.offsetHeight;
        // The read-only innerHeight property of the Window interface returns the interior height of
        // the window in pixels, including the height of the horizontal scroll bar, if present
        const innerHeight = window.innerHeight;
        // The Element.scrollTop property gets or sets the number of pixels that an element's content
        // is scrolled vertically.
        const scrollTop = document.documentElement.scrollTop; //

        // if current scroll from bottom is less than equal to 10px
        const reachingBottom = offsetHeight - (innerHeight + scrollTop) <= 10;
        setReachedBottom(reachingBottom);
      };
    }, 1000);
  }, []);

  // effect for binding event listener on window scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return reachedBottom;
};

export { usePageBottomThrottle, usePageBottomDebounce };
