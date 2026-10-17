import './Divider.css';

/** Art-deco diamond chain used between sections. */
export function Divider() {
  return (
    <div className="divider" aria-hidden="true">
      <span className="divider__line" />
      <svg width="64" height="18" viewBox="0 0 64 18" className="divider__glyph">
        <path d="M2 9 L8 4 L14 9 L8 14 Z" className="divider__stroke" />
        <path d="M32 1 L42 9 L32 17 L22 9 Z" className="divider__stroke" />
        <path d="M32 5 L38 9 L32 13 L26 9 Z" className="divider__dot" />
        <path d="M50 9 L56 4 L62 9 L56 14 Z" className="divider__stroke" />
      </svg>
      <span className="divider__line" />
    </div>
  );
}
