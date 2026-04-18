import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const bookingServices = [
  {
    title: "AC Repair",
    description: "Fix cooling issues, leaks, noise",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 7h16v4H4V7Zm2 0V5h2v2m8 0V5h2v2M7 15h10m-9 4h8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "AC Installation",
    description: "New unit setup & commissioning",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 7h18v5H3V7Zm4 9h10m-5-4v7m-3-3 3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "AC Service",
    description: "Deep cleaning & maintenance",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3v3m0 12v3M5.6 5.6l2.1 2.1m8.6 8.6 2.1 2.1M3 12h3m12 0h3m-15.4 6.4 2.1-2.1m8.6-8.6 2.1-2.1" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: "AC Uninstallation",
    description: "Safe removal & shifting",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 7h18v4H3V7Zm4 9h10m5 0-3 3-3-3m3 3v-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "AMC Plans",
    description: "Annual maintenance contracts",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 4h10v4H7V4Zm-2 6h14v10H5V10Zm4 3h6m-6 3h4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Exhaust Ducting",
    description: "Ventilation solutions",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 12h16M7 8h10M7 16h10M4 6h2m12 0h2M4 18h2m12 0h2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
];

function BookServiceSection() {
  const [searchParams] = useSearchParams();
  const serviceFromQuery = searchParams.get("service");

  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    preferredTime: "Morning",
  });

  useEffect(() => {
    if (!serviceFromQuery) {
      return;
    }

    const matched = bookingServices.find((service) => service.title === serviceFromQuery);

    if (matched) {
      setSelectedService(matched.title);
      setStep(2);
    }
  }, [serviceFromQuery]);

  const handleSelectService = (serviceTitle) => {
    setSelectedService(serviceTitle);
    setStep(2);
    setSubmitted(false);
  };

  const handleBackToServices = () => {
    setStep(1);
    setSubmitted(false);
  };

  const handleFieldChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="booking-page" id="book-service">
      <div className="booking-shell">
        <header className="booking-head">
          <p className="booking-kicker">Book Service</p>
          <h1>Schedule Your AC Service in Minutes</h1>
          <p>Select your service and share your details. Our team will contact you shortly to confirm your booking.</p>
        </header>

        <div className="booking-progress" aria-label="Booking progress">
          <div className={`booking-progress-step ${step >= 1 ? "is-active" : ""}`}>
            <span>1</span>
            <strong>Select Service</strong>
          </div>
          <div className={`booking-progress-line ${step === 2 ? "is-complete" : ""}`} />
          <div className={`booking-progress-step ${step >= 2 ? "is-active" : ""}`}>
            <span>2</span>
            <strong>Your Details</strong>
          </div>
        </div>

        <div className="booking-card">
          {step === 1 && (
            <div className="booking-step booking-step--services" key="step-services">
              <div className="booking-services-grid">
                {bookingServices.map((service) => (
                  <button
                    key={service.title}
                    type="button"
                    className="booking-service-tile"
                    onClick={() => handleSelectService(service.title)}
                    aria-label={`Select ${service.title}`}
                  >
                    <div className="booking-service-icon">{service.icon}</div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="booking-step booking-step--details" key="step-details">
              <div className="booking-selected-service">Selected Service: <strong>{selectedService}</strong></div>

              <form className="booking-form" onSubmit={handleSubmit}>
                <label>
                  Name
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFieldChange}
                    placeholder="Enter your full name"
                    required
                  />
                </label>

                <label>
                  Phone
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleFieldChange}
                    placeholder="Enter your phone number"
                    required
                  />
                </label>

                <label className="booking-form-full">
                  Address
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleFieldChange}
                    placeholder="Enter your service address"
                    rows={4}
                  />
                </label>

                <label>
                  Preferred Time
                  <select name="preferredTime" value={formData.preferredTime} onChange={handleFieldChange}>
                    <option>Morning</option>
                    <option>Afternoon</option>
                    <option>Evening</option>
                  </select>
                </label>

                <div className="booking-form-actions booking-form-full">
                  <button type="button" className="booking-back-button" onClick={handleBackToServices}>
                    Back to services
                  </button>
                  <button type="submit" className="booking-submit-button">
                    Book Now - It's Free
                  </button>
                </div>
              </form>

              {submitted && (
                <div className="booking-success" role="status" aria-live="polite">
                  Thank you! Your booking request for {selectedService} has been received. We will contact you soon.
                </div>
              )}
            </div>
          )}
        </div>

        <p className="booking-footnote">
          Need urgent support? <Link to="/contact">Contact our team</Link> for priority assistance.
        </p>
      </div>
    </section>
  );
}

export default BookServiceSection;
