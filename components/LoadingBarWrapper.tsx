'use client';

import React, { useState } from 'react';
import LoadingBar from '@/components/ui/loading-bar';

const LoadingBarWrapper: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <LoadingBar loading={loading} />
      {children}
    </>
  );
};

export default LoadingBarWrapper;
