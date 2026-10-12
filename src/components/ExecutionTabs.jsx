import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ExecutionTabs.css";

/*
  Execution page — project lifecycle + execution principles in one
  Bootstrap-5 style tabbed block (nav-pills, stepper, progress bar, cards).
  Self-contained: styles live in ExecutionTabs.css.
*/

const stages = [
  {
    no: "01",
    title: "Concept",
    text: "Understanding the opportunity, resource base, project objectives and overall feasibility before any money is committed.",
    outputs: ["Site & feedstock assessment", "Pre-feasibility note", "Indicative capex & capacity"],
    weeks: "Weeks 1–4",
  },
  {
    no: "02",
    title: "Engineering",
    text: "Developing the technical framework, layouts and engineering requirements — including the specifications technology partners build to.",
    outputs: ["Detailed Project Report", "Civil & layout drawings", "Equipment specifications"],
    weeks: "Weeks 4–10",
  },
  {
    no: "03",
    title: "Procurement",
    text: "Coordinating equipment, vendors and materials with a focus on quality, availability and the project schedule.",
    outputs: ["Vendor selection", "Purchase orders & expediting", "Pre-dispatch inspection"],
    weeks: "Weeks 8–20",
  },
  {
    no: "04",
    title: "Construction",
    text: "Managing site execution, civil works, installation, safety and day-to-day schedule coordination.",
    outputs: ["Civil & structural works", "Erection & installation", "Daily QA/QC and safety reports"],
    weeks: "Weeks 12–32",
  },
  {
    no: "05",
    title: "Commissioning",
    text: "Bringing systems online through testing, integration, performance checks and a controlled start-up.",
    outputs: ["Pre-commissioning checks", "Statutory approvals (PESO / CEIG)", "Performance test & handover"],
    weeks: "Weeks 30–38",
  },
  {
    no: "06",
    title: "Operations",
    text: "Supporting reliable plant performance with operational discipline, monitoring and continuous improvement.",
    outputs: ["Operator training & SOPs", "Monthly performance reports", "Preventive maintenance plan"],
    weeks: "Ongoing",
  },
];

const principles = [
  {
    no: "01",
    title: "Safety first",
    text: "Safety and responsible site practices remain fundamental to project delivery — toolbox talks, PPE discipline and documented method statements.",
    tone: "green",
    icon: <path d="M12 3 4 6v6c0 4.4 3.4 8.3 8 9 4.6-.7 8-4.6 8-9V6l-8-3Zm-1 12-3-3 1.4-1.4L11 12.2l4.6-4.6L17 9l-6 6Z" />,
  },
  {
    no: "02",
    title: "Quality focused",
    text: "Engineering and construction decisions are made with reliability and long-term performance in mind, backed by stage-wise QA/QC checks.",
    tone: "blue",
    icon: <path d="M12 2l2.9 6.3 6.9.8-5.1 4.6 1.4 6.8L12 17.1 5.9 20.5l1.4-6.8L2.2 9.1l6.9-.8L12 2Z" />,
  },
  {
    no: "03",
    title: "Schedule discipline",
    text: "Clear sequencing, milestone tracking and weekly reviews keep momentum from planning through commissioning.",
    tone: "amber",
    icon: <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 10.6 4.3 2.5-1 1.7L11 13.7V6h2v6.6Z" />,
  },
  {
    no: "04",
    title: "Operational thinking",
    text: "We design and build for the plant's twentieth year, not just its first — access, maintainability and spares are considered from day one.",
    tone: "navy",
    icon: <path d="M4 20h16v2H4v-2Zm2-2V9l6-5 6 5v9h-4v-6h-4v6H6Z" />,
  },
];

function ExecutionTabs() {
  const [tab, setTab] = useState("lifecycle");
  const [active, setActive] = useState(0);
  const stage = stages[active];
  const progress = ((active + 1) / stages.length) * 100;

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") setActive((i) => (i + 1) % stages.length);
    if (e.key === "ArrowLeft") setActive((i) => (i - 1 + stages.length) % stages.length);
  };

  return (
    <section className="ex" aria-label="How we execute">
      <div className="ex-inner">
        {/* nav-pills */}
        <div className="ex-nav" role="tablist" aria-label="Execution details">
          <button
            type="button"
            role="tab"
            id="ex-tab-lifecycle"
            aria-controls="ex-panel-lifecycle"
            aria-selected={tab === "lifecycle"}
            className={`ex-pill ${tab === "lifecycle" ? "active" : ""}`}
            onClick={() => setTab("lifecycle")}
          >
            Project lifecycle
          </button>
          <button
            type="button"
            role="tab"
            id="ex-tab-principles"
            aria-controls="ex-panel-principles"
            aria-selected={tab === "principles"}
            className={`ex-pill ${tab === "principles" ? "active" : ""}`}
            onClick={() => setTab("principles")}
          >
            Execution principles
          </button>
        </div>

        {/* ---------------- LIFECYCLE ---------------- */}
        {tab === "lifecycle" && (
          <div className="ex-panel" role="tabpanel" id="ex-panel-lifecycle" aria-labelledby="ex-tab-lifecycle" tabIndex={0}>
            <header className="ex-head">
              <h2>Six stages. <em>One connected process.</em></h2>
              <p>
                A structured pathway that keeps clarity, accountability and
                execution quality in place from first survey to steady operation.
              </p>
            </header>

            {/* stepper */}
            <div className="ex-stepper" onKeyDown={onKeyDown}>
              <div className="ex-rail" aria-hidden="true">
                <span style={{ width: `${progress}%` }} />
              </div>

              {stages.map((s, i) => (
                <button
                  type="button"
                  key={s.no}
                  className={`ex-step ${i === active ? "active" : ""} ${i < active ? "done" : ""}`}
                  onClick={() => setActive(i)}
                  aria-current={i === active ? "step" : undefined}
                  aria-label={`Stage ${s.no}: ${s.title}`}
                >
                  <span className="ex-dot">{i < active ? "✓" : s.no}</span>
                  <span className="ex-step-name">{s.title}</span>
                </button>
              ))}
            </div>

            {/* detail card */}
            <article className="ex-card">
              <div className="ex-card-body">
                <div className="ex-badges">
                  <span className="ex-badge">Stage {stage.no} of 06</span>
                  <span className="ex-badge soft">{stage.weeks}</span>
                </div>

                <h3>{stage.title}</h3>
                <p>{stage.text}</p>

                <div className="ex-progress" role="presentation">
                  <span style={{ width: `${progress}%` }} />
                </div>
              </div>

              <div className="ex-card-side">
                <h4>What you receive</h4>
                <ul>
                  {stage.outputs.map((o) => <li key={o}>{o}</li>)}
                </ul>
                <Link to="/contact" className="ex-link">Discuss your project <span>↗</span></Link>
              </div>
            </article>
          </div>
        )}

        {/* ---------------- PRINCIPLES ---------------- */}
        {tab === "principles" && (
          <div className="ex-panel" role="tabpanel" id="ex-panel-principles" aria-labelledby="ex-tab-principles" tabIndex={0}>
            <header className="ex-head">
              <h2>How we work, <em>on every site.</em></h2>
              <p>
                Four principles that decide how our teams plan, build and hand
                over a project.
              </p>
            </header>

            <div className="ex-principles">
              {principles.map((p) => (
                <article className={`ex-principle tone-${p.tone}`} key={p.no}>
                  <span className="ex-pic" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="currentColor">{p.icon}</svg>
                  </span>
                  <span className="ex-pno">{p.no}</span>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default ExecutionTabs;
