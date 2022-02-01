import { useState, useCallback } from "react";

/**
 *
 * This hook is used for toggling a boolean value between true and false. It is useful when we want
 * to show/hide modal or open/close side menu
 * @param initialValue boolean
 * @returns [state, toggle, customToggle]
 */
const useToggle = (initialValue = false) => {
  const [state, setState] = useState(initialValue);
  const toggle = useCallback(() => setState((state) => !state), []);
  const customToggle = useCallback((state) => setState(state), []);
  return [state, toggle, customToggle];
};

export default useToggle;
