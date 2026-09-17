import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../components/Container/Container';
import { Button } from '../../components/Button/Button';
import './FinalCTA.css';

export const FinalCTA: React.FC = () => {
  return (
    <section className="final-cta" aria-labelledby="cta-headline">
      <Container size="narrow">
        <div className="final-cta__wrapper">
          <span className="chapter-num">07 // INQUIRY</span>

          <h2 id="cta-headline" className="final-cta__headline">
            Have something worth building?
          </h2>

          <p className="final-cta__subtext">
            Tell us what you're working on, where things stand today, and where you want to take it. We review every inquiry personally and respond within one business day.
          </p>

          <div className="final-cta__actions">
            <Button as={Link} to="/start-a-project" variant="primary" size="lg">
              Start a Project <span>&rarr;</span>
            </Button>
            <a href="mailto:ani@orbiumai.online" className="final-cta__email-link">
              ani@orbiumai.online
            </a>
          </div>

          <div className="final-cta__pledge">
            <span>Direct review by Ani McQueen &bull; Initial diagnostic response within 24 hours</span>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FinalCTA;
