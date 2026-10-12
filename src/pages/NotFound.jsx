import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const suggestions = [
  { to: "/capabilities", label: "Bio-CNG / CBG", text: "Turnkey biogas and CBG plant capabilities." },
  { to: "/solar-epc", label: "Solar EPC", text: "Rooftop and ground-mounted solar, end-to-end." },
  { to: "/projects", label: "Projects", text: "Photos of the assets we engineer and build." },
  { to: "/about", label: "About RREV", text: "Who we are and how we work." },
];

function NotFound() {
  const { pathname } = useLocation();

  useEffect(() => {
    const previous = document.title;
    document.title = "Page Not Found | RREV";

    // Keep search engines from indexing mistyped URLs
    const robots = document.createElement("meta");
    robots.name = "robots";
    robots.content = "noindex";
    document.head.appendChild(robots);

    return () => {
      document.title = previous;
      robots.remove();
    };
  }, []);

  return (
    <>
      <section className="inner-hero notfound-hero">
        <div className="inner-hero-grid"></div>
        <span className="notfound-code" aria-hidden="true">404</span>

        <div className="container inner-hero-content">
          <div className="eyebrow light">
            <i></i>
            ERROR 404 · PAGE NOT FOUND
          </div>

          <h1>
            This page is
            <span> off the grid.</span>
          </h1>

          <p>
            We couldn't find <code className="notfound-path">{pathname}</code>.
            The link may be broken, or the page may have been moved. Let's get
            you back to clean energy.
          </p>

          <div className="notfound-actions">
            <Link to="/" className="btn primary">
              Back to Home <span>↗</span>
            </Link>
            <Link to="/contact" className="btn ghost">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="section notfound-links">
        <div className="container">
          <div className="eyebrow">
            <i></i>
            YOU MIGHT BE LOOKING FOR
          </div>

          <div className="notfound-grid">
            {suggestions.map((s) => (
              <Link key={s.to} to={s.to} className="notfound-card">
                <b>
                  {s.label} <span>↗</span>
                </b>
                <small>{s.text}</small>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default NotFound;
