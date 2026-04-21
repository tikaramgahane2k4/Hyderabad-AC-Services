import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useAppPreferences } from "../context/AppPreferencesContext";

const bookingServices = [
  {
    key: "acRepair",
    queryTitle: "AC Repair",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 7h16v4H4V7Zm2 0V5h2v2m8 0V5h2v2M7 15h10m-9 4h8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    key: "acInstallation",
    queryTitle: "AC Installation",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 7h18v5H3V7Zm4 9h10m-5-4v7m-3-3 3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    key: "acService",
    queryTitle: "AC Service",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3v3m0 12v3M5.6 5.6l2.1 2.1m8.6 8.6 2.1 2.1M3 12h3m12 0h3m-15.4 6.4 2.1-2.1m8.6-8.6 2.1-2.1" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    key: "acUninstallation",
    queryTitle: "AC Uninstallation",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 7h18v4H3V7Zm4 9h10m5 0-3 3-3-3m3 3v-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    key: "amcPlans",
    queryTitle: "AMC Plans",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 4h10v4H7V4Zm-2 6h14v10H5V10Zm4 3h6m-6 3h4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    key: "exhaustDucting",
    queryTitle: "Exhaust Ducting",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 12h16M7 8h10M7 16h10M4 6h2m12 0h2M4 18h2m12 0h2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
];

const bookingCopy = {
  en: {
    kicker: "Book Service",
    title: "Schedule Your AC Service in Minutes",
    subtitle: "Select your service and share your details. Our team will contact you shortly to confirm your booking.",
    progressAria: "Booking progress",
    stepOne: "Select Service",
    stepTwo: "Your Details",
    selectAriaPrefix: "Select",
    selectedService: "Selected Service:",
    name: "Name",
    phone: "Phone",
    address: "Address",
    preferredTime: "Preferred Time",
    namePlaceholder: "Enter your full name",
    phonePlaceholder: "Enter your phone number",
    addressPlaceholder: "Enter your service address",
    backToServices: "Back to services",
    submit: "Book Now - It's Free",
    successPrefix: "Thank you! Your booking request for",
    successSuffix: "has been received. We will contact you soon.",
    footnotePrefix: "Need urgent support?",
    footnoteLink: "Contact our team",
    footnoteSuffix: "for priority assistance.",
    timeOptions: [
      { value: "morning", label: "Morning" },
      { value: "afternoon", label: "Afternoon" },
      { value: "evening", label: "Evening" },
    ],
    services: {
      acRepair: { title: "AC Repair", description: "Fix cooling issues, leaks, noise" },
      acInstallation: { title: "AC Installation", description: "New unit setup & commissioning" },
      acService: { title: "AC Service", description: "Deep cleaning & maintenance" },
      acUninstallation: { title: "AC Uninstallation", description: "Safe removal & shifting" },
      amcPlans: { title: "AMC Plans", description: "Annual maintenance contracts" },
      exhaustDucting: { title: "Exhaust Ducting", description: "Ventilation solutions" },
    },
  },
  hi: {
    kicker: "सेवा बुक करें",
    title: "मिनटों में अपनी एसी सेवा शेड्यूल करें",
    subtitle: "सेवा चुनें और अपनी जानकारी साझा करें। बुकिंग कन्फर्म करने के लिए हमारी टीम जल्द संपर्क करेगी।",
    progressAria: "बुकिंग प्रगति",
    stepOne: "सेवा चुनें",
    stepTwo: "आपकी जानकारी",
    selectAriaPrefix: "चुनें",
    selectedService: "चयनित सेवा:",
    name: "नाम",
    phone: "फ़ोन",
    address: "पता",
    preferredTime: "पसंदीदा समय",
    namePlaceholder: "अपना पूरा नाम दर्ज करें",
    phonePlaceholder: "अपना फ़ोन नंबर दर्ज करें",
    addressPlaceholder: "सेवा का पता दर्ज करें",
    backToServices: "सेवाओं पर वापस",
    submit: "अभी बुक करें - निःशुल्क",
    successPrefix: "धन्यवाद! आपकी बुकिंग रिक्वेस्ट",
    successSuffix: "के लिए प्राप्त हो गई है। हम जल्द संपर्क करेंगे।",
    footnotePrefix: "तुरंत सहायता चाहिए?",
    footnoteLink: "हमारी टीम से संपर्क करें",
    footnoteSuffix: "प्राथमिक सहायता के लिए।",
    timeOptions: [
      { value: "morning", label: "सुबह" },
      { value: "afternoon", label: "दोपहर" },
      { value: "evening", label: "शाम" },
    ],
    services: {
      acRepair: { title: "एसी रिपेयर", description: "कूलिंग समस्या, लीकेज और शोर की मरम्मत" },
      acInstallation: { title: "एसी इंस्टॉलेशन", description: "नए यूनिट का सेटअप और इंस्टॉलेशन" },
      acService: { title: "एसी सर्विस", description: "डीप क्लीनिंग और नियमित मेंटेनेंस" },
      acUninstallation: { title: "एसी अनइंस्टॉलेशन", description: "सुरक्षित हटाना और शिफ्टिंग" },
      amcPlans: { title: "एएमसी प्लान", description: "वार्षिक रखरखाव अनुबंध" },
      exhaustDucting: { title: "एग्जॉस्ट डक्टिंग", description: "बेहतर वेंटिलेशन समाधान" },
    },
  },
  te: {
    kicker: "Service Book Cheyyandi",
    title: "Mee AC service ni nimishallo schedule cheyyandi",
    subtitle: "Service select chesi details pettandi. Booking confirm cheyadaniki maa team tondaraga contact chestundi.",
    progressAria: "Booking progress",
    stepOne: "Service Enchukondi",
    stepTwo: "Mee Details",
    selectAriaPrefix: "Select",
    selectedService: "Selected Service:",
    name: "Peru",
    phone: "Phone",
    address: "Address",
    preferredTime: "Preferred Time",
    namePlaceholder: "Mee poorthi peru ivvandi",
    phonePlaceholder: "Mee phone number ivvandi",
    addressPlaceholder: "Service address ivvandi",
    backToServices: "Services ki tirigi vellandi",
    submit: "Book Cheyyandi - Free",
    successPrefix: "Dhanyavadalu! Mee booking request",
    successSuffix: "kosam andindi. Memu tondaralo contact chestamu.",
    footnotePrefix: "Urgent support kavala?",
    footnoteLink: "Maa team ni sampradinchandi",
    footnoteSuffix: "priority assistance kosam.",
    timeOptions: [
      { value: "morning", label: "Morning" },
      { value: "afternoon", label: "Afternoon" },
      { value: "evening", label: "Evening" },
    ],
    services: {
      acRepair: { title: "AC Repair", description: "Cooling issues, leaks, noise fix" },
      acInstallation: { title: "AC Installation", description: "New unit setup" },
      acService: { title: "AC Service", description: "Deep cleaning & maintenance" },
      acUninstallation: { title: "AC Uninstallation", description: "Safe removal & shifting" },
      amcPlans: { title: "AMC Plans", description: "Annual maintenance contracts" },
      exhaustDucting: { title: "Exhaust Ducting", description: "Ventilation solutions" },
    },
  },
};

const serviceKeyByQueryTitle = Object.fromEntries(bookingServices.map((service) => [service.queryTitle, service.key]));

function BookServiceSection() {
  const { language } = useAppPreferences();
  const copy = bookingCopy[language] ?? bookingCopy.en;

  const [searchParams] = useSearchParams();
  const serviceFromQuery = searchParams.get("service");

  const [step, setStep] = useState(1);
  const [selectedServiceKey, setSelectedServiceKey] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    preferredTime: "morning",
  });

  const selectedService = selectedServiceKey
    ? copy.services[selectedServiceKey] ?? bookingCopy.en.services[selectedServiceKey]
    : null;

  useEffect(() => {
    if (!serviceFromQuery) {
      return;
    }

    const matchedKey = serviceKeyByQueryTitle[serviceFromQuery];

    if (matchedKey) {
      setSelectedServiceKey(matchedKey);
      setStep(2);
    }
  }, [serviceFromQuery]);

  const handleSelectService = (serviceKey) => {
    setSelectedServiceKey(serviceKey);
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
          <p className="booking-kicker">{copy.kicker}</p>
          <h1>{copy.title}</h1>
          <p>{copy.subtitle}</p>
        </header>

        <div className="booking-progress" aria-label={copy.progressAria}>
          <div className={`booking-progress-step ${step >= 1 ? "is-active" : ""}`}>
            <span>1</span>
            <strong>{copy.stepOne}</strong>
          </div>
          <div className={`booking-progress-line ${step === 2 ? "is-complete" : ""}`} />
          <div className={`booking-progress-step ${step >= 2 ? "is-active" : ""}`}>
            <span>2</span>
            <strong>{copy.stepTwo}</strong>
          </div>
        </div>

        <div className="booking-card">
          {step === 1 && (
            <div className="booking-step booking-step--services" key="step-services">
              <div className="booking-services-grid">
                {bookingServices.map((service) => {
                  const serviceCopy = copy.services[service.key] ?? bookingCopy.en.services[service.key];

                  return (
                    <button
                      key={service.key}
                      type="button"
                      className="booking-service-tile"
                      onClick={() => handleSelectService(service.key)}
                      aria-label={`${copy.selectAriaPrefix} ${serviceCopy.title}`}
                    >
                      <div className="booking-service-icon">{service.icon}</div>
                      <h3>{serviceCopy.title}</h3>
                      <p>{serviceCopy.description}</p>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="booking-step booking-step--details" key="step-details">
              <div className="booking-selected-service">
                {copy.selectedService} <strong>{selectedService?.title}</strong>
              </div>

              <form className="booking-form" onSubmit={handleSubmit}>
                <label>
                  {copy.name}
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFieldChange}
                    placeholder={copy.namePlaceholder}
                    required
                  />
                </label>

                <label>
                  {copy.phone}
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleFieldChange}
                    placeholder={copy.phonePlaceholder}
                    required
                  />
                </label>

                <label className="booking-form-full">
                  {copy.address}
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleFieldChange}
                    placeholder={copy.addressPlaceholder}
                    rows={4}
                  />
                </label>

                <label>
                  {copy.preferredTime}
                  <select name="preferredTime" value={formData.preferredTime} onChange={handleFieldChange}>
                    {copy.timeOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </label>

                <div className="booking-form-actions booking-form-full">
                  <button type="button" className="booking-back-button" onClick={handleBackToServices}>
                    {copy.backToServices}
                  </button>
                  <button type="submit" className="booking-submit-button">
                    {copy.submit}
                  </button>
                </div>
              </form>

              {submitted && (
                <div className="booking-success" role="status" aria-live="polite">
                  {copy.successPrefix} {selectedService?.title} {copy.successSuffix}
                </div>
              )}
            </div>
          )}
        </div>

        <p className="booking-footnote">
          {copy.footnotePrefix} <Link to="/contact">{copy.footnoteLink}</Link> {copy.footnoteSuffix}
        </p>
      </div>
    </section>
  );
}

export default BookServiceSection;
