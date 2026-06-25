import { useEffect, useState } from 'react';
import Reveal from './Reveal';
import { reviews } from '../data/content';

export default function Reviews() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="reviews" className="reviews section section--dark">
      <div className="container">
        <Reveal className="reviews__header">
          <p className="section__eyebrow section__eyebrow--gold">Opinie gości</p>
          <h2 className="section__title">
            Miłość,
            <br />
            <em>która wraca</em>
          </h2>
        </Reveal>

        <Reveal className="reviews__carousel" delay={1}>
          <div className="reviews__stars" aria-hidden="true">
            {'★★★★★'.split('').map((star, i) => (
              <span key={i}>{star}</span>
            ))}
          </div>

          <blockquote className="reviews__quote" key={active}>
            <p>&ldquo;{reviews[active].text}&rdquo;</p>
            <footer>
              <cite>{reviews[active].name}</cite>
              <span className="reviews__highlight">{reviews[active].highlight}</span>
            </footer>
          </blockquote>

          <div className="reviews__dots">
            {reviews.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`reviews__dot ${i === active ? 'reviews__dot--active' : ''}`}
                aria-label={`Opinia ${i + 1}`}
                onClick={() => setActive(i)}
              />
            ))}
          </div>
        </Reveal>

        <Reveal className="reviews__grid" delay={2}>
          {reviews.slice(0, 6).map((review) => (
            <article key={review.name} className="review-card">
              <div className="review-card__stars">★★★★★</div>
              <p>&ldquo;{review.text.slice(0, 120)}…&rdquo;</p>
              <span className="review-card__author">— {review.name}</span>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
