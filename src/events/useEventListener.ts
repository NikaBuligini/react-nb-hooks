import { useEffect } from 'react';
import { useCallbackRef } from '../utils/useCallbackRef';

export function useEventListener(
  type: string,
  handler: EventListener,
  element: EventTarget = global,
) {
  const savedCallback = useCallbackRef(handler);

  useEffect(() => {
    // Make sure element supports addEventListener
    const isSupported = element && element.addEventListener;
    if (!isSupported) {
      return;
    }

    const eventListener: EventListener = (event) =>
      savedCallback.current(event);

    element.addEventListener(type, eventListener);

    return () => {
      element.removeEventListener(type, eventListener);
    };
  }, [type, element]); // eslint-disable-line react-hooks/exhaustive-deps
}
