import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Philosophy() {
  const ref = useScrollReveal();

  return (
    <section id="philosophy" className="philosophy section">
      <div className="container">
        <div ref={ref} className="philosophy__grid reveal-on-scroll">
          <div className="philosophy__visual">
            <div className="philosophy__frame">
              <div className="philosophy__image" role="img" aria-label="Makaron robiony ręcznie" />
              <div className="philosophy__badge">
                <span>Od zera</span>
                <em>from scratch</em>
              </div>
            </div>
          </div>

          <div className="philosophy__text">
            <p className="section__eyebrow">Filozofia</p>
            <h2 className="section__title">
              Smak ponad
              <br />
              <em>pretensje</em>
            </h2>
            <p className="section__lead">
              GRANO DURO to miejsce z wielkim szacunkiem do jedzenia — kwintesencja włoskiej kuchni
              w najczystszej formie. Proste wnętrze, bez przepychu. Perfekcyjne na talerzu.
            </p>
            <p>
              Każdego dnia przygotowujemy świeży makaron od podstaw. Menu zmienia się co tydzień,
              odzwierciedlając sezon i kreatywność szefa. Krótka karta — ale każde danie opowiada
              historię: o jakości składników, o tradycji i o odwadze, by ją reinterpretować.
            </p>
            <ul className="philosophy__list">
              <li>
                <strong>Makaron ręczny</strong> — codziennie świeży, al dente
              </li>
              <li>
                <strong>Menu tygodniowe</strong> — nowe smaki co środę
              </li>
              <li>
                <strong>Produkty premium</strong> — jakość wyczuwalna w każdym kęsie
              </li>
              <li>
                <strong>Gościnność</strong> — Daniele osobiście doradza i opowiada o daniach
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
