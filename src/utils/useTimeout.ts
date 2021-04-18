import { useEffect } from 'react';
import { useCallbackRef } from './useCallbackRef';

export function useTimeout(callback: Function, delay: number | null) {
  const savedCallback = useCallbackRef(callback);

  useEffect(() => {
    function onTimeout() {
      savedCallback.current();
    }

    if (delay !== null) {
      const id = setTimeout(onTimeout, delay);
      return () => clearTimeout(id);
    }

    return undefined;
  }, [delay]); // eslint-disable-line react-hooks/exhaustive-deps
}
