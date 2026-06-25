import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Wine() {
  const ref = useScrollReveal();

  return (
    <section className="wine section">
      <div className="container">
        <div ref={ref} className="wine__inner reveal-on-scroll">
          <div className="wine__icon" aria-hidden="true">
            <svg viewBox="0 0 48 64" fill="none">
              <path
                d="M16 4h16v8c0 12-6 20-8 24-2-4-8-12-8-24V4z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path d="M20 36h8v24H20z" stroke="currentColor" strokeWidth="1.5" />
              <ellipse cx="24" cy="62" rx="10" ry="2" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </div>
          <div className="wine__text">
            <p className="section__eyebrow">Karta win</p>
            <h2 className="section__title section__title--inline">
              Wino dobrane z <em>intuicją</em>
            </h2>
            <p>
              Starannie wyselekcjonowana karta win — od prosecco nalanego od serca po
              włoskie etykiety idealnie komponujące się z makaronem. Daniele chętnie doradzi
              parowanie do każdego dania. Dostępne również opcje bezalkoholowe.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
