import React from "react";
import { Link } from "react-router-dom";
import "./ValueChain.css";

/*
  "Complete value chain" — dark premium band with glass stage cards.
  Self-contained: styles live in ValueChain.css.
*/

const stages = [
  {
    no: "01",
    title: "Feedstock",
    text: "Assessment, aggregation and year-round supply of organic waste.",
    icon: (
      <>
        <path d="M12 21c-4-2-7-5.5-7-10a7 7 0 0 1 14 0c0 4.5-3 8-7 10Z" />
        <path d="M12 21V9" />
        <path d="M12 13 8.5 9.5M12 12l3.5-3.5" />
      </>
    ),
  },
  {
    no: "02",
    title: "Digestion",
    text: "Anaerobic digesters sized and operated for stable gas yield.",
    icon: (
      <>
        <path d="M3 20h18" />
        <path d="M5 20v-6a7 7 0 0 1 14 0v6" />
        <path d="M5 14h14" />
      </>
    ),
  },
  {
    no: "03",
    title: "Biogas",
    text: "Raw gas capture, storage and continuous process optimisation.",
    icon: (
      <>
        <path d="M12 3c2.5 3 5 5.2 5 9a5 5 0 0 1-10 0c0-1.7.6-3 1.5-4.2" />
        <path d="M12 20v-4" />
      </>
    ),
  },
  {
    no: "04",
    title: "Upgrading",
    text: "Purification to CBG specification — CO₂ and H₂S removal.",
    icon: (
      <>
        <path d="M4 5h16l-6 7v7l-4-2v-5Z" />
      </>
    ),
  },
  {
    no: "05",
    title: "Compression",
    text: "Compression, cascade storage and dispensing systems.",
    icon: (
      <>
        <rect x="6" y="3" width="5" height="18" rx="2.5" />
        <rect x="14" y="7" width="5" height="14" rx="2.5" />
        <path d="M8.5 3V1.5M16.5 7V5.5" />
      </>
    ),
  },
  {
    no: "06",
    title: "Off-take",
    text: "Gas marketing, sale agreements and FOM by-product value.",
    icon: (
      <>
        <path d="M3 17h12V7H3z" />
        <path d="M15 11h3l3 3v3h-6" />
        <circle cx="7" cy="19" r="2" />
        <circle cx="17" cy="19" r="2" />
      </>
    ),
  },
];

function ValueChain() {
  return (
    <section className="vc" aria-label="Complete value chain">
      <div className="vc-glow" aria-hidden="true" />
      <div className="vc-grid-pattern" aria-hidden="true" />

      <div className="vc-inner">
        <header className="vc-head">
          <span className="vc-eyebrow">
            <i />
            Complete value chain
          </span>

          <h2>
            From waste stream to <em>usable energy.</em>
          </h2>

          <p>
            A CBG project is an interconnected ecosystem. RREV covers every link
            — feedstock assessment, anaerobic digestion, upgrading, compression,
            transportation, approvals, off-take and long-term operations.
          </p>

          <Link to="/capabilities" className="vc-link">
            See our full capability <span>↗</span>
          </Link>
        </header>

        <ol className="vc-stages">
          {stages.map((s, i) => (
            <li className="vc-card" key={s.no} style={{ "--i": i }}>
              <span className="vc-no">{s.no}</span>

              <span className="vc-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  {s.icon}
                </svg>
              </span>

              <h3>{s.title}</h3>
              <p>{s.text}</p>

              {i < stages.length - 1 && <span className="vc-arrow" aria-hidden="true">→</span>}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default ValueChain;
