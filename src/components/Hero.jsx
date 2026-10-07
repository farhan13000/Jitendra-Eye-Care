import { Link } from 'react-router-dom';
import { whatsappLink, MESSAGES } from '../utils/whatsapp';
import { getFrameBySlug } from '../data/frames';
import { formatPrice } from '../utils/format';
import { SITE } from '../config/site';
import { unsplash } from '../utils/image';
import Img from './Img';
import Icon from './Icon';

const heroImage = unsplash('1566492031773-4f4e44671857');
const spotlight = getFrameBySlug('classic-black');

export default function Hero() {
  const years = new Date().getFullYear() - SITE.foundedYear;

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="eyebrow hero__eyebrow">
            <span className="dot" /> Opticians &amp; Eye-Care Studio
          </p>
          <h1 id="hero-title" className="hero__title">
            See Better.
            <br />
            Look Better.
            <br />
            <em>Live Better.</em>
          </h1>
          <p className="hero__lead">
            Premium eyewear, advanced lenses and trusted eye-care services, all under one roof.
          </p>
          <div className="hero__ctas">
            <Link to="/frames" className="btn btn--primary btn--lg">
              Explore Frames <Icon name="arrowRight" size={18} />
            </Link>
            <a href={whatsappLink(MESSAGES.checkup)} target="_blank" rel="noopener noreferrer" className="btn btn--outline btn--lg">
              Book an Eye Checkup
            </a>
          </div>
          <a href={whatsappLink(MESSAGES.general)} target="_blank" rel="noopener noreferrer" className="hero__wa">
            <span className="hero__wa-icon">
              <Icon name="whatsapp" size={18} />
            </span>
            <span>
              Chat on WhatsApp <span className="muted">· quick replies from our opticians</span>
            </span>
          </a>

          <dl className="hero__stats">
            <div>
              <dt>{years}+</dt>
              <dd>Years of trusted care</dd>
            </div>
            {SITE.stats.map((s) => (
              <div key={s.label}>
                <dt>{s.value}</dt>
                <dd>{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero__visual">
          <div className="hero__image">
            <Img
              src={heroImage}
              alt="Man wearing premium round tortoiseshell glasses"
              ratio={4 / 5}
              widths={[480, 720, 960]}
              sizes="(max-width: 900px) 92vw, 46vw"
              priority
            />
          </div>
          <span className="hero__ring" aria-hidden="true" />
          {spotlight && (
            <Link to={`/frames/${spotlight.slug}`} className="hero__card">
              <span className="hero__card-img">
                <Img src={spotlight.images[0]} alt="" ratio={1} widths={[160]} sizes="80px" priority />
              </span>
              <span className="hero__card-text">
                <small>Bestseller</small>
                <strong>{spotlight.name}</strong>
                <span>
                  {spotlight.rim} · {formatPrice(spotlight.price)}
                </span>
              </span>
              <Icon name="arrowRight" size={18} />
            </Link>
          )}
          <div className="hero__badge" aria-hidden="true">
            <Icon name="eye" size={18} />
            <span>
              Certified
              <br />
              Optometrists
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
