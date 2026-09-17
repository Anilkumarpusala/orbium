import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../components/Container/Container';
import './WorkShowcase.css';

export const WorkShowcase: React.FC = () => {
  return (
    <section id="work" className="work-showcase" aria-labelledby="work-headline">
      <Container>
        {/* Section Header */}
        <div className="work-showcase__header">
          <div className="work-showcase__header-intro">
            <span className="chapter-num">02 // SELECTED WORK</span>
            <h2 id="work-headline" className="work-showcase__headline">
              The work is the argument.
            </h2>
          </div>
          <p className="work-showcase__lead">
            A curation of conceptual architectures and digital systems. Each project is engineered from first principles to demonstrate how disciplined strategy and technical craft elevate complex industries.
          </p>
        </div>

        {/* 4 Radically Different Visual Compositions */}
        <div className="work-showcase__list">
          {/* ===================================================
              PROJECT 01: Norden Climate & Heating
              Composition: Large Laptop + Phone CAD Composition
              =================================================== */}
          <article className="work-item work-item--norden">
            <div className="work-item__meta">
              <div className="work-item__badge-row">
                <span className="concept-tag concept-tag--accent">ORBIUM CONCEPT</span>
                <span className="work-item__year">2025</span>
              </div>
              <h3 className="work-item__title">
                <Link to="/work/norden-climate-heating">Norden Climate & Heating</Link>
              </h3>
              <p className="work-item__discipline">Residential Climate Engineering & System Design</p>
              <p className="work-item__summary">
                A disciplined digital presence designed for an elite residential HVAC and geothermal firm. Replaces image-cluttered contractor templates with architectural CAD drafting grids, live thermal load calculators, and transparent diagnostic workflows.
              </p>
              <div className="work-item__tags">
                <span>Architectural Layout</span>
                <span>Thermal Calculator</span>
                <span>Local Search Architecture</span>
              </div>
              <Link to="/work/norden-climate-heating" className="work-item__link">
                Inspect Case Study <span>&rarr;</span>
              </Link>
            </div>

            <div className="work-item__visual">
              <div className="norden-device-frame browser-mockup">
                <div className="browser-mockup__bar">
                  <div className="browser-mockup__dots">
                    <span className="browser-mockup__dot"></span>
                    <span className="browser-mockup__dot"></span>
                    <span className="browser-mockup__dot"></span>
                  </div>
                  <div className="browser-mockup__address">nordenclimate.com/engineering</div>
                </div>
                <div className="norden-canvas">
                  <div className="norden-canvas__header">
                    <span className="norden-canvas__logo">NORDEN // SPECIFICATION 04</span>
                    <span className="norden-canvas__meta">HEATING CAPACITY: 3500 SQ FT</span>
                  </div>
                  <div className="norden-canvas__diagram">
                    <div className="norden-grid-lines"></div>
                    <div className="norden-spec-box">
                      <span className="norden-spec-title">PRIMARY RADIANT LOOP</span>
                      <span className="norden-spec-val">DELTA-T: 18.4°C // IN-SLAB GEO</span>
                    </div>
                    <div className="norden-spec-box norden-spec-box--alt">
                      <span className="norden-spec-title">EFFICIENCY COEFFICIENT</span>
                      <span className="norden-spec-val">COP 4.85 — EXCEEDS PASSIVHAUS</span>
                    </div>
                  </div>
                  <div className="norden-canvas__footer">
                    <span>CAD LAYER 01: STRUCTURAL INTEGRATION</span>
                    <span className="norden-canvas__dot-active">LIVE TELEMETRY</span>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* ===================================================
              PROJECT 02: Atelier Rovina
              Composition: Large Full-Bleed Editorial Browser
              =================================================== */}
          <article className="work-item work-item--rovina">
            <div className="work-item__meta">
              <div className="work-item__badge-row">
                <span className="concept-tag concept-tag--accent">ORBIUM CONCEPT</span>
                <span className="work-item__year">2025</span>
              </div>
              <h3 className="work-item__title">
                <Link to="/work/atelier-rovina">Atelier Rovina</Link>
              </h3>
              <p className="work-item__discipline">Architectural Stonework & Interior Craft Studio</p>
              <p className="work-item__summary">
                Spatial digital catalog and archival library for a master stonemasonry atelier. Designed as a physical publication with generous negative space, classical Italian serif headings, and tactile quarry specimen indexing.
              </p>
              <div className="work-item__tags">
                <span>Editorial Catalog</span>
                <span>Specimen Index</span>
                <span>Tactile Typography</span>
              </div>
              <Link to="/work/atelier-rovina" className="work-item__link">
                Inspect Case Study <span>&rarr;</span>
              </Link>
            </div>

            <div className="work-item__visual work-item__visual--bleed">
              <div className="rovina-device-frame browser-mockup">
                <div className="browser-mockup__bar">
                  <div className="browser-mockup__dots">
                    <span className="browser-mockup__dot"></span>
                    <span className="browser-mockup__dot"></span>
                    <span className="browser-mockup__dot"></span>
                  </div>
                  <div className="browser-mockup__address">atelier-rovina.ch/archivio</div>
                </div>
                <div className="rovina-canvas">
                  <div className="rovina-canvas__masthead">
                    <span className="rovina-brand">ATELIER ROVINA</span>
                    <span className="rovina-city">LUGANO &bull; MILANO &bull; Z&Uuml;RICH</span>
                  </div>
                  <div className="rovina-canvas__editorial">
                    <span className="rovina-issue">CATALOGO GENERALE // VOL. IV</span>
                    <div className="rovina-headline">
                      Marmo di Carrara & Travertino Romano: Architettura del tempo.
                    </div>
                  </div>
                  <div className="rovina-specimens">
                    <div className="rovina-specimen-card">
                      <div className="rovina-swatch rovina-swatch--carrara"></div>
                      <span className="rovina-swatch-name">Carrara Statuario &bull; Cava 14</span>
                    </div>
                    <div className="rovina-specimen-card">
                      <div className="rovina-swatch rovina-swatch--travertino"></div>
                      <span className="rovina-swatch-name">Travertino Noce &bull; Spazzolato</span>
                    </div>
                    <div className="rovina-specimen-card">
                      <div className="rovina-swatch rovina-swatch--basalto"></div>
                      <span className="rovina-swatch-name">Basalto Nero &bull; Taglio a Vena</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* ===================================================
              PROJECT 03: Vanguard Advisory
              Composition: Layered Interface Fragments & Documents
              =================================================== */}
          <article className="work-item work-item--vanguard">
            <div className="work-item__meta">
              <div className="work-item__badge-row">
                <span className="concept-tag concept-tag--accent">ORBIUM CONCEPT</span>
                <span className="work-item__year">2025</span>
              </div>
              <h3 className="work-item__title">
                <Link to="/work/vanguard-advisory">Vanguard Advisory</Link>
              </h3>
              <p className="work-item__discipline">Institutional Wealth & Fiduciary Web Architecture</p>
              <p className="work-item__summary">
                A serious, confidential intelligence platform for an independent private fiduciary. Eliminates cheesy stock imagery in favor of layered macroeconomic research memoranda, multi-generational governance frameworks, and hardened encrypted inquiry channels.
              </p>
              <div className="work-item__tags">
                <span>Fiduciary Architecture</span>
                <span>Document Framework</span>
                <span>Privacy-First Security</span>
              </div>
              <Link to="/work/vanguard-advisory" className="work-item__link">
                Inspect Case Study <span>&rarr;</span>
              </Link>
            </div>

            <div className="work-item__visual">
              <div className="vanguard-stack">
                {/* Background Research Dispatch Document */}
                <div className="vanguard-doc">
                  <div className="vanguard-doc__header">
                    <span className="vanguard-doc__seal">CONFIDENTIAL BRIEFING</span>
                    <span className="vanguard-doc__ref">DISPATCH #882</span>
                  </div>
                  <div className="vanguard-doc__title">
                    Capital Preservation Across Multigenerational Inflation Cycles
                  </div>
                  <div className="vanguard-doc__lines">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>

                {/* Foreground Interface Fragment */}
                <div className="vanguard-interface browser-mockup">
                  <div className="browser-mockup__bar">
                    <div className="browser-mockup__dots">
                      <span className="browser-mockup__dot"></span>
                      <span className="browser-mockup__dot"></span>
                      <span className="browser-mockup__dot"></span>
                    </div>
                    <div className="browser-mockup__address">vanguard-advisory.com/governance</div>
                  </div>
                  <div className="vanguard-interface__body">
                    <div className="vanguard-stat-row">
                      <div className="vanguard-stat">
                        <span className="vanguard-stat-kicker">GOVERNANCE MANDATE</span>
                        <span className="vanguard-stat-val">Fiduciary Independence</span>
                      </div>
                      <div className="vanguard-stat">
                        <span className="vanguard-stat-kicker">ALLOCATION RATIO</span>
                        <span className="vanguard-stat-val">Unbiased &bull; Fee-Only</span>
                      </div>
                    </div>
                    <div className="vanguard-quote">
                      &ldquo;When institutional fiduciary integrity is structural, silence is more persuasive than persuasion.&rdquo;
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* ===================================================
              PROJECT 04: Solas Precision Instruments
              Composition: Industrial Optics Calibration Blueprint
              =================================================== */}
          <article className="work-item work-item--solas">
            <div className="work-item__meta">
              <div className="work-item__badge-row">
                <span className="concept-tag concept-tag--accent">ORBIUM CONCEPT</span>
                <span className="work-item__year">2025</span>
              </div>
              <h3 className="work-item__title">
                <Link to="/work/solas-instruments">Solas Precision Instruments</Link>
              </h3>
              <p className="work-item__discipline">Industrial Optics & Laboratory Measurement Systems</p>
              <p className="work-item__summary">
                Technical catalog and interactive tolerance visualizer for an industrial optics manufacturer. Features sub-micron calibration charts, wavelength transmission curves, and frictionless RFQ engineering portals.
              </p>
              <div className="work-item__tags">
                <span>Technical Specifications</span>
                <span>Optical Visualization</span>
                <span>Sub-Second Response</span>
              </div>
              <Link to="/work/solas-instruments" className="work-item__link">
                Inspect Case Study <span>&rarr;</span>
              </Link>
            </div>

            <div className="work-item__visual">
              <div className="solas-device-frame browser-mockup">
                <div className="browser-mockup__bar">
                  <div className="browser-mockup__dots">
                    <span className="browser-mockup__dot"></span>
                    <span className="browser-mockup__dot"></span>
                    <span className="browser-mockup__dot"></span>
                  </div>
                  <div className="browser-mockup__address">solas-optics.de/spectral-analysis</div>
                </div>
                <div className="solas-canvas">
                  <div className="solas-canvas__top">
                    <span className="solas-lens-id">SERIES-X ACHROMAT // &lambda; = 532nm</span>
                    <span className="solas-tol">TOLERANCE: &plusmn;0.002mm</span>
                  </div>
                  <div className="solas-crosshair-view">
                    <div className="solas-rings">
                      <div className="solas-ring solas-ring--1"></div>
                      <div className="solas-ring solas-ring--2"></div>
                      <div className="solas-ring solas-ring--3"></div>
                      <div className="solas-axis-h"></div>
                      <div className="solas-axis-v"></div>
                    </div>
                    <div className="solas-telemetry">
                      <span>WAVEFRONT ABERRATION: &lambda;/10 RMS</span>
                      <span>SURFACE QUALITY: 10-5 DIG/SCRATCH</span>
                    </div>
                  </div>
                  <div className="solas-spectrum-bar">
                    <span className="spectrum-uv">UV</span>
                    <span className="spectrum-visible">VISIBLE SPECTRUM (380-740nm)</span>
                    <span className="spectrum-ir">NIR</span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
};
