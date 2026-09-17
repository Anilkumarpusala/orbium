import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../components/Container/Container';
import founderPhoto from '../../assets/founder-ani.jpg';
import './Studio.css';

export const Studio: React.FC = () => {
  return (
    <section id="studio" className="studio-human" aria-labelledby="studio-headline">
      <Container>
        <div className="studio-human__grid">
          {/* Left Column: Authentic Founder Photograph */}
          <div className="studio-human__portrait-col">
            <div className="studio-portrait-frame">
              <img
                src={founderPhoto}
                alt="Ani McQueen — Founder of Orbium"
                className="studio-portrait-img"
                loading="lazy"
                width={520}
                height={620}
              />
              <div className="studio-portrait-caption">
                <span className="studio-founder-name">ANI McQUEEN</span>
                <span className="studio-founder-title">FOUNDER &bull; PRINCIPAL ARCHITECT</span>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Editorial Philosophy */}
          <div className="studio-human__content">
            <span className="chapter-num">05 // THE STUDIO</span>

            <h2 id="studio-headline" className="studio-human__headline">
              Orbium exists because good websites should not have to choose between strong design and serious engineering.
            </h2>

            <div className="studio-human__prose">
              <p>
                Most agency websites are compromised by committee: an account executive sells the engagement, a junior designer wraps content in a template, a detached developer wires plugins together, and the strategic vision evaporates through bureaucratic handoffs.
              </p>
              <p>
                Orbium is built on the opposite premise. It is an independent, founder-led digital studio. When you engage Orbium, you work directly with me from the initial positioning diagnostic through typography, interaction design, and live production code.
              </p>
              <p>
                We deliberately maintain a selective client roster. Doing so guarantees that every project receives undivided attention, structural discipline, and the obsessive craft required to build a digital asset that lasts.
              </p>
            </div>

            {/* Direct Model Pillars */}
            <div className="studio-pillars">
              <div className="studio-pillar">
                <span className="studio-pillar__num">01</span>
                <h3 className="studio-pillar__title">Direct Collaboration</h3>
                <p className="studio-pillar__desc">
                  No account handlers or intermediate translators. Direct communication with the practitioner architecting your software.
                </p>
              </div>

              <div className="studio-pillar">
                <span className="studio-pillar__num">02</span>
                <h3 className="studio-pillar__title">Engineered to Last</h3>
                <p className="studio-pillar__desc">
                  Zero fragile page builders. Production TypeScript, clean semantic HTML, sub-second performance, and verified accessibility.
                </p>
              </div>

              <div className="studio-pillar">
                <span className="studio-pillar__num">03</span>
                <h3 className="studio-pillar__title">Commercial Intent</h3>
                <p className="studio-pillar__desc">
                  Aesthetic beauty in service of business outcomes. Every layout, headline, and flow is designed to earn its place.
                </p>
              </div>
            </div>

            <div className="studio-human__actions">
              <Link to="/studio" className="btn btn--outline btn--md">
                Read Studio Manifesto
              </Link>
              <a href="mailto:ani@orbiumai.online" className="studio-email-direct">
                ani@orbiumai.online
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
