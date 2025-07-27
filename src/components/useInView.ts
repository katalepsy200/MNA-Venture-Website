import { useEffect, useRef, useState, RefObject } from 'react';

export function useInView<T extends HTMLElement = HTMLDivElement>(options?: IntersectionObserverInit): [RefObject<T>, boolean] {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // Only trigger once
        }
      },
      options
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [options]);

  return [ref as RefObject<T>, inView];
} 