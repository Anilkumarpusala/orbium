import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const AboutPage: React.FC = () => {
  const comparisonItems = [
    {
      dimension: 'Team & Communication',
      legacy: 'Handed off to junior interns and rotating account managers.',
      orbium: '100% direct collaboration with founder and principal engineer.',
    },
    {
      dimension: 'Codebase & Architecture',
      legacy: 'Bloated WordPress themes with 40+ plugins causing security vulnerabilities.',
      orbium: 'Hand-crafted semantic code with zero template bloat and zero plugin dependencies.',
    },
    {
      dimension: 'Speed & Core Web Vitals',
      legacy: '3–6 second page load times; fails Google mobile Core Web Vitals.',
      orbium: 'Sub-second edge load times (under 0.9s); guaranteed 95–100 Core Web Vitals.',
    },
    {
      dimension: 'Turnaround Timeline',
      legacy: '8 to 16 weeks of endless meetings, scope creep, and administrative delays.',
      orbium: 'Focused 2–3 week high-velocity delivery sprints with weekly live staging demos.',
    },
    {
      dimension: 'Ownership & Billing',
      legacy: 'Mandatory $1,500/month ongoing maintenance contracts to prevent crashes.',
      orbium: '100% intellectual property ownership transferred on launch with zero retainers required.',
    },
  ];

  const technologies = [
    { name: 'Semantic HTML5', role: 'Accessible, machine-readable DOM architecture' },
    { name: 'React / Next.js / Astro', role: 'Modern component systems and static generation' },
    { name: 'Tailwind CSS', role: 'Ultra-lean, zero-runtime utility styling' },
    { name: 'Netlify Edge', role: 'Sub-second global CDN caching and immutable deployments' },
    { name: 'Cloudflare DNS & SSL', role: 'DDoS mitigation and enterprise-grade TLS encryption' },
    { name: 'Structured Data Schema', role: 'Deep JSON-LD entity graph for local search dominance' },
  ];

  return (
    <div className="min-h-screen bg-[#090A0B] text-[#9CA3AF] flex flex-col selection:bg-[#0066FF] selection:text-white">
      <Header activePath="/about/" />

      <main className="flex-grow pt-24">
        {/* PAGE HEADER */}
        <section className="pt-16 pb-16 px-6 max-w-7xl mx-auto border-b border-white/10 animate-fade-in-up">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-widest text-[#0066FF] font-mono mb-3">
              STUDIO MANIFESTO
            </div>
            <h1 className="font-serif-headline text-4xl sm:text-6xl md:text-7xl mb-6">
              Craft Over Scale.
            </h1>
            <p className="text-lg text-[#9CA3AF] leading-relaxed">
              Orbium was founded on a simple observation: modern digital agencies have prioritized headcount and sales retainers over engineering quality. We do the opposite.
            </p>
          </div>
        </section>

        {/* MANIFESTO NARRATIVE */}
        <section className="py-20 px-6 max-w-7xl mx-auto border-b border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <div className="font-serif-headline text-2xl sm:text-3xl text-white mb-4">
                The Philosophy
              </div>
              <p className="text-xs font-mono text-[#6B7280]">
                DIRECT ENGINEERING // ZERO BLOAT
              </p>
            </div>
            <div className="lg:col-span-8 space-y-6 text-base leading-relaxed text-[#9CA3AF]">
              <p>
                When a local commercial enterprise or high-ticket service provider hires an agency, they expect their flagship website to reflect the prestige and reliability of their physical operation. Instead, they are usually sold a recycled WordPress template stuffed with plugins that takes five seconds to load on mobile and breaks every time an update is released.
              </p>
              <p>
                At Orbium, every engagement is treated as a piece of precision software. We deliberately cap our studio capacity to <span className="text-[#F3F4F6] font-medium">two commissions per month</span>. This constraint guarantees that your project receives deep architectural focus, rigorous speed optimization, and direct execution from our founder, Anil Kumar Pusala.
              </p>
            </div>
          </div>
        </section>

        {/* COMPARISON MATRIX */}
        <section className="py-20 px-6 max-w-7xl mx-auto border-b border-white/10">
          <div className="mb-12">
            <div className="text-xs uppercase tracking-widest text-[#0066FF] font-mono mb-2">MODEL COMPARISON</div>
            <h2 className="font-serif-headline text-3xl sm:text-4xl text-[#F3F4F6]">
              The Legacy Agency Model vs. The Orbium Standard
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Legacy Agency Model Card */}
            <div className="bg-[#111317] border border-red-500/20 rounded-lg p-8">
              <div className="flex items-center gap-2 text-xs font-mono text-red-400 uppercase tracking-wider mb-6">
                <span className="w-2 h-2 rounded-full bg-red-400"></span>
                The Legacy Agency Model
              </div>
              <div className="space-y-6 text-xs text-[#9CA3AF]">
                {comparisonItems.map((item, idx) => (
                  <div key={idx} className="pb-4 border-b border-white/5 last:border-b-0">
                    <div className="font-medium text-[#F3F4F6] mb-1">{item.dimension}</div>
                    <div className="text-[#6B7280]">{item.legacy}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* The Orbium Standard Card */}
            <div className="bg-[#111317] border border-[#0066FF]/40 rounded-lg p-8 shadow-xl shadow-[#0066FF]/5">
              <div className="flex items-center gap-2 text-xs font-mono text-[#0066FF] uppercase tracking-wider mb-6">
                <span className="w-2 h-2 rounded-full bg-[#0066FF]"></span>
                The Orbium Standard
              </div>
              <div className="space-y-6 text-xs text-[#9CA3AF]">
                {comparisonItems.map((item, idx) => (
                  <div key={idx} className="pb-4 border-b border-white/5 last:border-b-0">
                    <div className="font-medium text-[#F3F4F6] mb-1">{item.dimension}</div>
                    <div className="text-[#9CA3AF]">{item.orbium}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TECHNICAL STACK */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="text-xs uppercase tracking-widest text-[#0066FF] font-mono mb-2">FOUNDATION</div>
            <h2 className="font-serif-headline text-3xl sm:text-4xl text-[#F3F4F6]">
              Modern Engineering Stack
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, idx) => (
              <div key={idx} className="bg-[#111317] border border-white/5 rounded-lg p-6 hover:border-white/10 transition-colors">
                <div className="font-mono text-sm text-[#F3F4F6] mb-2">{tech.name}</div>
                <div className="text-xs text-[#6B7280] leading-relaxed">{tech.role}</div>
              </div>
            ))}
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="py-20 px-6 bg-[#111317] border-t border-white/10 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-serif-headline text-3xl sm:text-4xl text-[#F3F4F6] mb-4">
              Have a conversation directly with the builder.
            </h2>
            <p className="text-sm text-[#9CA3AF] mb-8">
              No sales reps, no pitch decks. Just a straightforward 15-minute technical audit of your web presence.
            </p>
            <a href="/contact/" className="btn-primary py-3.5 px-7 text-xs uppercase tracking-wider">
              Schedule Technical Audit
            </a>
          </div>
        </section>
      </main>

      <Footer showWordmark={true} />
    </div>
  );
};

export default AboutPage;
