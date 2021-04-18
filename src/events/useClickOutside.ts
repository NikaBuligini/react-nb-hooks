import { useRef } from 'react';
import { useEventListener } from './useEventListener';

export function useClickOutside<TElement extends HTMLElement>(
  callback: (event: MouseEvent) => void,
) {
  const ref = useRef<TElement>(null);

  const mousedown = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      callback(event);
    }
  };

  useEventListener('mousedown', mousedown as EventListener, document);

  return ref;
}
