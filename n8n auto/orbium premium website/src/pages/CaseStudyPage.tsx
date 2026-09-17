import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead/SEOHead';
import { Container } from '../components/Container/Container';
import { ScrollReveal } from '../components/ScrollReveal/ScrollReveal';
import { Button } from '../components/Button/Button';
import { projects } from '../data/projects';
import './CaseStudyPage.css';

interface CaseStudyDetail {
  tagline: string;
  clientType: string;
  timeline: string;
  role: string[];
  challenge: string;
  strategicDirection: string[];
  visualSystem: {
    typography: string;
    palette: string[];
    conceptNote: string;
  };
  interfaceDetails: string[];
  developmentHighlights: string[];
  conceptDirection: string[];
}

const caseStudyDetails: Record<string, CaseStudyDetail> = {
  'norden-climate-heating': {
    tagline: "Architectural precision engineered for high-performance residential climate systems.",
    clientType: "Residential Geothermal & Thermal Engineering Firm",
    timeline: "6 Weeks (Concept Architecture)",
    role: ["Positioning Strategy", "CAD Grid Interface", "React Development", "Thermal Calculators"],
    challenge: "Residential HVAC and climate engineering websites are universally plagued by chaotic stock imagery of service vans, cheesy discount coupons, and aggressive quote popups. Norden required an uncompromising digital presence conveying engineering mastery, passivhaus standards, and multi-million-dollar estate capability.",
    strategicDirection: [
      "Shift the conversation from transactional repair calls to architectural climate engineering and passivhaus standards.",
      "Integrate interactive thermal load calculation previews that demonstrate engineering rigor before inquiry.",
      "Design an interface utilizing architectural drafting grids, monochrome technical telemetry, and restrained terracotta indicators."
    ],
    visualSystem: {
      typography: "Instrument Serif headlines paired with Inter for clear mathematical specifications.",
      palette: ["#0E1215", "#D0532B", "#F5F3ED", "#6D7782"],
      conceptNote: "Dark graphite canvas with warm terracotta conduits reflecting geothermal heat exchange loops."
    },
    interfaceDetails: [
      "Dynamic CAD drafting grid overlay visualizing in-slab radiant tubing sectors.",
      "Frictionless diagnostic consultation inquiry with automated square-footage estimation.",
      "Comprehensive Passivhaus compliance matrix and sub-second technical documentation."
    ],
    developmentHighlights: [
      "Zero-dependency mathematical thermal calculation engine.",
      "Ultra-lightweight SVG architectural vectors avoiding heavy raster bloat.",
      "Schema.org HVACBusiness & EngineeringService structured data hierarchy."
    ],
    conceptDirection: [
      "Proves that residential engineering trades can achieve the aesthetic authority of an elite architectural studio.",
      "Demonstrates how technical clarity drives higher contract values."
    ]
  },
  'atelier-rovina': {
    tagline: "A tactile digital archive for a bespoke architectural stonemasonry studio.",
    clientType: "Master Stonemasonry & Architectural Stone Atelier",
    timeline: "5 Weeks (Concept Architecture)",
    role: ["Art Direction", "Editorial Design", "Archival Catalog", "Full-Bleed Web Architecture"],
    challenge: "Natural stone studios often fail to translate the tactile materiality, geological weight, and timeless craft of their work online. Atelier Rovina required a digital presence resembling a museum monograph or high-end architectural publication.",
    strategicDirection: [
      "Adopt an editorial catalog layout with generous negative space, classical Italian serif typography, and tactile quarry provenance indexing.",
      "Showcase material specimens (Carrara Statuario, Travertino Noce, Basalto Nero) as physical objects with grain direction and quarry certifications.",
      "Eliminate cluttered e-commerce shopping carts in favor of a private architectural procurement dispatch system."
    ],
    visualSystem: {
      typography: "Instrument Serif with classical italic accents paired with Inter tabular metadata.",
      palette: ["#181614", "#A68D79", "#F5F3ED", "#302E2D"],
      conceptNote: "Earth pigments and warm travertine stone tones reflecting natural alpine quarries."
    },
    interfaceDetails: [
      "Full-bleed specimen archival viewer with quarry coordinates and extraction dates.",
      "Material tactile zoom simulating hand-honed, bush-hammered, and flamed surface finishes.",
      "Curated project monograph view with bespoke architectural drawings."
    ],
    developmentHighlights: [
      "Progressive responsive image loading with sub-second LCP.",
      "Accessible keyboard navigation through the archival stone catalog.",
      "Clean CSS grid typography avoiding layout shifts across all breakpoints."
    ],
    conceptDirection: [
      "Demonstrates how digital environments can evoke physical weight and quiet luxury.",
      "Shows how monograph-style presentation commands multi-year architectural commissions."
    ]
  },
  'vanguard-advisory': {
    tagline: "Institutional composure and fiduciary clarity for an independent wealth practice.",
    clientType: "Private Wealth & Multigenerational Fiduciary Firm",
    timeline: "6 Weeks (Concept Architecture)",
    role: ["Information Architecture", "Content Strategy", "Security Hygiene", "Web Development"],
    challenge: "Institutional advisory websites suffer from visual bankruptcy: generic handshake photos, corporate stock skylines, and walls of legalese. Vanguard required an uncompromising platform projecting intellectual gravitas, fiduciary autonomy, and discretion.",
    strategicDirection: [
      "Eschew retail banking tropes in favor of layered macroeconomic research memoranda and governance dispatches.",
      "Make fiduciary fee-only independence the core structural thesis of every page.",
      "Implement hardened, privacy-first inquiry channels with zero tracking trackers or third-party cookies."
    ],
    visualSystem: {
      typography: "Instrument Serif paired with Inter for institutional document clarity.",
      palette: ["#0E141A", "#48637A", "#F1F5F9", "#71879B"],
      conceptNote: "Deep naval midnight and slate gray reflecting permanence, discretion, and analytical rigor."
    },
    interfaceDetails: [
      "Confidential briefing dispatch reader with pull-quotes and citations.",
      "Multigenerational asset allocation governance matrix with interactive risk tolerances.",
      "Encrypted advisory inquiry protocol with direct partner routing."
    ],
    developmentHighlights: [
      "Zero third-party trackers, scripts, or advertising beacons.",
      "Strict Content Security Policy (CSP) and HSTS security headers.",
      "Schema.org FinancialService and LegalService structured data compliance."
    ],
    conceptDirection: [
      "Validates that institutional finance can feel modern, intellectual, and dignified without consumer gimmicks.",
      "Demonstrates conversion through credibility, intellectual depth, and transparency."
    ]
  },
  'solas-instruments': {
    tagline: "Precision optical measurement and tolerance systems for industrial laboratories.",
    clientType: "Industrial Optics & Laser Laboratory Instrumentation",
    timeline: "5 Weeks (Concept Architecture)",
    role: ["Technical Architecture", "Interface Mechanics", "Optical Visualization", "RFQ Portal"],
    challenge: "Industrial optics catalogs are traditionally dense, unnavigable PDF dumps that make finding critical focal lengths, surface scratch/dig tolerances, and spectral transmission curves an ordeal.",
    strategicDirection: [
      "Build an interactive spectral tolerance visualizer allowing engineers to inspect transmission across UV, Visible, and NIR bands.",
      "Structure every component around precise sub-micron tolerances and optical engineering standards.",
      "Create a frictionless Request for Quotation (RFQ) workflow that captures precise CAD and tolerance parameters in under two minutes."
    ],
    visualSystem: {
      typography: "Instrument Serif titles with monospace tabular data and spectral wavelength charts.",
      palette: ["#0B1412", "#387364", "#E2ECE8", "#6C9287"],
      conceptNote: "Monochrome laboratory graphite illuminated by clean 532nm laser emerald."
    },
    interfaceDetails: [
      "Interactive multi-ring aberration crosshair visualizer.",
      "Live wavelength transmission slider spanning 200nm to 2200nm.",
      "Sub-second parametric product filtering by focal length, substrate, and coating."
    ],
    developmentHighlights: [
      "Lightweight canvas-free SVG calibration displays.",
      "Client-side instant filter index with zero server roundtrips.",
      "Optimized for high-DPI laboratory monitors and tablets."
    ],
    conceptDirection: [
      "Proves that deep-tech and industrial B2B websites can be gorgeous, fast, and functionally unmatched.",
      "Illustrates that software craft directly enhances technical credibility."
    ]
  }
};

