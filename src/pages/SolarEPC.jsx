import React from "react";
import { Link } from "react-router-dom";
import SolarProcess from "../components/SolarProcess";

const services = [
  {
    number: "01",
    title: "Rooftop Solar",
    text: "Grid-tied rooftop systems for factories, warehouses, offices and institutions — designed around roof load, shading and consumption.",
    image: "/assets/solar-5.jpg",
  },
  {
    number: "02",
    title: "Ground-Mounted Plants",
    text: "Utility and captive ground-mounted solar with civil works, mounting structures, transmission and evacuation planning.",
    image: "/assets/solar-6.jpg",
  },
  {
    number: "03",
    title: "Hybrid Solar + Biogas",
    text: "Solar sized to power CBG plant loads — digesters, upgrading units and compressors — to lower captive energy costs.",
    image: "/assets/solar-2.jpg",
  },
  {
    number: "04",
    title: "Procurement & Installation",
    text: "Modules, inverters and BOS from qualified vendors, installed by trained crews with structured QA/QC and site safety.",
    image: "/assets/solar-1.jpg",
  },
  {
    number: "05",
    title: "Grid Connectivity & Approvals",
    text: "Net-metering, DISCOM liaison, electrical inspectorate approvals and complete handover documentation.",
    image: "/assets/solar-3.jpg",
  },
  {
    number: "06",
    title: "O&M & Monitoring",
    text: "Module cleaning, preventive maintenance, remote monitoring and monthly generation reporting.",
    image: "/assets/solar-7.jpg",
  },
];

function SolarEPC() {
  return (
    <>
      {/* HERO */}
      <section className="inner-hero solar-hero">
        <div className="inner-hero-grid"></div>

        <div className="container inner-hero-content">
          <div className="eyebrow light">
            <i></i>
            SOLAR EPC
          </div>

          <h1>
            Engineering, procurement &amp; construction
            <span className="sun-text"> for solar that performs.</span>
          </h1>

          <p>
            RREV’s solar EPC practice delivers rooftop and ground-mounted
            systems end-to-end — the same execution discipline we bring to
            CBG plants, applied to clean power generation.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow sun">
                <i></i>
                WHAT WE DELIVER
              </div>

              <h2>
                One partner from
                <span> survey to switch-on.</span>
              </h2>
            </div>

            <p>
              Every solar project is designed around the site, the load and the
              grid — then built and maintained to protect long-term yield.
            </p>
          </div>

          <div className="full-cap-grid">
            {services.map((item) => (
              <article className="full-cap-card solar-card" key={item.number}>
                <div className="full-cap-image">
                  <img src={item.image} alt={item.title} loading="lazy" />
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

      {/* PROCESS */}

      <SolarProcess />

      {/* CTA */}
      <section className="section page-cta">
        <div className="container page-cta-inner">
          <div>
            <div className="eyebrow light">
              <i></i>
              PLANNING A SOLAR PROJECT?
            </div>

            <h2>
              Get a site assessment
              <span> and a clear proposal.</span>
            </h2>
          </div>

          <Link to="/contact" className="btn btn-lime">
            Request a Proposal <span>↗</span>
          </Link>
        </div>
      </section>
    </>
  );
}

export default SolarEPC;
