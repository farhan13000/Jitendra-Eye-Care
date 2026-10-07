import { Link } from 'react-router-dom';
import Img from './Img';

/** Inner-page header with breadcrumbs, H1 and optional background image. */
export default function PageHeader({ eyebrow, title, lead, crumbs = [], image, priceFrom, children }) {
  return (
    <header className={`page-header ${image ? 'page-header--image' : ''}`}>
      {image && (
        <div className="page-header__bg" aria-hidden="true">
          <Img src={image} alt="" widths={[800, 1400, 1920]} sizes="100vw" priority />
        </div>
      )}
      <div className="container page-header__inner">
        <nav aria-label="Breadcrumb">
          <ol className="breadcrumbs">
            <li>
              <Link to="/">Home</Link>
            </li>
            {crumbs.map((c) => (
              <li key={c.label}>{c.to ? <Link to={c.to}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}</li>
            ))}
          </ol>
        </nav>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="page-title">{title}</h1>
        {lead && <p className="lead">{lead}</p>}
        {priceFrom && (
          <p className="price-from">
            Starting from <strong>{priceFrom}</strong>
          </p>
        )}
        {children}
      </div>
    </header>
  );
}
