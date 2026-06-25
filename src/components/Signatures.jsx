import Reveal from './Reveal';
import { signatures } from '../data/content';

export default function Signatures() {
  return (
    <section id="signatures" className="signatures section">
      <div className="container">
        <Reveal className="signatures__header">
          <p className="section__eyebrow">Dania</p>
          <h2 className="section__title">
            Ulubione
            <br />
            <em>gości</em>
          </h2>
          <p className="section__lead signatures__lead">
            Od carbonary, którą wielu nazywa najlepszą w Warszawie, po delikatne ravioli i
            niezapomniane cannolo — to dania, które wracają w sercach i na talerzach.
          </p>
        </Reveal>

        <div className="signatures__grid">
          {signatures.map((dish, i) => (
            <Reveal
              key={dish.name}
              as="article"
              className="signature-card"
              delay={(i % 3) + 1}
            >
              <div className="signature-card__top">
                <span className="signature-card__tag">{dish.tag}</span>
                <span className="signature-card__price">{dish.price}</span>
              </div>
              <h3 className="signature-card__name">
                {dish.name}
                <em>{dish.italian}</em>
              </h3>
              <p className="signature-card__desc">{dish.description}</p>
              <div className="signature-card__line" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
