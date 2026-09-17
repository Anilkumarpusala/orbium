import React from 'react';
import { SEOHead } from '../components/SEOHead/SEOHead';
import { Container } from '../components/Container/Container';
import { ScrollReveal } from '../components/ScrollReveal/ScrollReveal';

const PrivacyPage: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="Privacy Policy — ORBIUM" 
        description="Orbium's privacy commitment regarding client information, project data, and website telemetry."
      />
      <main className="section" style={{ paddingTop: 'calc(var(--nav-height) + var(--space-12))' }}>
        <Container size="narrow">
          <ScrollReveal>
            <span className="label">Legal & Privacy</span>
            <h1 className="heading-1" style={{ margin: 'var(--space-3) 0 var(--space-4)' }}>Privacy Policy</h1>
            <p className="body-small" style={{ color: 'var(--color-text-tertiary)', marginBottom: 'var(--space-12)' }}>
              Last updated: September 2025
            </p>
            
            <div className="max-reading-width">
              <section style={{ marginBottom: 'var(--space-10)' }}>
                <h2 className="heading-5" style={{ marginBottom: 'var(--space-3)' }}>1. Commitment to Privacy</h2>
                <p className="body-base" style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-4)' }}>
                  Orbium ("we", "our", or "studio") is an independent digital studio. We believe in digital minimalism and data dignity. We do not sell, rent, monetize, or broker personal information or client project records to any third-party brokers.
                </p>
              </section>

              <section style={{ marginBottom: 'var(--space-10)' }}>
                <h2 className="heading-5" style={{ marginBottom: 'var(--space-3)' }}>2. Information We Collect</h2>
                <p className="body-base" style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-4)' }}>
                  When you submit a project inquiry or contact our studio directly, we collect:
                </p>
                <ul style={{ paddingLeft: 'var(--space-6)', listStyle: 'disc', color: 'var(--color-text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>
                  <li>Your name and business name</li>
                  <li>Direct communication information (email address, optional telephone number)</li>
                  <li>Project scope, budget range, and timeline parameters</li>
                  <li>Qualitative project briefs submitted through our inquiry form</li>
                </ul>
              </section>

              <section style={{ marginBottom: 'var(--space-10)' }}>
                <h2 className="heading-5" style={{ marginBottom: 'var(--space-3)' }}>3. How Your Information Is Used</h2>
                <p className="body-base" style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-4)' }}>
                  Information collected is strictly utilized to evaluate prospective project compatibility, prepare tailored scopes of work, and communicate directly with you during discovery and active design/engineering sprints.
                </p>
              </section>

              <section style={{ marginBottom: 'var(--space-10)' }}>
                <h2 className="heading-5" style={{ marginBottom: 'var(--space-3)' }}>4. Technical Infrastructure & Webhooks</h2>
                <p className="body-base" style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-4)' }}>
                  Inquiries submitted via our contact system are routed securely to our studio automation pipeline (hosted n8n instance) using encrypted HTTPS payloads. We maintain strict access credentials and data minimization protocols.
                </p>
              </section>

              <section style={{ marginBottom: 'var(--space-10)' }}>
                <h2 className="heading-5" style={{ marginBottom: 'var(--space-3)' }}>5. Direct Inquiries</h2>
                <p className="body-base" style={{ color: 'var(--color-text-secondary)' }}>
                  For questions regarding our privacy practices or to request data removal, email us directly at <a href="mailto:ani@orbiumai.online" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>ani@orbiumai.online</a>.
                </p>
              </section>
            </div>
          </ScrollReveal>
        </Container>
      </main>
    </>
  );
};

export default PrivacyPage;
