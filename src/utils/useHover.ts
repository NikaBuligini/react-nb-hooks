import { useState } from 'react';

type Handlers = {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

export function useHover(): [boolean, Handlers] {
  const [isHovered, setHovered] = useState(false);

  const bind = {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
  };

  return [isHovered, bind];
}
