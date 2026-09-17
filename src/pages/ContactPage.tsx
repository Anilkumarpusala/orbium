import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const ContactPage: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [service, setService] = useState('Custom Web Rebuild');
  const [budget, setBudget] = useState('$4,000 – $7,500');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const budgetOptions = [
    '$2,500 – $4,000',
    '$4,000 – $7,500',
    '$7,500+',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#090A0B] text-[#9CA3AF] flex flex-col selection:bg-[#0066FF] selection:text-white">
      <Header activePath="/contact/" />

      <main className="flex-grow pt-24">
        {/* PAGE HEADER */}
        <section className="pt-16 pb-16 px-6 max-w-7xl mx-auto border-b border-white/10 animate-fade-in-up">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-widest text-[#0066FF] font-mono mb-3">
              CLIENT COMMISSION INTAKE
            </div>
            <h1 className="font-serif-headline text-4xl sm:text-6xl md:text-7xl mb-6">
              Initiate a Commission
            </h1>
            <p className="text-lg text-[#9CA3AF] leading-relaxed">
              Tell us about your company, your current bottlenecks, and your timeline goals. We respond within 12 hours.
            </p>
          </div>
        </section>

        {/* FORM & SIDEBAR SECTION */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Form Column */}
            <div className="lg:col-span-8">
              {submitted ? (
                <div className="bg-[#111317] border border-white/10 rounded-lg p-10 text-center animate-fade-in-up">
                  <div className="w-12 h-12 rounded-full bg-[#0066FF]/20 border border-[#0066FF] text-[#0066FF] flex items-center justify-center mx-auto mb-6 text-xl">
                    ✓
                  </div>
                  <h2 className="font-serif-headline text-3xl text-white mb-3">Project Brief Received</h2>
                  <p className="text-sm text-[#9CA3AF] max-w-md mx-auto mb-6">
                    Thank you, {fullName}. Your brief has been transmitted directly to founder Anil Kumar Pusala. We will review your requirements and respond to <span className="text-[#F3F4F6] font-mono">{email}</span> within 12 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-outline text-xs uppercase tracking-wider py-2.5 px-6"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-[#111317] border border-white/10 rounded-lg p-8 sm:p-10 space-y-8">
                  {/* Row 1: Name & Business */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#F3F4F6] font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Johnathan Davis"
                        className="w-full bg-[#16181D] border border-white/10 rounded px-4 py-3 text-sm text-[#F3F4F6] focus:border-[#0066FF] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#F3F4F6] font-medium mb-2">
                        Business Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                        placeholder="Davis Mechanical Ltd."
                        className="w-full bg-[#16181D] border border-white/10 rounded px-4 py-3 text-sm text-[#F3F4F6] focus:border-[#0066FF] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email & Website */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#F3F4F6] font-medium mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="jd@davis-mech.com"
                        className="w-full bg-[#16181D] border border-white/10 rounded px-4 py-3 text-sm text-[#F3F4F6] focus:border-[#0066FF] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#F3F4F6] font-medium mb-2">
                        Current Website URL
                      </label>
                      <input
                        type="url"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        placeholder="https://example.com"
                        className="w-full bg-[#16181D] border border-white/10 rounded px-4 py-3 text-sm text-[#F3F4F6] focus:border-[#0066FF] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 3: Service Dropdown */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#F3F4F6] font-medium mb-2">
                      Primary Service Objective *
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full bg-[#16181D] border border-white/10 rounded px-4 py-3 text-sm text-[#F3F4F6] focus:border-[#0066FF] focus:outline-none transition-colors"
                    >
                      <option value="Custom Web Rebuild">Custom Web Rebuild</option>
                      <option value="Local SEO Architecture">Local SEO Architecture</option>
                      <option value="Lead Intake Funnel">Lead Intake Funnel</option>
                      <option value="Full Transformation">Full Transformation</option>
                    </select>
                  </div>

                  {/* Row 4: Budget Tier Pill Buttons */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#F3F4F6] font-medium mb-3">
                      Anticipated Budget Tier
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {budgetOptions.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setBudget(opt)}
                          className={`px-4 py-2.5 rounded text-xs font-mono transition-all duration-150 ${
                            budget === opt
                              ? 'bg-[#0066FF] text-white border border-[#0066FF]'
                              : 'bg-[#16181D] text-[#9CA3AF] border border-white/10 hover:border-white/20'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Row 5: Details Textarea */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#F3F4F6] font-medium mb-2">
                      Project Details & Current Bottlenecks *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                      placeholder="Briefly describe your business, who your ideal customers are, and the main issues with your current digital setup..."
                      className="w-full bg-[#16181D] border border-white/10 rounded px-4 py-3 text-sm text-[#F3F4F6] focus:border-[#0066FF] focus:outline-none transition-colors resize-y"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn-primary w-full py-4 text-xs uppercase tracking-wider font-semibold"
                    >
                      {submitting ? 'Transmitting Brief...' : 'Transmit Project Brief →'}
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-4 space-y-8">
              <div className="bg-[#111317] border border-white/10 rounded-lg p-8 space-y-6">
                <div>
                  <div className="text-xs uppercase tracking-widest text-[#0066FF] font-mono mb-2">
                    DIRECT DISPATCH
                  </div>
                  <h3 className="font-serif-headline text-2xl text-white mb-2">Email the Founder</h3>
                  <a
                    href="mailto:hello@orbiumai.online"
                    className="text-sm text-[#0066FF] hover:underline font-mono block"
                  >
                    hello@orbiumai.online
                  </a>
                </div>

                <div className="pt-6 border-t border-white/5">
                  <div className="text-xs uppercase tracking-widest text-[#6B7280] font-mono mb-1">
                    RESPONSE SLA
                  </div>
                  <div className="text-sm text-[#F3F4F6] font-medium">Guaranteed &lt; 12 Hours</div>
                  <p className="text-xs text-[#6B7280] mt-1">
                    Every brief is personally reviewed by technical lead Anil Kumar Pusala.
                  </p>
                </div>

                <div className="pt-6 border-t border-white/5">
                  <div className="text-xs uppercase tracking-widest text-[#6B7280] font-mono mb-1">
                    COMMISSION CAPACITY
                  </div>
                  <div className="text-sm text-emerald-400 font-medium">2 Slots Available This Month</div>
                  <p className="text-xs text-[#6B7280] mt-1">
                    Strict capacity capping ensures uncompromised architectural quality.
                  </p>
                </div>
              </div>

              <div className="bg-[#111317] border border-white/5 rounded-lg p-8">
                <h4 className="text-xs uppercase tracking-wider text-white font-medium mb-3">
                  What Happens Next?
                </h4>
                <ol className="space-y-4 text-xs text-[#9CA3AF]">
                  <li className="flex items-start gap-3">
                    <span className="font-mono text-[#0066FF] font-semibold">01</span>
                    <span>We inspect your current web infrastructure, domain metrics, and local competitors.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-mono text-[#0066FF] font-semibold">02</span>
                    <span>We schedule a direct 15-minute technical audit call to align on measurable KPIs.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-mono text-[#0066FF] font-semibold">03</span>
                    <span>You receive a fixed-scope proposal with guaranteed 2–3 week delivery milestones.</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer showWordmark={true} />
    </div>
  );
};

export default ContactPage;
