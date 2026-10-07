import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Add or remove photos here. `type` drives the filter tabs.
const photos = [
  { src: "/assets/about-panel.jpg", title: "Integrated bioenergy facility", type: "cbg" },
  { src: "/assets/hero-bg.jpg", title: "Anaerobic digester tanks", type: "cbg" },
  { src: "/assets/img1.jpg", title: "Gas handling & storage", type: "cbg" },
  { src: "/assets/img2.jpg", title: "Digester agitator installation", type: "cbg" },
  { src: "/assets/img3.jpg", title: "Digester interior", type: "cbg" },
  { src: "/assets/img4.jpg", title: "Process tank & walkway", type: "cbg" },
  { src: "/assets/img6.jpg", title: "Submersible mixer", type: "cbg" },
  { src: "/assets/img7.jpg", title: "Gas-holder dome & access platform", type: "cbg" },
  { src: "/assets/solar-1.jpg", title: "Module installation crew", type: "solar" },
  { src: "/assets/solar-2.jpg", title: "Industrial rooftop array", type: "solar" },
  { src: "/assets/solar-3.jpg", title: "High-efficiency PV modules", type: "solar" },
  { src: "/assets/solar-5.jpg", title: "Module fixing & QA checks", type: "solar" },
  { src: "/assets/solar-6.jpg", title: "Ground-mounted plant construction", type: "solar" },
  { src: "/assets/solar-7.jpg", title: "Testing & commissioning", type: "solar" },
];

const filters = [
  ["all", "All projects"],
  ["cbg", "CBG"],
  ["solar", "Solar EPC"],
];

function Projects() {
  const [filter, setFilter] = useState("all");
  const [open, setOpen] = useState(null); // index into `shown`

  const shown = filter === "all" ? photos : photos.filter((p) => p.type === filter);

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (dir) => setOpen((i) => (i === null ? i : (i + dir + shown.length) % shown.length)),
    [shown.length],
  );

  // Keyboard controls for the lightbox
  useEffect(() => {
    if (open === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, step]);

  return (
    <>
      {/* HERO */}
      <section className="inner-hero">
        <div className="inner-hero-grid"></div>

        <div className="container inner-hero-content">
          <div className="eyebrow light">
            <i></i>
            PROJECT GALLERY
          </div>

          <h1>
            The assets we
            <span> engineer and build.</span>
          </h1>

          <p>
            CBG plant systems and solar installations — from digesters and
            gas-holders to rooftop and ground-mounted arrays.
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <section className="section">
        <div className="container">
          <div className="gallery-filters" role="tablist" aria-label="Filter projects">
            {filters.map(([key, label]) => (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={filter === key}
                className={`filter-btn ${filter === key ? "active" : ""}`}
                onClick={() => setFilter(key)}
              >
                {label}
                <small>{key === "all" ? photos.length : photos.filter((p) => p.type === key).length}</small>
              </button>
            ))}
          </div>

          {/* CSS Grid: repeat(auto-fit, minmax(...)) — no media queries */}
          <div className="photo-grid">
            {shown.map((p, i) => (
              <button type="button" className="photo-tile" key={p.src} onClick={() => setOpen(i)}>
                <img src={p.src} alt={p.title} loading="lazy" />
                <span className="photo-caption">
                  <small className={p.type}>{p.type === "cbg" ? "CBG" : "Solar EPC"}</small>
                  {p.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {open !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={shown[open].title} onClick={close}>
          <button type="button" className="lb-close" onClick={close} aria-label="Close">×</button>
          <button type="button" className="lb-nav prev" onClick={(e) => { e.stopPropagation(); step(-1); }} aria-label="Previous photo">‹</button>
          <figure onClick={(e) => e.stopPropagation()}>
            <img src={shown[open].src} alt={shown[open].title} />
            <figcaption>
              {shown[open].title}
              <span>{open + 1} / {shown.length}</span>
            </figcaption>
          </figure>
          <button type="button" className="lb-nav next" onClick={(e) => { e.stopPropagation(); step(1); }} aria-label="Next photo">›</button>
        </div>
      )}

      {/* CTA */}
      <section className="section page-cta">
        <div className="container page-cta-inner">
          <div>
            <div className="eyebrow light">
              <i></i>
              YOUR SITE NEXT
            </div>

            <h2>
              Let’s plan your
              <span> next project.</span>
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

export default Projects;
