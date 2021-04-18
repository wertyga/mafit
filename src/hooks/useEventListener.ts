import React, { SyntheticEvent, useRef } from 'react';

function useEventListener(
  eventName: string,
  handler: (e: any) => void,
  marker: boolean,
  element?: HTMLElement
) {
  if (typeof window === 'undefined') return;
  if (typeof marker === 'undefined') {
    console.error('useEventListener: need to pass "marker"');
    return;
  }

  const actionElement = element || window;
  const savedHandler = useRef<(e: SyntheticEvent) => void>();
  React.useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  React.useEffect(() => {
    const isSupported = actionElement && actionElement.addEventListener;
    if (!isSupported) return undefined;

    const eventListener = event => savedHandler.current(event);
    if (marker) {
      actionElement.addEventListener(eventName, eventListener);
    } else {
      actionElement.removeEventListener(eventName, eventListener);
    }

    return () => {
      actionElement.removeEventListener(eventName, eventListener);
    };
  }, [eventName, actionElement, marker]);
}

export default useEventListener;
