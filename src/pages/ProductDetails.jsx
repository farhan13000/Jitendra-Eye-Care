import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Seo from '../components/Seo';
import Img from '../components/Img';
import Icon from '../components/Icon';
import ProductCard from '../components/ProductCard';
import SectionHeading from '../components/SectionHeading';
import NotFound from './NotFound';
import { frames, getFrameBySlug } from '../data/frames';
import { formatPrice } from '../utils/format';
import { generateWhatsAppLink, whatsappLink, MESSAGES } from '../utils/whatsapp';
import { sized } from '../utils/image';

export default function ProductDetails() {
  const { slug } = useParams();
  const product = getFrameBySlug(slug);
  if (!product) return <NotFound />;
  // key resets image/colour selection when navigating between products
  return <Product key={product.slug} product={product} />;
}

function Product({ product }) {
  const [active, setActive] = useState(0);
  const [color, setColor] = useState(product.colors[0]?.name);
  const [zoom, setZoom] = useState(null);

  const isSun = product.collections.includes('sunglasses');
  const typeLabel = isSun ? 'Sunglasses' : product.rim;
  const related = frames
    .filter((f) => f.id !== product.id)
    .map((f) => ({
      f,
      score:
        (f.rim === product.rim) + (f.gender === product.gender) * 1.2 + (f.collections.includes('sunglasses') === isSun) * 2,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 4)
    .map((x) => x.f);

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    setZoom({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
  };

  const specs = [
    ['Category', typeLabel],
    ['Frame Type', product.rim],
    ['Gender', product.gender],
    ['Material', product.material],
    ['Shape', product.shape],
    ['Size', product.size],
  ];

  return (
    <>
      <Seo
        title={`${product.name} ${isSun ? 'Sunglasses' : 'Frame'} | ${formatPrice(product.price)}`}
        description={product.description}
        image={sized(product.images[0], 1200, 630)}
        type="product"
      />

      <section className="section section--product">
        <div className="container">
          <nav aria-label="Breadcrumb">
            <ol className="breadcrumbs">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/frames">Frames</Link>
              </li>
              <li>
                <span aria-current="page">{product.name}</span>
              </li>
            </ol>
          </nav>

          <div className="pdp">
            <div className="pdp__gallery">
              <div
                className={`pdp__stage ${zoom ? 'is-zooming' : ''}`}
                onMouseMove={onMove}
                onMouseLeave={() => setZoom(null)}
              >
                <Img
                  key={active}
                  src={product.images[active]}
                  alt={`${product.name} ${isSun ? 'sunglasses' : 'frame'}, view ${active + 1}`}
                  ratio={1}
                  widths={[600, 900, 1200]}
                  sizes="(max-width: 900px) 100vw, 55vw"
                  priority
                  style={zoom ? { transformOrigin: `${zoom.x}% ${zoom.y}%` } : undefined}
                />
                <span className="pdp__zoom-hint" aria-hidden="true">
                  <Icon name="search" size={14} /> Hover to zoom
                </span>
              </div>
              {product.images.length > 1 && (
                <div className="pdp__thumbs" role="group" aria-label="Product images">
                  {product.images.map((src, i) => (
                    <button
                      key={src}
                      className={`pdp__thumb ${i === active ? 'is-active' : ''}`}
                      onClick={() => setActive(i)}
                      aria-label={`Show image ${i + 1}`}
                      aria-pressed={i === active}
                    >
                      <Img src={src} alt="" ratio={1} widths={[160]} sizes="80px" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="pdp__info">
              <p className="eyebrow">
                {typeLabel} · {product.gender}
              </p>
              <h1 className="pdp__title">
                {product.name} {isSun ? 'Sunglasses' : 'Frame'}
              </h1>
              <p className="pdp__price">
                {formatPrice(product.price)} <small>frame price · lenses quoted separately</small>
              </p>
              <p className="pdp__desc">{product.description}</p>

              <div className="pdp__block">
                <p className="pdp__label">
                  Available Colours: <strong>{color}</strong>
                </p>
                <div className="color-picker" role="radiogroup" aria-label="Colour">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      role="radio"
                      aria-checked={color === c.name}
                      aria-label={c.name}
                      title={c.name}
                      className={`color-picker__swatch ${color === c.name ? 'is-active' : ''}`}
                      style={{ '--swatch': c.hex }}
                      onClick={() => setColor(c.name)}
                    />
                  ))}
                </div>
              </div>

              <div className="pdp__ctas">
                <a
                  href={generateWhatsAppLink(product, { color })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--whatsapp btn--lg btn--block"
                >
                  <Icon name="whatsapp" size={20} /> Enquire on WhatsApp
                </a>
                <div className="pdp__ctas-row">
                  <a
                    href={generateWhatsAppLink(product, { color, intent: 'availability' })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--outline"
                  >
                    <Icon name="check" size={18} /> Ask About Availability
                  </a>
                  <a href={whatsappLink(MESSAGES.checkup)} target="_blank" rel="noopener noreferrer" className="btn btn--outline">
                    <Icon name="calendar" size={18} /> Book Eye Checkup
                  </a>
                </div>
              </div>

              <ul className="pdp__assurance">
                <li>
                  <Icon name="badge" size={18} /> Genuine product
                </li>
                <li>
                  <Icon name="ruler" size={18} /> Free fitting &amp; adjustment
                </li>
                <li>
                  <Icon name="eye" size={18} /> Try on in store
                </li>
              </ul>

              <div className="pdp__block">
                <h2 className="pdp__subtitle">Features</h2>
                <ul className="check-list">
                  {product.features.map((f) => (
                    <li key={f}>
                      <Icon name="check" size={16} /> {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pdp__block">
                <h2 className="pdp__subtitle">Specifications</h2>
                <dl className="specs">
                  {specs.map(([k, v]) => (
                    <div key={k}>
                      <dt>{k}</dt>
                      <dd>{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <p className="pdp__lens-note">
                <Icon name="layers" size={18} />
                <span>
                  Need prescription lenses?{' '}
                  <Link to="/lenses" className="text-link">
                    Explore lens options
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt" aria-labelledby="related-title">
        <div className="container">
          <SectionHeading
            id="related-title"
            eyebrow="You may also like"
            title="Similar styles"
            action={
              <Link to="/frames" className="text-link">
                View all frames <Icon name="arrowRight" size={14} />
              </Link>
            }
          />
          <div className="product-grid">
            {related.map((f) => (
              <ProductCard key={f.id} product={f} />
            ))}
          </div>
        </div>
      </section>

      {/* Sticky mobile enquiry bar */}
      <div className="pdp-sticky">
        <div>
          <strong>{product.name}</strong>
          <span>{formatPrice(product.price)}</span>
        </div>
        <a href={generateWhatsAppLink(product, { color })} target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp btn--sm">
          <Icon name="whatsapp" size={16} /> Enquire
        </a>
      </div>
    </>
  );
}
