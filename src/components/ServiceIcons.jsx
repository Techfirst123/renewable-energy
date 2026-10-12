import React from "react";
import { Link } from "react-router-dom";
import "./ServiceIcons.css";

// Icons come from the RREV brand artwork (public/assets/icons).
const items = [
  { icon: "organic-waste", title: "Organic Waste Management", text: "Collection, assessment and supply of organic feedstock.", to: "/capabilities" },
  { icon: "biogas-plant", title: "Biogas & CBG Plants", text: "Turnkey digesters, upgrading and compression systems.", to: "/capabilities" },
  { icon: "bio-cng", title: "CBG", text: "Compressed biogas for vehicles, industry and pipelines.", to: "/capabilities" },
  { icon: "organic-fertilizer", title: "Organic Fertilizer (FOM / SFOM)", text: "Fermented organic manure from digestate.", to: "/capabilities" },
  { icon: "circular-economy", title: "Circular Economy", text: "Waste becomes energy and soil nutrients — nothing lost.", to: "/about" },
  { icon: "renewable-solutions", title: "Renewable Energy Solutions", text: "Solar EPC and hybrid solar + biogas power.", to: "/solar-epc" },
];

function ServiceIcons() {
  return (
    <section className="svc-strip" aria-label="What RREV does">
      <div className="svc-wrap">
        {items.map((it) => (
          <Link to={it.to} className="svc-item" key={it.icon}>
            <span className="svc-icon">
              <img src={`/assets/icons/${it.icon}.png`} alt="" loading="lazy" />
            </span>
            <b>{it.title}</b>
            <span className="svc-text">{it.text}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default ServiceIcons;
