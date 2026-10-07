import { lensEnquiryLink } from '../utils/whatsapp';
import { formatPrice } from '../utils/format';
import { SITE } from '../config/site';
import Img from './Img';
import Icon from './Icon';

/** Lens solution card: image, explanation, key benefits, WhatsApp enquiry. */
export default function LensCard({ lens, highlighted = false, headingLevel: H = 'h3' }) {
  return (
    <article id={lens.slug} className={`lens-card ${highlighted ? 'is-highlighted' : ''}`}>
      <div className="lens-card__media">
        <Img src={lens.image} alt={`${lens.name} lenses`} ratio={16 / 10} widths={[400, 640, 800]} />
        <span className="lens-card__icon">
          <Icon name={lens.icon} size={20} />
        </span>
      </div>
      <div className="lens-card__body">
        <H className="lens-card__title">{lens.name}</H>
        <p className="lens-card__summary">{lens.summary}</p>
        <p className="lens-card__price">
          Starting from <strong>{formatPrice(SITE.startingPrice)}</strong>
        </p>
        <p className="lens-card__desc">{lens.description}</p>
        <ul className="check-list">
          {lens.benefits.map((b) => (
            <li key={b}>
              <Icon name="check" size={16} /> {b}
            </li>
          ))}
        </ul>
        <p className="lens-card__ideal">
          <span>Ideal for</span> {lens.idealFor}
        </p>
        <a
          href={lensEnquiryLink(lens)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--outline btn--sm"
          aria-label={`Enquire about ${lens.name} lenses on WhatsApp`}
        >
          <Icon name="whatsapp" size={16} /> Enquire
        </a>
      </div>
    </article>
  );
}
