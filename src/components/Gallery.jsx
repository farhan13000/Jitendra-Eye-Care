import { useCallback, useEffect, useRef, useState } from 'react';
import Img from './Img';
import Icon from './Icon';

/** Masonry gallery grid with an accessible lightbox (Esc, ← → keys, swipe). */
export default function Gallery({ items, preview = false }) {
  const [index, setIndex] = useState(null);
  const open = (i) => setIndex(i);

  return (
    <>
      <ul className={`masonry ${preview ? 'masonry--preview' : ''}`}>
        {items.map((item, i) => (
          <li key={item.id} className={`masonry__item ${item.tall ? 'is-tall' : ''}`}>
            <button className="masonry__btn" onClick={() => open(i)} aria-label={`${item.category}: ${item.alt}`}>
              <Img
                src={item.src}
                alt={item.alt}
                ratio={item.tall ? 3 / 4 : 4 / 3}
                widths={[360, 560, 760]}
                sizes="(max-width: 640px) 50vw, (max-width: 1100px) 33vw, 25vw"
                priority={!preview && i < 4}
              />
              <span className="masonry__caption">
                <span>{item.category}</span>
                <Icon name="search" size={16} />
              </span>
            </button>
          </li>
        ))}
      </ul>
      <Lightbox items={items} index={index} setIndex={setIndex} />
    </>
  );
}

function Lightbox({ items, index, setIndex }) {
  const ref = useRef(null);
  const touchX = useRef(null);
  const isOpen = index !== null;

  const go = useCallback(
    (dir) => setIndex((i) => (i === null ? i : (i + dir + items.length) % items.length)),
    [items.length, setIndex]
  );

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (isOpen && !d.open) d.showModal();
    if (!isOpen && d.open) d.close();
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, go]);

  const item = isOpen ? items[index] : null;

  return (
    <dialog
      ref={ref}
      className="lightbox"
      aria-label="Image viewer"
      onClose={() => setIndex(null)}
      onClick={(e) => e.target === ref.current && setIndex(null)}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
        touchX.current = null;
      }}
    >
      {item && (
        <>
          <figure className="lightbox__figure" key={item.id}>
            <Img src={item.src} alt={item.alt} widths={[800, 1200, 1600]} sizes="90vw" priority />
            <figcaption>
              <span className="eyebrow">{item.category}</span>
              {item.alt}
              <span className="lightbox__count">
                {index + 1} / {items.length}
              </span>
            </figcaption>
          </figure>
          <button className="lightbox__btn lightbox__close" onClick={() => setIndex(null)} aria-label="Close image viewer">
            <Icon name="close" size={22} />
          </button>
          <button className="lightbox__btn lightbox__prev" onClick={() => go(-1)} aria-label="Previous image">
            <Icon name="chevronLeft" size={24} />
          </button>
          <button className="lightbox__btn lightbox__next" onClick={() => go(1)} aria-label="Next image">
            <Icon name="chevronRight" size={24} />
          </button>
        </>
      )}
    </dialog>
  );
}
