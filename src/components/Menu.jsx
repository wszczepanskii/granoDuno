import Reveal from './Reveal';
import { weeklyMenu } from '../data/content';

export default function Menu() {
  return (
    <section id="menu" className="menu section section--dark">
      <div className="container">
        <Reveal className="menu__header">
          <div>
            <p className="section__eyebrow section__eyebrow--gold">Menu tygodnia</p>
            <h2 className="section__title">
              Co tydzień
              <br />
              <em>nowa opowieść</em>
            </h2>
          </div>
          <div className="menu__meta">
            <span className="menu__week">{weeklyMenu.week}</span>
            <p>{weeklyMenu.note}</p>
          </div>
        </Reveal>

        <Reveal className="menu__grid" delay={1}>
          {weeklyMenu.courses.map((course) => (
            <article key={course.category} className="menu__card">
              <h3 className="menu__category">{course.category}</h3>
              <ul className="menu__items">
                {course.items.map((item) => (
                  <li key={item.name} className="menu__item">
                    <span className="menu__item-name">{item.name}</span>
                    <span className="menu__item-detail">{item.detail}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </Reveal>

        <Reveal as="p" className="menu__footnote" delay={2}>
          Dokładne menu publikujemy co środę na Instagramie. W lokalu Daniele chętnie wszystko
          wyjaśni i doradzi idealne wino.
        </Reveal>
      </div>
    </section>
  );
}
