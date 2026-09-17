import React from 'react';
import { SEOHead } from '../components/SEOHead/SEOHead';
import { Contact } from '../sections/Contact/Contact';
import { Container } from '../components/Container/Container';
import { ScrollReveal } from '../components/ScrollReveal/ScrollReveal';

const ContactPage: React.FC = () => {
  return (
    <>
      <SEOHead title="Contact — ORBIUM" />
      <main style={{ paddingTop: '120px', backgroundColor: 'var(--bg-primary)' }}>
        <Container>
          <ScrollReveal>
            <div style={{ padding: '80px 0', borderBottom: '1px solid var(--border)' }}>
              <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 6vw, 6rem)', fontWeight: 400, margin: 0 }}>Let's talk about your next project.</h1>
            </div>
          </ScrollReveal>
        </Container>
        <Contact />
      </main>
    </>
  );
};

export default ContactPage;
