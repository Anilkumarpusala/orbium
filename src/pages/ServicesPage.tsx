import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const ServicesPage: React.FC = () => {
  const services = [
    {
      number: '01',
      title: 'Bespoke Commercial Web Design & Rebuilds',
      subtitle: 'Zero templates. Zero bloated WordPress page-builders.',
      description: 'We design and code ground-up digital flagships tailored to your industry positioning. Every pixel is purposeful, every component is hand-crafted, and every interaction is engineered to convey immediate commercial authority.',
      features: [
        'Custom UI/UX designed around high-ticket conversion pathways',
        'Mobile-first architecture ensuring flawless responsiveness',
        'Distinctive editorial typography and custom brand design tokens',
        '100% clean, hand-coded semantic components with zero plugin bloat',
      ],
      stack: 'React / Next.js / Tailwind CSS / Vanilla WebGL',
    },
    {
      number: '02',
      title: 'Local SEO Architecture & Search Dominance',
      subtitle: 'Engineered for top 3 map pack entity dominance.',
      description: 'Local search rankings are won in the HTML code, not just on blog posts. We implement deep structured data schemas, geo-targeted programmatic pages, and entity-level metadata that tell Google exactly what services you offer and where you dominate.',
      features: [
        'Deep JSON-LD microdata schema for LocalBusiness and ProfessionalService',
        'Multi-location landing page architecture without duplicate content penalties',
        'Direct Google Business Profile entity alignment and review synchronization',
        '100/100 Core Web Vitals score directly enhancing search engine crawl budget',
      ],
      stack: 'Structured Data Graph / Geo-Microdata / OpenGraph / Schema.org',
    },
    {
      number: '03',
      title: 'High-Converting Intake & Quote Calculators',
      subtitle: 'Turn passive visitors into pre-qualified sales calls.',
      description: 'Generic contact forms leak high-value prospects. We build interactive estimators, qualification funnels, and custom calculators that give prospective clients immediate utility while qualifying their budget and timeline.',
      features: [
        'Custom interactive cost estimators and tonnage/pricing calculators',
        'Multi-step intake funnels that filter out tire-kickers',
        'Instant routing webhooks to your CRM, email, and WhatsApp dispatch',
        'Client-side instant validation with zero page reload friction',
      ],
      stack: 'Interactive Calculators / Webhooks / Custom Forms / Automation',
    },
    {
      number: '04',
      title: 'Speed Hardening & Full Code Ownership',
      subtitle: 'True sub-second load times and 100% intellectual property transfer.',
      description: 'You own every line of code we write. No hostage situations, no proprietary agency platform lock-in, and no mandatory monthly maintenance fees to keep your site from breaking. Hosted globally on edge networks.',
      features: [
        'Sub-second global edge distribution via Netlify Edge and Cloudflare CDN',
        '100% intellectual property and git repository transfer on launch',
        'Zero dependencies on slow legacy databases or fragile third-party plugins',
        'Unbreakable security posture: static immutable hosting eliminates server exploits',
      ],
      stack: 'Netlify Edge / Cloudflare / Git Repository / Immutable Hosting',
    },
  ];

  return (
    <div className="min-h-screen bg-[#090A0B] text-[#9CA3AF] flex flex-col selection:bg-[#0066FF] selection:text-white">
      <Header activePath="/services/" />

      <main className="flex-grow pt-24">
        {/* PAGE HEADER */}
        <section className="pt-16 pb-16 px-6 max-w-7xl mx-auto border-b border-white/10 animate-fade-in-up">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-widest text-[#0066FF] font-mono mb-3">
              TECHNICAL CAPABILITIES
            </div>
            <h1 className="font-serif-headline text-4xl sm:text-6xl md:text-7xl mb-6">
              Disciplines & Deliverables
            </h1>
            <p className="text-lg text-[#9CA3AF] leading-relaxed">
              Laser-focused technical capabilities engineered to replace bloated marketing retainers.
            </p>
          </div>
        </section>

        {/* SERVICES MODULES WITH HAIRLINE DIVIDERS */}
        <section className="max-w-7xl mx-auto px-6 divide-y divide-white/10">
          {services.map((svc) => (
            <div key={svc.number} className="py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Number and Subtitle */}
              <div className="lg:col-span-4">
                <div className="font-mono text-xs text-[#0066FF] tracking-wider mb-2">MODULE // {svc.number}</div>
                <h2 className="font-serif-headline text-2xl sm:text-3xl text-[#F3F4F6] mb-3">
                  {svc.title}
                </h2>
                <div className="text-xs text-[#6B7280] font-mono mb-6">{svc.subtitle}</div>
                <div className="inline-block px-3 py-1.5 rounded bg-[#111317] border border-white/5 text-xs font-mono text-[#9CA3AF]">
                  {svc.stack}
                </div>
              </div>

              {/* Description & Feature Checklist */}
              <div className="lg:col-span-8 space-y-6">
                <p className="text-base text-[#9CA3AF] leading-relaxed">
                  {svc.description}
                </p>

                <div className="bg-[#111317] border border-white/5 rounded-lg p-6">
                  <div className="text-xs uppercase tracking-wider text-white font-medium mb-4">Included Specifications</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {svc.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs text-[#9CA3AF]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-1.5 shrink-0"></span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* BOTTOM CTA */}
        <section className="py-20 px-6 bg-[#111317] border-t border-white/10 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-serif-headline text-3xl sm:text-4xl text-[#F3F4F6] mb-4">
              Need a clear scope of work for your project?
            </h2>
            <p className="text-sm text-[#9CA3AF] mb-8">
              Send us your current website and business goals. We reply within 12 hours with an honest technical assessment.
            </p>
            <a href="/contact/" className="btn-primary py-3.5 px-7 text-xs uppercase tracking-wider">
              Request Project Scope
            </a>
          </div>
        </section>
      </main>

      <Footer showWordmark={true} />
    </div>
  );
};

export default ServicesPage;
