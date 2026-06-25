import { useEffect, useState } from 'react';

const links = [
  { href: '#philosophy', label: 'Filozofia' },
  { href: '#menu', label: 'Menu' },
  { href: '#signatures', label: 'Dania' },
  { href: '#chef', label: 'Szef' },
  { href: '#reviews', label: 'Opinie' },
  { href: '#visit', label: 'Wizyta' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleNav = () => setOpen(false);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <a href="#" className="navbar__logo" onClick={handleNav}>
          <span className="navbar__logo-mark">GD</span>
          <span className="navbar__logo-text">
            Grano <em>Duro</em>
          </span>
        </a>

        <nav className={`navbar__nav ${open ? 'navbar__nav--open' : ''}`}>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={handleNav}>
              {link.label}
            </a>
          ))}
          <a href="#visit" className="btn btn--gold navbar__cta" onClick={handleNav}>
            Rezerwacja
          </a>
        </nav>

        <button
          type="button"
          className={`navbar__toggle ${open ? 'navbar__toggle--open' : ''}`}
          aria-label={open ? 'Zamknij menu' : 'Otwórz menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className="navbar__toggle-box" aria-hidden="true">
            <span />
            <span />
          </span>
        </button>
      </div>
    </header>
  );
}
