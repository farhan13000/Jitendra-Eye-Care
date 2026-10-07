import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import AnnouncementBar from './AnnouncementBar';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';

/** Scrolls to top on page change, or to #hash targets (retrying briefly while the page renders). */
function useScrollManagement() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }
    let tries = 0;
    const timer = setInterval(() => {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (el || ++tries > 20) {
        clearInterval(timer);
        el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 60);
    return () => clearInterval(timer);
  }, [pathname, hash]);
}

export default function Layout() {
  const { pathname } = useLocation();
  useScrollManagement();

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <AnnouncementBar />
      <Navbar />
      <main id="main" className="page-transition" key={pathname}>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
