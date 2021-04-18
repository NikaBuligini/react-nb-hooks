import { useKeyPress } from './useKeyPress';

function isTyping() {
  const inputs = ['input', 'textarea'];
  const isInput =
    document.activeElement &&
    inputs.indexOf(document.activeElement.tagName.toLowerCase()) !== -1;

  return isInput;
}

export function useSafeKeyPress(targetKey: string, onKey: () => void) {
  useKeyPress(targetKey, () => {
    // no action if active element is input
    if (!isTyping()) {
      onKey();
    }
  });
}