export const CaseStudyPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const projectIndex = projects.findIndex(p => p.slug === slug);
  const project = projects[projectIndex];

  if (!project) {
    return (
      <div className="case-study-404">
        <Container>
          <h1>Project not found.</h1>
          <Button to="/work" variant="outline">Back to Work</Button>
        </Container>
      </div>
    );
  }

  const details = caseStudyDetails[project.slug] || {
    tagline: "A comprehensive digital design and development study.",
    clientType: "Conceptual Engagement",
    timeline: "6 Weeks",
    role: ["Design", "Development", "Strategy"],
    challenge: "Balancing ambitious aesthetic exploration with practical business functionality and performance requirements.",
    strategicDirection: [
      "Structure clear information hierarchies that guide users toward high-value actions.",
      "Deploy custom editorial visual treatments tailored to brand positioning."
    ],
    visualSystem: {
      typography: "Instrument Serif headlines paired with Inter body text.",
      palette: [project.colorAccent, "#111111", "#F3F0E8"],
      conceptNote: "Refined balance between warm organic tones and dark technological accents."
    },
    interfaceDetails: ["Responsive editorial grid layouts", "Smooth micro-interactions", "Accessible form controls"],
    developmentHighlights: ["React and TypeScript architecture", "High performance metrics", "Zero unnecessary dependencies"],
    conceptDirection: ["Illustrates the studio's design philosophy and technical rigor."]
  };

  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <>
      <SEOHead 
        title={`${project.title} — ORBIUM Case Study`}
        description={project.description}
      />
      <article className="case-study">
        {/* Navigation & Header */}
        <header className="case-study__header">
          <Container>
            <ScrollReveal>
              <div className="case-study__nav-back">
                <Link to="/work" className="case-study__back-link">
                  ← All Selected Work
                </Link>
              </div>

              <div className="case-study__meta-row">
                <span className="case-study__badge">{project.conceptLabel || 'Concept Project'}</span>
                <span className="case-study__year">{project.year}</span>
                <span className="case-study__category">{project.category}</span>
              </div>

              <h1 className="case-study__title">{project.title}</h1>
              <p className="case-study__tagline">{details.tagline}</p>

              <div className="case-study__specs-grid">
                <div className="case-study__spec-col">
                  <span className="case-study__spec-label">Discipline</span>
                  <span className="case-study__spec-value">{project.category}</span>
                </div>
                <div className="case-study__spec-col">
                  <span className="case-study__spec-label">Timeline</span>
                  <span className="case-study__spec-value">{details.timeline}</span>
                </div>
                <div className="case-study__spec-col">
                  <span className="case-study__spec-label">Scope</span>
                  <span className="case-study__spec-value">{project.tags.join(' / ')}</span>
                </div>
              </div>
            </ScrollReveal>
          </Container>
        </header>

        {/* Hero Visual Area */}
        <section 
          className="case-study__hero-visual" 
          style={{ backgroundColor: project.colorAccent }}
        >
          <div className="case-study__hero-visual-inner">
            <div className="case-study__hero-mockup">
              <div className="case-study__mockup-browser-bar">
                <span className="case-study__mockup-dot" />
                <span className="case-study__mockup-dot" />
                <span className="case-study__mockup-dot" />
                <span className="case-study__mockup-url">https://orbium.studio/concepts/{project.slug}</span>
              </div>
              <div className="case-study__mockup-screen">
                <div className="case-study__mockup-hero-text">
                  <span className="case-study__mockup-label">{project.conceptLabel || 'CONCEPT'}</span>
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Breakdown */}
        <Container size="narrow">
          <div className="case-study__content">
            {/* 1. Project Overview */}
            <ScrollReveal>
              <section className="case-study__section">
                <span className="case-study__section-num">01</span>
                <h2 className="case-study__section-title">Project Overview</h2>
                <p className="case-study__body-p">{project.description}</p>
                <div className="case-study__role-list">
                  <span className="case-study__role-label">Studio Role:</span>
                  <ul className="case-study__role-items">
                    {details.role.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </div>
              </section>
            </ScrollReveal>

            {/* 2. Challenge */}
            <ScrollReveal>
              <section className="case-study__section">
                <span className="case-study__section-num">02</span>
                <h2 className="case-study__section-title">The Challenge</h2>
                <p className="case-study__body-p">{details.challenge}</p>
              </section>
            </ScrollReveal>

            {/* 3. Strategic Direction */}
            <ScrollReveal>
              <section className="case-study__section">
                <span className="case-study__section-num">03</span>
                <h2 className="case-study__section-title">Strategic Direction</h2>
                <ul className="case-study__list">
                  {details.strategicDirection.map((strategy, i) => (
                    <li key={i} className="case-study__list-item">
                      <span className="case-study__list-num">0{i + 1}</span>
                      <span>{strategy}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </ScrollReveal>
          </div>
        </Container>

        {/* 4. Visual System (Full Width Showcase) */}
        <section className="case-study__visual-system-section">
          <Container>
            <ScrollReveal>
              <div className="case-study__visual-header">
                <span className="case-study__section-num">04</span>
                <h2 className="case-study__section-title">Visual System</h2>
                <p className="case-study__body-p">{details.visualSystem.conceptNote}</p>
              </div>

              <div className="case-study__palette-strip">
                {details.visualSystem.palette.map((color, idx) => (
                  <div key={idx} className="case-study__color-swatch" style={{ backgroundColor: color }}>
                    <span className="case-study__color-code">{color}</span>
                  </div>
                ))}
              </div>

              <div className="case-study__type-specimen">
                <span className="case-study__spec-label">Typographic Pairing</span>
                <div className="case-study__type-sample heading-2">{project.title}</div>
                <p className="case-study__type-desc">{details.visualSystem.typography}</p>
              </div>
            </ScrollReveal>
          </Container>
        </section>

        <Container size="narrow">
          <div className="case-study__content">
            {/* 5. Interface Architecture */}
            <ScrollReveal>
              <section className="case-study__section">
                <span className="case-study__section-num">05</span>
                <h2 className="case-study__section-title">Interface Architecture</h2>
                <p className="case-study__body-p">
                  Every viewport breakpoint was designed with deliberate spatial rhythm. The interface balances high-density information with calm editorial breathing room.
                </p>
                <div className="case-study__interface-points">
                  {details.interfaceDetails.map((point, idx) => (
                    <div key={idx} className="case-study__interface-point">
                      <span className="case-study__point-indicator">✦</span>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </section>
            </ScrollReveal>

            {/* 6. Development & Engineering */}
            <ScrollReveal>
              <section className="case-study__section">
                <span className="case-study__section-num">06</span>
                <h2 className="case-study__section-title">Development & Performance</h2>
                <p className="case-study__body-p">
                  Clean engineering is an aesthetic choice. We built this experience adhering strictly to modern web standards, zero-bloat modular architecture, and sub-second asset delivery.
                </p>
                <ul className="case-study__dev-list">
                  {details.developmentHighlights.map((dev, idx) => (
                    <li key={idx} className="case-study__dev-item">{dev}</li>
                  ))}
                </ul>
              </section>
            </ScrollReveal>

            {/* 7. Concept Direction */}
            <ScrollReveal>
              <section className="case-study__section case-study__section--highlight">
                <span className="case-study__section-num">07</span>
                <h2 className="case-study__section-title">Concept Direction & Takeaways</h2>
                <p className="case-study__body-p">
                  As an independent studio, Orbium develops proactive concepts to push the boundaries of digital presence for competitive industries.
                </p>
                <ul className="case-study__takeaways">
                  {details.conceptDirection.map((takeaway, idx) => (
                    <li key={idx}>{takeaway}</li>
                  ))}
                </ul>
              </section>
            </ScrollReveal>
          </div>
        </Container>

        {/* Next Project & Inquiry Footer */}
        <footer className="case-study__nav-footer">
          <Container>
            <div className="case-study__next-wrapper">
              <div className="case-study__next-left">
                <span className="label">Next Project</span>
                <Link to={`/work/${nextProject.slug}`} className="case-study__next-title">
                  {nextProject.title} →
                </Link>
                <p className="case-study__next-category">{nextProject.category}</p>
              </div>
              <div className="case-study__next-cta">
                <Button to="/contact" variant="primary" size="lg">
                  Start Your Project
                </Button>
              </div>
            </div>
          </Container>
        </footer>
      </article>
    </>
  );
};

export default CaseStudyPage;
