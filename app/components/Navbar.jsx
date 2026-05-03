'use client';

import { useState, useEffect } from 'react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => setMobileOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-bg-primary/90 backdrop-blur-md border-b border-edge/60'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-display font-bold text-xl tracking-tight flex items-center gap-2 group"
        >
          <span className="w-8 h-8 rounded-lg bg-mint/10 border border-mint/30 flex items-center justify-center text-mint text-sm font-mono font-medium transition-all duration-300 group-hover:bg-mint/20 group-hover:border-mint/60">
            KR
          </span>
          <span className="text-ink-primary transition-colors duration-200 group-hover:text-mint">
            Kushal R.
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="nav-link text-sm font-sans text-ink-muted hover:text-ink-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="mailto:kushalr1096@gmail.com"
              className="ml-2 px-4 py-2 rounded-lg border border-mint/40 text-mint text-sm font-sans font-medium transition-all duration-300 hover:bg-mint/10 hover:border-mint/70 hover:shadow-[0_0_20px_rgba(0,229,160,0.15)]"
            >
              Hire Me
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 group"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-px w-6 bg-ink-muted transition-all duration-300 origin-center ${
              mobileOpen ? 'rotate-45 translate-y-2.5' : ''
            }`}
          />
          <span
            className={`block h-px w-6 bg-ink-muted transition-all duration-300 ${
              mobileOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-px w-6 bg-ink-muted transition-all duration-300 origin-center ${
              mobileOpen ? '-rotate-45 -translate-y-2.5' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-400 overflow-hidden ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-bg-secondary/95 backdrop-blur-md border-t border-edge px-6 py-6 flex flex-col gap-5">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={handleLinkClick}
              className="text-ink-muted hover:text-mint font-sans text-base transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:kushalr1096@gmail.com"
            onClick={handleLinkClick}
            className="mt-2 px-5 py-2.5 rounded-lg border border-mint/40 text-mint text-sm text-center font-medium hover:bg-mint/10 transition-all duration-200"
          >
            Hire Me
          </a>
        </div>
      </div>
    </header>
  );
}
