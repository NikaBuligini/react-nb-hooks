import { useState } from 'react';
import { useEventListener } from './useEventListener';

declare global {
  interface Document {
    msHidden?: any;
    webkitHidden?: any;
  }
}

type HiddenKey = 'hidden' | 'msHidden' | 'webkitHidden';
type VisibilityChangeEventName =
  | 'visibilitychange'
  | 'msvisibilitychange'
  | 'webkitvisibilitychange';

function getVisibilityPropertyNames(): [HiddenKey, VisibilityChangeEventName] {
  // Opera 12.10 and Firefox 18 and later support
  if (typeof document.hidden !== 'undefined') {
    return ['hidden', 'visibilitychange'];
  }

  if (typeof document.msHidden !== 'undefined') {
    return ['msHidden', 'msvisibilitychange'];
  }

  if (typeof document.webkitHidden !== 'undefined') {
    return ['webkitHidden', 'webkitvisibilitychange'];
  }

  return ['hidden', 'visibilitychange'];
}

const [hidden, visibilityChange] = getVisibilityPropertyNames();

function isDocumentHidden(): boolean {
  return document[hidden];
}

if (typeof document.addEventListener === 'undefined' || hidden === undefined) {
  console.warn(
    'Listening for document visibility change requires a browser, such as Google Chrome or Firefox, that supports the Page Visibility API.',
  );
}

export function useDocumentVisibilityChange(
  onChange: (hidden: boolean) => void,
) {
  useEventListener(
    visibilityChange,
    () => void onChange(isDocumentHidden()),
    document,
  );
}

export function useDocumentVisibility() {
  const [hidden, setHidden] = useState<boolean>(isDocumentHidden());

  useDocumentVisibilityChange(setHidden);

  return hidden;
}
