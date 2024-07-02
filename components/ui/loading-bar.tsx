// components/ui/loading-bar.tsx
import React from 'react';

interface LoadingBarProps {
  loading: boolean;
}

const LoadingBar: React.FC<LoadingBarProps> = ({ loading }) => {
  return (
    <div
      className={`fixed w-full top-0 left-0 h-1.5 opacity-0 -translate-x-full transition-all ${
        loading ? 'opacity-100 translate-x-0' : ''
      } bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500`}
      style={{
        backgroundSize: '200% 200%',
        animation: loading ? 'gradiant-move 1s infinite' : 'none',
      }}
    />
  );
};

export default LoadingBar;
