import { useEffect, useState } from "react";
import { useAppPreferences } from "../context/AppPreferencesContext";

const initialFormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  location: "",
  timeline: "",
  projectDetails: "",
};

const quoteCopy = {
  en: {
    close: "Close quote form",
    sentKicker: "Request Sent",
    sentTitle: "Thanks, we received your quote request",
    sentDescriptionPrefix: "Our team will review your",
    sentDescriptionSuffix: "requirement and get back to you shortly.",
    summaryService: "Service",
    summaryContact: "Contact",
    summaryEmail: "Email",
    closeButton: "Close",
    formKicker: "Request a Quote",
    formTitlePrefix: "Tell us about your",
    formTitleSuffix: "need",
    formDescription: "Share a few details and our commercial team will prepare a tailored response.",
    name: "Name",
    company: "Company",
    email: "Email",
    phone: "Phone",
    location: "Location",
    timeline: "Timeline",
    details: "Project Details",
    namePlaceholder: "Your name",
    companyPlaceholder: "Business name",
    emailPlaceholder: "name@company.com",
    phonePlaceholder: "Mobile number",
    locationPlaceholder: "Project location",
    detailsPlaceholder: "Tell us about your property, cooling challenges, and scope",
    selectTimeline: "Select timeline",
    timelineOptions: ["Immediate", "This week", "This month", "Planning stage"],
    footer: "We'll use these details to prepare the fastest and most relevant commercial quote.",
    sending: "Sending...",
    send: "Send Request",
  },
  hi: {
    close: "कोट फॉर्म बंद करें",
    sentKicker: "रिक्वेस्ट भेजी गई",
    sentTitle: "धन्यवाद, आपकी कोट रिक्वेस्ट प्राप्त हो गई",
    sentDescriptionPrefix: "हमारी टीम आपकी",
    sentDescriptionSuffix: "आवश्यकता की समीक्षा करके जल्द जवाब देगी।",
    summaryService: "सेवा",
    summaryContact: "संपर्क",
    summaryEmail: "ईमेल",
    closeButton: "बंद करें",
    formKicker: "कोट रिक्वेस्ट",
    formTitlePrefix: "हमें बताएं आपको",
    formTitleSuffix: "की क्या आवश्यकता है",
    formDescription: "कुछ जानकारी साझा करें, हमारी कमर्शियल टीम आपके लिए उपयुक्त जवाब तैयार करेगी।",
    name: "नाम",
    company: "कंपनी",
    email: "ईमेल",
    phone: "फ़ोन",
    location: "स्थान",
    timeline: "समयसीमा",
    details: "प्रोजेक्ट विवरण",
    namePlaceholder: "आपका नाम",
    companyPlaceholder: "कंपनी का नाम",
    emailPlaceholder: "name@company.com",
    phonePlaceholder: "मोबाइल नंबर",
    locationPlaceholder: "प्रोजेक्ट का स्थान",
    detailsPlaceholder: "प्रॉपर्टी और कूलिंग आवश्यकता के बारे में बताएं",
    selectTimeline: "समयसीमा चुनें",
    timelineOptions: ["तुरंत", "इस सप्ताह", "इस महीने", "योजना चरण"],
    footer: "इन विवरणों के आधार पर हम आपके लिए तेज़ और उपयुक्त कमर्शियल कोट तैयार करेंगे।",
    sending: "भेज रहे हैं...",
    send: "रिक्वेस्ट भेजें",
  },
  te: {
    close: "Quote form close cheyyandi",
    sentKicker: "Request Sent",
    sentTitle: "Dhanyavadalu, mee quote request andindi",
    sentDescriptionPrefix: "Maa team mee",
    sentDescriptionSuffix: "requirement ni review chesi tondaralo contact chestundi.",
    summaryService: "Service",
    summaryContact: "Contact",
    summaryEmail: "Email",
    closeButton: "Close",
    formKicker: "Quote Request",
    formTitlePrefix: "Mee",
    formTitleSuffix: "avasaram gurinchi cheppandi",
    formDescription: "Konni details share cheyyandi. Maa commercial team tailored response prepare chestundi.",
    name: "Peru",
    company: "Company",
    email: "Email",
    phone: "Phone",
    location: "Location",
    timeline: "Timeline",
    details: "Project Details",
    namePlaceholder: "Mee peru",
    companyPlaceholder: "Business name",
    emailPlaceholder: "name@company.com",
    phonePlaceholder: "Mobile number",
    locationPlaceholder: "Project location",
    detailsPlaceholder: "Property mariyu cooling requirements gurinchi cheppandi",
    selectTimeline: "Timeline select cheyyandi",
    timelineOptions: ["Immediate", "This week", "This month", "Planning stage"],
    footer: "Ee details adharanga fast mariyu relevant commercial quote prepare chestamu.",
    sending: "Pamputunnamu...",
    send: "Request Pampandi",
  },
};

