import React from 'react';
import { Container } from '../../components/Container/Container';
import { ScrollReveal } from '../../components/ScrollReveal/ScrollReveal';
import './TrustStrip.css';

export const TrustStrip: React.FC = () => {
  return (
    <section className="positioning" aria-label="Orbium Positioning Statement">
      <Container>
        <div className="positioning__wrapper">
          {/* Header Marker */}
          <div className="positioning__tag">
            <span className="label">02 // DISCIPLINE</span>
            <span className="positioning__tag-line" aria-hidden="true" />
          </div>

          {/* Staggered Editorial Typography Cascade */}
          <div className="positioning__cascade" aria-label="Strategy. Design. Development. Growth.">
            <ScrollReveal direction="up">
              <div className="positioning__row positioning__row--1">
                <span className="positioning__word">Strategy<span className="positioning__dot">.</span></span>
                <span className="positioning__descriptor">01 // Market & Intent</span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={80}>
              <div className="positioning__row positioning__row--2">
                <span className="positioning__word serif-italic">Design<span className="positioning__dot">.</span></span>
                <span className="positioning__descriptor">02 // Editorial & Systems</span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={160}>
              <div className="positioning__row positioning__row--3">
                <span className="positioning__word">Development<span className="positioning__dot">.</span></span>
                <span className="positioning__descriptor">03 // Modern React & 3D</span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={240}>
              <div className="positioning__row positioning__row--4">
                <span className="positioning__word serif-italic">Growth<span className="positioning__dot">.</span></span>
                <span className="positioning__descriptor">04 // Search & Conversion</span>
              </div>
            </ScrollReveal>
          </div>

          {/* Concise Statement Conclusion */}
          <ScrollReveal direction="up" delay={300}>
            <div className="positioning__conclusion">
              <div className="positioning__bar" aria-hidden="true" />
              <div className="positioning__statement-row">
                <p className="positioning__statement">
                  One independent studio from first idea to launch.
                </p>
                <p className="positioning__subtext">
                  Direct collaboration with the creator. No account managers, no fragmented handoffs, no template shortcuts.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
};

export default TrustStrip;
