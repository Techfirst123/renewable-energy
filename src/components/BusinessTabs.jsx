import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./BusinessTabs.css";

/*
  Two business lines in one tabbed block:
  1) CBG plants — 3 / 6 / 12 TPD models + plant economics comparison
  2) Solar EPC — rooftop and grid-connected (ground-mount) solutions

  NOTE: all commercial figures below are indicative industry references for
  guidance only. Replace them with RREV's own verified numbers before launch.
*/

const plants = [
  {
    tpd: "3 TPD",
    cbg: "3,000 kg",
    feed: "~100 t/day",
    cost: "₹22 Cr",
    aid: "up to ₹6 Cr",
    fom: "20 t/day FOM + 60 t/day LFOM",
  },
  {
    tpd: "6 TPD",
    cbg: "6,000 kg",
    feed: "~200 t/day",
    cost: "₹36 Cr",
    aid: "up to ₹12 Cr",
    fom: "40 t/day FOM + 120 t/day LFOM",
    featured: true,
  },
  {
    tpd: "12 TPD",
    cbg: "12,000 kg",
    feed: "~400 t/day",
    cost: "₹64 Cr",
    aid: "up to ₹24 Cr",
    fom: "80 t/day FOM + 240 t/day LFOM",
  },
];

const economics = [
  ["CBG output / day", "3,000 kg", "6,000 kg", "12,000 kg"],
  ["CBG output / year (350 days)", "10.5 lakh kg", "21 lakh kg", "42 lakh kg"],
  ["Indicative project cost", "₹22 Cr", "₹36 Cr", "₹64 Cr"],
  ["GOBARdhan capital assistance", "₹6 Cr", "₹12 Cr", "₹24 Cr"],
  ["Indicative annual revenue", "₹12.8 Cr", "₹25.7 Cr", "₹51.4 Cr"],
  ["Indicative annual surplus", "₹6.0 Cr", "₹12.0 Cr", "₹24.1 Cr"],
  ["By-product (FOM / LFOM) value", "₹1.8 Cr/yr", "₹3.6 Cr/yr", "₹7.3 Cr/yr"],
];

const feedstock = [
  ["Napier grass", "180–220 m³/t", "55–70 kg/t"],
  ["Maize silage", "220–300 m³/t", "75–95 kg/t"],
  ["Press mud", "90–120 m³/t", "35–45 kg/t"],
  ["Cattle dung", "50–70 m³/t", "18–25 kg/t"],
  ["Poultry litter", "120–180 m³/t", "45–60 kg/t"],
  ["Food waste", "250–450 m³/t", "90–120 kg/t"],
];

const solarOfferings = [
  {
    title: "Rooftop Solar",
    text: "Grid-tied rooftop systems for homes, housing societies, factories and institutions — designed around roof load, shadow-free area and your consumption pattern.",
    points: ["Net-metering & DISCOM liaison", "PM Surya Ghar subsidy support", "Structure, cabling & earthing"],
  },
  {
    title: "Grid-Connected Ground Mount",
    text: "Utility and captive ground-mounted plants with civil works, mounting structures, inverters, transformers and evacuation up to the metering point.",
    points: ["Land & yield assessment", "HT/LT evacuation design", "CEIG & grid approvals"],
  },
  {
    title: "Hybrid Solar + Biogas",
    text: "Solar sized to carry the captive load of a CBG plant — digesters, upgrading skids and compressors — cutting the plant's grid power bill.",
    points: ["Load study & sizing", "Captive power design", "Combined O&M"],
  },
];

const solarSizes = [
  ["1 kW", "~100 sq ft", "~4 units/day", "₹30,000"],
  ["2 kW", "~200 sq ft", "~8 units/day", "₹60,000"],
  ["3 kW", "~300 sq ft", "~12 units/day", "₹78,000"],
  ["5 kW", "~500 sq ft", "~20 units/day", "₹78,000"],
  ["10 kW", "~1,000 sq ft", "~40 units/day", "₹78,000"],
  ["100 kW+", "~1 acre / MW", "~4 units/kW/day", "Not applicable"],
];

