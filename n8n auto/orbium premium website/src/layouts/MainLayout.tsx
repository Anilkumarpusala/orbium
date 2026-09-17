import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navigation } from '../components/Navigation/Navigation';
import { Footer } from '../sections/Footer/Footer';
import './MainLayout.css';

export const MainLayout: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="layout">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navigation />
      <main id="main-content" className="layout__main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
