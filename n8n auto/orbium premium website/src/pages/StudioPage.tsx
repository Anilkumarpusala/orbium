import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead/SEOHead';
import { Container } from '../components/Container/Container';
import founderPhoto from '../assets/founder-ani.jpg';
import { Button } from '../components/Button/Button';
import './StudioPage.css';

export const StudioPage: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="Studio & Founder — ORBIUM | Independent Digital Practice" 
        description="Orbium is an independent, founder-led digital studio by Ani McQueen. We design and engineer websites for businesses that need more than a polished surface."
      />
      <main className="studio-page">
        {/* Editorial Header */}
        <header className="studio-page__header">
          <Container>
            <div className="studio-page__header-intro">
              <span className="chapter-num">THE STUDIO // FOUNDER-LED ARCHITECTURE</span>
              <h1 className="studio-page__title">
                Independent by design. <br />
                Focused by choice.
              </h1>
              <p className="studio-page__lead">
                Orbium was founded on a simple realization: the best websites are built when strategy, visual craft, and production software engineering are held in the same hands.
              </p>
            </div>
          </Container>
        </header>

        {/* Founder Composition */}
        <section className="studio-page__founder-section">
          <Container>
            <div className="studio-page__grid">
              <div className="studio-page__portrait-wrap">
                <div className="studio-portrait-frame">
                  <img
                    src={founderPhoto}
                    alt="Ani McQueen — Founder of Orbium"
                    className="studio-portrait-img"
                    width={520}
                    height={620}
                  />
                  <div className="studio-portrait-caption">
                    <span className="studio-founder-name">ANI McQUEEN</span>
                    <span className="studio-founder-title">FOUNDER &bull; PRINCIPAL ARCHITECT</span>
                  </div>
                </div>
              </div>

              <div className="studio-page__manifesto">
                <h2 className="studio-page__section-title">
                  Why Orbium Exists
                </h2>
                <div className="studio-page__prose">
                  <p>
                    Good websites should not have to choose between strong design and serious engineering.
                  </p>
                  <p>
                    In traditional web agencies, client work gets diluted through layers of bureaucracy. An account manager sells the engagement. A strategist creates a theoretical deck. A junior designer picks a popular Figma template. A detached developer stitches third-party plugins together. By launch day, the strategic clarity that won the project has dissolved into compromises.
                  </p>
                  <p>
                    Orbium operates as a focused independent studio. When you work with Orbium, you collaborate directly with me. Every strategic decision, typographic hierarchy, responsive breakpoint, and line of production code is authored with singular intent.
                  </p>
                  <p>
                    We intentionally limit our client intake to a select handful of concurrent engagements. This ensures the structural depth and obsessive attention to detail that serious companies deserve.
                  </p>
                </div>

                <div className="studio-page__principles">
                  <div className="studio-principle">
                    <span className="studio-principle__num">01</span>
                    <h3 className="studio-principle__title">The Work Is the Identity</h3>
                    <p className="studio-principle__desc">
                      No synthetic awards, no fabricated testimonials, no marketing hype. The caliber, speed, and integrity of the finished software speaks for itself.
                    </p>
                  </div>

                  <div className="studio-principle">
                    <span className="studio-principle__num">02</span>
                    <h3 className="studio-principle__title">No Intermediaries</h3>
                    <p className="studio-principle__desc">
                      Direct dialogue with the practitioner who actually builds your website. Questions are answered immediately; revisions are executed with structural understanding.
                    </p>
                  </div>

                  <div className="studio-principle">
                    <span className="studio-principle__num">03</span>
                    <h3 className="studio-principle__title">Commercial Respect</h3>
                    <p className="studio-principle__desc">
                      We treat your capital and timeline with fiduciary discipline. Fixed scopes, clear deliverables, and guaranteed 24-hour diagnostic communication.
                    </p>
                  </div>
                </div>

                <div className="studio-page__actions">
                  <Button as={Link} to="/start-a-project" variant="primary" size="lg">
                    Start a Project With Ani
                  </Button>
                  <a href="mailto:ani@orbiumai.online" className="studio-page__email">
                    ani@orbiumai.online
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
};

export default StudioPage;
