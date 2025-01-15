"use client";
import { useEffect, useState, useRef } from "react";

interface AnimatedNumberProps {
  value: number;
}

export const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ value }) => {
  const [count, setCount] = useState<number>(0);
  const countRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        if (entries[0].isIntersecting) {
          animateValue(0, value, 500);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, [value]);

  const animateValue = (start: number, end: number, duration: number): void => {
    let startTimestamp: number | null = null;

    const step = (timestamp: number): void => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentCount = Math.floor(progress * (end - start) + start);
      setCount(currentCount);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  return <span ref={countRef}>{count.toLocaleString()}</span>;
};
