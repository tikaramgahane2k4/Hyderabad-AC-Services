import { useState } from "react";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiUserCheck,
  FiStar,
} from "react-icons/fi";
import "./ContactSectionPremium.css";

function Highlight({ icon, title }) {
  return (
    <div className="highlight">
      <div className="highlight-icon">{icon}</div>
      <div>
        <div className="highlight-title">{title}</div>
      </div>
    </div>
  );
}

function ContactSectionPremium() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const validateField = (name, value) => {
    if (name === "name") return value.trim() ? "" : "Please enter your name";
    if (name === "phone") {
      const digits = value.replace(/\D/g, "");
      if (!digits) return "Please enter phone number";
      if (digits.length !== 10) return "Enter a valid 10-digit phone";
      return "";
    }
    if (name === "message") return value.trim() ? "" : "Please enter a brief message";
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nextErrors = {
      name: validateField("name", form.name),
      phone: validateField("phone", form.phone),
      message: validateField("message", form.message),
    };
    setErrors(nextErrors);
    if (nextErrors.name || nextErrors.phone || nextErrors.message) return;

    setSubmitting(true);
    // Simulate API delay
    setTimeout(() => {
      setSubmitting(false);
      setSent(true);
    }, 700);
  };

  return (
    <section className="contact-premium" aria-labelledby="contact-premium-title">
      <div className="contact-premium-inner">
        <div className="left">
          <div className="trust-card">
            <h2 id="contact-premium-title">Hyderabad’s Trusted AC Experts</h2>
            <p className="lead">
              Fast, reliable plus verified technicians for commercial and residential cooling — ready when
              your business depends on uptime.
            </p>

            <div className="highlights">
              <Highlight icon={<FiClock />} title="24/7 Service" />
              <Highlight icon={<FiUserCheck />} title="Verified Technicians" />
              <Highlight icon={<FiStar />} title="Affordable Pricing" />
            </div>

            <div className="business-cards">
              <div className="biz-card">
                <div className="biz-icon"><FiMapPin /></div>
                <div>
                  <small>Location</small>
                  <div>Hyderabad, India</div>
                </div>
              </div>

              <div className="biz-card clickable">
                <div className="biz-icon"><FiPhone /></div>
                <div>
                  <small>Call Us</small>
                  <div><a href="tel:+91XXXXXXXXXX">+91 XXXXX XXXXX</a></div>
                </div>
              </div>

              <div className="biz-card">
                <div className="biz-icon"><FiMail /></div>
                <div>
                  <small>Email</small>
                  <div>info@hyderabadacservices.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="form-card">
            <div className="tag">⚡ Quick Inquiry</div>
            <h3>Get a Callback in 10 Minutes</h3>

            {sent ? (
              <div className="success">
                <div className="success-emoji">✅</div>
                <h4>Our team will contact you shortly!</h4>
                <p>Expect a callback within 10 minutes during working hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className={`field ${form.name ? "filled" : ""}`}>
                  <label>Full Name</label>
                  <div className="control">
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder=" "
                      type="text"
                    />
                  </div>
                  {errors.name && <div className="error">{errors.name}</div>}
                </div>

                <div className={`field ${form.phone ? "filled" : ""}`}>
                  <label>Phone</label>
                  <div className="control">
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder=" "
                      type="tel"
                    />
                  </div>
                  {errors.phone && <div className="error">{errors.phone}</div>}
                </div>

                <div className={`field ${form.message ? "filled" : ""}`}>
                  <label>Message</label>
                  <div className="control">
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder=" "
                    />
                  </div>
                  {errors.message && <div className="error">{errors.message}</div>}
                </div>

                <button className="cta" type="submit" disabled={submitting}>
                  {submitting ? "Sending..." : "Get Callback"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSectionPremium;
