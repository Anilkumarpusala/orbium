import type { ContactFormData } from '../types';

export interface SubmitResponse {
  success: boolean;
  message: string;
}

export const submitContactForm = async (data: ContactFormData): Promise<SubmitResponse> => {
  const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT;

  const payload = {
    ...data,
    source: 'orbium-website',
    submittedAt: new Date().toISOString(),
  };

  if (!endpoint) {
    console.warn('Contact form endpoint not configured. In production, set VITE_CONTACT_FORM_ENDPOINT.');
    console.log('Simulating form submission with payload:', payload);
    
    // Simulate network delay
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          message: 'Thank you for your inquiry. We will be in touch soon.'
        });
      }, 1000);
    });
  }

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Server responded with status: \${response.status}`);
    }

    return {
      success: true,
      message: 'Thank you for your inquiry. We will be in touch soon.'
    };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return {
      success: false,
      message: 'There was an error submitting your form. Please try again later or email us directly.'
    };
  }
};
