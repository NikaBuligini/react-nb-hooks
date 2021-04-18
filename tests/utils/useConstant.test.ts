import { renderHook } from '@testing-library/react-hooks';
import { useConstant } from '../../src/utils/useConstant';

describe('useConstant', () => {
  it('should return constant value', () => {
    let id = 0;
    const fn = () => id++;

    const { result, rerender } = renderHook(() => useConstant(fn));

    expect(result.current).toBe(0);

    rerender();

    expect(result.current).toBe(0);
  });
});
