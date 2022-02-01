import { useState, useEffect } from "react";

/**
 * Sync a value between local storage and state. This hook does exactly the same. We're using
 * useState and checking if the specified key has some value in the local storage so that we can use it
 * as an initial value. This allows us to keep the value in sync with the state on page refresh
 * @param key string
 * @param defaultValue any
 * @returns [value: any, setValue: Dispatch<any>]
 */
const useLocalStorageState = (key: string, defaultValue: any) => {
  const [value, setValue] = useState(() => {
    let val;
    try {
      // if there is a value in local storage for given key, set it as initial state
      val = JSON.parse(localStorage.getItem(key) || String(defaultValue));
    } catch (error) {
      // otherwise, set default value as initial state
      val = defaultValue;
    }
    return val;
  });

  // effect to update local storage when state changes
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};

export default useLocalStorageState;
