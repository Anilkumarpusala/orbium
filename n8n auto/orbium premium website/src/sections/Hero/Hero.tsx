import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../components/Container/Container';
import { Button } from '../../components/Button/Button';
import './Hero.css';

export const Hero: React.FC = () => {
  return (
    <section className="hero" aria-labelledby="hero-headline">
      <Container>
        <div className="hero__grid">
          {/* Left Column: Asymmetrical Editorial Narrative */}
          <div className="hero__content">
            <h1 id="hero-headline" className="hero__headline">
              Websites built <br />
              to earn their <br />
              <span className="hero__headline-italic">place.</span>
            </h1>

            <p className="hero__description">
              Orbium designs and builds websites for businesses that need more
              than a polished surface. Strategy, design, development, and growth
              — handled from first conversation to launch.
            </p>

            <div className="hero__actions">
              <Button as={Link} to="/start-a-project" variant="primary" size="lg">
                Start a Project
              </Button>
              <a href="#work" className="btn btn--outline btn--lg">
                View the Work
              </a>
            </div>

            <div className="hero__footnote">
              <span className="hero__footnote-item">Direct with Founder Ani McQueen</span>
              <span className="hero__footnote-divider">/</span>
              <span className="hero__footnote-item">Independent Studio</span>
              <span className="hero__footnote-divider">/</span>
              <span className="hero__footnote-item">Production Systems</span>
            </div>
          </div>

          {/* Right Column: Physical & Digital Device Composition */}
          <div className="hero__visual" aria-label="Orbium Concept Work Composition">
            <div className="hero__composition">
              {/* Primary Browser Window: Norden Climate & Heating */}
              <div className="hero__browser browser-mockup">
                <div className="browser-mockup__bar">
                  <div className="browser-mockup__dots">
                    <span className="browser-mockup__dot"></span>
                    <span className="browser-mockup__dot"></span>
                    <span className="browser-mockup__dot"></span>
                  </div>
                  <div className="browser-mockup__address">
                    nordenclimate.com — residential engineering
                  </div>
                </div>

                <div className="hero__browser-screen">
                  {/* Real simulated interface preview */}
                  <div className="norden-preview">
                    <div className="norden-preview__nav">
                      <span className="norden-preview__brand">NORDEN CLIMATE</span>
                      <span className="norden-preview__status">SYSTEM ACTIVE [GEO-HEAT]</span>
                    </div>

                    <div className="norden-preview__hero">
                      <span className="norden-preview__kicker">RESIDENTIAL CLIMATE ARCHITECTURE</span>
                      <div className="norden-preview__title">Precision thermal engineering for luxury residences.</div>

                      {/* Technical architectural grid line overlay */}
                      <div className="norden-preview__cad-grid">
                        <div className="norden-cad-box">
                          <span className="norden-cad-label">SECTOR A // RADIANT CORE</span>
                          <span className="norden-cad-val">48.2 kW — BALANCE OPTIMAL</span>
                        </div>
                        <div className="norden-cad-box">
                          <span className="norden-cad-label">AIR EXCHANGE CYCLE</span>
                          <span className="norden-cad-val">0.35 ACH // HEPA-14</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Overlapping Mobile Device Viewport */}
              <div className="hero__phone phone-mockup">
                <div className="phone-mockup__notch"></div>
                <div className="phone-mockup__screen">
                  <div className="norden-mobile-preview">
                    <div className="norden-mobile-header">
                      <span>NORDEN</span>
                      <span className="norden-mobile-pill">EST. LOAD</span>
                    </div>
                    <div className="norden-mobile-headline">
                      High-yield geothermal retrofits.
                    </div>
                    <div className="norden-mobile-calc">
                      <div className="norden-mobile-stat">
                        <span className="stat-num">98.4%</span>
                        <span className="stat-desc">THERMAL RETENTION</span>
                      </div>
                      <div className="norden-mobile-bar">
                        <span className="norden-mobile-fill"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Editorial Caption Tag */}
              <div className="hero__visual-caption">
                <span className="concept-tag concept-tag--accent">ORBIUM CONCEPT</span>
                <span className="hero__caption-text">Norden Climate & Heating — Desktop + Mobile System</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
