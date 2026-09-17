import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead/SEOHead';
import { Container } from '../components/Container/Container';
import { Button } from '../components/Button/Button';
import { submitContactForm } from '../lib/api';
import './StartAProjectPage.css';

interface FormData {
  projectType: string;
  name: string;
  role: string;
  email: string;
  phone: string;
  business: string;
  industry: string;
  website: string;
  websiteNotes: string;
  whatNeedsToChange: string[];
  successOutcome: string;
  budget: string;
  timeline: string;
  message: string;
}

const initialFormData: FormData = {
  projectType: 'Complete Website Redesign',
  name: '',
  role: '',
  email: '',
  phone: '',
  business: '',
  industry: '',
  website: '',
  websiteNotes: '',
  whatNeedsToChange: ['Visual Authority & Prestige'],
  successOutcome: '',
  budget: '$10,000 – $20,000',
  timeline: '2–3 Months',
  message: '',
};

export const StartAProjectPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const totalSteps = 10;

  const updateField = (field: keyof FormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (fieldErrors[field]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const toggleChangeItem = (item: string) => {
    setFormData((prev) => {
      const exists = prev.whatNeedsToChange.includes(item);
      if (exists) {
        return {
          ...prev,
          whatNeedsToChange: prev.whatNeedsToChange.filter((i) => i !== item),
        };
      } else {
        return {
          ...prev,
          whatNeedsToChange: [...prev.whatNeedsToChange, item],
        };
      }
    });
  };

  const validateStep = (step: number): boolean => {
    const errors: Record<string, string> = {};

    if (step === 2) {
      if (!formData.name.trim()) errors.name = 'Please provide your name.';
      if (!formData.email.trim()) {
        errors.email = 'Please provide your email address.';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errors.email = 'Please provide a valid email address.';
      }
    }

    if (step === 3) {
      if (!formData.business.trim()) errors.business = 'Please provide your business or organization name.';
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      if (currentStep < totalSteps) {
        setCurrentStep((prev) => prev + 1);
        window.scrollTo({ top: 120, behavior: 'smooth' });
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const payload = {
        projectType: formData.projectType,
        name: formData.name,
        role: formData.role,
        email: formData.email,
        phone: formData.phone,
        business: formData.business,
        industry: formData.industry,
        website: formData.website,
        whatNeedsToChange: formData.whatNeedsToChange,
        successOutcome: formData.successOutcome,
        service: formData.projectType,
        budget: formData.budget,
        timeline: formData.timeline,
        message: `${formData.websiteNotes ? `Website context: ${formData.websiteNotes}\n\n` : ''}${formData.message || 'No additional notes provided.'}`,
        recipient: 'ani@orbiumai.online',
      };

      const res = await submitContactForm(payload);
      if (res.success) {
        setIsSubmitted(true);
      } else {
        setErrorMessage(res.message || 'There was an issue submitting. Please contact ani@orbiumai.online directly.');
      }
    } catch (err: any) {
      setErrorMessage('Network connection error. Please email ani@orbiumai.online directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEOHead
        title="Start a Project — ORBIUM | Guided Project Inquiry"
        description="Initiate a project consultation with founder Ani McQueen. A 10-step guided inquiry for ambitious businesses seeking serious digital architecture."
      />

      <main className="inquiry-page">
        <Container size="narrow">
          {/* Header */}
          <div className="inquiry-header">
            <span className="chapter-num">PROJECT CONSULTATION // 10-STEP INQUIRY</span>
            <h1 className="inquiry-title">Initiate a dialogue.</h1>
            <p className="inquiry-subtitle">
              Every inquiry is reviewed personally by founder Ani McQueen. We do not use automated pitch algorithms or junior screening. Expect a diagnostic response within 24 hours.
            </p>
          </div>

          {/* Progress Indicator */}
          {!isSubmitted && (
            <div className="inquiry-progress">
              <div className="inquiry-progress__bar">
                <div
                  className="inquiry-progress__fill"
                  style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                ></div>
              </div>
              <div className="inquiry-progress__meta">
                <span>STEP 0{currentStep} OF {totalSteps}</span>
                <span className="inquiry-progress__step-name">
                  {currentStep === 1 && 'What are we building?'}
                  {currentStep === 2 && 'Tell me about you'}
                  {currentStep === 3 && 'Tell me about the business'}
                  {currentStep === 4 && 'Current website'}
                  {currentStep === 5 && 'What needs to change?'}
                  {currentStep === 6 && 'What does success look like?'}
                  {currentStep === 7 && 'Budget allocation'}
                  {currentStep === 8 && 'Target timeline'}
                  {currentStep === 9 && 'Project details & nuance'}
                  {currentStep === 10 && 'Review & Submit'}
                </span>
              </div>
            </div>
          )}

          {/* Form Container */}
          <div className="inquiry-card">
            {isSubmitted ? (
              <div className="inquiry-success">
                <div className="inquiry-success__icon">&check;</div>
                <h2 className="inquiry-success__title">Inquiry received.</h2>
                <p className="inquiry-success__body">
                  Thank you, <strong>{formData.name}</strong>. Your project brief has been transmitted directly to founder <strong>Ani McQueen</strong> at <code>ani@orbiumai.online</code>.
                </p>
                <p className="inquiry-success__sub">
                  We are reviewing the scope for <strong>{formData.business}</strong> and will follow up within one business day to schedule a 30-minute diagnostic session.
                </p>
                <div className="inquiry-success__actions">
                  <Button as={Link} to="/" variant="outline" size="md">
                    Return to Homepage
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {/* STEP 1: What are we building? */}
                {currentStep === 1 && (
                  <div className="step-panel">
                    <span className="step-prompt">Step 01 / 10</span>
                    <h2 className="step-heading">What are we building together?</h2>
                    <p className="step-helper">Select the primary mandate for this engagement.</p>

                    <div className="option-stack">
                      {[
                        {
                          val: 'Complete Website Redesign',
                          desc: 'An established business outgrowing its current digital presence. Needs commercial authority, modern typography, and clean code.',
                        },
                        {
                          val: 'New Digital Presence from Scratch',
                          desc: 'A new enterprise, spin-off, or ambitious venture requiring ground-up strategy, identity translation, and web build.',
                        },
                        {
                          val: 'Web Application / Platform Interface',
                          desc: 'Custom client dashboard, portal, or bespoke software interface engineered with modern React and TypeScript.',
                        },
                        {
                          val: 'Search Architecture & Growth Engine',
                          desc: 'Rebuilding technical crawlability, structured data schema, and high-intent organic conversion pathways.',
                        },
                      ].map((opt) => (
                        <div
                          key={opt.val}
                          className={`option-card ${formData.projectType === opt.val ? 'option-card--active' : ''}`}
                          onClick={() => updateField('projectType', opt.val)}
                          role="radio"
                          aria-checked={formData.projectType === opt.val}
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              updateField('projectType', opt.val);
                            }
                          }}
                        >
                          <span className="option-title">{opt.val}</span>
                          <span className="option-desc">{opt.desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* STEP 2: Tell me about you */}
                {currentStep === 2 && (
                  <div className="step-panel">
                    <span className="step-prompt">Step 02 / 10</span>
                    <h2 className="step-heading">Tell me about you.</h2>
                    <p className="step-helper">We work directly with key decision-makers.</p>

                    <div className="field-group">
                      <label className="field-label" htmlFor="field-name">
                        Your Full Name <span className="req">*</span>
                      </label>
                      <input
                        id="field-name"
                        type="text"
                        className={`field-input ${fieldErrors.name ? 'field-input--error' : ''}`}
                        placeholder="e.g. Eleanor Vance"
                        value={formData.name}
                        onChange={(e) => updateField('name', e.target.value)}
                        autoFocus
                      />
                      {fieldErrors.name && <span className="field-error">{fieldErrors.name}</span>}
                    </div>

                    <div className="field-group">
                      <label className="field-label" htmlFor="field-role">
                        Your Role or Title
                      </label>
                      <input
                        id="field-role"
                        type="text"
                        className="field-input"
                        placeholder="e.g. Founder, CEO, Managing Partner"
                        value={formData.role}
                        onChange={(e) => updateField('role', e.target.value)}
                      />
                    </div>

                    <div className="field-group">
                      <label className="field-label" htmlFor="field-email">
                        Direct Email Address <span className="req">*</span>
                      </label>
                      <input
                        id="field-email"
                        type="email"
                        className={`field-input ${fieldErrors.email ? 'field-input--error' : ''}`}
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => updateField('email', e.target.value)}
                      />
                      {fieldErrors.email && <span className="field-error">{fieldErrors.email}</span>}
                    </div>

                    <div className="field-group">
                      <label className="field-label" htmlFor="field-phone">
                        Direct Phone or WhatsApp (Optional)
                      </label>
                      <input
                        id="field-phone"
                        type="tel"
                        className="field-input"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => updateField('phone', e.target.value)}
                      />
                    </div>
                  </div>
                )}

                {/* STEP 3: Tell me about the business */}
                {currentStep === 3 && (
                  <div className="step-panel">
                    <span className="step-prompt">Step 03 / 10</span>
                    <h2 className="step-heading">Tell me about the business.</h2>
                    <p className="step-helper">The entity we are architecting for.</p>

                    <div className="field-group">
                      <label className="field-label" htmlFor="field-business">
                        Company or Practice Name <span className="req">*</span>
                      </label>
                      <input
                        id="field-business"
                        type="text"
                        className={`field-input ${fieldErrors.business ? 'field-input--error' : ''}`}
                        placeholder="e.g. Vance Architectural Systems"
                        value={formData.business}
                        onChange={(e) => updateField('business', e.target.value)}
                        autoFocus
                      />
                      {fieldErrors.business && <span className="field-error">{fieldErrors.business}</span>}
                    </div>

                    <div className="field-group">
                      <label className="field-label" htmlFor="field-industry">
                        Industry or Commercial Sector
                      </label>
                      <input
                        id="field-industry"
                        type="text"
                        className="field-input"
                        placeholder="e.g. Architecture, Precision Manufacturing, Fiduciary Law, Climate Tech"
                        value={formData.industry}
                        onChange={(e) => updateField('industry', e.target.value)}
                      />
                    </div>
                  </div>
                )}

                {/* STEP 4: Current website */}
                {currentStep === 4 && (
                  <div className="step-panel">
                    <span className="step-prompt">Step 04 / 10</span>
                    <h2 className="step-heading">Current website.</h2>
                    <p className="step-helper">Where does the business currently live online?</p>

                    <div className="field-group">
                      <label className="field-label" htmlFor="field-website">
                        Current Website URL
                      </label>
                      <input
                        id="field-website"
                        type="text"
                        className="field-input"
                        placeholder="https://yourbusiness.com (or leave empty if starting fresh)"
                        value={formData.website}
                        onChange={(e) => updateField('website', e.target.value)}
                        autoFocus
                      />
                    </div>

                    <div className="field-group">
                      <label className="field-label" htmlFor="field-notes">
                        What is working vs. failing on the current site?
                      </label>
                      <textarea
                        id="field-notes"
                        className="field-textarea"
                        rows={4}
                        placeholder="e.g. The site was built 4 years ago on an off-the-shelf template. It feels dated, takes 6 seconds to load on mobile, and doesn't represent the scale of our current work."
                        value={formData.websiteNotes}
                        onChange={(e) => updateField('websiteNotes', e.target.value)}
                      />
                    </div>
                  </div>
                )}

                {/* STEP 5: What needs to change? */}
                {currentStep === 5 && (
                  <div className="step-panel">
                    <span className="step-prompt">Step 05 / 10</span>
                    <h2 className="step-heading">What needs to change?</h2>
                    <p className="step-helper">Select all objectives that apply to this build.</p>

                    <div className="checkbox-grid">
                      {[
                        { title: 'Visual Authority & Prestige', desc: 'Current site looks amateur or template-driven' },
                        { title: 'Inbound Lead Qualification', desc: 'Traffic arrives but rarely books consultations' },
                        { title: 'Mobile Speed & Performance', desc: 'Failing Core Web Vitals or clunky on phones' },
                        { title: 'Positioning & Messaging Clarity', desc: 'Offerings feel bloated, generic, or ambiguous' },
                        { title: 'Search Engine Architecture', desc: 'Invisible for high-intent commercial keywords' },
                        { title: 'Technical Reliability', desc: 'Brittle WordPress plugins, security concerns, slow updates' },
                      ].map((item) => {
                        const isChecked = formData.whatNeedsToChange.includes(item.title);
                        return (
                          <div
                            key={item.title}
                            className={`check-card ${isChecked ? 'check-card--checked' : ''}`}
                            onClick={() => toggleChangeItem(item.title)}
                            role="checkbox"
                            aria-checked={isChecked}
                            tabIndex={0}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                toggleChangeItem(item.title);
                              }
                            }}
                          >
                            <span className="check-box">{isChecked ? '✓' : ''}</span>
                            <div className="check-text">
                              <span className="check-title">{item.title}</span>
                              <span className="check-desc">{item.desc}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* STEP 6: What does success look like? */}
                {currentStep === 6 && (
                  <div className="step-panel">
                    <span className="step-prompt">Step 06 / 10</span>
                    <h2 className="step-heading">What does success look like?</h2>
                    <p className="step-helper">
                      Twelve months after launch, what tangible business outcome makes this engagement a definitive triumph?
                    </p>

                    <div className="field-group">
                      <textarea
                        className="field-textarea"
                        rows={5}
                        placeholder="e.g. We want prospective commercial clients to land on our site and immediately perceive us as the unquestioned tier-one firm in our region. We want to double our qualified project inquiries while eliminating low-budget tire-kickers."
                        value={formData.successOutcome}
                        onChange={(e) => updateField('successOutcome', e.target.value)}
                        autoFocus
                      />
                    </div>
                  </div>
                )}

                {/* STEP 7: Budget */}
                {currentStep === 7 && (
                  <div className="step-panel">
                    <span className="step-prompt">Step 07 / 10</span>
                    <h2 className="step-heading">Budget allocation.</h2>
                    <p className="step-helper">
                      Transparent parameters ensure we scope the appropriate level of strategy, design, and engineering rigor.
                    </p>

                    <div className="option-stack">
                      {[
                        {
                          val: '$5,000 – $10,000',
                          desc: 'Focused strategic website, lean architecture, or single high-stakes diagnostic build.',
                        },
                        {
                          val: '$10,000 – $20,000',
                          desc: 'Comprehensive multi-page custom build, full editorial design system, and technical SEO architecture.',
                        },
                        {
                          val: '$20,000 – $40,000',
                          desc: 'Deep brand translation, custom interface components, bespoke CMS/API architecture, and growth loop.',
                        },
                        {
                          val: '$40,000+',
                          desc: 'Extensive multi-entity platform, enterprise web application, or prolonged technical partnership.',
                        },
                      ].map((opt) => (
                        <div
                          key={opt.val}
                          className={`option-card ${formData.budget === opt.val ? 'option-card--active' : ''}`}
                          onClick={() => updateField('budget', opt.val)}
                          role="radio"
                          aria-checked={formData.budget === opt.val}
                          tabIndex={0}
                        >
                          <span className="option-title">{opt.val}</span>
                          <span className="option-desc">{opt.desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* STEP 8: Timeline */}
                {currentStep === 8 && (
                  <div className="step-panel">
                    <span className="step-prompt">Step 08 / 10</span>
                    <h2 className="step-heading">Target timeline.</h2>
                    <p className="step-helper">When does this website need to be live in production?</p>

                    <div className="option-stack">
                      {[
                        {
                          val: '4–6 Weeks',
                          desc: 'Rapid focused delivery for urgent business or capital launch windows.',
                        },
                        {
                          val: '2–3 Months',
                          desc: 'Standard thoughtful trajectory allowing full discovery, design, build, and pre-launch QA.',
                        },
                        {
                          val: 'Flexible / Next Quarter',
                          desc: 'Long-range strategic planning; quality and depth prioritized over immediate speed.',
                        },
                      ].map((opt) => (
                        <div
                          key={opt.val}
                          className={`option-card ${formData.timeline === opt.val ? 'option-card--active' : ''}`}
                          onClick={() => updateField('timeline', opt.val)}
                          role="radio"
                          aria-checked={formData.timeline === opt.val}
                          tabIndex={0}
                        >
                          <span className="option-title">{opt.val}</span>
                          <span className="option-desc">{opt.desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* STEP 9: Project details & nuance */}
                {currentStep === 9 && (
                  <div className="step-panel">
                    <span className="step-prompt">Step 09 / 10</span>
                    <h2 className="step-heading">Project details & nuance.</h2>
                    <p className="step-helper">
                      Share any specific technical requirements, inspiration, reference websites, or commercial context.
                    </p>

                    <div className="field-group">
                      <textarea
                        className="field-textarea"
                        rows={6}
                        placeholder="e.g. Key competitors we admire, specific integrations needed (CRM, scheduler, billing), or any brand guidelines already established..."
                        value={formData.message}
                        onChange={(e) => updateField('message', e.target.value)}
                        autoFocus
                      />
                    </div>
                  </div>
                )}

                {/* STEP 10: Review & Submit */}
                {currentStep === 10 && (
                  <div className="step-panel">
                    <span className="step-prompt">Step 10 / 10</span>
                    <h2 className="step-heading">Review & transmit.</h2>
                    <p className="step-helper">
                      Review your project brief. Inquiries are transmitted directly to founder Ani McQueen.
                    </p>

                    <div className="review-box">
                      <div className="review-row">
                        <span className="review-label">Mandate:</span>
                        <span className="review-val">{formData.projectType}</span>
                      </div>
                      <div className="review-row">
                        <span className="review-label">Contact:</span>
                        <span className="review-val">{formData.name} ({formData.email})</span>
                      </div>
                      <div className="review-row">
                        <span className="review-label">Organization:</span>
                        <span className="review-val">{formData.business} {formData.industry ? `— ${formData.industry}` : ''}</span>
                      </div>
                      {formData.website && (
                        <div className="review-row">
                          <span className="review-label">Website:</span>
                          <span className="review-val">{formData.website}</span>
                        </div>
                      )}
                      <div className="review-row">
                        <span className="review-label">Budget:</span>
                        <span className="review-val">{formData.budget}</span>
                      </div>
                      <div className="review-row">
                        <span className="review-label">Timeline:</span>
                        <span className="review-val">{formData.timeline}</span>
                      </div>
                      <div className="review-row">
                        <span className="review-label">Key Focus:</span>
                        <span className="review-val">{formData.whatNeedsToChange.join(', ') || 'General Redesign'}</span>
                      </div>
                    </div>

                    {errorMessage && (
                      <div className="inquiry-error-banner" role="alert">
                        {errorMessage}
                      </div>
                    )}

                    <div className="inquiry-guarantee">
                      <span>Direct review by founder Ani McQueen &bull; Initial diagnostic response within 24 hours</span>
                    </div>
                  </div>
                )}

                {/* Navigation Controls */}
                <div className="inquiry-controls">
                  {currentStep > 1 && (
                    <button
                      type="button"
                      className="btn btn--outline btn--md"
                      onClick={prevStep}
                      disabled={isSubmitting}
                    >
                      &larr; Back
                    </button>
                  )}

                  {currentStep < totalSteps ? (
                    <button
                      type="button"
                      className="btn btn--primary btn--md inquiry-next-btn"
                      onClick={nextStep}
                    >
                      Next Step &rarr;
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="btn btn--primary btn--lg inquiry-submit-btn"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Transmitting Brief...' : 'Transmit Project Brief →'}
                    </button>
                  )}
                </div>
              </form>
            )}
          </div>
        </Container>
      </main>
    </>
  );
};

export default StartAProjectPage;
