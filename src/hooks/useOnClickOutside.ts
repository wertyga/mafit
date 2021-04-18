import { SyntheticEvent, useEffect, useRef } from 'react';

const useOnClickOutside = (
  ref: ReturnType<typeof useRef>,
  handler: (e: SyntheticEvent) => void
) => {
  useEffect(() => {
    const listener = event => {
      if (!ref.current || (ref.current as any).contains(event.target)) {
        return;
      }
      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};

export default useOnClickOutside;
