import { useScrollReveal } from '../hooks/useScrollReveal';
import { contact, hours } from '../data/content';

export default function Visit() {
  const ref = useScrollReveal();

  return (
    <section id="visit" className="visit section">
      <div className="container">
        <div ref={ref} className="visit__grid reveal-on-scroll">
          <div className="visit__info">
            <p className="section__eyebrow">Wizyta</p>
            <h2 className="section__title">
              Zarezerwuj
              <br />
              <em>swój stolik</em>
            </h2>
            <p className="section__lead">
              Tylko cztery stoliki — rezerwacja jest mile widziana. Kameralna atmosfera,
              spokojny wieczór i jedzenie, które zostaje w pamięci.
            </p>

            <div className="visit__details">
              <div className="visit__block">
                <h3>Adres</h3>
                <address>
                  {contact.address}
                  <br />
                  {contact.city}
                  <br />
                  <span>{contact.district}</span>
                </address>
                <a href={contact.maps} target="_blank" rel="noopener noreferrer" className="visit__link">
                  Otwórz w Mapach →
                </a>
              </div>

              <div className="visit__block">
                <h3>Godziny</h3>
                <ul className="visit__hours">
                  {hours.map((row) => (
                    <li key={row.day}>
                      <span>{row.day}</span>
                      <span>{row.time}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="visit__block">
                <h3>Rezerwacja</h3>
                <a href={contact.phoneLink} className="visit__phone">
                  {contact.phone}
                </a>
                <p className="visit__note">Zadzwoń, aby zarezerwować stolik</p>
              </div>
            </div>
          </div>

          <div className="visit__cta-card">
            <div className="visit__cta-inner">
              <span className="visit__cta-label">Polecane</span>
              <h3>Carbonara · Ravioli · Cannolo</h3>
              <p>
                Najczęściej wybierane przez gości. Ale prawdziwa magia to cotygodniowe
                niespodzianki na karcie.
              </p>
              <a href={contact.phoneLink} className="btn btn--gold btn--full">
                Zadzwoń i zarezerwuj
              </a>
            </div>
            <div className="visit__map">
              <iframe
                title="Lokalizacja GRANO DURO"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.5!2d21.028!3d52.238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc8c8f8f8f8f%3A0x0!2sTopiel%2012%2C%2000-342%20Warszawa!5e0!3m2!1spl!2spl!4v1"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
