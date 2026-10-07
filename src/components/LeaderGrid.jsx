import React from "react";
import { Link } from "react-router-dom";
import "./LeaderGrid.css";

/*
  Leadership cards, shared by the Leadership page and the Home preview.
  <LeaderGrid />            full version with the heading and stat strip
  <LeaderGrid compact />    cards only, for the Home page preview
*/

export const leaders = [
  {
    no: "01",
    initials: "AM",
    name: "Mr. Mohd Asim Mirza",
    role: "Renewable Energy, Bioenergy & CBG Specialist",
    years: "29+",
    text: "Experience across renewable energy, biogas, climate change, circular economy, environmental management and sustainable development. Has worked with TERI, TTC, BDO and RTI Global on large renewable energy programmes and policy assignments.",
    tags: ["CBG & Biogas", "RE Policy", "PMU Operations", "Government Coordination"],
    tone: "green",
  },
  {
    no: "02",
    initials: "MS",
    name: "Mr. M. S. Shaikhu",
    role: "Civil Engineering & Project Execution Expert",
    years: "30+",
    text: "Three decades in infrastructure, hydropower and renewable energy projects. On the Nathpa Jhakri Hydroelectric Project he received multiple awards for meeting completion targets and excellence in execution.",
    tags: ["Civil Execution", "Site Management", "Quality Control", "Schedule Management"],
    tone: "blue",
  },
];

function LeaderGrid({ compact = false }) {
  return (
    <section className={`lg ${compact ? "is-compact" : ""}`} aria-label="Leadership">
      <div className="lg-inner">
        {!compact && (
          <header className="lg-head">
            <span className="lg-eyebrow"><i />Our leaders</span>
            <h2>Knowledge that becomes <em>execution.</em></h2>
            <p>
              Sector understanding paired with practical project experience —
              the two people accountable for how RREV plans and delivers.
            </p>
          </header>
        )}

        <div className="lg-grid">
          {leaders.map((l) => (
            <article className={`lg-card tone-${l.tone}`} key={l.no}>
              <div className="lg-top">
                <span className="lg-avatar" aria-hidden="true">{l.initials}</span>

                <div className="lg-id">
                  <h3>{l.name}</h3>
                  <p className="lg-role">{l.role}</p>
                </div>

                <span className="lg-years">
                  <b>{l.years}</b>
                  <small>years</small>
                </span>
              </div>

              <p className="lg-text">{l.text}</p>

              <ul className="lg-tags">
                {l.tags.map((t) => <li key={t}>{t}</li>)}
              </ul>

              <span className="lg-no" aria-hidden="true">{l.no}</span>
            </article>
          ))}
        </div>

        {!compact && (
          <div className="lg-strip">
            <div><b>59+</b><span>Combined years of experience</span></div>
            <div><b>TERI · BDO · RTI</b><span>Organisations worked with</span></div>
            <div><b>Hydropower</b><span>Large-infrastructure background</span></div>
            <div><b>PMU</b><span>Programme management experience</span></div>
          </div>
        )}

        {compact && (
          <div className="lg-more">
            <Link to="/leadership" className="lg-link">Meet the leadership team <span>↗</span></Link>
          </div>
        )}
      </div>
    </section>
  );
}

export default LeaderGrid;
