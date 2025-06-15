'use client';
import { useEffect } from 'react';

export default function WhyDidYouRenderSetup() {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      require('../whyDidYouRender');
    }
  }, []);
  return null;
}
