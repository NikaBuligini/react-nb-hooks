import { useRef } from 'react';
import { useEventListener } from './useEventListener';

export function useClickOutside(callback: (event: MouseEvent) => void) {
  const ref = useRef<HTMLElement>(null);

  const mousedown = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      callback(event);
    }
  };

  useEventListener('mousedown', mousedown as EventListener, document);

  return ref;
}
