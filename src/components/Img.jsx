import { useState } from 'react';
import { responsive } from '../utils/image';

/**
 * Responsive, lazy-loaded image with a soft placeholder background and graceful fallback.
 * `ratio` (width/height) crops remote images server-side, e.g. ratio={4/5}.
 */
export default function Img({
  src,
  alt,
  ratio,
  widths,
  sizes = '(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw',
  priority = false,
  className = '',
  ...rest
}) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const { src: url, srcSet } = responsive(src, widths, ratio);

  if (failed) {
    return (
      <div className={`img-fallback ${className}`} role="img" aria-label={alt}>
        <svg viewBox="0 0 64 32" width="56" aria-hidden="true">
          <g fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="18" cy="18" r="10" />
            <circle cx="46" cy="18" r="10" />
            <path d="M28 17c1.5-2 6.5-2 8 0" />
          </g>
        </svg>
      </div>
    );
  }

  return (
    <img
      src={url}
      srcSet={srcSet}
      sizes={srcSet ? sizes : undefined}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : undefined}
      decoding="async"
      onLoad={() => setLoaded(true)}
      onError={() => setFailed(true)}
      className={`img ${loaded || priority ? 'is-loaded' : ''} ${className}`}
      {...rest}
    />
  );
}
