import { useCallback, useRef } from 'react';
import { useUnmount } from './useUnmount';

type IsMountedFn = () => boolean;

export function useMountedState(): IsMountedFn {
  const isMountedRef = useRef<boolean>(true);

  useUnmount(() => {
    isMountedRef.current = false;
  });

  return useCallback(() => isMountedRef.current, []);
}
