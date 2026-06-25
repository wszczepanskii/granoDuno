import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Chef() {
  const ref = useScrollReveal();

  return (
    <section id="chef" className="chef section section--burgundy">
      <div className="container">
        <div ref={ref} className="chef__grid reveal-on-scroll">
          <div className="chef__portrait">
            <div className="chef__frame">
              <div className="chef__image" role="img" aria-label="Daniele Noè — szef kuchni" />
            </div>
            <div className="chef__flag">🇮🇹</div>
          </div>

          <div className="chef__content">
            <p className="section__eyebrow section__eyebrow--gold">Szef kuchni</p>
            <h2 className="section__title">
              Daniele
              <br />
              <em>Noè</em>
            </h2>
            <p className="section__lead">
              Włoch z Mediolanu, który zamienił cztery stoliki w Powiślu w sanktuarium
              autentycznej kuchni włoskiej.
            </p>
            <blockquote className="chef__quote">
              „Od wejścia witam gości, podaję menu i opowiadam o każdym daniu. To nie jest
              tylko restauracja — to zaproszenie do mojego domu."
            </blockquote>
            <p>
              Daniele osobiście dba o każdy szczegół: od nakrycia stołu, przez dobór wina, po
              szczegółowy opis potraw w łamanym polsko-włoskim, który goście uwielbiają. Jego
              pasja i życzliwość sprawiają, że kolacja w GRANO DURO staje się niezapomnianym
              przeżyciem kulinarnym.
            </p>
            <div className="chef__traits">
              <span>Mediolan</span>
              <span>Włoska dusza</span>
              <span>Gościnność</span>
              <span>Pasja</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
