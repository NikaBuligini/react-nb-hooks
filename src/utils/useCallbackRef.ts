import { useEffect, useRef } from 'react';

export function useCallbackRef(callback: Function) {
  const savedCallbackRef = useRef<Function>(callback);

  useEffect(() => {
    savedCallbackRef.current = callback;
  }, [callback]);

  return savedCallbackRef;
}
