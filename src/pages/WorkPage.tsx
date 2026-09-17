import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const WorkPage: React.FC = () => {
  const caseStudies = [
    {
      id: '01',
      title: 'Apex Mechanical Systems',
      sector: 'Commercial HVAC & Industrial Systems',
      result: '+148% Commercial Bidding Inquiries',
      description: 'Complete digital infrastructure rebuild. Integrated instant tonnage calculator and local SEO schema across 8 industrial territories.',
      techStack: ['Next.js', 'Tailwind CSS', 'Schema Engine', 'API Intake'],
      deliverables: ['Custom Web Architecture', 'Geo-Targeted Landing Systems', 'Interactive Tonnage Calculator', 'Enterprise Schema Deployment'],
      metricHighlight: '+148% RFP Volume',
    },
    {
      id: '02',
      title: 'Vanguard Legal Group',
      sector: 'Corporate & Estate Litigation',
      result: '0.8s Mobile Load Speed',
      description: 'Bespoke high-authority web presence eliminating legacy WordPress latency, routing high-value retainer inquiries directly to senior partners.',
      techStack: ['Next.js', 'Tailwind CSS', 'Schema Engine', 'API Intake'],
      deliverables: ['Headless Speed Hardening', 'Direct Partner Intake Routing', 'Legal Practice Structured Microdata', 'Encrypted Client Portal'],
      metricHighlight: '0.8s Global Latency',
    },
    {
      id: '03',
      title: 'Aura Health & Aesthetics',
      sector: 'Regional Multi-Location Clinic',
      result: '+74% Direct Online Bookings',
      description: 'Editorial clinical identity paired with real-time booking integrations and automated intake screening.',
      techStack: ['Next.js', 'Tailwind CSS', 'Schema Engine', 'API Intake'],
      deliverables: ['Bespoke Aesthetic Identity', 'Multi-Location Booking Flow', 'Automated Patient Screening', 'Local Map Entity Dominance'],
      metricHighlight: '+74% Intake Conversion',
    },
    {
      id: '04',
      title: 'Crestview Architectural Supply',
      sector: 'Wholesale & Commercial Materials',
      result: '3.2x Faster Checkout Completion',
      description: 'High-performance catalog architecture replacing a slow monolith, reducing order drops and mobile cart abandonment.',
      techStack: ['Next.js', 'Tailwind CSS', 'Schema Engine', 'API Intake'],
      deliverables: ['Sub-Second Product Catalog', 'Real-Time Contractor Pricing Engine', 'Automated Spec Sheet Downloads', 'Frictionless B2B Flow'],
      metricHighlight: '3.2x Checkout Velocity',
    },
  ];

  return (
    <div className="min-h-screen bg-[#090A0B] text-[#9CA3AF] flex flex-col selection:bg-[#0066FF] selection:text-white">
      <Header activePath="/work/" />

      <main className="flex-grow pt-24">
        {/* PAGE HEADER */}
        <section className="pt-16 pb-16 px-6 max-w-7xl mx-auto border-b border-white/10 animate-fade-in-up">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-widest text-[#0066FF] font-mono mb-3">
              FLAGSHIP CASE STUDIES
            </div>
            <h1 className="font-serif-headline text-4xl sm:text-6xl md:text-7xl mb-6">
              Selected Work & Case Studies
            </h1>
            <p className="text-lg text-[#9CA3AF] leading-relaxed">
              A curated index of bespoke web systems engineered for commercial authority and client acquisition.
            </p>
          </div>
        </section>

        {/* CASE STUDIES GRID */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {caseStudies.map((project) => (
              <div
                key={project.id}
                className="bg-[#111317] border border-white/10 rounded-lg p-8 flex flex-col justify-between hover:border-white/20 transition-all duration-200"
              >
                <div>
                  {/* Card Header & Badge */}
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/5">
                    <span className="font-mono text-xs text-[#6B7280]">PROJECT {project.id}</span>
                    <span className="text-xs font-mono text-[#0066FF] bg-[#0066FF]/10 px-2.5 py-1 rounded">
                      {project.metricHighlight}
                    </span>
                  </div>

                  {/* Title & Sector */}
                  <h2 className="font-serif-headline text-2xl sm:text-3xl text-[#F3F4F6] mb-2">
                    {project.title}
                  </h2>
                  <div className="text-xs font-mono text-[#0066FF] uppercase tracking-wider mb-4">
                    {project.sector}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[#9CA3AF] leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Deliverables List */}
                  <div className="mb-6">
                    <div className="text-xs uppercase tracking-wider text-white font-medium mb-3">Key Deliverables</div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#9CA3AF]">
                      {project.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technical Stack Pills */}
                  <div className="mb-6">
                    <div className="text-xs uppercase tracking-wider text-white font-medium mb-2.5">Technical Stack</div>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded bg-[#16181D] border border-white/5 text-[11px] font-mono text-[#9CA3AF]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Metric Strip */}
                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                  <div className="text-xs text-[#6B7280]">Measurable Outcome</div>
                  <div className="text-sm font-semibold text-[#F3F4F6]">{project.result}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="py-20 px-6 bg-[#111317] border-t border-white/10 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-serif-headline text-3xl sm:text-4xl text-[#F3F4F6] mb-4">
              Need a web system engineered to this standard?
            </h2>
            <p className="text-sm text-[#9CA3AF] mb-8">
              We engineer custom web architecture tailored to your specific market bottlenecks.
            </p>
            <a href="/contact/" className="btn-primary py-3.5 px-7 text-xs uppercase tracking-wider">
              Request a Technical Consultation
            </a>
          </div>
        </section>
      </main>

      <Footer showWordmark={true} />
    </div>
  );
};

export default WorkPage;
