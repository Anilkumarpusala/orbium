import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead/SEOHead';
import { Container } from '../components/Container/Container';
import { services } from '../data/services';
import './ServicesPage.css';

export const ServicesPage: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="Services & Capabilities — ORBIUM | Digital Architecture Studio" 
        description="Comprehensive breakdown of Orbium's 6 core disciplines: Web Strategy, Web Design, Web Development, SEO & Search Architecture, Conversion Optimization, and Website Care."
      />
      <main className="services-page">
        <header className="services-page__header">
          <Container>
            <div className="services-page__header-content">
              <span className="chapter-num">CAPABILITIES // 06 DISCIPLINES</span>
              <h1 className="services-page__title">Disciplined digital infrastructure.</h1>
              <p className="services-page__subtitle">
                We reject superficial redesigns. Every engagement unites rigorous commercial strategy, editorial craft, and production software engineering.
              </p>
            </div>
          </Container>
        </header>

        <section className="services-page__list">
          <Container>
            <div className="services-page__items">
              {services.map((service) => (
                <article key={service.id} className="service-archive-card">
                  <div className="service-archive-card__header">
                    <span className="service-archive-card__num">{service.number}</span>
                    <h2 className="service-archive-card__title">{service.title}</h2>
                  </div>

                  <p className="service-archive-card__desc">{service.description}</p>

                  <div className="service-archive-card__grid">
                    <div className="service-archive-card__col">
                      <span className="service-col-heading">WHAT IT SOLVES</span>
                      <p className="service-col-text">{service.whatItSolves}</p>
                    </div>

                    <div className="service-archive-card__col">
                      <span className="service-col-heading">WHAT ORBIUM ACTUALLY DOES</span>
                      <ul className="service-col-list">
                        {service.whatOrbiumDoes?.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="service-archive-card__col">
                      <span className="service-col-heading">WHAT YOU RECEIVE</span>
                      <ul className="service-col-list service-col-list--deliverables">
                        {service.whatYouReceive?.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="service-archive-card__footer">
                    <Link to="/start-a-project" className="service-archive-card__cta">
                      Inquire About {service.title} <span>&rarr;</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>
      </main>
    </>
  );
};

export default ServicesPage;
