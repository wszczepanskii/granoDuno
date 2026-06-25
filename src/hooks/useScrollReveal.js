import { useEffect, useRef } from 'react';

export function useScrollReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('revealed');
          if (options.once !== false) observer.unobserve(element);
        }
      },
      { threshold: options.threshold ?? 0.15, rootMargin: options.rootMargin ?? '0px 0px -40px 0px' }
    );

    observer.observe(element);

    // Reveal immediately if already in viewport (e.g. on short screens)
    if (element.getBoundingClientRect().top < window.innerHeight * 0.85) {
      element.classList.add('revealed');
    }

    return () => observer.disconnect();
  }, [options.once, options.threshold, options.rootMargin]);

  return ref;
}
