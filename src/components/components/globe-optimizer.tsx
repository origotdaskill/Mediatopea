'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

interface GlobeOptimizerProps {
  children: ReactNode;
  // This class will be applied to the container to prevent layout shifts
  placeholderClassName?: string;
}

export default function GlobeOptimizer({
  children,
  placeholderClassName = 'relative h-full w-full',
}: GlobeOptimizerProps) {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Ensure the ref is attached before proceeding
    if (!containerRef.current) return;

    // The IntersectionObserver will call our callback function
    // whenever the visibility of the observed element changes.
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state based on whether the component is in the viewport
        setIsInView(entry.isIntersecting);
      },
      {
        // We can add a margin to load it a little before it's visible.
        // 200px means it will start loading when it's 200px away from the screen.
        rootMargin: '200px',
      }
    );

    // Start observing the container div
    observer.observe(containerRef.current);

    // Cleanup function: stop observing when the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, []); // The empty dependency array ensures this effect runs only once.

  return (
    <div ref={containerRef} className={placeholderClassName}>
      {/* This is the key: we only render the children (your Globe component) 
        if isInView is true. When it becomes false, React will unmount 
        the Globe, triggering its cleanup function and destroying the animation.
      */}
      {isInView ? children : null}
    </div>
  );
}