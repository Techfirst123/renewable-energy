import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./HeroSlider.css";

/*
  Home hero — full-width photo carousel (Bootstrap-5 style: fade slides,
  bar indicators, prev/next controls) with a 3D stack of project photos
  and a perspective grid floor. Self-contained: styles live in HeroSlider.css.
*/

const slides = [
  {
    image: "/assets/hero-cbg-domes.jpg",
    tag: "CBG",
    tone: "bio",
    title: (
      <>
        Turning organic waste into <em>compressed biogas.</em>
      </>
    ),
    text: "CBG plants in 3, 6 and 12 TPD capacities — feasibility and DPR, approvals, civil execution and operations, delivered with proven technology partners.",
    cta: { to: "/capabilities", label: "Explore CBG" },
  },
  {
    image: "/assets/hero-solar-field.jpg",
    tag: "Solar EPC",
    tone: "solar",
    title: (
      <>
        Solar power, <em>engineered end-to-end.</em>
      </>
    ),
    text: "Rooftop and ground-mounted solar plants — surveyed, designed, procured, built and maintained by one accountable team.",
    cta: { to: "/solar-epc", label: "Explore Solar EPC" },
  },
  {
    image: "/assets/about-panel.jpg",
    tag: "Execution",
    tone: "brand",
    title: (
      <>
        From concept to <em>commissioning.</em>
      </>
    ),
    text: "Milestone-based execution with QA/QC, safety and schedule discipline — led by engineers with 59+ combined years of experience.",
    cta: { to: "/execution", label: "See how we execute" },
  },
];

const stack = [
  { image: "/assets/img2.jpg", label: "Digester tank" },
  { image: "/assets/img7.jpg", label: "Biogas dome" },
  { image: "/assets/solar-1.jpg", label: "Solar installation" },
];

const stats = [
  ["3 / 6 / 12", "TPD CBG plant capacities"],
  ["29+ yrs", "Renewable energy expertise"],
  ["30+ yrs", "Project execution expertise"],
];

const INTERVAL = 6500;

function HeroSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef(null);

  const go = useCallback((i) => setActive((i + slides.length) % slides.length), []);
  const next = useCallback(() => go(active + 1), [active, go]);
  const prev = useCallback(() => go(active - 1), [active, go]);

  // Autoplay (pauses on hover/focus and when the user prefers reduced motion)
  useEffect(() => {
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (paused || reduce) return undefined;
    timer.current = setTimeout(next, INTERVAL);
    return () => clearTimeout(timer.current);
  }, [active, paused, next]);

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  };

  const slide = slides[active];

  return (
    <section
      className={`hx tone-${slide.tone} ${paused ? "is-paused" : ""}`}
      aria-roledescription="carousel"
      aria-label="RREV highlights"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={onKeyDown}
    >
      {/* Slides (cross-fade + slow zoom) */}
      <div className="hx-slides">
        {slides.map((s, i) => (
          <div
            key={s.image}
            className={`hx-slide ${i === active ? "active" : ""}`}
            style={{ backgroundImage: `url("${s.image}")` }}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${slides.length}`}
            aria-hidden={i !== active}
          />
        ))}
      </div>
      <div className="hx-shade" aria-hidden="true" />
      <div className="hx-floor" aria-hidden="true" />

      <div className="hx-inner">
        {/* COPY */}
        <div className="hx-copy" key={active}>
          <span className="hx-badge">
            <i /> {slide.tag}
          </span>

          <h1>{slide.title}</h1>
          <p>{slide.text}</p>

          <div className="hx-actions">
            <Link to={slide.cta.to} className="hx-btn hx-btn-primary">
              {slide.cta.label} <span>↗</span>
            </Link>
            <Link to="/contact" className="hx-btn hx-btn-glass">
              Get a proposal
            </Link>
          </div>

          <ul className="hx-stats">
            {stats.map(([v, l]) => (
              <li key={l}>
                <b>{v}</b>
                <span>{l}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 3D PHOTO STACK */}
        <div className="hx-stack" aria-hidden="true">
          {stack.map((c, i) => (
            <figure key={c.image} className={`hx-card hx-card-${i + 1}`}>
              <img src={c.image} alt="" loading="lazy" />
              <figcaption>{c.label}</figcaption>
            </figure>
          ))}
          <div className="hx-chip">
            <b>CBG</b>
            <span>+</span>
            <b>Solar EPC</b>
          </div>
        </div>
      </div>

      {/* CONTROLS */}
      <div className="hx-controls">
        <div className="hx-indicators" role="tablist" aria-label="Choose slide">
          {slides.map((s, i) => (
            <button
              key={s.tag}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={`Slide ${i + 1}: ${s.tag}`}
              className={i === active ? "active" : ""}
              onClick={() => go(i)}
            >
              <span style={{ animationDuration: `${INTERVAL}ms` }} />
              <em>{s.tag}</em>
            </button>
          ))}
        </div>

        <div className="hx-arrows">
          <span className="hx-count">
            {String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </span>
          <button type="button" onClick={prev} aria-label="Previous slide">‹</button>
          <button type="button" onClick={next} aria-label="Next slide">›</button>
        </div>
      </div>
    </section>
  );
}

export default HeroSlider;
