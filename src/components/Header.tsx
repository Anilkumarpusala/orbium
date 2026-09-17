import React, { useState, useEffect } from 'react';

interface HeaderProps {
  activePath?: string;
}

export const Header: React.FC<HeaderProps> = ({ activePath = '/' }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '/work/' },
    { name: 'Services', href: '/services/' },
    { name: 'About', href: '/about/' },
    { name: 'Insights', href: '/insights/' },
    { name: 'Contact', href: '/contact/' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${scrolled ? 'bg-[#090A0B]/90 backdrop-blur-md border-b border-white/10 shadow-lg' : 'bg-[#090A0B]/85 backdrop-blur-md border-b border-white/5'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="/" className="flex items-center group">
          <img
            src="/assets/images/logo.png"
            alt="ORBIUM Logo"
            style={{ height: '28px', maxHeight: '28px', width: 'auto' }}
            className="h-7 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
          />
          <span className="tracking-[0.2em] font-semibold text-sm text-white ml-3">ORBIUM</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activePath === link.href || (link.href !== '/' && activePath.startsWith(link.href.replace(/\/$/, '')));
            return (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs uppercase tracking-wider transition-colors duration-150 ${
                  isActive ? 'text-white font-medium' : 'text-[#9CA3AF] hover:text-white'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center">
          <a href="/contact/" className="btn-primary text-xs uppercase tracking-wider py-2.5 px-5">
            Start a Project
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-white hover:text-[#0066FF] transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#090A0B] border-b border-white/10 px-6 py-6 animate-fade-in-up">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm uppercase tracking-wider text-[#9CA3AF] hover:text-white py-2 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="/contact/"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary w-full text-center text-xs uppercase tracking-wider py-3"
              >
                Start a Project
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
