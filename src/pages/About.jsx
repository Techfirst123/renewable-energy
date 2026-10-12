import React from "react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";

function About() {
  return (
    <>
      <Seo
        title="About RREV | Renewable Energy & CBG Project Partner"
        description="Renewable Rise Energy Venture develops and executes CBG and solar projects in India, led by engineers with 59+ combined years of experience."
      />

      {/* PAGE HERO */}
      <section className="inner-hero">
        <div className="inner-hero-grid"></div>

        <div className="container inner-hero-content">
          <div className="eyebrow light">
            <i></i>
            ABOUT RREV
          </div>

          <h1>
            Building the next generation of
            <span> clean energy infrastructure.</span>
          </h1>

          <p>
            Renewable Rise Energy Venture is focused on developing practical,
            scalable and sustainable energy solutions across renewable energy,
            bioenergy, CBG and infrastructure.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="section about-page-intro">
        <div className="container two-col">
          <div>
            <div className="eyebrow">
              <i></i>
              WHO WE ARE
            </div>

            <h2>
              Turning opportunity into
              <span> sustainable infrastructure.</span>
            </h2>
          </div>

          <div className="about-copy">
            <p>
              Renewable Rise Energy Venture brings together renewable energy
              expertise, project execution capability and an understanding of
              the evolving clean-energy ecosystem.
            </p>

            <p>
              Our approach is grounded in practical project development —
              identifying the right resource, designing the right system and
              executing projects with discipline from concept through
              operations.
            </p>

            <Link to="/capabilities" className="text-link">
              Explore our capabilities <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section soft-section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">
                <i></i>
                EXPERIENCE
              </div>

              <h2>
                Experience that connects
                <span> strategy with execution.</span>
              </h2>
            </div>

            <p>
              Our leadership brings decades of experience across renewable
              energy, civil engineering, infrastructure, project management
              and government coordination.
            </p>
          </div>

          <div className="experience-grid">
            <div className="experience-card">
              <strong>29+</strong>
              <span>Years</span>
              <p>
                Renewable energy, bioenergy and sustainability experience.
              </p>
            </div>

            <div className="experience-card">
              <strong>30+</strong>
              <span>Years</span>
              <p>
                Civil engineering and large-scale project execution
                experience.
              </p>
            </div>

            <div className="experience-card dark-card">
              <strong>360°</strong>
              <span>Approach</span>
              <p>
                From project concept and engineering to commissioning and
                operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="section">
        <div className="container about-approach">
          <div className="about-approach-image">
            <img src="/assets/about-panel.jpg" alt="Renewable energy project" />
          </div>

          <div className="about-approach-content">
            <div className="eyebrow">
              <i></i>
              OUR APPROACH
            </div>

            <h2>
              Engineering a cleaner
              <span> tomorrow.</span>
            </h2>

            <p>
              We believe successful renewable-energy projects require more than
              technology. They require the right feedstock, robust engineering,
              disciplined execution, reliable operations and a clear path to
              market.
            </p>

            <div className="check-list">
              <div>
                <span>01</span>
                <p>Resource and feedstock assessment</p>
              </div>

              <div>
                <span>02</span>
                <p>Technical and commercial feasibility</p>
              </div>

              <div>
                <span>03</span>
                <p>Project engineering and execution</p>
              </div>

              <div>
                <span>04</span>
                <p>Long-term operational thinking</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section page-cta">
        <div className="container page-cta-inner">
          <div>
            <div className="eyebrow light">
              <i></i>
              BUILD WITH US
            </div>

            <h2>
              Have a project in mind?
              <span> Let's talk.</span>
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

export default About;