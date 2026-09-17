import React, { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { Container } from '../../components/Container/Container';
import { ScrollReveal } from '../../components/ScrollReveal/ScrollReveal';
import { Button } from '../../components/Button/Button';
import { submitContactForm } from '../../lib/api';
import type { ContactFormData } from '../../types';
import './Contact.css';

const initialFormData: ContactFormData = {
  name: '',
  business: '',
  email: '',
  phone: '',
  website: '',
  service: '',
  budget: '',
  timeline: '',
  message: ''
};

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.business.trim()) newErrors.business = 'Business is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.service) newErrors.service = 'Please select a service';
    if (!formData.budget) newErrors.budget = 'Please select a budget range';
    if (!formData.timeline) newErrors.timeline = 'Please select a timeline';
    const msg = formData.message?.trim() || '';
    if (!msg || msg.length < 20) {
      newErrors.message = 'Please provide a project description (min 20 chars)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === 'submitting' || status === 'success') return;

    if (!validate()) return;

    setStatus('submitting');
    try {
      await submitContactForm(formData);
      setStatus('success');
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section className="contact" id="contact">
      <Container size="narrow">
        <div className="contact__header">
          <ScrollReveal>
            <h2 className="contact__heading">Have something worth building?</h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="contact__subtitle">
              Tell us what you're working on, where things stand today, and where you want to take it.
            </p>
          </ScrollReveal>
        </div>

        {status === 'success' ? (
          <ScrollReveal>
            <div className="contact__success">
              <p>Thank you. We've received your inquiry and will be in touch within 1–2 business days.</p>
            </div>
          </ScrollReveal>
        ) : (
          <ScrollReveal delay={200}>
            <form className="contact__form" onSubmit={handleSubmit} noValidate>
              {status === 'error' && (
                <div className="contact__error-message">
                  Something went wrong. Please try again.
                </div>
              )}

              <div className="contact__row">
                <div className={`contact__field ${errors.name ? 'has-error' : ''}`}>
                  <label htmlFor="name">Name *</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                  {errors.name && <span className="contact__error-text">{errors.name}</span>}
                </div>
                <div className={`contact__field ${errors.business ? 'has-error' : ''}`}>
                  <label htmlFor="business">Business *</label>
                  <input type="text" id="business" name="business" value={formData.business} onChange={handleChange} required />
                  {errors.business && <span className="contact__error-text">{errors.business}</span>}
                </div>
              </div>

              <div className="contact__row">
                <div className={`contact__field ${errors.email ? 'has-error' : ''}`}>
                  <label htmlFor="email">Email *</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                  {errors.email && <span className="contact__error-text">{errors.email}</span>}
                </div>
                <div className="contact__field">
                  <label htmlFor="phone">Phone (optional)</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                </div>
              </div>

              <div className="contact__row">
                <div className="contact__field contact__field--full">
                  <label htmlFor="website">Current Website (optional)</label>
                  <input type="url" id="website" name="website" value={formData.website} onChange={handleChange} />
                </div>
              </div>

              <div className="contact__row">
                <div className={`contact__field ${errors.service ? 'has-error' : ''}`}>
                  <label htmlFor="service">Service *</label>
                  <select id="service" name="service" value={formData.service} onChange={handleChange} required>
                    <option value="" disabled>Select a service</option>
                    <option value="Web Design">Web Design</option>
                    <option value="Web Development">Web Development</option>
                    <option value="SEO">SEO</option>
                    <option value="Website Redesign">Website Redesign</option>
                    <option value="Ongoing Growth">Ongoing Growth</option>
                    <option value="Not Sure Yet">Not Sure Yet</option>
                  </select>
                  {errors.service && <span className="contact__error-text">{errors.service}</span>}
                </div>
                <div className={`contact__field ${errors.budget ? 'has-error' : ''}`}>
                  <label htmlFor="budget">Budget Range *</label>
                  <select id="budget" name="budget" value={formData.budget} onChange={handleChange} required>
                    <option value="" disabled>Select a budget</option>
                    <option value="Under $1,000">Under $1,000</option>
                    <option value="$1,000–$2,500">$1,000–$2,500</option>
                    <option value="$2,500–$5,000">$2,500–$5,000</option>
                    <option value="$5,000+">$5,000+</option>
                    <option value="Not Sure Yet">Not Sure Yet</option>
                  </select>
                  {errors.budget && <span className="contact__error-text">{errors.budget}</span>}
                </div>
              </div>

              <div className="contact__row">
                <div className={`contact__field contact__field--full ${errors.timeline ? 'has-error' : ''}`}>
                  <label htmlFor="timeline">Timeline *</label>
                  <select id="timeline" name="timeline" value={formData.timeline} onChange={handleChange} required>
                    <option value="" disabled>Select a timeline</option>
                    <option value="ASAP">ASAP</option>
                    <option value="1–2 months">1–2 months</option>
                    <option value="3–6 months">3–6 months</option>
                    <option value="Just exploring">Just exploring</option>
                  </select>
                  {errors.timeline && <span className="contact__error-text">{errors.timeline}</span>}
                </div>
              </div>

              <div className="contact__row">
                <div className={`contact__field contact__field--full ${errors.message ? 'has-error' : ''}`}>
                  <label htmlFor="message">Project Description *</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    placeholder="Tell us about your project..."
                    rows={5}
                    required 
                  />
                  {errors.message && <span className="contact__error-text">{errors.message}</span>}
                </div>
              </div>

              <div className="contact__submit">
                <Button 
                  type="submit" 
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? 'Submitting...' : 'Send Inquiry'}
                </Button>
              </div>
            </form>
          </ScrollReveal>
        )}
      </Container>
    </section>
  );
};
