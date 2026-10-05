import React from "react";
import "./ChainFlow.css";

/*
  Capabilities page — CBG value chain as a flat (2D) Bootstrap-style card flow
  with forward chevrons between the steps. No 3D, no photos.
*/

const steps = [
  {
    no: "01",
    title: "Feedstock",
    text: "Organic resources collected, assessed and stored for a year-round supply.",
    tone: "green",
    icon: <path d="M12 21c-4-2-7-5.5-7-10a7 7 0 0 1 14 0c0 4.5-3 8-7 10Zm0-12v9m0-4.5L8.6 11M12 12l3.4-3.4" />,
  },
  {
    no: "02",
    title: "Digestion",
    text: "Anaerobic digesters break the feedstock down and release raw biogas.",
    tone: "green",
    icon: <path d="M3 20h18M5 20v-6a7 7 0 0 1 14 0v6M5 14h14" />,
  },
  {
    no: "03",
    title: "Biogas",
    text: "Raw gas is captured and held in the gas holder for steady processing.",
    tone: "teal",
    icon: <path d="M12 3c2.5 3 5 5.2 5 9a5 5 0 0 1-10 0c0-1.7.6-3 1.5-4.2M12 20v-4" />,
  },
  {
    no: "04",
    title: "Upgrading",
    text: "CO₂ and H₂S are removed to reach 95%+ CBG specification.",
    tone: "blue",
    icon: <path d="M4 5h16l-6 7v7l-4-2v-5Z" />,
  },
  {
    no: "05",
    title: "Compression",
    text: "CBG is compressed, stored in cascades and made ready for dispatch.",
    tone: "blue",
    icon: <path d="M7 3h4v18H7zM15 7h4v14h-4zM9 3V1.5M17 7V5.5" />,
  },
  {
    no: "06",
    title: "Off-take",
    text: "Gas moves to the buyer under long-term sale agreements; FOM is sold on.",
    tone: "amber",
    icon: <path d="M3 17h12V7H3zM15 11h3l3 3v3h-6M7 19a2 2 0 1 0 0 .01M17 19a2 2 0 1 0 0 .01" />,
  },
];

function ChainFlow() {
  return (
    <section className="cf" aria-label="CBG value chain">
      <div className="cf-inner">
        <header className="cf-head">
          <span className="cf-eyebrow"><i />CBG value chain</span>
          <h2>The CBG chain we <em>build projects around.</em></h2>
          <p>
            RREV develops, builds and supports the plant. Process packages for
            digestion, upgrading and compression are supplied by established
            technology partners, selected and coordinated by us.
          </p>
        </header>

        <ol className="cf-flow">
          {steps.map((s, i) => (
            <li className={`cf-item tone-${s.tone}`} key={s.no} style={{ "--i": i }}>
              <article className="cf-card">
                <div className="cf-top">
                  <span className="cf-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      {s.icon}
                    </svg>
                  </span>
                  <span className="cf-no">{s.no}</span>
                </div>

                <h3>{s.title}</h3>
                <p>{s.text}</p>

                <span className="cf-bar" aria-hidden="true"><i /></span>
              </article>

              {i < steps.length - 1 && (
                <span className="cf-arrow" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              )}
            </li>
          ))}
        </ol>

        <p className="cf-legend">
          <span className="dot green" /> Feedstock &amp; digestion
          <span className="dot blue" /> Gas processing
          <span className="dot amber" /> Delivery &amp; by-products
        </p>
      </div>
    </section>
  );
}

export default ChainFlow;
