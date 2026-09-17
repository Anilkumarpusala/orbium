import React from 'react';
import { Container } from '../../components/Container/Container';
import './Testimonials.css';

export const Testimonials: React.FC = () => {
  return (
    <section className="testimonials" aria-labelledby="testimonials-title">
      <Container>
        <div className="testimonials__content">
          <h2 id="testimonials-title" className="testimonials__title">
            Proof will live here.
          </h2>
          <p className="testimonials__subtitle">
            Real client stories and results will be added here as projects launch. We do not fabricate testimonials.
          </p>
        </div>
      </Container>
    </section>
  );
};
