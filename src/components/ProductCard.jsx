import { Link } from 'react-router-dom';
import { formatPrice } from '../utils/format';
import { generateWhatsAppLink } from '../utils/whatsapp';
import Img from './Img';
import Icon from './Icon';

/** Image-led frame card: view details or enquire on WhatsApp. */
export default function ProductCard({ product, priority = false }) {
  const url = `/frames/${product.slug}`;
  const badge = product.collections.includes('new')
    ? 'New'
    : product.collections.includes('premium')
      ? 'Premium'
      : null;

  return (
    <article className="product-card">
      <Link to={url} className="product-card__media" tabIndex={-1} aria-hidden="true">
        <Img src={product.images[0]} alt="" ratio={4 / 5} widths={[360, 540, 720]} priority={priority} />
        {product.images[1] && (
          <Img src={product.images[1]} alt="" ratio={4 / 5} widths={[360, 540, 720]} className="product-card__alt" />
        )}
        {badge && <span className="badge">{badge}</span>}
      </Link>

      <div className="product-card__body">
        <div className="product-card__head">
          <h3 className="product-card__name">
            <Link to={url}>{product.name}</Link>
          </h3>
          <p className="product-card__price">{formatPrice(product.price)}</p>
        </div>
        <p className="product-card__meta">
          {product.collections.includes('sunglasses') ? 'Sunglasses' : product.rim} · {product.gender}
        </p>
        <ul className="swatches" aria-label="Available colours">
          {product.colors.map((c) => (
            <li key={c.name} style={{ '--swatch': c.hex }} title={c.name}>
              <span className="visually-hidden">{c.name}</span>
            </li>
          ))}
        </ul>
        <div className="product-card__actions">
          <Link to={url} className="btn btn--outline btn--sm">
            View Details
          </Link>
          <a
            href={generateWhatsAppLink(product)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--whatsapp btn--sm"
            aria-label={`Enquire about ${product.name} on WhatsApp`}
          >
            <Icon name="whatsapp" size={16} /> Enquire
          </a>
        </div>
      </div>
    </article>
  );
}
