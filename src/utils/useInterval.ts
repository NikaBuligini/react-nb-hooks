import { useEffect } from 'react';
import { useCallbackRef } from './useCallbackRef';

export function useInterval(callback: Function, delay: number | null) {
  const savedCallback = useCallbackRef(callback);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }

    return undefined;
  }, [delay]); // eslint-disable-line react-hooks/exhaustive-deps
}
