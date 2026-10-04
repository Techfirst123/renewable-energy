import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import HeroSlider from "../components/HeroSlider";
import ServiceIcons from "../components/ServiceIcons";
import ValueChain from "../components/ValueChain";
import BusinessTabs from "../components/BusinessTabs";

const capabilities = [
  {
    n: "01",
    title: "Project Development & DPR",
    text: "Feasibility studies, feedstock assessment, DPRs, financial structuring and subsidy documentation.",
    icon: "◎",
    image: "/assets/about-panel.jpg",
  },
  {
    n: "02",
    title: "Approvals & Coordination",
    text: "Statutory clearances, PESO and DISCOM liaison, government and stakeholder coordination.",
    icon: "✓",
    image: "/assets/img7.jpg",
  },
  {
    n: "03",
    title: "Civil & Infrastructure Execution",
    text: "Site works, civil construction, erection, contractor coordination, QA/QC and schedule control.",
    icon: "▦",
    image: "/assets/img2.jpg",
  },
  {
    n: "04",
    title: "Solar EPC",
    text: "Rooftop, ground-mounted and hybrid solar — survey, design, procurement, installation and commissioning.",
    icon: "☀",
    image: "/assets/solar-1.jpg",
  },
  {
    n: "05",
    title: "O&M & Advisory",
    text: "Operations support, performance monitoring, PMU services, operator training and reporting.",
    icon: "◒",
    image: "/assets/solar-7.jpg",
  },
];

const stages = [
  ["01", "Concept", "Project development and feasibility direction"],
  ["02", "Engineering", "Detailed engineering and technical planning"],
  ["03", "Procurement", "Critical equipment and resource coordination"],
  ["04", "Construction", "Site execution, supervision and quality control"],
  ["05", "Commissioning", "Testing, stabilization and performance checks"],
  ["06", "Operations", "O&M, monitoring and performance optimization"],
];

const leaders = [
  {
    initials: "AM",
    name: "Mr. Mohd Asim Mirza",
    role: "Renewable Energy, Bioenergy & CBG Specialist",
    years: "29+",
    text: "Experience across renewable energy, biogas, climate change, circular economy, environmental management and sustainable development.",
    tags: ["CBG & Biogas", "Policy", "PMU", "Government Coordination"],
  },
  {
    initials: "MS",
    name: "Mr. M. S. Shaikhu",
    role: "Civil Engineering & Project Execution Expert",
    years: "30+",
    text: "Extensive experience in infrastructure, hydropower, renewable energy, construction management and large-scale project execution.",
    tags: ["Civil Execution", "Site Management", "Quality", "Schedule"],
  },
];

function Icon({ name }) {
  return <span className="icon-box">{name}</span>;
}

function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const nodes = ref.current?.querySelectorAll(".reveal");

    if (!nodes) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.12,
      },
    );

    nodes.forEach((node) => io.observe(node));

    return () => io.disconnect();
  }, []);

  return ref;
}


/* ================= EXECUTION STAGES (Bio-CNG + Solar) ================= */

const processTracks = {
  cbg: {
    label: "Bio-CNG / CBG Plant",
    stages: [
      { no: "01", title: "Concept", image: "/assets/img1.jpg", description: "Feedstock assessment, site study and feasibility direction — supported by continuous progress review, quality controls and risk mitigation." },
      { no: "02", title: "Engineering", image: "/assets/img2.jpg", description: "Process, civil and mechanical engineering for digesters, gas upgrading and compression — an execution-ready project framework." },
      { no: "03", title: "Procurement", image: "/assets/img3.jpg", description: "Timely procurement of critical equipment and vendor coordination focused on quality, availability, cost control and timelines." },
      { no: "04", title: "Construction", image: "/assets/img4.jpg", description: "Disciplined site execution covering civil works, installation, contractor coordination, safety and construction quality." },
      { no: "05", title: "Commissioning", image: "/assets/img7.jpg", description: "Testing, integration, performance checks and PESO-compliant start-up so the plant is ready for reliable operation." },
      { no: "06", title: "Operations", image: "/assets/img6.jpg", description: "O&M, performance monitoring, FOM by-product management and continuous optimisation for long-term output." },
    ],
  },
  solar: {
    label: "Solar EPC",
    stages: [
      { no: "01", title: "Concept", image: "/assets/solar-2.jpg", description: "Site survey, shadow analysis, load study and energy-yield estimate to size the right rooftop or ground-mounted system." },
      { no: "02", title: "Engineering", image: "/assets/solar-7.jpg", description: "PV layout, structural design, string and inverter sizing, SLD and protection design for safe, efficient generation." },
      { no: "03", title: "Procurement", image: "/assets/solar-3.jpg", description: "Sourcing of modules, inverters, mounting structures and BOS from qualified vendors with quality checks at dispatch." },
      { no: "04", title: "Construction", image: "/assets/solar-1.jpg", description: "Mounting structure erection, module installation, cabling, earthing and lightning protection under strict site safety." },
      { no: "05", title: "Commissioning", image: "/assets/solar-6.jpg", description: "Pre-commissioning tests, grid synchronisation, net-metering and DISCOM approvals, and handover documentation." },
      { no: "06", title: "Operations", image: "/assets/solar-5.jpg", description: "Module cleaning, preventive maintenance, remote monitoring and generation reporting to protect long-term yield." },
    ],
  },
};

