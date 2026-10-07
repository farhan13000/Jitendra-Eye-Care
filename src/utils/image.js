/**
 * Image helpers.
 * Product/gallery data can use either a local path ("/images/frames/frame-1.webp")
 * or a remote URL. Unsplash URLs automatically get responsive sizes + WebP/AVIF.
 */
export const unsplash = (id) => `https://images.unsplash.com/photo-${id}`;

const isUnsplash = (src) => typeof src === 'string' && src.includes('images.unsplash.com');

export function sized(src, width, height) {
  if (!isUnsplash(src)) return src;
  const params = new URLSearchParams({ auto: 'format', fit: 'crop', q: '72', w: String(width) });
  if (height) params.set('h', String(height));
  return `${src.split('?')[0]}?${params}`;
}

/** Returns { src, srcSet } for a set of widths, preserving aspect ratio if given. */
export function responsive(src, widths = [400, 700, 1000], ratio) {
  if (!isUnsplash(src)) return { src };
  const h = (w) => (ratio ? Math.round(w / ratio) : undefined);
  return {
    src: sized(src, widths[widths.length - 1], h(widths[widths.length - 1])),
    srcSet: widths.map((w) => `${sized(src, w, h(w))} ${w}w`).join(', '),
  };
}
