import React from "react";
import { Link } from "react-router-dom";
import ChainFlow from "../components/ChainFlow";

const capabilities = [
  {
    number: "01",
    title: "Project Development & DPR",
    text: "Feasibility studies, feedstock and site assessment, Detailed Project Reports and financial structuring for CBG and solar projects.",
    image: "/assets/about-panel.jpg",
  },
  {
    number: "02",
    title: "Approvals & Government Coordination",
    text: "Statutory clearances, PESO and DISCOM liaison, subsidy documentation and institutional stakeholder engagement.",
    image: "/assets/img7.jpg",
  },
  {
    number: "03",
    title: "Civil & Infrastructure Execution",
    text: "Civil construction, site execution, erection, contractor coordination, quality control and schedule management.",
    image: "/assets/img2.jpg",
  },
  {
    number: "04",
    title: "Solar EPC",
    text: "Rooftop, ground-mounted and hybrid solar systems — survey, design, procurement, installation, grid connection and commissioning.",
    image: "/assets/solar-1.jpg",
  },
  {
    number: "05",
    title: "O&M & Advisory",
    text: "Operations support, performance monitoring, PMU services, operator training and long-term reporting.",
    image: "/assets/solar-7.jpg",
  },
  {
    number: "06",
    title: "Technology Partner Management",
    text: "Selection and coordination of proven process-technology suppliers for digestion, upgrading and compression packages.",
    image: "/assets/img3.jpg",
  },
];

function Capabilities() {
  return (
    <>
      {/* HERO */}
      <section className="inner-hero capability-hero">
        <div className="inner-hero-grid"></div>

        <div className="container inner-hero-content">
          <div className="eyebrow light">
            <i></i>
            WHAT WE DO
          </div>

          <h1>
            Capabilities built around the
            <span> complete energy value chain.</span>
          </h1>

          <p>
            We combine resource understanding, technical expertise and project
            execution to develop renewable-energy infrastructure that can work
            in the real world.
          </p>
        </div>
      </section>

      {/* CAPABILITY GRID */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">
                <i></i>
                OUR CAPABILITIES
              </div>

              <h2>
                From resource to
                <span> revenue.</span>
              </h2>
            </div>

            <p>
              Our capabilities cover the major stages required to transform
              organic resources into usable clean energy.
            </p>
          </div>

          <div className="full-cap-grid">
            {capabilities.map((item) => (
              <article className="full-cap-card" key={item.number}>
                <div className="full-cap-image">
                  <img src={item.image} alt={item.title} />

                  <span className="full-cap-number">{item.number}</span>
                </div>

                <div className="full-cap-body">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>

                  <span className="card-arrow">↗</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VALUE CHAIN */}

      <ChainFlow />

      {/* CTA */}
      <section className="section page-cta">
        <div className="container page-cta-inner">
          <div>
            <div className="eyebrow light">
              <i></i>
              NEXT STEP
            </div>

            <h2>
              Explore how we can support
              <span> your project.</span>
            </h2>
          </div>

          <Link to="/execution" className="btn btn-lime">
            See Our Execution Model <span>↗</span>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Capabilities;