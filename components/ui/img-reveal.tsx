'use client';

import React, { useState, useRef } from 'react';

interface ImgRevealProps {
  src: string;
  children: React.ReactNode;
}

const ImgReveal: React.FC<ImgRevealProps> = ({ src, children }) => {
  const [hovered, setHovered] = useState(false);
  const [offset, setOffset] = useState(0);
  const imgRef = useRef<HTMLImageElement>(null);

  const leave = () => {
    setHovered(false);
    setOffset(0);
  };

  const moveImg = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    if (imgRef.current) {
      setOffset((prevOffset) => prevOffset + e.movementX);
    }
  };

  return (
    <span
      className="text relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={leave}
      onMouseMove={moveImg}
    >
      {children}
      {hovered && (
        <img
          ref={imgRef}
          src={src}
          alt="special effect"
          style={{ transform: `translateX(${offset || 0}px) ` }}
          className="absolute bottom-1/2 w-full right-0"
          
        />
      )}
    </span>
  );
};

export default ImgReveal;
