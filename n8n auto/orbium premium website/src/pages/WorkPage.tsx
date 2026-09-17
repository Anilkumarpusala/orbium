import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead/SEOHead';
import { Container } from '../components/Container/Container';
import { projects } from '../data/projects';
import './WorkPage.css';

export const WorkPage: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="Selected Work & Concepts — ORBIUM | Digital Architecture Archive" 
        description="A curation of conceptual architectures, industrial interfaces, and editorial web systems engineered by independent digital studio Orbium."
      />
      <main className="work-page">
        <header className="work-page__header">
          <Container>
            <div className="work-page__header-content">
              <span className="chapter-num">INDEX // ARCHIVAL WORK</span>
              <h1 className="work-page__title">The work is the argument.</h1>
              <p className="work-page__subtitle">
                A curation of conceptual architectures and digital systems. All non-client explorations are explicitly labeled. Each piece is designed from first principles to solve complex industry communication problems.
              </p>
            </div>
          </Container>
        </header>

        <section className="work-page__grid-section">
          <Container>
            <div className="work-page__grid">
              {projects.map((project, idx) => (
                <article key={project.id} className="work-archive-card">
                  <div className="work-archive-card__header">
                    <span className="work-archive-card__index">0{idx + 1}</span>
                    <span className="concept-tag concept-tag--accent">{project.conceptLabel}</span>
                    <span className="work-archive-card__year">{project.year}</span>
                  </div>

                  <div className="work-archive-card__body">
                    <h2 className="work-archive-card__title">
                      <Link to={`/work/${project.slug}`}>{project.title}</Link>
                    </h2>
                    <p className="work-archive-card__category">{project.category}</p>
                    <p className="work-archive-card__desc">{project.description}</p>

                    <div className="work-archive-card__tags">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>

                    <Link to={`/work/${project.slug}`} className="work-archive-card__cta">
                      Inspect Detailed Case Study <span>&rarr;</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>
      </main>
    </>
  );
};

export default WorkPage;
