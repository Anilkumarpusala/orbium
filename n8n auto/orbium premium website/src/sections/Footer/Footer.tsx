import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../components/Container/Container';
import './Footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className="footer" role="contentinfo">
      <Container>
        <div className="footer__grid">
          {/* Brand Column */}
          <div className="footer__brand-col">
            <Link to="/" className="footer__logo">
              ORBIUM
            </Link>
            <p className="footer__tagline">
              Founder-led web design, development and digital growth.
            </p>
            <p className="footer__subnote">
              Websites engineered to earn their place. Based independently, working with clients globally.
            </p>
          </div>

          {/* Directory Column */}
          <div className="footer__nav-col">
            <span className="footer__col-label">Directory</span>
            <ul className="footer__nav-list">
              <li><Link to="/work" className="footer__nav-link">Work</Link></li>
              <li><Link to="/services" className="footer__nav-link">Services</Link></li>
              <li><Link to="/process" className="footer__nav-link">Process</Link></li>
              <li><Link to="/studio" className="footer__nav-link">Studio</Link></li>
              <li><Link to="/insights" className="footer__nav-link">Insights</Link></li>
              <li><Link to="/start-a-project" className="footer__nav-link footer__nav-link--accent">Start a Project</Link></li>
            </ul>
          </div>

          {/* Direct Communication Column */}
          <div className="footer__contact-col">
            <span className="footer__col-label">Direct Communication</span>
            <a href="mailto:ani@orbiumai.online" className="footer__email-link">
              ani@orbiumai.online
            </a>
            <p className="footer__response-time">
              Inquiries reviewed directly by founder Ani McQueen. Initial response within 24 business hours.
            </p>
          </div>
        </div>

        {/* Legal Bottom Bar */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {new Date().getFullYear()} ORBIUM. All rights reserved.
          </p>
          <div className="footer__legal-links">
            <Link to="/privacy" className="footer__legal-link">Privacy Policy</Link>
            <span className="footer__legal-divider">&bull;</span>
            <Link to="/terms" className="footer__legal-link">Terms of Engagement</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};
