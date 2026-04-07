'use client';

import { useEffect } from 'react';

export default function BootstrapClient() {
  useEffect(() => {
    // Preload Bootstrap JS for global use
    if (typeof window !== 'undefined') {
      import('bootstrap/dist/js/bootstrap.bundle.min.js')
        .then((bootstrap) => {
          // Make Bootstrap available globally
          (window as any).bootstrap = bootstrap;
        })
        .catch((err) => console.error('Failed to load Bootstrap JS:', err));
    }
  }, []);

  return null;
}