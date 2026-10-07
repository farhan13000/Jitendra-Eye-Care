import { frames } from '../data/frames';
import { lenses } from '../data/lenses';
import { services } from '../data/services';

const normalise = (s) => s.toLowerCase().normalize('NFKD').replace(/[^\w\s-]/g, ' ');

/** Every word in the query must appear somewhere in the item's searchable text. */
export const matches = (haystack, query) => {
  const words = normalise(query).split(/\s+/).filter(Boolean);
  const text = normalise(haystack);
  // allow simple plurals: "frames" matches "frame"
  return words.every((w) => text.includes(w) || text.includes(w.replace(/e?s$/, '')));
};

export const frameText = (f) =>
  [f.name, f.rim, f.material, f.gender, f.shape, f.collections.join(' '), f.colors.map((c) => c.name).join(' '), 'frame glasses spectacles'].join(' ');

/** Site-wide search across frames, lenses and services. */
export function searchSite(query) {
  if (!query.trim()) return { frames: [], lenses: [], services: [] };
  return {
    frames: frames.filter((f) => matches(frameText(f), query)).slice(0, 6),
    lenses: lenses.filter((l) => matches(`${l.name} ${l.summary} ${l.benefits.join(' ')} lens lenses`, query)),
    services: services.filter((s) => matches(`${s.title} ${s.summary} ${s.benefits.join(' ')} service`, query)),
  };
}
