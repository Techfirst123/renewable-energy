import React from "react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import ExecutionTabs from "../components/ExecutionTabs";

function Execution() {
  return (
    <>
      <Seo
        title="Project Execution Model | Concept to Commissioning | RREV"
        description="How RREV executes: six stages from concept to operations, with milestone scheduling, QA/QC, safety and risk mitigation on every project."
      />

      {/* HERO */}
      <section className="inner-hero execution-hero">
        <div className="inner-hero-grid"></div>

        <div className="container inner-hero-content">
          <div className="eyebrow light">
            <i></i>
            HOW WE EXECUTE
          </div>

          <h1>
            From first concept to
            <span> long-term operations.</span>
          </h1>

          <p>
            A disciplined execution approach helps convert clean-energy
            opportunities into reliable, commercially viable infrastructure.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="section">
        <div className="container execution-intro">
          <div>
            <div className="eyebrow">
              <i></i>
              EXECUTION PHILOSOPHY
            </div>

            <h2>
              Projects succeed when
              <span> details connect.</span>
            </h2>
          </div>

          <p>
            Our execution model is designed around coordination. Technical
            decisions, procurement, site work, quality, safety, commissioning
            and operations all need to work together. We keep the entire
            project lifecycle in view from the beginning.
          </p>
        </div>
      </section>

      {/* PROJECT LIFECYCLE + PRINCIPLES (tabs) */}

      <ExecutionTabs />

      {/* CTA */}
      <section className="section page-cta">
        <div className="container page-cta-inner">
          <div>
            <div className="eyebrow light">
              <i></i>
              PROJECT DEVELOPMENT
            </div>

            <h2>
              Ready to move from idea
              <span> to execution?</span>
            </h2>
          </div>

          <Link to="/contact" className="btn btn-lime">
            Discuss Your Project <span>↗</span>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Execution;