import React, { useEffect, useRef, useState } from 'react';

interface ScrollShowProps {
  delay?: number;
  start?: 'right' | 'top';
  repeat?: boolean;
  children: React.ReactNode;
}

const ScrollShow: React.FC<ScrollShowProps> = ({
  delay = 200,
  start = 'right',
  repeat = true,
  children,
}) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
          } else {
            if (repeat) setVisible(false);
          }
        });
      },
      { root: null, rootMargin: '0px', threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [repeat]);

  return (
    <div
      ref={ref}
      className={`${visible ? 'visible' : ''} ${start}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollShow;
