import { Link } from 'react-router-dom';
import { SITE } from '../config/site';

/** Brand mark: a fine-line spectacle monogram + wordmark. Swap for an <img> logo if you have one. */
export default function Logo({ light = false, onClick }) {
  return (
    <Link to="/" className={`logo ${light ? 'logo--light' : ''}`} onClick={onClick}>
      <svg className="logo__mark" viewBox="0 0 48 24" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeWidth="1.6">
          <circle cx="12" cy="13" r="8" />
          <circle cx="36" cy="13" r="8" />
          <path d="M20 12.5c1.6-2.2 6.4-2.2 8 0" />
        </g>
        <circle cx="12" cy="13" r="2.2" className="logo__pupil" />
      </svg>
      <span className="logo__text">
        <span className="logo__name">{SITE.shortName}</span>
        <span className="logo__sub">Eye Care · Opticians</span>
      </span>
    </Link>
  );
}
