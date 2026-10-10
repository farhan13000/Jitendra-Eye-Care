import { Link } from 'react-router-dom';
import Seo, { inCity } from '../components/Seo';
import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import ProductCard from '../components/ProductCard';
import CategoryCard from '../components/CategoryCard';
import ServiceCard from '../components/ServiceCard';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import CheckupCta from '../components/CheckupCta';
import WhatsAppCta from '../components/WhatsAppCta';
import LocationSection from '../components/LocationSection';
import Img from '../components/Img';
import Icon from '../components/Icon';
import { featuredFrames, frames } from '../data/frames';
import { categories } from '../data/categories';
import { lenses, lensBrands, lensBrandNames } from '../data/lenses';
import { services } from '../data/services';
import { gallery } from '../data/gallery';
import { lensEnquiryLink } from '../utils/whatsapp';
import { unsplash } from '../utils/image';
import { SITE } from '../config/site';

const highlights = [
  { icon: 'eye', title: 'Professional Eye Examination', text: 'Thorough, modern vision testing.' },
  { icon: 'award', title: 'Premium Quality Frames', text: 'Curated, durable, beautifully made.' },
  { icon: 'layers', title: 'Advanced Lens Options', text: 'From blue-light to progressive.' },
  { icon: 'user', title: 'Expert Guidance', text: 'Advice from experienced opticians.' },
  { icon: 'badge', title: 'Genuine Products', text: 'Authentic brands and lenses only.' },
  { icon: 'heart', title: 'Personalised Consultation', text: 'Fitted to your face and lifestyle.' },
];

const reasons = [
  { title: 'Clinic-grade care, boutique experience', text: 'A calm, unhurried space where your eye health always comes first, and style a close second.' },
  { title: 'Honest, transparent pricing', text: 'Clear quotes for frames and lenses before we begin. No hidden extras, ever.' },
  { title: 'Precision fitting & after-care', text: 'Measured and adjusted by hand, with free re-alignments for the life of your glasses.' },
  { title: 'Lenses matched to your life', text: 'We consider your screen time, driving and work, not just your prescription.' },
];

