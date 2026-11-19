import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navLinks, siteLogo } from '@/mocks/home';

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const solid = scrolled || menuOpen;

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-colors duration-300 ${
        solid
          ? 'bg-background-50/95 backdrop-blur-md border-b border-background-200'
          : 'bg-transparent'
      }`}
    >
      <div className="flex h-16 w-full items-center justify-between px-4 md:h-20 md:px-8">
        <Link to="/" className="flex h-full items-center" onClick={() => setMenuOpen(false)}>
          <img
            src={siteLogo}
            alt="7Mantle Studios logo"
            className={`h-7 w-auto object-contain transition-all duration-300 md:h-9 ${
              solid ? '' : 'brightness-0 invert'
            }`}
          />
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium tracking-wide transition-colors ${
                  isActive
                    ? 'text-primary-700'
                    : solid
                      ? 'text-foreground-700 hover:text-primary-700'
                      : 'text-background-100 hover:text-primary-300'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/jobs"
            className="inline-flex items-center whitespace-nowrap rounded-full bg-primary-500 px-6 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-foreground-950 transition-colors hover:bg-primary-400"
          >
            Trial
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className={`flex h-10 w-10 items-center justify-center rounded-md text-xl transition-colors md:hidden ${
            solid ? 'text-foreground-900' : 'text-background-50'
          }`}
        >
          <i className={menuOpen ? 'ri-close-line' : 'ri-menu-line'}></i>
        </button>
      </div>

      <div
        className={`overflow-hidden border-background-200 bg-background-50 transition-all duration-300 md:hidden ${
          menuOpen ? 'max-h-96 border-t' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col px-4 py-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `py-3 text-base font-medium transition-colors ${
                  isActive ? 'text-primary-700' : 'text-foreground-700'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/jobs"
            onClick={() => setMenuOpen(false)}
            className="mt-2 inline-flex items-center justify-center whitespace-nowrap rounded-full bg-primary-500 px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-foreground-950"
          >
            Trial
          </Link>
        </nav>
      </div>
    </header>
  );
}