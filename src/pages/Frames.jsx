import { useDeferredValue, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Seo, { inCity } from '../components/Seo';
import PageHeader from '../components/PageHeader';
import ProductCard from '../components/ProductCard';
import Icon from '../components/Icon';
import { frames } from '../data/frames';
import { categories, getCategory } from '../data/categories';
import { frameText, matches } from '../utils/search';
import { whatsappLink } from '../utils/whatsapp';

const GENDERS = ['Men', 'Women', 'Unisex', 'Kids'];
const RIMS = ['Full Rim', 'Half Rim', 'Rimless'];
const PRICES = [
  { id: 'u2000', label: 'Under ₹2,000', test: (p) => p < 2000 },
  { id: '2000-3000', label: '₹2,000 – ₹3,000', test: (p) => p >= 2000 && p <= 3000 },
  { id: '3000-4000', label: '₹3,000 – ₹4,000', test: (p) => p > 3000 && p <= 4000 },
  { id: 'o4000', label: 'Above ₹4,000', test: (p) => p > 4000 },
];
const SORTS = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'name', label: 'Name: A to Z' },
];

export default function Frames() {
  const [params, setParams] = useSearchParams();
  const [filtersOpen, setFiltersOpen] = useState(false);

  const q = params.get('q') ?? '';
  const category = params.get('category') ?? '';
  const gender = params.get('gender') ?? '';
  const rim = params.get('rim') ?? '';
  const price = params.get('price') ?? '';
  const sort = params.get('sort') ?? 'featured';
  const deferredQ = useDeferredValue(q);

  const update = (key, value) => {
    const next = new URLSearchParams(params);
    if (value) next.set(key, value);
    else next.delete(key);
    setParams(next, { replace: true, preventScrollReset: true });
  };
  const toggle = (key, value) => update(key, params.get(key) === value ? '' : value);
  const reset = () => setParams({}, { replace: true, preventScrollReset: true });

  const results = useMemo(() => {
    const cat = getCategory(category);
    const priceRange = PRICES.find((p) => p.id === price);
    const list = frames.filter(
      (f) =>
        (!cat || cat.match(f)) &&
        (!gender || f.gender === gender) &&
        (!rim || f.rim === rim) &&
        (!priceRange || priceRange.test(f.price)) &&
        (!deferredQ.trim() || matches(frameText(f), deferredQ))
    );
    const sorted = [...list];
    if (sort === 'price-asc') sorted.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') sorted.sort((a, b) => b.price - a.price);
    if (sort === 'name') sorted.sort((a, b) => a.name.localeCompare(b.name));
    if (sort === 'featured') sorted.sort((a, b) => Number(b.featured) - Number(a.featured));
    return sorted;
  }, [category, gender, rim, price, sort, deferredQ]);

  const activeCount = [category, gender, rim, price, q].filter(Boolean).length;
  const activeCategory = getCategory(category);

  return (
    <>
      <Seo
        title={activeCategory ? `${activeCategory.name} | Eyeglass Frames` : inCity('Eyeglass Frames & Sunglasses')}
        description="Browse premium full rim, half rim, rimless, metal, acetate, kids frames and sunglasses. View details and enquire instantly on WhatsApp."
      />
      <PageHeader
        eyebrow="The Collection"
        title={activeCategory ? activeCategory.name : 'Frames & Sunglasses'}
        lead="Browse our curated collection, then enquire on WhatsApp or visit the store to try them on."
        crumbs={[{ label: 'Frames' }]}
      />

      <section className="section section--catalog">
        <div className="container">
          <div className="chip-row chip-row--scroll" role="group" aria-label="Category">
            <button className={`chip ${!category ? 'is-active' : ''}`} onClick={() => update('category', '')} aria-pressed={!category}>
              All
            </button>
            {categories.map((c) => (
              <button
                key={c.slug}
                className={`chip ${category === c.slug ? 'is-active' : ''}`}
                onClick={() => toggle('category', c.slug)}
                aria-pressed={category === c.slug}
              >
                {c.name}
              </button>
            ))}
          </div>

          <div className="catalog">
            <aside className={`filters ${filtersOpen ? 'is-open' : ''}`} id="filters" aria-label="Filters">
              <div className="filters__head">
                <h2>Filters</h2>
                <button className="icon-btn filters__close" onClick={() => setFiltersOpen(false)} aria-label="Close filters">
                  <Icon name="close" />
                </button>
              </div>

              <FilterGroup legend="Gender">
                {GENDERS.map((g) => (
                  <Option key={g} name="gender" label={g} checked={gender === g} onChange={() => toggle('gender', g)} />
                ))}
              </FilterGroup>

              <FilterGroup legend="Frame Type">
                {RIMS.map((r) => (
                  <Option key={r} name="rim" label={r} checked={rim === r} onChange={() => toggle('rim', r)} />
                ))}
              </FilterGroup>

              <FilterGroup legend="Price Range">
                {PRICES.map((p) => (
                  <Option key={p.id} name="price" label={p.label} checked={price === p.id} onChange={() => toggle('price', p.id)} />
                ))}
              </FilterGroup>

              <div className="filters__foot">
                <button className="btn btn--ghost btn--sm" onClick={reset} disabled={!activeCount}>
                  Clear all
                </button>
                <button className="btn btn--primary btn--sm filters__apply" onClick={() => setFiltersOpen(false)}>
                  Show {results.length} frames
                </button>
              </div>
            </aside>

            <div className="catalog__main">
              <div className="toolbar">
                <label className="search-field">
                  <Icon name="search" size={18} />
                  <span className="visually-hidden">Search frames</span>
                  <input
                    type="search"
                    value={q}
                    onChange={(e) => update('q', e.target.value)}
                    placeholder="Search e.g. “black frame”, “round”, “titanium”"
                  />
                </label>
                <button
                  className="btn btn--outline btn--sm toolbar__filters"
                  onClick={() => setFiltersOpen(true)}
                  aria-expanded={filtersOpen}
                  aria-controls="filters"
                >
                  <Icon name="filter" size={16} /> Filters{activeCount ? ` (${activeCount})` : ''}
                </button>
                <label className="select-field">
                  <span className="visually-hidden">Sort by</span>
                  <select value={sort} onChange={(e) => update('sort', e.target.value === 'featured' ? '' : e.target.value)}>
                    {SORTS.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.label}
                      </option>
                    ))}
                  </select>
                  <Icon name="chevronDown" size={16} />
                </label>
              </div>

              <p className="results-count" aria-live="polite">
                Showing <strong>{results.length}</strong> of {frames.length} frames
                {activeCount > 0 && (
                  <button className="text-link" onClick={reset}>
                    Clear filters
                  </button>
                )}
              </p>

              <h2 className="visually-hidden">Frames</h2>
              {results.length ? (
                <div className="product-grid product-grid--catalog">
                  {results.map((f, i) => (
                    <ProductCard key={f.id} product={f} priority={i < 3} />
                  ))}
                </div>
              ) : (
                <div className="empty-state">
                  <Icon name="glasses" size={40} strokeWidth={1.2} />
                  <h2>No frames match those filters</h2>
                  <p>Try removing a filter, or ask us. We have many more styles in store than online.</p>
                  <div className="empty-state__actions">
                    <button className="btn btn--outline" onClick={reset}>
                      Clear filters
                    </button>
                    <a
                      className="btn btn--whatsapp"
                      href={whatsappLink(`Hello, I am looking for a frame${q ? ` like "${q}"` : ''}. Could you share some options?`)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon name="whatsapp" size={18} /> Ask on WhatsApp
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {filtersOpen && <div className="filters__backdrop" onClick={() => setFiltersOpen(false)} aria-hidden="true" />}
      </section>
    </>
  );
}

function FilterGroup({ legend, children }) {
  return (
    <fieldset className="filter-group">
      <legend>{legend}</legend>
      {children}
    </fieldset>
  );
}

function Option({ name, label, checked, onChange }) {
  return (
    <label className="option">
      <input type="checkbox" name={name} checked={checked} onChange={onChange} />
      <span className="option__box" aria-hidden="true">
        <Icon name="check" size={12} strokeWidth={2.5} />
      </span>
      {label}
    </label>
  );
}
