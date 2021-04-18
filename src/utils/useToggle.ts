import { useCallback, useState } from 'react';

type ToggleFn = (nextState?: boolean | undefined) => void;

export const useToggle = (initialState: boolean): [boolean, ToggleFn] => {
  const [value, setValue] = useState<boolean>(initialState);

  const toggle = useCallback((nextState?: boolean) => {
    if (typeof nextState !== 'undefined') {
      setValue(Boolean(nextState));
      return;
    }

    setValue((prevState) => !prevState);
  }, []);

  return [value, toggle];
};
