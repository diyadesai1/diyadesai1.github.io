import React, { useState } from 'react';
import clsx from 'clsx';

// Simple image component that shows a blurred placeholder while loading
// and a neutral fallback if the image fails to load.
export function ImageWithFallback({
  src,
  alt = '',
  className,
  fallbackSrc,
  fallbackClassName,
  loaderClassName,
  ...props
}) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const effectiveSrc = !error ? src : (fallbackSrc || undefined);

  return (
    <div className={clsx('relative w-full h-full bg-neutral-900', className)}>
      {!loaded && !error && (
        <div className={clsx('absolute inset-0 animate-pulse bg-neutral-800/60', loaderClassName)} />
      )}
      {effectiveSrc ? (
        <img
          src={effectiveSrc}
          alt={alt}
          loading="lazy"
            decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => { setError(true); setLoaded(true); }}
          className={clsx(
            'w-full h-full object-cover transition-transform duration-300',
            loaded ? 'opacity-100' : 'opacity-0',
          )}
          {...props}
        />
      ) : (
        <div className={clsx('flex items-center justify-center w-full h-full text-xs text-neutral-500 bg-neutral-800', fallbackClassName)}>
          Image unavailable
        </div>
      )}
    </div>
  );
}
