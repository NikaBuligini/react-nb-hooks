import { useState } from 'react';

type Handlers = {
  onFocus: () => void;
  onBlur: () => void;
};

export function useFocus(): [boolean, Handlers] {
  const [isFocused, setFocus] = useState(false);

  const bind = {
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
  };

  return [isFocused, bind];
}
