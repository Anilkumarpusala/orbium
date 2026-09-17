import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../components/Container/Container';
import { processSteps } from '../../data/process';
import './Process.css';

export const Process: React.FC = () => {
  return (
    <section id="process" className="process-editorial" aria-labelledby="process-headline">
      <Container>
        {/* Section Header */}
        <div className="process-editorial__header">
          <div className="process-editorial__intro">
            <span className="chapter-num">04 // HOW THE WORK HAPPENS</span>
            <h2 id="process-headline" className="process-editorial__headline">
              A calm, deliberate trajectory.
            </h2>
          </div>
          <p className="process-editorial__lead">
            Great websites are not produced through chaotic sprints or template assembly lines. They are engineered through a transparent sequence of focused phases.
          </p>
        </div>

        {/* Editorial Vertical Sequence */}
        <div className="process-editorial__sequence">
          {processSteps.map((step) => (
            <div key={step.number} className="process-step">
              <div className="process-step__col-num">
                <span className="process-step__num">{step.number}</span>
                <span className="process-step__line" aria-hidden="true"></span>
              </div>

              <div className="process-step__col-main">
                <div className="process-step__title-row">
                  <h3 className="process-step__title">{step.title}</h3>
                  <span className="process-step__focus">{step.focus}</span>
                </div>
                <p className="process-step__desc">{step.description}</p>
                <div className="process-step__deliverable">
                  <span className="process-step__deliv-label">PHASE DELIVERABLE:</span>
                  <span className="process-step__deliv-val">{step.deliverable}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="process-editorial__cta">
          <Link to="/process" className="process-editorial__more-link">
            Read Detailed Methodology & Engagements <span>&rarr;</span>
          </Link>
        </div>
      </Container>
    </section>
  );
};
