import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead/SEOHead';
import { Container } from '../components/Container/Container';
import { processSteps } from '../data/process';
import { Button } from '../components/Button/Button';
import './ProcessPage.css';

export const ProcessPage: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="Methodology & Process — ORBIUM | 7 Deliberate Phases" 
        description="A calm, deliberate trajectory from concept to live production. Discover how founder Ani McQueen architects and engineers web systems from first conversation to launch."
      />
      <main className="process-page">
        <header className="process-page__header">
          <Container>
            <div className="process-page__header-content">
              <span className="chapter-num">METHODOLOGY // 07 PHASES</span>
              <h1 className="process-page__title">A calm, deliberate trajectory.</h1>
              <p className="process-page__subtitle">
                Great websites are not produced through chaotic sprints or template assembly lines. They are engineered through a transparent sequence of focused phases.
              </p>
            </div>
          </Container>
        </header>

        <section className="process-page__sequence-section">
          <Container size="narrow">
            <div className="process-timeline">
              {processSteps.map((step) => (
                <article key={step.number} className="process-block">
                  <div className="process-block__col-num">
                    <span className="process-block__badge">{step.number}</span>
                    <div className="process-block__rail" aria-hidden="true"></div>
                  </div>

                  <div className="process-block__body">
                    <div className="process-block__header">
                      <h2 className="process-block__title">{step.title}</h2>
                      <span className="process-block__focus">{step.focus}</span>
                    </div>

                    <p className="process-block__desc">{step.description}</p>

                    <div className="process-block__details">
                      <span className="process-block__details-label">KEY ACTIVITIES & RIGOR</span>
                      <ul className="process-block__activities">
                        {step.details?.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="process-block__deliverable">
                      <span className="process-deliv-kicker">PHASE DELIVERABLE</span>
                      <span className="process-deliv-title">{step.deliverable}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="process-page__footer-cta">
              <h2 className="process-cta-title">Ready to begin Phase 01?</h2>
              <p className="process-cta-sub">
                Every project begins with a 30-minute diagnostic session with founder Ani McQueen.
              </p>
              <Button as={Link} to="/start-a-project" variant="primary" size="lg">
                Start a Project With Ani <span>&rarr;</span>
              </Button>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
};

export default ProcessPage;
