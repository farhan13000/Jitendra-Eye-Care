import { useDeferredValue, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { searchSite } from '../utils/search';
import { formatPrice } from '../utils/format';
import Icon from './Icon';
import Img from './Img';

const SUGGESTIONS = ['Black frame', 'Round', 'Sunglasses', 'Progressive', 'Blue light', 'Eye checkup', 'Kids'];

/** Site-wide, frontend-only search across frames, lenses and services. */
export default function SearchDialog({ open, onClose }) {
  const dialogRef = useRef(null);
  const inputRef = useRef(null);
  const [query, setQuery] = useState('');
  const deferred = useDeferredValue(query);
  const results = searchSite(deferred);
  const total = results.frames.length + results.lenses.length + results.services.length;

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    if (open && !d.open) {
      d.showModal();
      requestAnimationFrame(() => inputRef.current?.focus());
    } else if (!open && d.open) {
      d.close();
    }
  }, [open]);

  const close = () => {
    onClose();
    setQuery('');
  };

  return (
    <dialog
      ref={dialogRef}
      className="search-dialog"
      aria-label="Search"
      onClose={close}
      onClick={(e) => e.target === dialogRef.current && close()}
    >
      <div className="search-dialog__panel">
        <div className="search-dialog__bar">
          <Icon name="search" size={20} />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search frames, lenses, services…"
            aria-label="Search the website"
          />
          <button className="icon-btn" onClick={close} aria-label="Close search">
            <Icon name="close" size={20} />
          </button>
        </div>

        <div className="search-dialog__body" aria-live="polite">
          {!deferred.trim() && (
            <div className="search-suggest">
              <p className="search-group__title">Popular searches</p>
              <div className="chip-row">
                {SUGGESTIONS.map((s) => (
                  <button key={s} className="chip" onClick={() => setQuery(s)}>
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {deferred.trim() && total === 0 && (
            <p className="search-empty">
              No results for “{deferred}”. Try “round”, “metal” or “progressive”.
            </p>
          )}

          {results.frames.length > 0 && (
            <section className="search-group">
              <h2 className="search-group__title">Frames</h2>
              <ul>
                {results.frames.map((f) => (
                  <li key={f.id}>
                    <Link to={`/frames/${f.slug}`} className="search-item" onClick={close}>
                      <span className="search-item__thumb">
                        <Img src={f.images[0]} alt="" ratio={1} widths={[96]} sizes="48px" />
                      </span>
                      <span className="search-item__text">
                        <strong>{f.name}</strong>
                        <small>
                          {f.rim} · {f.gender} · {formatPrice(f.price)}
                        </small>
                      </span>
                      <Icon name="arrowRight" size={16} />
                    </Link>
                  </li>
                ))}
              </ul>
              <Link to={`/frames?q=${encodeURIComponent(deferred)}`} className="text-link" onClick={close}>
                See all matching frames <Icon name="arrowRight" size={14} />
              </Link>
            </section>
          )}

          {results.lenses.length > 0 && (
            <section className="search-group">
              <h2 className="search-group__title">Lenses</h2>
              <ul>
                {results.lenses.map((l) => (
                  <li key={l.slug}>
                    <Link to={`/lenses#${l.slug}`} className="search-item" onClick={close}>
                      <span className="search-item__icon">
                        <Icon name={l.icon} size={18} />
                      </span>
                      <span className="search-item__text">
                        <strong>{l.name}</strong>
                        <small>{l.summary}</small>
                      </span>
                      <Icon name="arrowRight" size={16} />
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {results.services.length > 0 && (
            <section className="search-group">
              <h2 className="search-group__title">Services</h2>
              <ul>
                {results.services.map((s) => (
                  <li key={s.slug}>
                    <Link to={`/services#${s.slug}`} className="search-item" onClick={close}>
                      <span className="search-item__icon">
                        <Icon name={s.icon} size={18} />
                      </span>
                      <span className="search-item__text">
                        <strong>{s.title}</strong>
                        <small>{s.summary}</small>
                      </span>
                      <Icon name="arrowRight" size={16} />
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>
    </dialog>
  );
}
