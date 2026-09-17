import React from 'react';
import { SEOHead } from '../components/SEOHead/SEOHead';
import { Hero } from '../sections/Hero/Hero';
import { WorkShowcase } from '../sections/WorkShowcase/WorkShowcase';
import { Services } from '../sections/Services/Services';
import { Process } from '../sections/Process/Process';
import { Studio } from '../sections/Studio/Studio';
import { HomeInsights } from '../sections/HomeInsights/HomeInsights';
import { FinalCTA } from '../sections/FinalCTA/FinalCTA';

export const HomePage: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="ORBIUM — Founder-Led Web Studio | Websites Built to Earn Their Place" 
        description="Orbium designs and builds websites for businesses that need more than a polished surface. Strategy, design, development, and growth — handled from first conversation to launch by founder Ani McQueen."
      />
      <div id="main-content" className="homepage-narrative">
        {/* 01 — HERO */}
        <Hero />

        {/* 02 — SELECTED WORK */}
        <WorkShowcase />

        {/* 03 — WHAT ORBIUM DOES */}
        <Services />

        {/* 04 — HOW THE WORK HAPPENS */}
        <Process />

        {/* 05 — STUDIO / FOUNDER */}
        <Studio />

        {/* 06 — SELECTED INSIGHTS */}
        <HomeInsights />

        {/* 07 — START A PROJECT */}
        <FinalCTA />
      </div>
    </>
  );
};

export default HomePage;
