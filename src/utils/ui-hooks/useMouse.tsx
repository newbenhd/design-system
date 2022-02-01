import { useState, useEffect, useCallback } from "react";

const useMouse = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const setMousePosition = useCallback(
    (e) => setPosition({ x: e.clientX, y: e.clientY }),
    []
  );

  useEffect(() => {
    window.addEventListener("mousemove", setMousePosition);
    return () => window.removeEventListener("mousemove", setMousePosition);
  }, []);

  return position;
};

export default useMouse;
