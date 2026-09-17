import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead/SEOHead';
import { Container } from '../components/Container/Container';
import { ScrollReveal } from '../components/ScrollReveal/ScrollReveal';
import { Button } from '../components/Button/Button';
import { insights } from '../data/insights';
import './InsightArticlePage.css';

const InsightArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const articleIndex = insights.findIndex(a => a.slug === slug);
  const article = insights[articleIndex];

  if (!article) {
    return (
      <div className="article-404">
        <Container>
          <h1>Article not found.</h1>
          <Button to="/insights" variant="outline">Back to Insights</Button>
        </Container>
      </div>
    );
  }

  // Parse paragraphs from article content
  const paragraphs = article.content
    .trim()
    .split('\n\n')
    .filter(p => p.trim().length > 0);

  const nextArticle = insights[(articleIndex + 1) % insights.length];

  return (
    <>
      <SEOHead 
        title={`${article.title} — ORBIUM Insights`}
        description={article.excerpt}
      />
      <article className="insight-article">
        <header className="insight-article__header">
          <Container size="narrow">
            <ScrollReveal>
              <div className="insight-article__nav-back">
                <Link to="/insights" className="insight-article__back-link">
                  ← All Insights
                </Link>
              </div>

              <div className="insight-article__meta">
                <span className="insight-article__category">{article.category}</span>
                <span className="insight-article__dot" aria-hidden="true">•</span>
                <span className="insight-article__date">{article.date}</span>
                <span className="insight-article__dot" aria-hidden="true">•</span>
                <span className="insight-article__read-time">{article.readTime}</span>
              </div>
              <h1 className="insight-article__title">{article.title}</h1>
              <p className="insight-article__lead">{article.excerpt}</p>
            </ScrollReveal>
          </Container>
        </header>

        <section className="insight-article__content">
          <Container size="narrow">
            <div className="insight-article__body">
              <ScrollReveal>
                {paragraphs.map((para, idx) => (
                  <p key={idx} className="insight-article__paragraph">{para}</p>
                ))}
                
                <div className="insight-article__takeaway-box">
                  <h3>Orbium Takeaway</h3>
                  <p>
                    A digital presence must be treated as living business infrastructure. When strategy, engineering, and editorial craft align, websites become measurable growth drivers rather than passive brochures.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </Container>
        </section>

        <footer className="insight-article__footer">
          <Container size="narrow">
            <div className="insight-article__footer-nav">
              <div className="insight-article__next">
                <span className="label">Next Article</span>
                <Link to={`/insights/${nextArticle.slug}`} className="insight-article__next-title">
                  {nextArticle.title} →
                </Link>
              </div>
              <Button to="/insights" variant="outline">All Articles</Button>
            </div>
          </Container>
        </footer>
      </article>
    </>
  );
};

export default InsightArticlePage;
