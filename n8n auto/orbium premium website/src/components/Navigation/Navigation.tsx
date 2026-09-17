import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../Button/Button';
import './Navigation.css';

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Work', path: '/work' },
    { name: 'Services', path: '/services' },
    { name: 'Process', path: '/process' },
    { name: 'Studio', path: '/studio' },
    { name: 'Insights', path: '/insights' },
  ];

  const isActive = (path: string) => location.pathname.startsWith(path);

  return (
    <header className={`navigation ${isScrolled ? 'navigation--scrolled' : ''}`}>
      <nav className="navigation__inner" role="navigation" aria-label="Main Navigation">
        <Link to="/" className="navigation__brand">
          ORBIUM
        </Link>

        <div className="navigation__links">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`navigation__link ${isActive(link.path) ? 'navigation__link--active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="navigation__action">
          <Button as={Link} to="/start-a-project" variant="primary" size="md">
            Start a Project
          </Button>
        </div>

        <button
          className="navigation__hamburger"
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle menu"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="navigation__hamburger-line"></span>
          <span className="navigation__hamburger-line"></span>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`navigation__mobile-overlay ${isMobileMenuOpen ? 'navigation__mobile-overlay--open' : ''}`}>
        <div className="navigation__mobile-header">
          <Link to="/" className="navigation__brand">ORBIUM</Link>
          <button
            className="navigation__close-btn"
            aria-label="Close menu"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            &times;
          </button>
        </div>
        <div className="navigation__mobile-links">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`navigation__mobile-link ${isActive(link.path) ? 'navigation__mobile-link--active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/start-a-project" className="navigation__mobile-link navigation__mobile-link--accent">
            Start a Project
          </Link>
        </div>
      </div>
    </header>
  );
};
