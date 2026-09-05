import { useEffect, useState } from 'react';

export function useDebouncedSearch(text: string, delay: number = 500) {
  const [debouncedValue, setDebouncedValue] = useState('');

  useEffect(() => {
    const delayFn = setTimeout(() => {
      setDebouncedValue(text);
    }, delay);

    return () => clearTimeout(delayFn);
  }, [text, delay]);

  return debouncedValue;
}
