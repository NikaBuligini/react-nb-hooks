import { useEffect } from 'react';
import { useCallbackRef } from '../utils/useCallbackRef';

export function useKeyPress(targetKey: string, onKey: () => void) {
  const savedCallbackRef = useCallbackRef(onKey);

  useEffect(() => {
    const keys = targetKey.split('+').map((k) => k.trim().toLowerCase());

    const handler = (event: KeyboardEvent) => {
      const match = keys.every((key) => {
        switch (key) {
          case 'ctrl': {
            return event.ctrlKey;
          }
          case 'shift': {
            return event.shiftKey;
          }
          default: {
            if (event.key === key) {
              return true;
            }

            return event.keyCode === Number(key);
          }
        }
      });

      if (match) {
        savedCallbackRef.current();
      }
    };

    window.addEventListener('keydown', handler);

    return () => {
      window.removeEventListener('keydown', handler);
    };
  }, [targetKey]); // eslint-disable-line react-hooks/exhaustive-deps
}
