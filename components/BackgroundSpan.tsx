import React from 'react';

interface BackgroundSpanProps {
  children: React.ReactNode;
}

const BackgroundSpan: React.FC<BackgroundSpanProps> = ({ children }) => {
  return (
    <span className="relative whitespace-nowrap leading-relaxed">
      <span className="absolute bg-neutral -left-2 -top-1 -bottom-1 -right-2 md:-left-3 md:-top-0 md:-bottom-0 md:-right-3 -rotate-1"></span>
      {children}
    </span>
  );
};

export default BackgroundSpan;