function ProcessInteractive() {
  const [track, setTrack] = useState("cbg");
  const [activeStage, setActiveStage] = useState(0);
  const stages = processTracks[track].stages;
  const stage = stages[activeStage];

  const switchTrack = (key) => {
    setTrack(key);
    setActiveStage(0);
  };

  return (
    <>
      <div className="process-track-switch" role="tablist" aria-label="Project type">
        {Object.entries(processTracks).map(([key, t]) => (
          <button
            key={key}
            type="button"
            role="tab"
            aria-selected={track === key}
            className={`track-btn ${key} ${track === key ? "active" : ""}`}
            onClick={() => switchTrack(key)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className={`process-interactive track-${track}`}>
        {/* LEFT STAGE NAVIGATION */}
        <div className="process-stage-list">
          {stages.map((item, index) => (
            <button
              key={item.no}
              type="button"
              className={`process-stage-btn ${activeStage === index ? "active" : ""}`}
              onClick={() => setActiveStage(index)}
              aria-pressed={activeStage === index}
            >
              <span className="process-stage-number">{item.no}</span>
              <span className="process-stage-title">{item.title}</span>
              <span className="process-stage-arrow">→</span>
            </button>
          ))}
        </div>

        {/* RIGHT CONTENT */}
        <div className="process-stage-preview">
          <div className="process-image-wrap">
            <img key={stage.image} src={stage.image} alt={`${processTracks[track].label} — ${stage.title}`} className="process-stage-image" />
            <div className="process-image-overlay"></div>
            <div className="process-large-number">{stage.no}</div>
            <div className="process-preview-content">
              <div className="process-mini-line"></div>
              <div className="process-preview-label">{processTracks[track].label} · Stage</div>
              <h3>{stage.title}</h3>
              <p>{stage.description}</p>
            </div>
            <div className="process-counter">
              <span>{stage.no}</span>
              <i></i>
              <span>06</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


function Home() {
  const page = useReveal();

  return (
    <div ref={page}>
      {/* ================= HERO ================= */}

      <HeroSlider />
      <ServiceIcons />

      {/* ================= ABOUT PREVIEW ================= */}

      <section className="section about">
        <div className="container two-col">
          <div className="section-intro reveal">
            <div className="eyebrow">
              <i></i>
              WHO WE ARE
            </div>

            <h2>
              Built for projects where <em>execution matters.</em>
            </h2>

            <p>
              RREV is positioned as a multidisciplinary implementation partner
              for renewable energy and bioenergy projects, with capabilities
              spanning concept development through operational stabilization.
            </p>

            <Link to="/about" className="text-link">
              Discover more about RREV <span>↗</span>
            </Link>
          </div>

          <div className="about-panel reveal">
            <div className="panel-number">01</div>

            <h3>
              One team. <span>Every stage.</span>
            </h3>

            <p>
              The company’s technical team covers renewable energy, biogas
              technology, civil and mechanical systems, project management,
              environmental management, procurement and on-site execution.
            </p>

            <div className="pill-row">
              <span>Engineering</span>
              <span>Procurement</span>
              <span>Construction</span>
              <span>Commissioning</span>
              <span>O&M</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CAPABILITIES ================= */}

      <section className="section capabilities">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <div className="eyebrow">
                <i></i>
                WHAT WE DO
              </div>

              <h2>
                Capabilities built for <em>real execution.</em>
              </h2>
            </div>

            <p>
              From development and engineering to construction and operations,
              RREV brings every critical capability together under one roof.
            </p>
          </div>

          <div className="cap-carousel reveal">
            <div className="cap-track">
              {[...capabilities, ...capabilities].map((cap, i) => (
                <div className="cap-card" key={`${cap.title}-${i}`}>
                  <div
                    className="cap-image"
                    style={{
                      backgroundImage: `url(${cap.image})`,
                    }}
                  ></div>

                  <div className="cap-overlay"></div>

                  <div className="cap-normal">
                    <div className="cap-number">
                      {String((i % capabilities.length) + 1).padStart(2, "0")}
                    </div>

                    <div className="cap-icon">
                      <Icon name={cap.icon} />
                    </div>

                    <h3>{cap.title}</h3>
                  </div>

                  <div className="cap-hover-content">
                    <div className="cap-hover-icon">
                      <Icon name={cap.icon} />
                    </div>

                    <h3>{cap.title}</h3>

                    <p>{cap.text}</p>

                    <Link to="/capabilities" className="cap-explore">
                      Explore capability <b>↗</b>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= SOLAR EPC ================= */}

      <section className="section solar-band">
        <div className="container solar-band-grid">
          <div className="solar-band-media reveal">
            <img src="/assets/solar-1.jpg" alt="RREV team installing solar modules" />
            <div className="solar-band-badge">
              <b>EPC</b>
              <span>Design · Supply<br />Install · Maintain</span>
            </div>
          </div>

          <div className="solar-band-copy reveal">
            <div className="eyebrow sun">
              <i></i>
              SOLAR EPC — OUR CORE
            </div>

            <h2>
              Solar power, <em>engineered end-to-end.</em>
            </h2>

            <p>
              Alongside bioenergy, RREV delivers turnkey solar EPC for
              industrial, commercial and institutional sites — and pairs solar
              with biogas plants to cut the captive power cost of digesters,
              upgrading units and compressors.
            </p>

            <ul className="solar-points">
              <li>Rooftop, carport &amp; ground-mounted systems</li>
              <li>Hybrid solar + biogas captive power</li>
              <li>Net-metering &amp; DISCOM approvals</li>
              <li>Remote monitoring &amp; O&amp;M</li>
            </ul>

            <Link to="/solar-epc" className="btn sun-btn">
              Explore Solar EPC <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= VALUE CHAIN ================= */}

      <ValueChain />

      {/* ================= BUSINESS LINES (tabs) ================= */}

      <BusinessTabs />

      {/* ================= PROCESS ================= */}

      <section className="section process-section" id="execution-process">
        <div className="container">
          <div className="section-head process-section-head">
            <div>
              <div className="eyebrow">
                <i></i>
                HOW WE EXECUTE
              </div>

              <h2>
                Structured for
                <span> timely delivery.</span>
              </h2>
            </div>

            <p>
              Whether it is a Bio-CNG plant or a solar installation, RREV
              follows the same disciplined path — scheduling, milestones,
              resource optimisation, monitoring, QA/QC and risk mitigation.
            </p>
          </div>

          <ProcessInteractive />
          
        </div>
      </section>



      {/* ================= GALLERY PREVIEW ================= */}

      <section className="section gallery-preview">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <div className="eyebrow">
                <i></i>
                ON SITE
              </div>
              <h2>
                Projects in <em>pictures.</em>
              </h2>
            </div>
            <p>
              Digesters, gas-handling systems and solar arrays — a look at the
              assets RREV engineers, builds and maintains.
            </p>
          </div>

          <div className="photo-grid preview reveal">
            {["/assets/about-panel.jpg", "/assets/solar-6.jpg", "/assets/img7.jpg", "/assets/solar-1.jpg"].map((src) => (
              <Link to="/projects" className="photo-tile" key={src}>
                <img src={src} alt="" loading="lazy" />
              </Link>
            ))}
          </div>

          <div className="home-page-link">
            <Link to="/projects" className="text-link">
              View the full gallery <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= LEADERSHIP PREVIEW ================= */}

      <section className="section leadership">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <div className="eyebrow">
                <i></i>
                LEADERSHIP
              </div>

              <h2>
                Experience that keeps <em>projects moving.</em>
              </h2>
            </div>

            <p>
              The document identifies two experienced professionals leading the
              proposed 12 TPD CBG project.
            </p>
          </div>

          <div className="leaders">
            {leaders.map((l) => (
              <article className="leader-card reveal" key={l.name}>
                <div className="leader-visual">
                  <div className="portrait-ring">
                    <span>{l.initials}</span>
                  </div>

                  <div className="years">
                    <b>{l.years}</b>

                    <small>
                      years
                      <br />
                      experience
                    </small>
                  </div>
                </div>

                <div className="leader-body">
                  <div className="leader-role">{l.role}</div>

                  <h3>{l.name}</h3>

                  <p>{l.text}</p>

                  <div className="tag-row">
                    {l.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="home-page-link">
            <Link to="/leadership" className="text-link">
              Meet our leadership team <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= COMMITMENT ================= */}

      <section className="section commitment">
        <div className="container commitment-inner reveal">
          <div>
            <div className="eyebrow">
              <i></i>
              OUR COMMITMENT
            </div>

            <h2>
              Not just a plant.
              <br />
              <em>A long-term asset.</em>
            </h2>
          </div>

          <p>
            RREV’s stated objective is to deliver a technically sound,
            commercially viable and operationally efficient CBG facility that
            consistently creates value for the client over the long term.
          </p>
        </div>
      </section>

      {/* ================= CONTACT CTA ================= */}

      <section className="contact">
        <div className="container contact-inner reveal">
          <div className="eyebrow">
            <i></i>
            LET'S BUILD WHAT'S NEXT
          </div>

          <h2>
            Ready to turn a clean-energy idea into a <em>working asset?</em>
          </h2>

          <p>Let’s discuss your Bio-CNG, solar EPC or renewable energy project.</p>

          <Link to="/contact" className="btn light">
            Start a conversation <span>↗</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
