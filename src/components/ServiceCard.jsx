import { Link } from 'react-router-dom';
import Icon from './Icon';

/** Compact service tile used on the homepage. */
export default function ServiceCard({ service, index }) {
  return (
    <Link to={`/services#${service.slug}`} className="service-card">
      <span className="service-card__num">{String(index + 1).padStart(2, '0')}</span>
      <span className="service-card__icon">
        <Icon name={service.icon} size={24} />
      </span>
      <h3 className="service-card__title">{service.title}</h3>
      <p className="service-card__text">{service.summary}</p>
      <span className="text-link">
        Learn more <Icon name="arrowRight" size={14} />
      </span>
    </Link>
  );
}
