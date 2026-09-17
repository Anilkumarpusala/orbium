import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../components/Container/Container';
import { services } from '../../data/services';
import './Services.css';

export const Services: React.FC = () => {
  const [expandedService, setExpandedService] = useState<string>('web-strategy');

  const toggleService = (id: string) => {
    setExpandedService(prev => prev === id ? '' : id);
  };

  return (
    <section id="services" className="services-editorial" aria-labelledby="services-headline">
      <Container>
        {/* Section Header */}
        <div className="services-editorial__header">
          <div className="services-editorial__intro">
            <span className="chapter-num">03 // WHAT ORBIUM DOES</span>
            <h2 id="services-headline" className="services-editorial__headline">
              Disciplined digital infrastructure, built to perform.
            </h2>
          </div>
          <p className="services-editorial__lead">
            Every engagement connects commercial strategy, visual identity, and production software. No junior handoffs, no bloated retainers, and no decorative filler.
          </p>
        </div>

        {/* Numbered Editorial System */}
        <div className="services-editorial__directory">
          {services.map((service) => {
            const isExpanded = expandedService === service.id;
            return (
              <div
                key={service.id}
                className={`service-row ${isExpanded ? 'service-row--expanded' : ''}`}
              >
                <div
                  className="service-row__summary"
                  onClick={() => toggleService(service.id)}
                  role="button"
                  tabIndex={0}
                  aria-expanded={isExpanded}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleService(service.id);
                    }
                  }}
                >
                  <span className="service-row__number">{service.number}</span>
                  <div className="service-row__title-group">
                    <h3 className="service-row__title">{service.title}</h3>
                    <p className="service-row__short-desc">{service.description}</p>
                  </div>
                  <div className="service-row__toggle-icon" aria-hidden="true">
                    <span>{isExpanded ? '—' : '+'}</span>
                  </div>
                </div>

                {/* Expanded Deep-Dive Details */}
                {isExpanded && (
                  <div className="service-row__details">
                    <div className="service-detail-grid">
                      {/* What it solves */}
                      <div className="service-detail-col">
                        <span className="service-detail-label">WHAT IT SOLVES</span>
                        <p className="service-detail-text">{service.whatItSolves}</p>
                      </div>

                      {/* What Orbium does */}
                      <div className="service-detail-col">
                        <span className="service-detail-label">WHAT ORBIUM ACTUALLY DOES</span>
                        <ul className="service-detail-list">
                          {service.whatOrbiumDoes?.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Deliverables */}
                      <div className="service-detail-col">
                        <span className="service-detail-label">WHAT YOU RECEIVE</span>
                        <ul className="service-detail-list service-detail-list--deliverables">
                          {service.whatYouReceive?.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="service-row__footer">
                      <Link to={`/services/${service.slug}`} className="service-row__deep-link">
                        Explore {service.title} Specification <span>&rarr;</span>
                      </Link>
                      <Link to="/start-a-project" className="service-row__inquire-link">
                        Inquire About This Service
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