function BusinessTabs() {
  const [tab, setTab] = useState("cbg");

  return (
    <section className="bt" id="business-lines" aria-label="Our business lines">
      <div className="bt-inner">
        <header className="bt-head">
          <span className="bt-eyebrow"><i />What we build</span>
          <h2>
            Two business lines, <em>one execution team.</em>
          </h2>
          <p>
            Compressed Biogas plants from 3 to 12 TPD — developed, built and
            supported by us, with process packages from proven technology
            partners — and solar EPC from rooftops to grid-connected plants.
          </p>
        </header>

        <div className="bt-switch" role="tablist" aria-label="Business lines">
          <button
            type="button"
            role="tab"
            id="bt-tab-cbg"
            aria-controls="bt-panel-cbg"
            aria-selected={tab === "cbg"}
            className={`bt-tab ${tab === "cbg" ? "active" : ""}`}
            onClick={() => setTab("cbg")}
          >
            CBG Plants
          </button>
          <button
            type="button"
            role="tab"
            id="bt-tab-solar"
            aria-controls="bt-panel-solar"
            aria-selected={tab === "solar"}
            className={`bt-tab solar ${tab === "solar" ? "active" : ""}`}
            onClick={() => setTab("solar")}
          >
            Solar EPC
          </button>
        </div>

        {/* ---------------- CBG PANEL ---------------- */}
        {tab === "cbg" && (
          <div className="bt-panel" role="tabpanel" id="bt-panel-cbg" aria-labelledby="bt-tab-cbg" tabIndex={0}>
            <div className="bt-models">
              {plants.map((p) => (
                <article className={`bt-model ${p.featured ? "is-featured" : ""}`} key={p.tpd}>
                  {p.featured && <span className="bt-flag">Most common</span>}
                  <h3>{p.tpd}</h3>
                  <dl>
                    <div><dt>CBG output</dt><dd>{p.cbg}/day</dd></div>
                    <div><dt>Feedstock needed</dt><dd>{p.feed}</dd></div>
                    <div><dt>Indicative cost</dt><dd>{p.cost}</dd></div>
                    <div><dt>GOBARdhan support</dt><dd>{p.aid}</dd></div>
                    <div><dt>By-products</dt><dd>{p.fom}</dd></div>
                  </dl>
                  <Link to="/contact" className="bt-model-link">Get a feasibility study <span>↗</span></Link>
                </article>
              ))}
            </div>

            <div className="bt-tables">
              <div className="bt-table-card">
                <h4>Plant economics — side by side</h4>
                <div className="bt-table-scroll">
                  <table>
                    <thead>
                      <tr><th scope="col">Parameter</th><th scope="col">3 TPD</th><th scope="col">6 TPD</th><th scope="col">12 TPD</th></tr>
                    </thead>
                    <tbody>
                      {economics.map(([label, a, b, c]) => (
                        <tr key={label}>
                          <th scope="row">{label}</th>
                          <td>{a}</td><td>{b}</td><td>{c}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="bt-note">
                  Indicative only — assumes CBG at ₹105/kg, 350 operating days and
                  full capacity utilisation. Actual numbers depend on feedstock
                  cost, off-take price, state subsidy and financing.
                </p>
              </div>

              <div className="bt-table-card">
                <h4>Feedstock yields</h4>
                <div className="bt-table-scroll">
                  <table>
                    <thead>
                      <tr><th scope="col">Feedstock</th><th scope="col">Biogas</th><th scope="col">CBG</th></tr>
                    </thead>
                    <tbody>
                      {feedstock.map(([f, g, c]) => (
                        <tr key={f}><th scope="row">{f}</th><td>{g}</td><td>{c}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="bt-note">
                  Typical ranges. We confirm yields for your feedstock mix during
                  the feasibility stage.
                </p>
              </div>
            </div>

            <div className="bt-strip">
              <div><b>95%+</b><span>CBG purity after upgrading</span></div>
              <div><b>6–9 months</b><span>Typical build to commissioning</span></div>
              <div><b>₹2 Cr / TPD</b><span>Central capital assistance (GOBARdhan)</span></div>
              <div><b>10–15 yrs</b><span>Typical CBG off-take agreement</span></div>
            </div>
          </div>
        )}

        {/* ---------------- SOLAR PANEL ---------------- */}
        {tab === "solar" && (
          <div className="bt-panel" role="tabpanel" id="bt-panel-solar" aria-labelledby="bt-tab-solar" tabIndex={0}>
            <div className="bt-models">
              {solarOfferings.map((s) => (
                <article className="bt-model solar" key={s.title}>
                  <h3>{s.title}</h3>
                  <p className="bt-model-text">{s.text}</p>
                  <ul className="bt-points">
                    {s.points.map((pt) => <li key={pt}>{pt}</li>)}
                  </ul>
                  <Link to="/solar-epc" className="bt-model-link">See Solar EPC <span>↗</span></Link>
                </article>
              ))}
            </div>

            <div className="bt-tables">
              <div className="bt-table-card">
                <h4>Rooftop sizing &amp; subsidy guide</h4>
                <div className="bt-table-scroll">
                  <table>
                    <thead>
                      <tr><th scope="col">System</th><th scope="col">Shadow-free area</th><th scope="col">Typical generation</th><th scope="col">Central subsidy*</th></tr>
                    </thead>
                    <tbody>
                      {solarSizes.map(([s, a, g, sub]) => (
                        <tr key={s}><th scope="row">{s}</th><td>{a}</td><td>{g}</td><td>{sub}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="bt-note">
                  *PM Surya Ghar subsidy applies to residential rooftops: ₹30,000
                  per kW up to 2 kW and ₹78,000 maximum for 3 kW and above.
                  Generation varies with location, tilt and shading.
                </p>
              </div>

              <div className="bt-table-card">
                <h4>Our EPC scope</h4>
                <ol className="bt-steps">
                  <li><b>Survey &amp; yield study</b><span>Site visit, shadow analysis, load profile, generation estimate.</span></li>
                  <li><b>Design &amp; engineering</b><span>Array layout, structure design, string sizing, SLD and protection.</span></li>
                  <li><b>Procurement</b><span>Modules, inverters, structures and BOS with pre-dispatch checks.</span></li>
                  <li><b>Installation</b><span>Civil, structure, modules, cabling, earthing and lightning protection.</span></li>
                  <li><b>Approvals &amp; commissioning</b><span>Net-metering, DISCOM and CEIG clearance, testing, handover.</span></li>
                  <li><b>O&amp;M</b><span>Cleaning, preventive maintenance, monitoring and generation reports.</span></li>
                </ol>
              </div>
            </div>

            <div className="bt-strip solar">
              <div><b>25 yrs</b><span>Typical module performance warranty</span></div>
              <div><b>~4 units</b><span>Generation per kW per day (typical)</span></div>
              <div><b>Net metering</b><span>Export surplus back to the grid</span></div>
              <div><b>Captive hybrid</b><span>Solar sized for CBG plant loads</span></div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default BusinessTabs;
