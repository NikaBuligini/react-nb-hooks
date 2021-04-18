import { useRef } from 'react';
import { useEventListener } from './useEventListener';

export function useClickOutside<T>(callback: (event: MouseEvent) => void) {
  const ref = useRef<T>(null);

  const mousedown = (event: MouseEvent) => {
    // @ts-ignore
    if (ref.current && !ref.current.contains(event.target)) {
      callback(event);
    }
  };

  useEventListener('mousedown', mousedown as EventListener, document);

  return ref;
}
