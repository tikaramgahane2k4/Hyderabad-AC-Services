import { useEffect, useState } from "react";

const initialFormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  location: "",
  timeline: "",
  projectDetails: "",
};

function QuoteRequestModal({ service, onClose, onSubmit }) {
  const [formState, setFormState] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submission, setSubmission] = useState(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((currentState) => ({
      ...currentState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const payload = {
      service: service.title,
      ...formState,
    };

    window.setTimeout(() => {
      setSubmission(payload);
      setIsSubmitting(false);
      onSubmit(payload);
    }, 650);
  };

  return (
    <div className="quote-modal-backdrop" role="presentation" onClick={onClose}>
      <section
        className="quote-modal-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="quote-modal-title"
        aria-describedby="quote-modal-description"
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" className="service-details-close" onClick={onClose} aria-label="Close quote form">
          ×
        </button>

        {submission ? (
          <div className="quote-success">
            <p className="service-details-kicker">Request Sent</p>
            <h3 id="quote-modal-title">Thanks, we received your quote request</h3>
            <p id="quote-modal-description">
              Our team will review your {submission.service.toLowerCase()} requirement and get back to you shortly.
            </p>

            <div className="quote-summary">
              <div>
                <span>Service</span>
                <strong>{submission.service}</strong>
              </div>
              <div>
                <span>Contact</span>
                <strong>{submission.name}</strong>
              </div>
              <div>
                <span>Email</span>
                <strong>{submission.email}</strong>
              </div>
            </div>

            <button type="button" className="quote-success-button" onClick={onClose}>
              Close
            </button>
          </div>
        ) : (
          <>
            <div className="quote-modal-header">
              <div>
                <p className="service-details-kicker">Request a Quote</p>
                <h3 id="quote-modal-title">Tell us about your {service.title.toLowerCase()} need</h3>
                <p id="quote-modal-description">
                  Share a few details and our commercial team will prepare a tailored response.
                </p>
              </div>
              <div className="quote-modal-badge">{service.turnaround}</div>
            </div>

            <form className="quote-form" onSubmit={handleSubmit}>
              <div className="quote-form-grid">
                <label>
                  Name
                  <input name="name" value={formState.name} onChange={handleChange} type="text" placeholder="Your name" required />
                </label>

                <label>
                  Company
                  <input name="company" value={formState.company} onChange={handleChange} type="text" placeholder="Business name" required />
                </label>

                <label>
                  Email
                  <input name="email" value={formState.email} onChange={handleChange} type="email" placeholder="name@company.com" required />
                </label>

                <label>
                  Phone
                  <input name="phone" value={formState.phone} onChange={handleChange} type="tel" placeholder="Mobile number" required />
                </label>

                <label>
                  Location
                  <input name="location" value={formState.location} onChange={handleChange} type="text" placeholder="Project location" required />
                </label>

                <label>
                  Timeline
                  <select name="timeline" value={formState.timeline} onChange={handleChange} required>
                    <option value="">Select timeline</option>
                    <option value="Immediate">Immediate</option>
                    <option value="This week">This week</option>
                    <option value="This month">This month</option>
                    <option value="Planning stage">Planning stage</option>
                  </select>
                </label>

                <label className="quote-form-full">
                  Project Details
                  <textarea
                    name="projectDetails"
                    value={formState.projectDetails}
                    onChange={handleChange}
                    placeholder="Tell us about your property, cooling challenges, and scope"
                    rows="5"
                    required
                  />
                </label>
              </div>

              <div className="quote-form-footer">
                <p>We’ll use these details to prepare the fastest and most relevant commercial quote.</p>
                <button type="submit" className="quote-submit-button" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Request"}
                </button>
              </div>
            </form>
          </>
        )}
      </section>
    </div>
  );
}

export default QuoteRequestModal;