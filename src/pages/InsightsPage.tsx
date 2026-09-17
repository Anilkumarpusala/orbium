import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const InsightsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#090A0B] text-[#9CA3AF] flex flex-col selection:bg-[#0066FF] selection:text-white">
      <Header activePath="/insights/" />

      <main className="flex-grow pt-24">
        {/* PAGE HEADER */}
        <section className="pt-16 pb-16 px-6 max-w-7xl mx-auto border-b border-white/10 animate-fade-in-up">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-widest text-[#0066FF] font-mono mb-3">
              JOURNAL & FIELD NOTES
            </div>
            <h1 className="font-serif-headline text-4xl sm:text-6xl md:text-7xl mb-6">
              Journal & Engineering Insights
            </h1>
            <p className="text-lg text-[#9CA3AF] leading-relaxed">
              Practical architectural breakdowns on web performance, local search dominance, and digital conversion.
            </p>
          </div>
        </section>

        {/* ARTICLES CONTAINER */}
        <section className="py-20 px-6 max-w-4xl mx-auto space-y-24">
          {/* ARTICLE 1 */}
          <article className="space-y-6 pb-20 border-b border-white/10">
            <div className="flex items-center gap-3 text-xs font-mono text-[#6B7280]">
              <span className="text-[#0066FF]">PERFORMANCE ARCHITECTURE</span>
              <span>•</span>
              <span>8 MIN READ</span>
              <span>•</span>
              <span>ANIL KUMAR PUSALA</span>
            </div>

            <h2 className="font-serif-headline text-3xl sm:text-4xl text-[#F3F4F6] leading-tight">
              Why Slow Template Websites Cost Local Businesses High-Ticket Leads
            </h2>

            <div className="prose prose-invert max-w-none text-base text-[#9CA3AF] leading-relaxed space-y-4">
              <p>
                When a homeowner with a broken heat pump or a business owner seeking legal counsel conducts a search on their phone, they make a subconscious credibility assessment within the first 800 milliseconds. If the screen remains white, stutters under the weight of unoptimized render-blocking scripts, or shifts elements during layout generation, the user hits the back button.
              </p>
              <h3 className="font-serif-headline text-2xl text-white pt-4">The Latency Tax on Mobile Networks</h3>
              <p>
                Google’s mobile index evaluates Core Web Vitals (Largest Contentful Paint, Cumulative Layout Shift, and Interaction to Next Paint) as an algorithmic ranking criterion. Most agency-built WordPress sites force mobile browsers to download 4MB to 8MB of assets across 60+ individual HTTP requests. On a 4G connection with moderate cell congestion, this translates to a 4.2-second delay before the phone number is clickable.
              </p>
              <div className="p-6 my-6 rounded-lg bg-[#111317] border-l-2 border-[#0066FF] text-sm text-[#F3F4F6]">
                "Every additional second of mobile page load latency reduces inquiry conversion by 12% to 20% in competitive service categories."
              </div>
              <h3 className="font-serif-headline text-2xl text-white pt-4">The Solution: Lean Hand-Coded Architecture</h3>
              <p>
                By stripping out third-party theme frameworks, compiling atomic utility CSS, and hosting static pre-rendered assets across global edge nodes (Netlify / Cloudflare), page weight drops from 6MB to under 250KB. The entire page renders in under 0.8 seconds. The user experiences instant gratification, and Google’s crawler awards higher local organic visibility.
              </p>
            </div>
          </article>

          {/* ARTICLE 2 */}
          <article className="space-y-6">
            <div className="flex items-center gap-3 text-xs font-mono text-[#6B7280]">
              <span className="text-[#0066FF]">LOCAL SEARCH DOMINANCE</span>
              <span>•</span>
              <span>10 MIN READ</span>
              <span>•</span>
              <span>ANIL KUMAR PUSALA</span>
            </div>

            <h2 className="font-serif-headline text-3xl sm:text-4xl text-[#F3F4F6] leading-tight">
              The 2026 Local SEO Blueprint: Moving Beyond Basic Google Business Profiles
            </h2>

            <div className="prose prose-invert max-w-none text-base text-[#9CA3AF] leading-relaxed space-y-4">
              <p>
                Most regional service businesses believe their local search strategy begins and ends with claiming their Google Business Profile and asking customers for five-star reviews. While reviews remain essential, the 2026 local search algorithm operates on an interconnected entity knowledge graph that cross-references your physical location with explicit semantic markup embedded inside your HTML.
              </p>
              <h3 className="font-serif-headline text-2xl text-white pt-4">Connecting the Knowledge Graph with JSON-LD</h3>
              <p>
                Search engine crawlers no longer just read page titles; they parse JSON-LD structured schemas. When your site explicitly declares its <code>LocalBusiness</code> or <code>ProfessionalService</code> type with exact geographic coordinates (<code>geo.latitude</code> and <code>geo.longitude</code>), designated service area boundaries (<code>areaServed</code>), and exact service catalogs (<code>hasOfferCatalog</code>), you eliminate all ambiguity.
              </p>
              <div className="p-6 my-6 rounded-lg bg-[#111317] border-l-2 border-[#0066FF] text-sm text-[#F3F4F6]">
                "When your web architecture feeds machine-readable JSON-LD entities directly to the search crawler, your site achieves top 3 local map pack placement without spamming low-quality backlinks."
              </div>
              <h3 className="font-serif-headline text-2xl text-white pt-4">Multi-Territory Landing Architecture</h3>
              <p>
                For regional contractors serving multiple cities or counties, the conventional approach of copying and pasting the same page with different city names triggers programmatic duplicate content penalties. At Orbium, we architect unique territorial hubs backed by distinct case study microdata, localized testimonials, and unique geo-coordinates for every territory served.
              </p>
            </div>
          </article>
        </section>

        {/* BOTTOM CTA */}
        <section className="py-20 px-6 bg-[#111317] border-t border-white/10 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-serif-headline text-3xl sm:text-4xl text-[#F3F4F6] mb-4">
              Apply these insights to your web presence.
            </h2>
            <p className="text-sm text-[#9CA3AF] mb-8">
              We audit your Core Web Vitals and local SEO schema at zero cost.
            </p>
            <a href="/contact/" className="btn-primary py-3.5 px-7 text-xs uppercase tracking-wider">
              Request Your Technical Audit
            </a>
          </div>
        </section>
      </main>

      <Footer showWordmark={true} />
    </div>
  );
};

export default InsightsPage;
