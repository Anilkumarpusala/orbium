import React, { useState, useEffect } from 'react';
import { OrbitalSphereBackground } from '@designcodeio/threeui';

interface OrbitalHeroProps {
  className?: string;
}

export const OrbitalHero: React.FC<OrbitalHeroProps> = ({ className = '' }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(motionQuery.matches);
    const motionListener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    motionQuery.addEventListener('change', motionListener);

    return () => {
      window.removeEventListener('resize', checkMobile);
      motionQuery.removeEventListener('change', motionListener);
    };
  }, []);

  return (
    <div className={`orbital-chamber ${className}`} role="img" aria-label="Orbium interactive 3D orbital system">
      {/* Telemetry Header */}
      <div className="orbital-chamber__header">
        <div className="orbital-chamber__status">
          <span className="orbital-chamber__beacon" />
          <span className="orbital-chamber__label">ORBITAL SYSTEM v2.4</span>
        </div>
        <span className="orbital-chamber__coord">42°21'N 71°03'W</span>
      </div>

      {/* ThreeUI Interactive Canvas */}
      <div className="orbital-chamber__viewport">
        <OrbitalSphereBackground
          speed={prefersReducedMotion ? 0.05 : (isMobile ? 0.5 : 0.85)}
          particleSize={isMobile ? 0.012 : 0.016}
          particleOpacity={0.88}
          orbitOpacity={0.35}
          haloOpacity={0.2}
          scale={isMobile ? 0.85 : 1.05}
          hue={22} /* Burnt copper warm palette */
        />
      </div>

      {/* Telemetry Footer */}
      <div className="orbital-chamber__footer">
        <span className="orbital-chamber__telemetry">AXIS 01 • REAL-TIME RENDER</span>
        <span className="orbital-chamber__indicator">STABLE // 60 FPS</span>
      </div>
    </div>
  );
};

export default OrbitalHero;
