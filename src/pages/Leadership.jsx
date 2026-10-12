import React from "react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import LeaderGrid from "../components/LeaderGrid";

function Leadership() {
  return (
    <>
      <Seo
        title="Leadership Team | RREV Renewable Rise Energy Venture"
        description="Meet RREV's leadership: 29+ years in renewable energy, bioenergy and CBG, and 30+ years in civil engineering and large-project execution."
      />

      {/* HERO */}
      <section className="inner-hero leadership-hero">
        <div className="inner-hero-grid"></div>

        <div className="container inner-hero-content">
          <div className="eyebrow light">
            <i></i>
            LEADERSHIP
          </div>

          <h1>
            Experience at the intersection of
            <span> energy and execution.</span>
          </h1>

          <p>
            RREV is supported by professionals with decades of experience
            across renewable energy, engineering, infrastructure and project
            delivery.
          </p>
        </div>
      </section>

      {/* LEADERS */}

      <LeaderGrid />

      {/* LEADERSHIP APPROACH */}
      <section className="section soft-section">
        <div className="container leadership-message">
          <div className="leadership-message-number">RREV</div>

          <div>
            <div className="eyebrow">
              <i></i>
              LEADERSHIP APPROACH
            </div>

            <h2>
              Strategy is only valuable when
              <span> it can be executed.</span>
            </h2>

            <p>
              Our leadership philosophy combines long-term sustainability with
              practical project delivery. The objective is simple: build
              projects that make technical, commercial and operational sense.
            </p>

            <Link to="/execution" className="text-link">
              Discover our execution approach <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section page-cta">
        <div className="container page-cta-inner">
          <div>
            <div className="eyebrow light">
              <i></i>
              CONNECT
            </div>

            <h2>
              Let's build meaningful
              <span> clean-energy projects.</span>
            </h2>
          </div>

          <Link to="/contact" className="btn btn-lime">
            Start a Conversation <span>↗</span>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Leadership;