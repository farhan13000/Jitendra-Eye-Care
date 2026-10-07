import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useScrolled } from '../hooks/useReveal';
import { whatsappLink, MESSAGES } from '../utils/whatsapp';
import { SITE } from '../config/site';
import Logo from './Logo';
import Icon from './Icon';
import SearchDialog from './SearchDialog';

export const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/frames', label: 'Frames' },
  { to: '/lenses', label: 'Lenses' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About Us' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const scrolled = useScrolled(24);
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { pathname } = useLocation();

  // Close the mobile menu whenever the route changes
  useEffect(() => setOpen(false), [pathname]);

  // Lock page scroll and allow Escape while the mobile menu is open
  useEffect(() => {
    if (!open) return;
    document.body.classList.add('no-scroll');
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.classList.remove('no-scroll');
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  // "/" opens search from anywhere (unless typing in a field)
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === '/' && !/input|textarea|select/i.test(e.target.tagName)) {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''} ${open ? 'menu-open' : ''}`}>
      <div className="container nav">
        <Logo />

        <nav className="nav__links" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} className="nav__link">
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav__actions">
          <button className="icon-btn" onClick={() => setSearchOpen(true)} aria-label="Search frames, lenses and services">
            <Icon name="search" size={19} />
          </button>
          <a
            className="icon-btn icon-btn--wa"
            href={whatsappLink(MESSAGES.general)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Chat with ${SITE.name} on WhatsApp`}
          >
            <Icon name="whatsapp" size={19} />
          </a>
          <a
            className="btn btn--primary btn--sm nav__cta"
            href={whatsappLink(MESSAGES.checkup)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Eye Checkup
          </a>
          <button
            className="icon-btn nav__toggle"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <Icon name={open ? 'close' : 'menu'} size={22} />
          </button>
        </div>
      </div>

      <div id="mobile-menu" className="mobile-menu" hidden={!open}>
        <nav aria-label="Mobile">
          {NAV_LINKS.map((l, i) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className="mobile-menu__link"
              style={{ animationDelay: `${60 + i * 35}ms` }}
            >
              {l.label}
              <Icon name="arrowRight" size={18} />
            </NavLink>
          ))}
        </nav>
        <div className="mobile-menu__ctas">
          <a className="btn btn--primary btn--block" href={whatsappLink(MESSAGES.checkup)} target="_blank" rel="noopener noreferrer">
            <Icon name="calendar" size={18} /> Book Eye Checkup
          </a>
          <a className="btn btn--whatsapp btn--block" href={whatsappLink(MESSAGES.general)} target="_blank" rel="noopener noreferrer">
            <Icon name="whatsapp" size={18} /> Chat on WhatsApp
          </a>
          <a className="btn btn--ghost btn--block" href={`tel:${SITE.phoneHref}`}>
            <Icon name="phone" size={18} /> {SITE.phone}
          </a>
        </div>
      </div>

      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
