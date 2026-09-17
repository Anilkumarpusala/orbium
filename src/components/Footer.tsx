import React from 'react';
import TextAnimationCollection from './TextAnimationCollection';

interface FooterProps {
  showWordmark?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ showWordmark = true }) => {
  return (
    <footer className="w-full bg-[#090A0B] border-t border-white/10">
      {/* ThreeUI Wordmark Integration (Footer Signature) */}
      {showWordmark && (
        <div className="w-full overflow-hidden bg-[#090A0B] border-b border-white/5 py-16 flex items-center justify-center">
          <div className="shader-frame w-full max-w-5xl h-[280px] sm:h-[360px] relative flex items-center justify-center">
            <TextAnimationCollection
              brightness={1.00}
              hue={0}
              mode="dark"
              saturation={1.00}
              variant="threeui-intro"
            />
          </div>
        </div>
      )}

      {/* Main 4-Column Structured Footer */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Col 1: Brand & Manifesto */}
          <div>
            <img
              src="/assets/images/logo.png"
              alt="ORBIUM Emblem"
              style={{ height: '32px', maxHeight: '32px', width: 'auto' }}
              className="h-8 w-auto mb-4 object-contain"
            />
            <div className="tracking-[0.2em] font-semibold text-base text-white mb-2">ORBIUM</div>
            <p className="text-sm text-[#9CA3AF] leading-relaxed">
              Custom digital architecture & local market dominance for commercial enterprises.
            </p>
          </div>

          {/* Col 2: Navigation Index */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-white font-medium mb-4">Navigation Index</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="/work/" className="text-[#9CA3AF] hover:text-white transition-colors">
                  Work & Case Studies
                </a>
              </li>
              <li>
                <a href="/services/" className="text-[#9CA3AF] hover:text-white transition-colors">
                  Disciplines & Deliverables
                </a>
              </li>
              <li>
                <a href="/about/" className="text-[#9CA3AF] hover:text-white transition-colors">
                  About & Manifesto
                </a>
              </li>
              <li>
                <a href="/insights/" className="text-[#9CA3AF] hover:text-white transition-colors">
                  Engineering Insights
                </a>
              </li>
              <li>
                <a href="/contact/" className="text-[#9CA3AF] hover:text-white transition-colors">
                  Initiate Commission
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact & Availability */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-white font-medium mb-4">Direct Dispatch</h4>
            <p className="text-sm text-[#9CA3AF] mb-3">
              Direct inquiries and RFP briefs:
            </p>
            <a
              href="mailto:hello@orbiumai.online"
              className="text-sm text-[#0066FF] hover:underline font-mono block mb-4"
            >
              hello@orbiumai.online
            </a>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111317] border border-white/10 text-xs text-[#9CA3AF]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Accepting 2 client commissions per month
            </div>
          </div>

          {/* Col 4: Legal & Standards */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-white font-medium mb-4">Standards</h4>
            <p className="text-xs text-[#6B7280] leading-relaxed mb-4">
              Engineered with sub-second performance protocols, strict semantic microdata, and zero template bloat.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-[#6B7280]">
              <span>Netlify Edge Certified</span>
              <span>100/100 Core Web Vitals</span>
              <span>Sub-Second Latency</span>
            </div>
          </div>
        </div>

        {/* Hairline divider & Bottom line */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B7280]">
          <div>© 2026 ORBIUM. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a href="/contact/" className="hover:text-white transition-colors">Client Portal</a>
            <a href="/about/" className="hover:text-white transition-colors">Manifesto</a>
            <a href="/insights/" className="hover:text-white transition-colors">Journal</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
