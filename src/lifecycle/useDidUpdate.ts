import { DependencyList, EffectCallback, useEffect, useRef } from 'react';

export function useDidUpdate(
  effect: EffectCallback,
  deps: DependencyList = [],
) {
  const justMountedRef = useRef<boolean>(true);

  useEffect(() => {
    if (!justMountedRef.current) {
      return effect();
    }

    justMountedRef.current = false;
  }, deps); // eslint-disable-line react-hooks/exhaustive-deps
}
