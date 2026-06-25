import { contact } from '../data/content';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">Grano <em>Duro</em></span>
          <p>Autentyczna kuchnia włoska · Powiśle, Warszawa</p>
        </div>

        <nav className="footer__nav">
          <a href="#philosophy">Filozofia</a>
          <a href="#menu">Menu</a>
          <a href="#signatures">Dania</a>
          <a href="#chef">Szef</a>
          <a href="#reviews">Opinie</a>
          <a href="#visit">Rezerwacja</a>
        </nav>

        <div className="footer__contact">
          <a href={contact.phoneLink}>{contact.phone}</a>
          <span>{contact.address}, {contact.city}</span>
        </div>
      </div>

      <div className="footer__bottom container">
        <p>© {new Date().getFullYear()} GRANO DURO. Tutti i diritti riservati.</p>
        <p className="footer__tagline">♥️ 👨🏻‍🍳 🇮🇹</p>
      </div>
    </footer>
  );
}
