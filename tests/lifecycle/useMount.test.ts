import { renderHook } from '@testing-library/react-hooks';
import { useMount } from '../../src/lifecycle/useMount';

describe('useMount', () => {
  it('should only call onMount callback only once', () => {
    const fn = jest.fn();

    const { result, rerender, unmount } = renderHook(() => useMount(fn));
    rerender();
    unmount();

    expect(fn).toBeCalledTimes(1);
  });
});
