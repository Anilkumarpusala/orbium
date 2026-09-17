import React, { useState } from 'react';
import { Container } from '../../components/Container/Container';
import { ScrollReveal } from '../../components/ScrollReveal/ScrollReveal';
import { faqs } from '../../data/faq';
import './FAQ.css';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="faq" id="faq">
      <Container size="narrow">
        <ScrollReveal>
          <h2 className="faq__heading">Common questions</h2>
        </ScrollReveal>

        <div className="faq__list">
          {faqs.map((item, index) => {
            const isOpen = openId === item.id;
            return (
              <ScrollReveal key={item.id} delay={index * 50}>
                <div className="faq__item">
                  <button
                    className="faq__trigger"
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-content-${item.id}`}
                  >
                    <span className="faq__question">{item.question}</span>
                    <span className="faq__icon" aria-hidden="true">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  <div
                    id={`faq-content-${item.id}`}
                    role="region"
                    className={`faq__content ${isOpen ? 'is-open' : ''}`}
                  >
                    <div className="faq__answer">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
