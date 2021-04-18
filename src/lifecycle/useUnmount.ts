import { useMount } from './useMount';

type Destructor = () => void;

export function useUnmount(destructor: Destructor) {
  useMount(() => destructor);
}
