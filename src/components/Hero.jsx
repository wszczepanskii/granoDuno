export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg">
        <div className="hero__grain" />
        <div className="hero__glow hero__glow--left" />
        <div className="hero__glow hero__glow--right" />
      </div>

      <div className="hero__content container">
        <p className="hero__eyebrow reveal">
          <span className="hero__line" />
          Powiśle · Warszawa
          <span className="hero__line" />
        </p>

        <h1 className="hero__title reveal reveal--delay-1">
          Grano
          <br />
          <em>Duro</em>
        </h1>

        <p className="hero__subtitle reveal reveal--delay-2">
          Twardy ziarno. Miękka dusza.
          <span className="hero__subtitle-it">Grano duro. Anima italiana.</span>
        </p>

        <p className="hero__desc reveal reveal--delay-3">
          Kameralna trattoria z makaronem robionym ręcznie. Cztery stoliki, cotygodniowe menu
          i gościnność, która zostaje w pamięci.
        </p>

        <div className="hero__actions reveal reveal--delay-4">
          <a href="#visit" className="btn btn--gold">
            Zarezerwuj stolik
          </a>
          <a href="#menu" className="btn btn--ghost">
            Menu tygodnia
          </a>
        </div>

        <div className="hero__stats reveal reveal--delay-5">
          <div className="hero__stat">
            <span className="hero__stat-num">4</span>
            <span className="hero__stat-label">stoliki</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-num">7</span>
            <span className="hero__stat-label">dni świeżego makaronu</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-num">∞</span>
            <span className="hero__stat-label">pasji w każdym daniu</span>
          </div>
        </div>
      </div>

      <a href="#philosophy" className="hero__scroll" aria-label="Przewiń w dół">
        <span>Scroll</span>
        <svg width="20" height="28" viewBox="0 0 20 28" fill="none" aria-hidden="true">
          <rect x="1" y="1" width="18" height="26" rx="9" stroke="currentColor" strokeWidth="1.5" />
          <circle className="hero__scroll-dot" cx="10" cy="8" r="2" fill="currentColor" />
        </svg>
      </a>
    </section>
  );
}
