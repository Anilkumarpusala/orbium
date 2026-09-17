import React from 'react';
import { Container } from '../../components/Container/Container';
import { ScrollReveal } from '../../components/ScrollReveal/ScrollReveal';
import './SEOGrowth.css';

interface GrowthPillar {
  title: string;
  tag: string;
  description: string;
}

const pillars: GrowthPillar[] = [
  {
    title: 'Technical SEO',
    tag: 'ARCHITECTURE',
    description: 'Schema.org JSON-LD structured data, clean crawler indexability, XML sitemaps, and canonical hygiene.'
  },
  {
    title: 'On-Page SEO',
    tag: 'CONTENT & INTENT',
    description: 'Semantic heading hierarchies, qualified search-intent alignment, and keyword density without keyword stuffing.'
  },
  {
    title: 'Local SEO',
    tag: 'GEO-TARGETING',
    description: 'High-intent geographic landing pages, citation consistency, and targeted local market authority.'
  },
  {
    title: 'Performance & Speed',
    tag: 'CORE WEB VITALS',
    description: 'LCP sub-second tuning, zero cumulative layout shift (CLS), and asset compression for immediate mobile rendering.'
  },
  {
    title: 'Analytics & Telemetry',
    tag: 'DATA HYGIENE',
    description: 'Privacy-first conversion tracking, event attribution, and actionable user decision funnel telemetry.'
  },
  {
    title: 'Conversion Optimization',
    tag: 'CRO',
    description: 'Iterative refinement of calls-to-action, form friction removal, and decision pathway clarity.'
  },
  {
    title: 'Ongoing Maintenance',
    tag: 'CONTINUITY',
    description: 'Proactive dependency audits, security patches, uptime monitoring, and continuous content expansion.'
  }
];

const lifecycleSteps = [
  { step: '01', name: 'Discover', label: 'Intent & Audit' },
  { step: '02', name: 'Build', label: 'Clean Code' },
  { step: '03', name: 'Launch', label: 'Indexed Live' },
  { step: '04', name: 'Measure', label: 'Telemetry & Data' },
  { step: '05', name: 'Improve', label: 'Iterative ROI' }
];

export const SEOGrowth: React.FC = () => {
  return (
    <section id="growth" className="seo-growth-section" aria-labelledby="seo-growth-headline">
      <Container>
        {/* Header */}
        <div className="seo-growth__header">
          <div className="seo-growth__header-left">
            <span className="label label--dark">06 // POST-LAUNCH CONTINUITY</span>
            <h2 id="seo-growth-headline" className="seo-growth__headline">
              A website should not disappear after launch.
            </h2>
          </div>
          <p className="seo-growth__lead">
            We partner with clients over the long horizon. No fabricated guarantees like '#1 on Google'—only rigorous technical architecture, clean data, and continuous measurable improvement.
          </p>
        </div>

        {/* Visual Lifecycle Flow */}
        <ScrollReveal>
          <div className="lifecycle-flow" role="region" aria-label="Website Growth Lifecycle">
            <div className="lifecycle-flow__label">THE CONTINUOUS GROWTH LOOP</div>
            <div className="lifecycle-flow__track">
              {lifecycleSteps.map((item, index) => (
                <React.Fragment key={item.step}>
                  <div className="lifecycle-flow__step">
                    <span className="lifecycle-flow__step-num">{item.step}</span>
                    <span className="lifecycle-flow__step-name">{item.name}</span>
                    <span className="lifecycle-flow__step-label">{item.label}</span>
                  </div>
                  {index < lifecycleSteps.length - 1 && (
                    <div className="lifecycle-flow__connector" aria-hidden="true">
                      <span className="lifecycle-flow__arrow">→</span>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* 7 Pillars Grid */}
        <div className="pillars-grid" role="list">
          {pillars.map((pillar, idx) => (
            <ScrollReveal key={pillar.title} delay={idx * 50}>
              <div className="pillar-card" role="listitem">
                <div className="pillar-card__header">
                  <span className="pillar-card__tag">{pillar.tag}</span>
                  <span className="pillar-card__dot" aria-hidden="true" />
                </div>
                <h3 className="pillar-card__title">{pillar.title}</h3>
                <p className="pillar-card__desc">{pillar.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SEOGrowth;
