import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import './styles/global.css';
import './styles/variables.css';

// Lazy load pages for optimal code splitting
const HomePage = React.lazy(() => import('./pages/HomePage'));
const WorkPage = React.lazy(() => import('./pages/WorkPage'));
const CaseStudyPage = React.lazy(() => import('./pages/CaseStudyPage'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const ServiceDetailPage = React.lazy(() => import('./pages/ServiceDetailPage'));
const ProcessPage = React.lazy(() => import('./pages/ProcessPage'));
const StudioPage = React.lazy(() => import('./pages/StudioPage'));
const InsightsPage = React.lazy(() => import('./pages/InsightsPage'));
const InsightArticlePage = React.lazy(() => import('./pages/InsightArticlePage'));
const StartAProjectPage = React.lazy(() => import('./pages/StartAProjectPage'));
const PrivacyPage = React.lazy(() => import('./pages/PrivacyPage'));
const TermsPage = React.lazy(() => import('./pages/TermsPage'));
const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage'));

// Clean minimal loader
const PageLoader = () => (
  <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-text-secondary)', letterSpacing: '0.1em' }}>
      LOADING ORBIUM...
    </span>
  </div>
);

export const App: React.FC = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="work" element={<WorkPage />} />
          <Route path="work/:slug" element={<CaseStudyPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="services/:slug" element={<ServiceDetailPage />} />
          <Route path="process" element={<ProcessPage />} />
          <Route path="studio" element={<StudioPage />} />
          <Route path="insights" element={<InsightsPage />} />
          <Route path="insights/:slug" element={<InsightArticlePage />} />
          <Route path="start-a-project" element={<StartAProjectPage />} />
          <Route path="contact" element={<StartAProjectPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="404" element={<NotFoundPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
