import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#090A0B] text-[#9CA3AF] flex flex-col selection:bg-[#0066FF] selection:text-white">
      <Header activePath="/" />

      <main className="flex-grow pt-24">
        {/* HERO SECTION */}
        <section className="relative pt-16 pb-24 md:pt-28 md:pb-32 px-6 max-w-7xl mx-auto">
          <div className="max-w-4xl animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111317] border border-white/10 text-xs tracking-widest uppercase font-mono text-[#0066FF] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]"></span>
              COMMERCIAL WEB ARCHITECTURE // PERFORMANCE FIRST
            </div>

            <h1 className="font-serif-headline text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight mb-8">
              We Build High-Performance Websites That Turn Local Businesses Into Market Leaders.
            </h1>

            <p className="text-base sm:text-xl text-[#9CA3AF] max-w-2xl leading-relaxed mb-10 font-sans">
              Bespoke engineering, search dominance, and automated lead capture for established service companies, medical practices, and regional contractors. Direct collaboration with the founder—zero template bloat.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a href="/work/" className="btn-primary py-3.5 px-7 text-sm font-medium">
                Explore Case Studies
              </a>
              <a href="/contact/" className="btn-outline py-3.5 px-7 text-sm font-medium">
                Book Technical Audit
              </a>
            </div>
          </div>
        </section>

        {/* PROOF & METRICS STRIP */}
        <section className="border-y border-white/10 bg-[#090A0B]">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
              <div className="py-6 md:py-0 md:px-8 first:pl-0">
                <div className="font-serif-headline text-3xl sm:text-4xl text-white mb-2">100/100</div>
                <div className="text-sm font-medium text-[#F3F4F6] mb-1">Core Web Vitals & Sub-Second Speeds</div>
                <div className="text-xs text-[#6B7280]">Tested on mobile networks across all regional target markets</div>
              </div>
              <div className="py-6 md:py-0 md:px-8">
                <div className="font-serif-headline text-3xl sm:text-4xl text-[#0066FF] mb-2">+60% Average</div>
                <div className="text-sm font-medium text-[#F3F4F6] mb-1">Increase in Qualified Inbound Calls</div>
                <div className="text-xs text-[#6B7280]">Direct lead conversion funnels replacing generic contact forms</div>
              </div>
              <div className="py-6 md:py-0 md:px-8 last:pr-0">
                <div className="font-serif-headline text-3xl sm:text-4xl text-white mb-2">100% Direct</div>
                <div className="text-sm font-medium text-[#F3F4F6] mb-1">Senior Principal Engineering</div>
                <div className="text-xs text-[#6B7280]">Zero junior handoffs, no middle managers, direct founder accountability</div>
              </div>
            </div>
          </div>
        </section>

        {/* SELECTED CLIENT FLAGSHIPS */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10">
            <div>
              <div className="text-xs uppercase tracking-widest text-[#0066FF] font-mono mb-2">PROVEN DEPLOYMENTS</div>
              <h2 className="font-serif-headline text-3xl sm:text-5xl">Selected Client Flagships</h2>
            </div>
            <a href="/work/" className="mt-4 md:mt-0 text-sm text-[#F3F4F6] hover:text-[#0066FF] inline-flex items-center gap-2 transition-colors">
              View All Deployments & Case Studies →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-[#111317] border border-white/10 rounded-lg p-6 flex flex-col justify-between hover:border-white/20 transition-all duration-200">
              <div>
                <div className="aspect-[16/10] bg-[#16181D] rounded border border-white/5 mb-6 overflow-hidden relative p-4 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#6B7280]">01 // INDUSTRIAL HVAC</span>
                    <span className="text-xs font-mono text-[#0066FF] bg-[#0066FF]/10 px-2 py-0.5 rounded">+148% INQUIRIES</span>
                  </div>
                  <div className="space-y-1.5">
                    <div className="h-2 w-3/4 bg-white/10 rounded"></div>
                    <div className="h-2 w-1/2 bg-white/5 rounded"></div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-[#F3F4F6] mb-1">Apex Mechanical Systems</h3>
                <div className="text-xs text-[#0066FF] font-medium mb-3">Commercial HVAC & Industrial Systems</div>
                <p className="text-xs text-[#9CA3AF] leading-relaxed mb-6">
                  Complete digital infrastructure rebuild. Integrated instant tonnage calculator and local SEO schema across 8 industrial territories.
                </p>
              </div>
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="text-[#6B7280]">Result</span>
                <span className="text-[#F3F4F6] font-medium">+148% Commercial Bidding Inquiries</span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-[#111317] border border-white/10 rounded-lg p-6 flex flex-col justify-between hover:border-white/20 transition-all duration-200">
              <div>
                <div className="aspect-[16/10] bg-[#16181D] rounded border border-white/5 mb-6 overflow-hidden relative p-4 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#6B7280]">02 // LEGAL & CORPORATE</span>
                    <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">0.8S LOAD</span>
                  </div>
                  <div className="space-y-1.5">
                    <div className="h-2 w-3/4 bg-white/10 rounded"></div>
                    <div className="h-2 w-1/2 bg-white/5 rounded"></div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-[#F3F4F6] mb-1">Vanguard Legal Group</h3>
                <div className="text-xs text-[#0066FF] font-medium mb-3">Corporate & Estate Litigation</div>
                <p className="text-xs text-[#9CA3AF] leading-relaxed mb-6">
                  Bespoke high-authority web presence eliminating legacy WordPress latency, routing high-value retainer inquiries directly to senior partners.
                </p>
              </div>
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="text-[#6B7280]">Result</span>
                <span className="text-[#F3F4F6] font-medium">0.8s Mobile Load Speed</span>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-[#111317] border border-white/10 rounded-lg p-6 flex flex-col justify-between hover:border-white/20 transition-all duration-200">
              <div>
                <div className="aspect-[16/10] bg-[#16181D] rounded border border-white/5 mb-6 overflow-hidden relative p-4 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#6B7280]">03 // HEALTH & CLINICAL</span>
                    <span className="text-xs font-mono text-[#0066FF] bg-[#0066FF]/10 px-2 py-0.5 rounded">+74% BOOKINGS</span>
                  </div>
                  <div className="space-y-1.5">
                    <div className="h-2 w-3/4 bg-white/10 rounded"></div>
                    <div className="h-2 w-1/2 bg-white/5 rounded"></div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-[#F3F4F6] mb-1">Aura Health & Aesthetics</h3>
                <div className="text-xs text-[#0066FF] font-medium mb-3">Regional Multi-Location Clinic</div>
                <p className="text-xs text-[#9CA3AF] leading-relaxed mb-6">
                  Editorial clinical identity paired with real-time booking integrations and automated intake screening.
                </p>
              </div>
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="text-[#6B7280]">Result</span>
                <span className="text-[#F3F4F6] font-medium">+74% Direct Online Bookings</span>
              </div>
            </div>
          </div>
        </section>

        {/* FOUNDER & STUDIO SECTION */}
        <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Founder Photo & Caption */}
            <div className="lg:col-span-5">
              <div className="aspect-[4/5] rounded-lg overflow-hidden border border-white/10 bg-[#16181D] relative shadow-2xl">
                <img
                  src="/assets/images/founder.jpg"
                  alt="Anil Kumar Pusala — Founder & Technical Lead"
                  className="w-full h-full object-cover object-top filter grayscale contrast-105 hover:grayscale-0 transition-all duration-300"
                  onError={(e) => {
                    // Fallback to placeholder if missing
                    (e.target as HTMLImageElement).src = '/assets/images/founder.png';
                  }}
                />
              </div>
              <p className="mt-4 text-xs font-mono text-[#6B7280] tracking-wider uppercase">
                Anil Kumar Pusala — Founder & Technical Lead
              </p>
            </div>

            {/* Right Column: Founder Promise */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111317] border border-white/10 text-xs font-mono text-[#0066FF] uppercase tracking-wider mb-6">
                THE FOUNDER PROMISE
              </div>
              <h2 className="font-serif-headline text-3xl sm:text-5xl lg:text-6xl mb-6">
                Work Directly With the Builder. No Account Managers, No Surprises.
              </h2>
              <p className="text-base sm:text-lg text-[#9CA3AF] leading-relaxed mb-8">
                Most agencies charge five-figure retainers only to hand your project off to junior interns working from bloated drag-and-drop templates. At Orbium, every line of code, design system, and technical SEO schema is architected directly by me. You get senior engineering speed, crystal-clear communication, and a website engineered to generate measurable revenue from day one.
              </p>
              <div>
                <a
                  href="/contact/"
                  className="inline-flex items-center gap-2 text-[#F3F4F6] text-sm font-medium hover:text-[#0066FF] transition-colors group"
                >
                  Schedule a 15-Minute Technical Call
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* BOTTOM CALL-TO-ACTION STRIP */}
        <section className="py-20 px-6 bg-[#111317] border-t border-white/10 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif-headline text-3xl sm:text-5xl text-[#F3F4F6] mb-4">
              Ready to dominate your local market?
            </h2>
            <p className="text-base text-[#9CA3AF] mb-8">
              We accept only 2 client commissions per month to maintain uncompromised craft.
            </p>
            <div>
              <a href="/contact/" className="btn-primary py-4 px-8 text-sm uppercase tracking-wider">
                Claim Your Commission Slot
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer showWordmark={true} />
    </div>
  );
};

export default HomePage;
