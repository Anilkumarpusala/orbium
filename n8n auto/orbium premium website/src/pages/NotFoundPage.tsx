import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead/SEOHead';
import { Container } from '../components/Container/Container';
import './NotFoundPage.css';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Page Not Found — ORBIUM"
        description="The page you're looking for doesn't exist."
      />
      <section className="not-found">
        <Container>
          <div className="not-found__content">
            <span className="not-found__code">404</span>
            <h1 className="not-found__title">Page not found</h1>
            <p className="not-found__text">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Link to="/" className="not-found__link">
              Return to homepage
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
};

export default NotFoundPage;
