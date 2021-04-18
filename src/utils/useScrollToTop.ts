import { useEffect } from 'react';

export function useScrollTop(value: unknown = null) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [value]);
}
