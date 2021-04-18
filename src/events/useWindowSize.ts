import { useRef, useState } from 'react';
import { useEventListener } from './useEventListener';

// [width, height]
type Dimension = [number, number];

function getDimension(): Dimension {
  return [window.innerWidth, window.innerHeight];
}

function isChanged(prev: Dimension, next: Dimension) {
  return prev[0] !== next[0] || prev[1] !== next[1];
}

export function useWindowSizeChange(callback: (dimension: Dimension) => void) {
  const prevDimensionRef = useRef(getDimension());

  const handleResize = () => {
    const nextDimension = getDimension();

    if (isChanged(prevDimensionRef.current, nextDimension)) {
      prevDimensionRef.current = nextDimension;
      callback(nextDimension);
    }
  };

  useEventListener('resize', handleResize, window);
}

export function useWindowSize() {
  const [dimension, setDimension] = useState(() => getDimension());

  useWindowSizeChange((nextDimension: Dimension) => {
    setDimension(nextDimension);
  });

  return dimension;
}
