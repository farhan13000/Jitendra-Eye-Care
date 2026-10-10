import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import Img from '../components/Img';
import Icon from '../components/Icon';
import Testimonials from '../components/Testimonials';
import CheckupCta from '../components/CheckupCta';
import { SITE } from '../config/site';
import { unsplash } from '../utils/image';

const trust = [
  { icon: 'award', title: 'Quality Products', text: 'Every frame and lens is chosen for build quality, comfort and lasting value.' },
  { icon: 'user', title: 'Professional Guidance', text: 'Experienced opticians who explain your options clearly and honestly.' },
  { icon: 'heart', title: 'Personalised Service', text: 'Recommendations based on your face, prescription and lifestyle.' },
  { icon: 'tag', title: 'Transparent Pricing', text: 'Clear quotes before we start. No surprises, no hidden costs.' },
  { icon: 'smile', title: 'Customer Satisfaction', text: 'Free adjustments and friendly after-care, long after you buy.' },
];

/** Our team. Add more people by adding objects (photos go in public/images/team/). */
const team = [
  {
    name: 'Our Eye-Care Expert',
    role: `${SITE.experienceYears}+ years of experience`,
    image: '/images/team/doctor.jpeg',
    position: '50% 35%',
  },
];

export default function About() {
  const years = SITE.experienceYears;
  return (
    <>
      <Seo
        title="About Us"
        description={`The story behind ${SITE.name}: ${years}+ years of trusted eye care, quality eyewear and personal service.`}
      />
      <PageHeader
        eyebrow="About Us"
        title="Clear vision, delivered with care"
        lead={`For over ${years} years, ${SITE.name} has helped families see clearly and look their best.`}
        crumbs={[{ label: 'About Us' }]}
        image={unsplash('1631248055158-edec7a3c072b')}
      />

      <section className="section" aria-labelledby="who-title">
        <div className="container split">
          <Reveal className="split__media">
            <Img src={unsplash('1556742049-0cfed4f6a45d')} alt="Our team helping a customer in store" ratio={4 / 5} widths={[480, 720, 900]} sizes="(max-width: 900px) 100vw, 45vw" />
            <div className="split__note">
              <strong>{years}+ years</strong>
              <span>serving our community</span>
            </div>
          </Reveal>
          <div className="split__body prose">
            <SectionHeading id="who-title" eyebrow="Who We Are" title="An optician that treats you like family" />
            <Reveal>
              <p>
                {SITE.name} began as a small optical counter with a big promise: honest advice, accurate eye
                examinations and eyewear people genuinely love to wear. Over the years that promise has grown into a
                modern eye-care studio, but the personal attention has never changed.
              </p>
              <p>
                Today we combine computerised eye-testing equipment with a carefully curated collection of frames,
                from everyday essentials to premium acetate and titanium, and lenses from trusted manufacturers. Every
                pair is measured, fitted and adjusted by hand.
              </p>
              <p>
                Whether it&apos;s your child&apos;s first pair of glasses, your first progressive lenses or simply a
                fresh new look, we take the time to get it right.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--dark" aria-label="Mission and vision">
        <div className="container mv">
          <Reveal className="mv__item">
            <p className="eyebrow eyebrow--light">Our Mission</p>
            <p className="mv__quote">
              “To provide quality eyewear and trusted eye-care services while helping every customer see clearly and
              confidently.”
            </p>
          </Reveal>
          <Reveal className="mv__item" delay={120}>
            <p className="eyebrow eyebrow--light">Our Vision</p>
            <p className="mv__quote">“To become a trusted destination for modern eyewear and professional eye care.”</p>
          </Reveal>
        </div>
      </section>

      <section className="section" aria-labelledby="trust-title">
        <div className="container">
          <SectionHeading id="trust-title" eyebrow="Our Promise" title="Why Customers Trust Us" align="center" />
          <div className="trust-grid">
            {trust.map((t, i) => (
              <Reveal key={t.title} className="trust-card" delay={i * 60}>
                <span className="trust-card__icon">
                  <Icon name={t.icon} size={22} />
                </span>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt" aria-labelledby="team-title">
        <div className="container">
          <SectionHeading id="team-title" eyebrow="Our Team" title="The people behind your perfect pair" />
          <div className={`team-grid ${team.length === 1 ? 'team-grid--single' : ''}`}>
            {team.map((m, i) => (
              <Reveal as="figure" key={m.name} className="team-card" delay={i * 80}>
                <Img
                  src={m.image}
                  alt={`${m.name}, ${m.role}`}
                  ratio={4 / 5}
                  widths={[360, 540, 720]}
                  sizes="(max-width: 640px) 100vw, 33vw"
                  style={m.position ? { objectPosition: m.position } : undefined}
                />
                <figcaption>
                  <strong>{m.name}</strong>
                  <span>{m.role}</span>
                </figcaption>
              </Reveal>
            ))}
          </div>
          <div className="center-cta">
            <Link to="/gallery" className="btn btn--outline">
              Take a look inside <Icon name="arrowRight" size={16} />
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />
      <CheckupCta />
    </>
  );
}
