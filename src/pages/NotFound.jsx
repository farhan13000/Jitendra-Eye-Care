import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import Icon from '../components/Icon';

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found" description="The page you were looking for could not be found." />
      <section className="section not-found">
        <div className="container container--narrow">
          <Icon name="glasses" size={56} strokeWidth={1.1} />
          <p className="eyebrow">Error 404</p>
          <h1 className="page-title">This page seems a little blurry</h1>
          <p className="lead">We couldn&apos;t find what you were looking for. It may have moved or no longer exists.</p>
          <div className="empty-state__actions">
            <Link to="/" className="btn btn--primary">
              Back to Home
            </Link>
            <Link to="/frames" className="btn btn--outline">
              Browse Frames
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
