import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./SolarProcess.css";

/*
  Solar EPC — "How a solar project runs".
  Bootstrap-style tab bar with a sliding indicator that moves between tabs,
  auto-advancing with a progress bar (pauses on hover / focus).
*/

const steps = [
  {
    no: "01",
    title: "Site assessment",
    when: "Week 1",
    text: "We visit the site, measure the shadow-free area, study your load profile and estimate how many units the system will generate.",
    points: ["Roof / land survey", "Shadow analysis", "Load profile & bill study", "Indicative yield report"],
  },
  {
    no: "02",
    title: "Design & engineering",
    when: "Weeks 1–2",
    text: "Array layout, mounting structure design, string and inverter sizing, single-line diagram and protection scheme.",
    points: ["PV layout & tilt", "Structure design", "String & inverter sizing", "SLD and protection"],
  },
  {
    no: "03",
    title: "Procurement",
    when: "Weeks 2–4",
    text: "Modules, inverters, structures and balance of system sourced from qualified vendors, with checks before dispatch.",
    points: ["Vendor selection", "Make & model approval", "Pre-dispatch inspection", "Delivery to site"],
  },
  {
    no: "04",
    title: "Installation",
    when: "Weeks 4–6",
    text: "Structure erection, module mounting, DC and AC cabling, earthing and lightning protection, under site safety rules.",
    points: ["Civil & structure", "Module mounting", "Cabling & earthing", "Safety supervision"],
  },
  {
    no: "05",
    title: "Commissioning",
    when: "Weeks 6–8",
    text: "Pre-commissioning tests, grid synchronisation, net-metering and inspectorate approvals, then handover with documents.",
    points: ["Testing & synchronisation", "Net-metering application", "DISCOM / CEIG approval", "Handover file"],
  },
  {
    no: "06",
    title: "Operations & monitoring",
    when: "Ongoing",
    text: "Module cleaning, preventive maintenance and remote monitoring, with a monthly report on generation against estimate.",
    points: ["Cleaning schedule", "Preventive maintenance", "Remote monitoring", "Monthly generation report"],
  },
];

const INTERVAL = 5000;

function SolarProcess() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const tabsRef = useRef(null);
  const step = steps[active];

  const go = useCallback((i) => setActive((i + steps.length) % steps.length), []);

  // auto-advance
  useEffect(() => {
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (paused || reduce) return undefined;
    const t = setTimeout(() => go(active + 1), INTERVAL);
    return () => clearTimeout(t);
  }, [active, paused, go]);

  // keep the active tab in view when the bar scrolls on small screens
  useEffect(() => {
    const el = tabsRef.current?.querySelector(".sp-tab.active");
    el?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [active]);

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") go(active + 1);
    if (e.key === "ArrowLeft") go(active - 1);
  };

  return (
    <section
      className={`sp ${paused ? "is-paused" : ""}`}
      aria-label="How a solar project runs"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="sp-inner">
        <header className="sp-head">
          <span className="sp-eyebrow"><i />How a solar project runs</span>
          <h2>Six stages. <em>One accountable team.</em></h2>
          <p>
            Milestone-based execution with continuous monitoring, QA/QC and risk
            mitigation at every step.
          </p>
        </header>

        {/* tab bar with a sliding indicator */}
        <div className="sp-tabs" ref={tabsRef} role="tablist" aria-label="Solar project stages" onKeyDown={onKeyDown}>
          <div className="sp-track" style={{ "--count": steps.length, "--active": active }}>
            {steps.map((s, i) => (
              <button
                type="button"
                role="tab"
                key={s.no}
                id={`sp-tab-${s.no}`}
                aria-controls="sp-panel"
                aria-selected={i === active}
                tabIndex={i === active ? 0 : -1}
                className={`sp-tab ${i === active ? "active" : ""} ${i < active ? "done" : ""}`}
                onClick={() => go(i)}
              >
                <span className="sp-tab-no">{s.no}</span>
                <span className="sp-tab-name">{s.title}</span>
              </button>
            ))}

            <span className="sp-indicator" aria-hidden="true">
              <i key={active} style={{ animationDuration: `${INTERVAL}ms` }} />
            </span>
          </div>
        </div>

        {/* panel */}
        <div className="sp-panel" role="tabpanel" id="sp-panel" aria-labelledby={`sp-tab-${step.no}`} tabIndex={0} key={step.no}>
          <div className="sp-main">
            <div className="sp-chips">
              <span className="sp-chip">Stage {step.no} of 06</span>
              <span className="sp-chip soft">{step.when}</span>
            </div>

            <h3>{step.title}</h3>
            <p>{step.text}</p>

            <div className="sp-controls">
              <button type="button" className="sp-nav" onClick={() => go(active - 1)} aria-label="Previous stage">‹</button>
              <button type="button" className="sp-nav" onClick={() => go(active + 1)} aria-label="Next stage">›</button>
              <Link to="/contact" className="sp-cta">Request a site visit <span>↗</span></Link>
            </div>
          </div>

          <ul className="sp-points">
            {step.points.map((p) => <li key={p}>{p}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default SolarProcess;
