import type { ProcessStep } from '../types';

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'DISCOVER',
    description: 'Understand the business, audience decision pathways, competitive landscape, and commercial realities. We start by listening.',
    focus: 'Strategic Clarity',
    deliverable: 'Discovery Charter & Strategic Synthesis',
    details: [
      'Founder interviews and commercial model review',
      'Target client persona and decision journey audit',
      'Existing technical infrastructure and analytics inspection',
      'Scope bounding and objective formulation'
    ]
  },
  {
    number: '02',
    title: 'DEFINE',
    description: 'Establish structural hierarchy, positioning, content priorities, and functional prerequisites before aesthetic decisions.',
    focus: 'Structural Logic',
    deliverable: 'Information Architecture & Wireframe Framework',
    details: [
      'Comprehensive sitemap and conversion pathway taxonomy',
      'Content requirements matrix and messaging frameworks',
      'Technical stack verification and performance benchmarks',
      'Page-by-page visual hierarchy planning'
    ]
  },
  {
    number: '03',
    title: 'DESIGN',
    description: 'Create the visual and interaction direction. Typography, composition, physical object mockups, and tactile UI details.',
    focus: 'Editorial Authority',
    deliverable: 'Production Design System & Interactive Prototypes',
    details: [
      'Distinctive typography pairings and typographic scale',
      'Custom device mockups and art-directed interface fragments',
      'Controlled micro-interactions and motion choreography',
      'Desktop, tablet, and mobile interface design'
    ]
  },
  {
    number: '04',
    title: 'BUILD',
    description: 'Turn the design system into production software. Clean component architecture, sub-second response times, and semantic HTML.',
    focus: 'Engineering Precision',
    deliverable: 'Production Software Repository',
    details: [
      'Component-based frontend engineering (React, TypeScript, CSS custom properties)',
      'Zero unnecessary third-party runtime dependencies',
      'WCAG 2.1 AA accessibility implementation and keyboard navigation',
      'Schema.org JSON-LD structured data and semantic markup'
    ]
  },
  {
    number: '05',
    title: 'REFINE',
    description: 'Rigorously test across viewport breakpoints and hardware platforms. Optimize performance, verify forms, and polish every interaction.',
    focus: 'Quality Verification',
    deliverable: 'Pre-Flight QA & Verification Audit',
    details: [
      'Multi-device responsive testing (320px to 2560px)',
      'Cross-browser rendering and touch interaction verification',
      'Lighthouse 95+ Core Web Vitals optimization',
      'Contact flow and webhook integration testing'
    ]
  },
  {
    number: '06',
    title: 'LAUNCH',
    description: 'Deploy to live production infrastructure, connect DNS, configure SSL, submit search console sitemaps, and go live without downtime.',
    focus: 'Zero-Downtime Go-Live',
    deliverable: 'Live Production Website & DNS Handoff',
    details: [
      'Global CDN edge deployment and DNS propagation',
      'SSL certificate installation and HTTP/2 verification',
      'Google Search Console and Bing Webmaster registration',
      'Analytics event attribution and live verification'
    ]
  },
  {
    number: '07',
    title: 'GROW',
    description: 'Improve what happens after launch. Continuous search visibility monitoring, conversion telemetry, and intentional iterative refinements.',
    focus: 'Post-Launch Compounding',
    deliverable: 'Continuous Evolution Partnership',
    details: [
      'Monthly performance, uptime, and indexation checks',
      'Search query performance analysis and content updates',
      'Form conversion telemetry and inquiry flow optimization',
      'Direct founder advisory for upcoming business phases'
    ]
  }
];
