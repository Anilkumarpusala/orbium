import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../components/Container/Container';
import { insights } from '../../data/insights';
import './HomeInsights.css';

export const HomeInsights: React.FC = () => {
  // Show first 3 articles on homepage
  const featured = insights.slice(0, 3);

  return (
    <section id="insights" className="home-insights" aria-labelledby="insights-headline">
      <Container>
        <div className="home-insights__header">
          <div className="home-insights__intro">
            <span className="chapter-num">06 // SELECTED INSIGHTS</span>
            <h2 id="insights-headline" className="home-insights__headline">
              Perspectives on design, code, and digital capital.
            </h2>
          </div>
          <Link to="/insights" className="home-insights__all-link">
            View All Publications <span>&rarr;</span>
          </Link>
        </div>

        <div className="home-insights__list">
          {featured.map((article, idx) => (
            <article key={article.id} className="insight-card">
              <div className="insight-card__meta">
                <span className="insight-card__index">0{idx + 1}</span>
                <span className="insight-card__cat">{article.category}</span>
                <span className="insight-card__time">{article.readTime}</span>
              </div>

              <h3 className="insight-card__title">
                <Link to={`/insights/${article.slug}`}>{article.title}</Link>
              </h3>

              <p className="insight-card__excerpt">{article.excerpt}</p>

              <Link to={`/insights/${article.slug}`} className="insight-card__link">
                Read Publication <span>&rarr;</span>
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};