export default function Home() {
  return (
    <>
      <Seo description={`${inCity('Premium frames, lenses & eye care services')}. ${SITE.description}`} />

      {/* 3. Hero */}
      <Hero />

      {/* 4. Trust highlights */}
      <section className="highlights" aria-label="Why choose us">
        <div className="container">
          <ul className="highlights__grid">
            {highlights.map((h, i) => (
              <Reveal as="li" key={h.title} className="highlight" delay={i * 60}>
                <span className="highlight__icon">
                  <Icon name={h.icon} size={22} />
                </span>
                <span>
                  <strong>{h.title}</strong>
                  <small>{h.text}</small>
                </span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. Featured frames */}
      <section className="section" aria-labelledby="featured-title">
        <div className="container">
          <SectionHeading
            id="featured-title"
            eyebrow="The Collection"
            title="Find Your Perfect Frame"
            lead="Designed for your style. Selected for your comfort."
            action={
              <Link to="/frames" className="text-link">
                View All Frames <Icon name="arrowRight" size={14} />
              </Link>
            }
          />
          <div className="product-grid">
            {featuredFrames.slice(0, 8).map((f, i) => (
              <Reveal key={f.id} delay={(i % 4) * 70}>
                <ProductCard product={f} />
              </Reveal>
            ))}
          </div>
          <div className="center-cta">
            <Link to="/frames" className="btn btn--outline btn--lg">
              View All Frames <Icon name="arrowRight" size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Frame categories */}
      <section className="section section--alt" aria-labelledby="categories-title">
        <div className="container">
          <SectionHeading
            id="categories-title"
            eyebrow="Shop by Category"
            title="Every shape, every style"
            lead="From featherlight rimless styles to bold full-rim and elegant cat-eye frames."
          />
          <div className="category-grid">
            {categories.map((c, i) => (
              <Reveal key={c.slug} delay={(i % 4) * 60}>
                <CategoryCard category={c} count={frames.filter(c.match).length} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Lens solutions */}
      <section className="section section--dark" aria-labelledby="lenses-title">
        <div className="container">
          <SectionHeading
            id="lenses-title"
            light
            eyebrow="Lens Solutions"
            title="The Right Lens Makes All the Difference"
            lead={`Precision lenses and coatings matched to your prescription. Genuine ${lensBrandNames} lenses available.`}
            action={
              <Link to="/lenses" className="text-link text-link--light">
                Explore all lenses <Icon name="arrowRight" size={14} />
              </Link>
            }
          />
          <div className="lens-strip">
            {lenses.map((l, i) => (
              <Reveal as="article" key={l.slug} className="lens-tile" delay={(i % 4) * 60}>
                <span className="lens-tile__icon">
                  <Icon name={l.icon} size={22} />
                </span>
                <h3>{l.name}</h3>
                <p>{l.summary}</p>
                <div className="lens-tile__links">
                  <Link to={`/lenses#${l.slug}`} className="text-link text-link--light">
                    Details
                  </Link>
                  <a href={lensEnquiryLink(l)} target="_blank" rel="noopener noreferrer" className="text-link text-link--light" aria-label={`Enquire about ${l.name} on WhatsApp`}>
                    <Icon name="whatsapp" size={14} /> Enquire
                  </a>
                </div>
              </Reveal>
            ))}
            <Reveal as="article" className="lens-tile lens-tile--cta" delay={180}>
              <h3>Not sure which lens?</h3>
              <p>Tell us how you use your eyes and we&apos;ll recommend the right combination.</p>
              <Link to="/lenses#lens-finder" className="btn btn--gold btn--sm">
                Find the Right Lens for You
              </Link>
            </Reveal>
          </div>
          <Link to="/lenses" className="brand-strip" aria-label={`Lens brands available: ${lensBrandNames}`}>
            <span className="brand-strip__label">Brands available</span>
            {lensBrands.map((b) => (
              <span key={b.name} className="brand-strip__item">
                {b.logo ? <img src={b.logo} alt="" loading="lazy" /> : <span>{b.name}</span>}
              </span>
            ))}
          </Link>
        </div>
      </section>

      {/* 8. Eye care services */}
      <section className="section" aria-labelledby="services-title">
        <div className="container">
          <SectionHeading
            id="services-title"
            eyebrow="Eye Care Services"
            title="Complete care, from exam to perfect fit"
            action={
              <Link to="/services" className="text-link">
                All services <Icon name="arrowRight" size={14} />
              </Link>
            }
          />
          <div className="service-grid">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 4) * 60}>
                <ServiceCard service={s} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Why choose us */}
      <section className="section section--alt" aria-labelledby="why-title">
        <div className="container split">
          <Reveal className="split__media">
            <Img
              src="/images/team/doctor.jpeg"
              alt="Our eye-care expert in the examination room"
              ratio={4 / 5}
              widths={[480, 720, 900]}
              sizes="(max-width: 900px) 100vw, 45vw"
              style={{ objectPosition: '50% 35%' }}
            />
            <div className="split__note">
              <strong>{SITE.experienceYears}+ years</strong>
              <span>of eye-care experience</span>
            </div>
          </Reveal>
          <div className="split__body">
            <SectionHeading id="why-title" eyebrow="Why Choose Us" title="Care you can see, quality you can feel" />
            <ol className="reasons">
              {reasons.map((r, i) => (
                <Reveal as="li" key={r.title} delay={i * 70}>
                  <span className="reasons__num">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3>{r.title}</h3>
                    <p>{r.text}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* 10. About / brand story */}
      <section className="section" aria-labelledby="story-title">
        <div className="container story">
          <Reveal className="story__text">
            <p className="eyebrow">Our Story</p>
            <h2 id="story-title" className="section-title">
              A neighbourhood optician with a passion for detail
            </h2>
            <p className="lead">
              {SITE.name} began with a simple belief: everyone deserves expert eye care and eyewear they love to
              wear. Today we combine modern diagnostic equipment with a carefully curated collection of frames
              and lenses, and the same personal attention we started with.
            </p>
            <Link to="/about" className="btn btn--outline">
              Read our story <Icon name="arrowRight" size={16} />
            </Link>
          </Reveal>
          <Reveal className="story__images" delay={120}>
            <Img src={unsplash('1631248055158-edec7a3c072b')} alt="Our bright, modern store interior" ratio={3 / 4} widths={[360, 540]} sizes="(max-width: 900px) 50vw, 25vw" />
            <Img src={unsplash('1556742049-0cfed4f6a45d')} alt="Personal service at the counter" ratio={3 / 4} widths={[360, 540]} sizes="(max-width: 900px) 50vw, 25vw" />
          </Reveal>
        </div>
      </section>

      {/* 11. Gallery preview */}
      <section className="section section--alt" aria-labelledby="gallery-title">
        <div className="container">
          <SectionHeading
            id="gallery-title"
            eyebrow="Gallery"
            title="Our work in pictures"
            action={
              <Link to="/gallery" className="text-link">
                View full gallery <Icon name="arrowRight" size={14} />
              </Link>
            }
          />
          <Reveal>
            <Gallery items={gallery.slice(0, 8)} preview />
          </Reveal>
        </div>
      </section>

      {/* 12. Testimonials */}
      <Testimonials />

      {/* 13. Eye checkup CTA */}
      <CheckupCta />

      {/* 14. WhatsApp CTA */}
      <WhatsAppCta />

      {/* 15. Contact / location */}
      <LocationSection />
    </>
  );
}
