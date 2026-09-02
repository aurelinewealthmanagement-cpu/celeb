// Cool Editorial Annual direction: shared page chrome uses midnight navy, cobalt action, saffron markers, and mist-blue surfaces across every route.
import { ArrowUpRight, Instagram, Mail, Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Link } from "wouter";

export default function SiteChrome({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell cool-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <Link className="brand-lockup" href="/" onClick={closeMenu} aria-label="Kayla Jade Blueeyed home">
          <span className="brand-seal"><span className="brand-seal-letters">KJB</span></span>
          <span className="brand-name"><span>Kayla Jade</span><span>Blueeyed</span></span>
        </Link>
        <nav id="primary-navigation" className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Primary navigation">
          <Link href="/about" onClick={closeMenu}>About</Link>
          <Link href="/bookings" onClick={closeMenu}>Bookings</Link>
          <Link href="/gallery" onClick={closeMenu}>Gallery</Link>
          <Link href="/contact" onClick={closeMenu}>Contact</Link>
        </nav>
        <div className="header-actions">
          <span className="availability-pill"><span className="status-dot" /> Available for select work</span>
          <Link className="button button-small button-dark" href="/contact" onClick={closeMenu}>Start a conversation <ArrowUpRight size={15} strokeWidth={1.8} /></Link>
          <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="primary-navigation" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </header>
      <main id="main-content">{children}</main>
      <footer className="site-footer">
        <div className="footer-topline"><span className="footer-mark">KJB</span><span className="footer-intro">A clear place for the work.</span><Link className="footer-back" href="/">Back to home <ArrowUpRight size={14} /></Link></div>
        <div className="footer-grid">
          <div className="footer-brand"><h2>Make room<br /><em>for the good stuff.</em></h2><p>For select work, thoughtful rooms, and conversations worth keeping.</p></div>
          <div className="footer-column"><span className="footer-label">Explore</span><Link href="/about">About</Link><Link href="/bookings">Bookings</Link><Link href="/gallery">Gallery</Link></div>
          <div className="footer-column"><span className="footer-label">Connect</span><a href="/contact">Contact <Mail size={13} /></a><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram <Instagram size={13} /></a></div>
        </div>
        <div className="footer-bottom"><span>© 2026 Kayla Jade Blueeyed</span><span>Made for clear yeses.</span></div>
      </footer>
    </div>
  );
}
