'use client';

import { useCallback, useEffect, useState } from 'react';

const useIsMobile = (mobileScreenSize = 768) => {
  if (
    typeof window !== 'undefined' &&
    typeof window?.matchMedia !== 'function'
  ) {
    throw Error('matchMedia not supported by browser!');
  }
  const defaultValue =
    typeof window === 'undefined'
      ? false
      : window?.matchMedia(`(max-width: ${mobileScreenSize}px)`).matches;
  const [isMobile, setIsMobile] = useState(defaultValue);

  const checkIsMobile = useCallback((event: MediaQueryListEvent) => {
    setIsMobile(event.matches);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaListener = window?.matchMedia(
        `(max-width: ${mobileScreenSize}px)`
      );
      // try catch used to fallback for browser compatibility
      try {
        mediaListener.addEventListener('change', checkIsMobile);
      } catch {
        mediaListener.addListener(checkIsMobile);
      }

      return () => {
        try {
          mediaListener.removeEventListener('change', checkIsMobile);
        } catch {
          mediaListener.removeListener(checkIsMobile);
        }
      };
    }
  }, [mobileScreenSize]);

  return isMobile;
};

export default useIsMobile;