function QuoteRequestModal({ service, onClose, onSubmit }) {
  const { language } = useAppPreferences();
  const copy = quoteCopy[language] ?? quoteCopy.en;

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
        <button type="button" className="service-details-close" onClick={onClose} aria-label={copy.close}>
          ×
        </button>

        {submission ? (
          <div className="quote-success">
            <p className="service-details-kicker">{copy.sentKicker}</p>
            <h3 id="quote-modal-title">{copy.sentTitle}</h3>
            <p id="quote-modal-description">
              {copy.sentDescriptionPrefix} {submission.service.toLowerCase()} {copy.sentDescriptionSuffix}
            </p>

            <div className="quote-summary">
              <div>
                <span>{copy.summaryService}</span>
                <strong>{submission.service}</strong>
              </div>
              <div>
                <span>{copy.summaryContact}</span>
                <strong>{submission.name}</strong>
              </div>
              <div>
                <span>{copy.summaryEmail}</span>
                <strong>{submission.email}</strong>
              </div>
            </div>

            <button type="button" className="quote-success-button" onClick={onClose}>
              {copy.closeButton}
            </button>
          </div>
        ) : (
          <>
            <div className="quote-modal-header">
              <div>
                <p className="service-details-kicker">{copy.formKicker}</p>
                <h3 id="quote-modal-title">
                  {copy.formTitlePrefix} {service.title.toLowerCase()} {copy.formTitleSuffix}
                </h3>
                <p id="quote-modal-description">
                  {copy.formDescription}
                </p>
              </div>
              <div className="quote-modal-badge">{service.turnaround}</div>
            </div>

            <form className="quote-form" onSubmit={handleSubmit}>
              <div className="quote-form-grid">
                <label>
                  {copy.name}
                  <input name="name" value={formState.name} onChange={handleChange} type="text" placeholder={copy.namePlaceholder} required />
                </label>

                <label>
                  {copy.company}
                  <input name="company" value={formState.company} onChange={handleChange} type="text" placeholder={copy.companyPlaceholder} required />
                </label>

                <label>
                  {copy.email}
                  <input name="email" value={formState.email} onChange={handleChange} type="email" placeholder={copy.emailPlaceholder} required />
                </label>

                <label>
                  {copy.phone}
                  <input name="phone" value={formState.phone} onChange={handleChange} type="tel" placeholder={copy.phonePlaceholder} required />
                </label>

                <label>
                  {copy.location}
                  <input name="location" value={formState.location} onChange={handleChange} type="text" placeholder={copy.locationPlaceholder} required />
                </label>

                <label>
                  {copy.timeline}
                  <select name="timeline" value={formState.timeline} onChange={handleChange} required>
                    <option value="">{copy.selectTimeline}</option>
                    {copy.timelineOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="quote-form-full">
                  {copy.details}
                  <textarea
                    name="projectDetails"
                    value={formState.projectDetails}
                    onChange={handleChange}
                    placeholder={copy.detailsPlaceholder}
                    rows="5"
                    required
                  />
                </label>
              </div>

              <div className="quote-form-footer">
                <p>{copy.footer}</p>
                <button type="submit" className="quote-submit-button" disabled={isSubmitting}>
                  {isSubmitting ? copy.sending : copy.send}
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