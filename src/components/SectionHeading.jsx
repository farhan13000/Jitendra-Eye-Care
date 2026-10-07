import Reveal from './Reveal';

/** Eyebrow + heading + optional lead paragraph. `as` lets pages control heading level. */
export default function SectionHeading({ id, eyebrow, title, lead, align = 'left', as: H = 'h2', action, light = false }) {
  return (
    <Reveal className={`section-heading section-heading--${align} ${light ? 'section-heading--light' : ''}`}>
      <div>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <H id={id} className="section-title">{title}</H>
        {lead && <p className="lead">{lead}</p>}
      </div>
      {action && <div className="section-heading__action">{action}</div>}
    </Reveal>
  );
}
