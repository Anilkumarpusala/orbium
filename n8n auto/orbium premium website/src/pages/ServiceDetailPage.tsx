import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead/SEOHead';
import { Container } from '../components/Container/Container';
import { ScrollReveal } from '../components/ScrollReveal/ScrollReveal';
import { Button } from '../components/Button/Button';
import { services } from '../data/services';
import './ServiceDetailPage.css';

interface ServiceDetailConfig {
  overview: string[];
  deliverables: string[];
  approach: string;
}

const serviceDetailsMap: Record<string, ServiceDetailConfig> = {
  'digital-strategy': {
    overview: [
      "Digital strategy at Orbium begins with radical clarity. We strip away superficial marketing trends and focus directly on how your prospective clients make decisions, how your competitors position themselves, and where your distinct market advantage lies.",
      "Rather than generating generic slide decks, we translate qualitative business insights into actionable architecture: site hierarchy, conversion pathways, content requirements, and technical prerequisites."
    ],
    deliverables: [
      "Audience persona & decision journey mapping",
      "Competitive digital positioning audit",
      "Information architecture & sitemap specification",
      "Conversion funnels & call-to-action blueprints",
      "Technical infrastructure recommendations"
    ],
    approach: "Strategic rigor before aesthetic execution. We establish measurable benchmarks before touching a single line of code or design file."
  },
  'web-design': {
    overview: [
      "We design websites that feel deliberate, editorial, and unmistakably distinct. In a landscape dominated by generic templates, Orbium creates bespoke visual languages calibrated specifically to your brand's authority and price point.",
      "Every typographic choice, spacing rhythm, and subtle interface element serves to communicate confidence and trust to prospective high-value clients."
    ],
    deliverables: [
      "Bespoke responsive design systems (mobile, tablet, desktop, ultrawide)",
      "Editorial typography pairing & typographic hierarchies",
      "Custom UI component libraries & interactive states",
      "Motion guidelines & purposeful micro-interactions",
      "Complete design tokens ready for production engineering"
    ],
    approach: "Form in service of message. We treat digital design as editorial architecture, ensuring readability, hierarchy, and memorable visual presence."
  },
  'web-development': {
    overview: [
      "Orbium builds production websites using modern engineering principles. No bloated drag-and-drop page builders, no unstable plugin ecosystems. We engineer clean, high-performance React and TypeScript applications.",
      "Our sites achieve sub-second load times, flawless accessibility compliance, and structural cleanliness that remains effortless to maintain and scale over years of business growth."
    ],
    deliverables: [
      "Component-based React & TypeScript production architecture",
      "Sub-second load times with Core Web Vitals optimization",
      "Semantic HTML5 & WCAG 2.1 AA accessibility compliance",
      "Fluid responsive layouts tested across 8+ viewport breakpoints",
      "Modular API & webhook integrations (n8n, CRM, marketing automation)"
    ],
    approach: "Clean code, zero unnecessary dependencies, and uncompromising performance. We build digital assets that endure."
  },
  'interactive-experiences': {
    overview: [
      "When a project demands visual memorability beyond static interfaces, we craft sophisticated interactive experiences using Three.js, WebGL, and purposeful motion design.",
      "These moments are never superficial novelties. They are controlled, responsive digital systems that reinforce your technological capability and command attention."
    ],
    deliverables: [
      "Three.js & WebGL spatial visuals and orbital systems",
      "Interactive data visualizations & product demonstrations",
      "Scroll-driven narrative transitions & cursor responses",
      "Device-aware rendering & reduced-motion fallbacks",
      "Optimized shader code ensuring consistent 60fps performance"
    ],
    approach: "Motion with purpose. We utilize interactive 3D to create depth and tactile engagement without sacrificing mobile accessibility or loading speed."
  },
  'seo': {
    overview: [
      "Search visibility is an engineering discipline, not magic. Orbium embeds technical SEO directly into the structural DNA of every website from day one.",
      "We ensure search engines parse your content flawlessly with structured Schema.org data, clean semantic hierarchy, lightning-fast rendering, and strategic on-page architecture targeted at qualified search intent."
    ],
    deliverables: [
      "Comprehensive Schema.org structured data (Organization, LocalBusiness, Service, WebSite)",
      "Technical crawler optimization (XML sitemaps, robots.txt, canonicalization)",
      "Core Web Vitals tuning (LCP, FID/INP, CLS)",
      "Search-intent on-page architecture & semantic heading structures",
      "Automated metadata & OpenGraph social distribution standards"
    ],
    approach: "A website should not disappear after launch. We build the technical foundation so qualified clients can discover and trust your business."
  },
  'growth': {
    overview: [
      "Launch is day one. Orbium partners with growing businesses to provide proactive maintenance, performance monitoring, continuous SEO improvements, and iterative conversion rate optimization.",
      "Your website remains fast, secure, updated, and continuously refined as your business and service offerings expand."
    ],
    deliverables: [
      "Continuous Core Web Vitals & performance monitoring",
      "Technical security, dependency updates & uptime protection",
      "Iterative conversion rate optimization (CRO) testing",
      "Content updates, new case studies & service expansion pages",
      "Monthly search visibility & performance analytics reviews"
    ],
    approach: "Ongoing partnership without bureaucratic agency layers. You work directly with the creators who know your digital infrastructure inside and out."
  }
};

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const serviceIndex = services.findIndex(
    s => s.slug === slug || s.id === slug || (slug === 'seo' && s.id.startsWith('seo')) || (slug === 'growth' && s.id.includes('growth'))
  );
  const service = services[serviceIndex];

  if (!service) {
    return (
      <div className="service-detail-404">
        <Container>
          <h1>Service not found.</h1>
          <Button to="/services" variant="outline">Back to Services</Button>
        </Container>
      </div>
    );
  }

  const detailConfig = serviceDetailsMap[service.slug] || serviceDetailsMap[service.id] || {
    overview: [
      service.description,
      "We approach this through a meticulous process designed to align with your core business objectives, ensuring every decision drives measurable impact."
    ],
    deliverables: [
      "Strategic planning & discovery",
      "Competitive analysis",
      "Custom architecture",
      "Performance optimization",
      "Ongoing support & iteration"
    ],
    approach: "Analytical rigor combined with high-end creative execution."
  };

  const otherServices = services.filter(s => s.slug !== service.slug);

  return (
    <>
      <SEOHead 
        title={`${service.title} — ORBIUM Services`}
        description={service.description}
      />
      <main className="service-detail">
        <header className="service-detail__header">
          <Container>
            <ScrollReveal>
              <div className="service-detail__nav-back">
                <Link to="/services" className="service-detail__back-link">
                  ← All Services
                </Link>
              </div>
              <div className="service-detail__num">{service.number}</div>
              <h1 className="service-detail__title">{service.title}</h1>
              <p className="service-detail__lead">{service.description}</p>
            </ScrollReveal>
          </Container>
        </header>

        <section className="service-detail__content">
          <Container>
            <div className="service-detail__grid">
              <ScrollReveal>
                <div className="service-detail__description">
                  <h2 className="service-detail__section-heading">Strategic Overview</h2>
                  {detailConfig.overview.map((para, i) => (
                    <p key={i} className="service-detail__text">{para}</p>
                  ))}

                  <div className="service-detail__approach-box">
                    <h3 className="service-detail__approach-title">Our Philosophy</h3>
                    <p className="service-detail__approach-text">{detailConfig.approach}</p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={150}>
                <div className="service-detail__features">
                  <h3 className="service-detail__features-heading">Scope & Deliverables</h3>
                  <ul className="service-detail__features-list">
                    {detailConfig.deliverables.map((item, idx) => (
                      <li key={idx} className="service-detail__feature-item">
                        <span className="service-detail__feature-dot" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="service-detail__cta-wrap">
                    <Button to="/contact" variant="primary" size="lg">
                      Inquire About This Service
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </Container>
        </section>

        <section className="service-detail__more">
          <Container>
            <div className="service-detail__more-header">
              <span className="label">Other Disciplines</span>
              <h2 className="heading-4">Explore More Services</h2>
            </div>
            <div className="service-detail__other-grid">
              {otherServices.map((other) => (
                <Link 
                  key={other.slug} 
                  to={`/services/${other.slug}`}
                  className="service-detail__other-card"
                >
                  <span className="service-detail__other-num">{other.number}</span>
                  <h3 className="service-detail__other-title">{other.title}</h3>
                  <p className="service-detail__other-desc">{other.description}</p>
                </Link>
              ))}
            </div>
            <div className="service-detail__more-cta">
              <Button to="/services" variant="outline">View All Services</Button>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
};

export default ServiceDetailPage;
