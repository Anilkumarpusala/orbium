import React from 'react';
import { SEOHead } from '../components/SEOHead/SEOHead';
import { Container } from '../components/Container/Container';
import { ScrollReveal } from '../components/ScrollReveal/ScrollReveal';

const TermsPage: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="Terms of Service — ORBIUM" 
        description="Orbium's terms of service and client engagement parameters."
      />
      <main className="section" style={{ paddingTop: 'calc(var(--nav-height) + var(--space-12))' }}>
        <Container size="narrow">
          <ScrollReveal>
            <span className="label">Legal & Terms</span>
            <h1 className="heading-1" style={{ margin: 'var(--space-3) 0 var(--space-4)' }}>Terms of Service</h1>
            <p className="body-small" style={{ color: 'var(--color-text-tertiary)', marginBottom: 'var(--space-12)' }}>
              Last updated: September 2025
            </p>
            
            <div className="max-reading-width">
              <section style={{ marginBottom: 'var(--space-10)' }}>
                <h2 className="heading-5" style={{ marginBottom: 'var(--space-3)' }}>1. Studio Engagements</h2>
                <p className="body-base" style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-4)' }}>
                  Orbium operates as an independent digital studio. All client engagements are governed by individual Master Services Agreements (MSAs) and Statements of Work (SOWs) executed between Orbium and the client prior to project commencement.
                </p>
              </section>

              <section style={{ marginBottom: 'var(--space-10)' }}>
                <h2 className="heading-5" style={{ marginBottom: 'var(--space-3)' }}>2. Intellectual Property</h2>
                <p className="body-base" style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-4)' }}>
                  Unless explicitly outlined in a custom contract, upon final payment, clients receive full ownership of bespoke design assets, custom codebases, and production deliverables created for their engagement. Orbium retains the right to display completed work in studio retrospectives and portfolios.
                </p>
              </section>

              <section style={{ marginBottom: 'var(--space-10)' }}>
                <h2 className="heading-5" style={{ marginBottom: 'var(--space-3)' }}>3. Conceptual & Experimental Work</h2>
                <p className="body-base" style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-4)' }}>
                  Work displayed on this website labeled as "Concept" or "Experimental" represents internal studio explorations, technical prototypes, or speculative identity systems developed to demonstrate studio capabilities without fictional client endorsement.
                </p>
              </section>

              <section style={{ marginBottom: 'var(--space-10)' }}>
                <h2 className="heading-5" style={{ marginBottom: 'var(--space-3)' }}>4. Inquiries & Consultations</h2>
                <p className="body-base" style={{ color: 'var(--color-text-secondary)' }}>
                  Submitting an inquiry through our website does not create a binding contractual agreement until a formal proposal has been accepted and signed by both parties. Direct questions to <a href="mailto:ani@orbiumai.online" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>ani@orbiumai.online</a>.
                </p>
              </section>
            </div>
          </ScrollReveal>
        </Container>
      </main>
    </>
  );
};

export default TermsPage;
