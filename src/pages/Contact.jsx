import React, { useState } from "react";
import Seo from "../components/Seo";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Seo
        title="Contact RREV | CBG Plant & Solar EPC Enquiries"
        description="Tell us about your CBG plant, solar rooftop or ground-mount project. RREV replies with a scoping call and clear next steps."
      />

      {/* HERO */}
      <section className="inner-hero contact-hero">
        <div className="inner-hero-grid"></div>

        <div className="container inner-hero-content">
          <div className="eyebrow light">
            <i></i>
            LET'S BUILD WHAT'S NEXT
          </div>

          <h1>
            Have an opportunity in mind?
            <span> Let's talk.</span>
          </h1>

          <p>
            Tell us about your renewable energy, bioenergy, CBG or
            infrastructure project and start a conversation with RREV.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section contact-section">
        <div className="container contact-grid">
          <div className="contact-info">
            <div className="eyebrow">
              <i></i>
              GET IN TOUCH
            </div>

            <h2>
              Let's explore the
              <span> opportunity.</span>
            </h2>

            <p>
              Whether you are exploring a new CBG project, evaluating
              feedstock, planning infrastructure or looking for project
              execution support, we would be happy to understand your
              requirements.
            </p>

            <div className="contact-points">
              <div>
                <span>01</span>
                <div>
                  <small>FOCUS</small>
                  <strong>Renewable Energy & Bioenergy</strong>
                </div>
              </div>

              <div>
                <span>02</span>
                <div>
                  <small>PROJECT</small>
                  <strong>CBG & Sustainable Infrastructure</strong>
                </div>
              </div>

              <div>
                <span>03</span>
                <div>
                  <small>APPROACH</small>
                  <strong>Concept to Operations</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrap">
            {!submitted ? (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <label>
                    Name
                    <input
                      type="text"
                      placeholder="Your name"
                      required
                    />
                  </label>

                  <label>
                    Company
                    <input
                      type="text"
                      placeholder="Company name"
                    />
                  </label>
                </div>

                <div className="form-row">
                  <label>
                    Email
                    <input
                      type="email"
                      placeholder="you@company.com"
                      required
                    />
                  </label>

                  <label>
                    Phone
                    <input
                      type="tel"
                      placeholder="+91"
                    />
                  </label>
                </div>

                <label>
                  Project Type
                  <select defaultValue="">
                    <option value="" disabled>
                      Select project type
                    </option>
                    <option>CBG / Biogas</option>
                    <option>Solar EPC</option>
                    <option>Hybrid Solar + Biogas</option>
                    <option>Renewable Energy</option>
                    <option>Infrastructure</option>
                    <option>Project Execution</option>
                    <option>Other</option>
                  </select>
                </label>

                <label>
                  Tell us about your project
                  <textarea
                    rows="6"
                    placeholder="Briefly describe your requirement..."
                    required
                  ></textarea>
                </label>

                <button type="submit" className="btn btn-dark">
                  Send Enquiry <span>↗</span>
                </button>
              </form>
            ) : (
              <div className="form-success">
                <div className="success-icon">✓</div>

                <div className="eyebrow">
                  <i></i>
                  THANK YOU
                </div>

                <h3>
                  Your enquiry has been
                  <span> received.</span>
                </h3>

                <p>
                  Thank you for reaching out to Renewable Rise Energy Venture.
                  Our team can review your requirement and connect with you
                  regarding the next steps.
                </p>

                <button
                  className="btn btn-dark"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Enquiry <span>↗</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="section contact-bottom">
        <div className="container">
          <div className="contact-bottom-inner">
            <span>RREV</span>

            <div>
              <div className="eyebrow light">
                <i></i>
                RENEWABLE RISE ENERGY VENTURE
              </div>

              <h2>
                Clean energy.
                <span> Practical execution.</span>
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;