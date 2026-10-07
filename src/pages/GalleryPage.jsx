import { useState } from 'react';
import Seo from '../components/Seo';
import PageHeader from '../components/PageHeader';
import Gallery from '../components/Gallery';
import { gallery, galleryCategories } from '../data/gallery';
import { SITE } from '../config/site';

export default function GalleryPage() {
  const [filter, setFilter] = useState('All');
  const items = filter === 'All' ? gallery : gallery.filter((g) => g.category === filter);

  return (
    <>
      <Seo title="Gallery" description={`A look at ${SITE.name} in action: eye check-ups, diagnostic equipment and eye camps.`} />
      <PageHeader
        eyebrow="Gallery"
        title="Our work in pictures"
        lead="Eye check-ups, modern diagnostic equipment and community eye camps."
        crumbs={[{ label: 'Gallery' }]}
      />
      <section className="section section--catalog">
        <div className="container">
          <div className="chip-row chip-row--scroll" role="group" aria-label="Filter gallery">
            {['All', ...galleryCategories].map((c) => (
              <button
                key={c}
                className={`chip ${filter === c ? 'is-active' : ''}`}
                onClick={() => setFilter(c)}
                aria-pressed={filter === c}
              >
                {c}
              </button>
            ))}
          </div>
          {/* key re-triggers the fade-in when the filter changes */}
          <div key={filter} className="fade-in">
            <Gallery items={items} />
          </div>
        </div>
      </section>
    </>
  );
}
