import { useState, useEffect } from "react";

const useOnline = () => {
  const [online, setOnline] = useState(navigator.onLine);

  const onLineHandler = () => {
    setOnline(true);
  };
  const offLineHandler = () => {
    setOnline(false);
  };
  useEffect(() => {
    setOnline(navigator.onLine);
    window.addEventListener("online", onLineHandler);
    window.addEventListener("offline", offLineHandler);
    return () => {
      window.removeEventListener("online", onLineHandler);
      window.removeEventListener("offline", offLineHandler);
    };
  }, []);

  return online;
};

export default useOnline;
