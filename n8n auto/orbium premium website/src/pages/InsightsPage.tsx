import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead/SEOHead';
import { Container } from '../components/Container/Container';
import { ScrollReveal } from '../components/ScrollReveal/ScrollReveal';
import { insights } from '../data/insights';
import './InsightsPage.css';

const InsightsPage: React.FC = () => {
  return (
    <>
      <SEOHead title="Insights — ORBIUM" />
      <main className="insights-page">
        <header className="insights-page__header">
          <Container>
            <ScrollReveal>
              <h1 className="insights-page__title">Insights</h1>
              <p className="insights-page__subtitle">Practical perspectives on web design, development, and digital growth.</p>
            </ScrollReveal>
          </Container>
        </header>

        <section className="insights-page__grid-section">
          <Container>
            <div className="insights-page__grid">
              {insights.map((article, idx) => (
                <ScrollReveal key={article.id} delay={idx * 0.1}>
                  <Link to={`/insights/${article.slug}`} className="insight-card">
                    <div className="insight-card__meta">
                      <span className="insight-card__category">{article.category}</span>
                      <span className="insight-card__date">{article.date}</span>
                    </div>
                    <h3 className="insight-card__title">{article.title}</h3>
                    <p className="insight-card__excerpt">{article.excerpt}</p>
                    <div className="insight-card__footer">
                      <span className="insight-card__read-time">{article.readTime}</span>
                      <span className="insight-card__link">Read Article →</span>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </Container>
        </section>
      </main>
    </>
  );
};

export default InsightsPage;
