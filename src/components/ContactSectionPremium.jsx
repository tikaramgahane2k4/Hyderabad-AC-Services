import { useMemo, useState } from "react";
import { FiBriefcase, FiClock, FiMapPin, FiMessageSquare, FiPhoneCall, FiSend, FiShield, FiUsers } from "react-icons/fi";
import { useAppPreferences } from "../context/AppPreferencesContext";
import { getLocalizedSiteContent } from "../data/localizedSiteContent";
import "./ContactSectionPremium.css";

const copyByLanguage = {
  en: {
    badge: "B2B Lead Generation",
    title: "Request AC Services for Your Business",
    description:
      "Share your project details and our team will respond with a tailored proposal for offices, builders, hotels, retail spaces, and facility teams.",
    benefits: [
      { icon: <FiUsers />, title: "Commercial-ready support", text: "Built for business-critical cooling needs." },
      { icon: <FiShield />, title: "Trusted technicians", text: "Professional service with clear communication." },
      { icon: <FiClock />, title: "Fast response", text: "Quick follow-up during working hours." },
    ],
    formTitle: "Tell us about your requirement",
    fields: {
      name: "Name",
      company: "Company Name",
      units: "Number of AC Units",
      service: "Service Type",
      message: "Message",
      submit: "Submit Request",
      success: "Thanks. Our team will contact you shortly with the next steps.",
      namePlaceholder: "Your name",
      companyPlaceholder: "Your company or site name",
      unitsPlaceholder: "e.g. 12",
      messagePlaceholder: "Share timeline, location, service scope, or any special requirements.",
      serviceOptions: [
        "AC Service",
        "AC Repair",
        "AC Installation",
        "AMC",
        "Ducting",
        "Copper Pipe Planning",
        "Centralized AC",
        "Gas Leak Rectification",
      ],
      errors: {
        required: "This field is required.",
        units: "Enter a valid number of units.",
      },
    },
    contactTitle: "Need immediate support?",
    contactDescription: "Call or WhatsApp our team for a faster response.",
    callNow: "Call Now",
    whatsappChat: "WhatsApp Chat",
    locationTitle: "Service Area",
    hoursTitle: "Working Hours",
  },
  hi: {
    badge: "B2B Lead Generation",
    title: "अपने व्यवसाय के लिए AC सेवाओं का अनुरोध करें",
    description:
      "अपनी परियोजना की जानकारी साझा करें। हमारी टीम ऑफिस, बिल्डर, होटल, रिटेल और सुविधा टीमों के लिए उपयुक्त प्रस्ताव भेजेगी।",
    benefits: [
      { icon: <FiUsers />, title: "कमर्शियल सपोर्ट", text: "व्यवसायिक कूलिंग जरूरतों के लिए तैयार।" },
      { icon: <FiShield />, title: "विश्वसनीय तकनीशियन", text: "पेशेवर सेवा और स्पष्ट संवाद।" },
      { icon: <FiClock />, title: "तेज़ प्रतिक्रिया", text: "कार्य समय में जल्दी फॉलो-अप।" },
    ],
    formTitle: "अपनी आवश्यकता बताएं",
    fields: {
      name: "नाम",
      company: "कंपनी का नाम",
      units: "AC यूनिट्स की संख्या",
      service: "सेवा प्रकार",
      message: "संदेश",
      submit: "अनुरोध भेजें",
      success: "धन्यवाद। हमारी टीम जल्द ही अगली जानकारी के साथ संपर्क करेगी।",
      namePlaceholder: "आपका नाम",
      companyPlaceholder: "कंपनी या साइट का नाम",
      unitsPlaceholder: "उदा. 12",
      messagePlaceholder: "समय, स्थान, सेवा और विशेष आवश्यकताएं साझा करें।",
      serviceOptions: [
        "AC Service",
        "AC Repair",
        "AC Installation",
        "AMC",
        "Ducting",
        "Copper Pipe Planning",
        "Centralized AC",
        "Gas Leak Rectification",
      ],
      errors: {
        required: "यह फ़ील्ड आवश्यक है।",
        units: "सही संख्या दर्ज करें।",
      },
    },
    contactTitle: "तुरंत सहायता चाहिए?",
    contactDescription: "तेज़ प्रतिक्रिया के लिए कॉल या WhatsApp करें।",
    callNow: "कॉल करें",
    whatsappChat: "WhatsApp चैट",
    locationTitle: "सेवा क्षेत्र",
    hoursTitle: "कार्य समय",
  },
  te: {
    badge: "B2B Lead Generation",
    title: "Mee business kosam AC services request cheyyandi",
    description:
      "Mee project details share cheyyandi. Office, builders, hotels, retail spaces mariyu facility teams kosam maa team tailored proposal istundi.",
    benefits: [
      { icon: <FiUsers />, title: "Commercial-ready support", text: "Business cooling needs kosam ready ga untundi." },
      { icon: <FiShield />, title: "Trusted technicians", text: "Professional service mariyu clear communication." },
      { icon: <FiClock />, title: "Fast response", text: "Working hours lo quick follow-up." },
    ],
    formTitle: "Mee requirement cheppandi",
    fields: {
      name: "Name",
      company: "Company Name",
      units: "Number of AC Units",
      service: "Service Type",
      message: "Message",
      submit: "Submit Request",
      success: "Thanks. Maa team tondaralo next steps tho contact chestundi.",
      namePlaceholder: "Mee peru",
      companyPlaceholder: "Mee company leda site peru",
      unitsPlaceholder: "e.g. 12",
      messagePlaceholder: "Timeline, location, service scope mariyu special requirements share cheyyandi.",
      serviceOptions: [
        "AC Service",
        "AC Repair",
        "AC Installation",
        "AMC",
        "Ducting",
        "Copper Pipe Planning",
        "Centralized AC",
        "Gas Leak Rectification",
      ],
      errors: {
        required: "Ee field avasaram.",
        units: "Sariyana number ivvandi.",
      },
    },
    contactTitle: "Immediate support kavala?",
    contactDescription: "Quick response kosam call leda WhatsApp cheyyandi.",
    callNow: "Call Now",
    whatsappChat: "WhatsApp Chat",
    locationTitle: "Service Area",
    hoursTitle: "Working Hours",
  },
};

const initialForm = { name: "", companyName: "", units: "", serviceType: "", message: "" };

function IconCard({ icon, title, text }) {
  return (
    <div className="b2b-contact-benefit">
      <span className="b2b-contact-benefit__icon" aria-hidden="true">
        {icon}
      </span>
      <div>
        <strong>{title}</strong>
        <p>{text}</p>
      </div>
    </div>
  );
}

function ContactSectionPremium() {
  const { language } = useAppPreferences();
  const siteContent = getLocalizedSiteContent(language);
  const copy = copyByLanguage[language] ?? copyByLanguage.en;
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const whatsappUrl = useMemo(() => {
    const message = `Hello Hyderabad AC Services, I need a B2B quote. Name: ${form.name || "-"}, Company: ${form.companyName || "-"}, AC Units: ${form.units || "-"}, Service: ${form.serviceType || "-"}. Message: ${form.message || "-"}`;
    return `${siteContent.whatsappLink}?text=${encodeURIComponent(message)}`;
  }, [form.companyName, form.message, form.name, form.serviceType, form.units, siteContent.whatsappLink]);

  const validate = () => {
    const nextErrors = {};

    if (!form.name.trim()) nextErrors.name = copy.fields.errors.required;
    if (!form.companyName.trim()) nextErrors.companyName = copy.fields.errors.required;

    const unitsValue = Number(form.units);
    if (!form.units.trim()) nextErrors.units = copy.fields.errors.required;
    else if (!Number.isInteger(unitsValue) || unitsValue <= 0) nextErrors.units = copy.fields.errors.units;

    if (!form.serviceType.trim()) nextErrors.serviceType = copy.fields.errors.required;
    if (!form.message.trim()) nextErrors.message = copy.fields.errors.required;

    return nextErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setSubmitted(false);
    setErrors((current) => ({ ...current, [name]: undefined }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <section className="b2b-contact" aria-labelledby="b2b-contact-title">
      <div className="b2b-contact__shell">
        <div className="b2b-contact__copy">
          <span className="b2b-contact__badge">{copy.badge}</span>
          <h2 id="b2b-contact-title">{copy.title}</h2>
          <p className="b2b-contact__description">{copy.description}</p>

          <div className="b2b-contact__benefits">
            {copy.benefits.map((benefit) => (
              <IconCard key={benefit.title} icon={benefit.icon} title={benefit.title} text={benefit.text} />
            ))}
          </div>

          <div className="b2b-contact__info-grid">
            <div className="b2b-contact__info-item">
              <FiMapPin aria-hidden="true" />
              <div>
                <span>{copy.locationTitle}</span>
                <strong>{siteContent.location}</strong>
              </div>
            </div>

            <div className="b2b-contact__info-item">
              <FiBriefcase aria-hidden="true" />
              <div>
                <span>{copy.hoursTitle}</span>
                <strong>{siteContent.workingHours}</strong>
              </div>
            </div>
          </div>

          <div className="b2b-contact__actions">
            <a className="b2b-contact__action b2b-contact__action--call" href={siteContent.phoneLink}>
              <FiPhoneCall aria-hidden="true" />
              {copy.callNow}
            </a>
            <a className="b2b-contact__action b2b-contact__action--whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer">
              <FiMessageSquare aria-hidden="true" />
              {copy.whatsappChat}
            </a>
          </div>
        </div>

        <div className="b2b-contact__form-card">
          <div className="b2b-contact__form-header">
            <span className="b2b-contact__form-tag">
              <FiSend aria-hidden="true" />
              {copy.badge}
            </span>
            <h3>{copy.formTitle}</h3>
            <p>{copy.contactDescription}</p>
          </div>

          {submitted ? (
            <div className="b2b-contact__success" role="status" aria-live="polite">
              <strong>{copy.fields.success}</strong>
              <p>{copy.contactDescription}</p>
            </div>
          ) : (
            <form className="b2b-contact__form" onSubmit={handleSubmit} noValidate>
              <label className="b2b-contact__field">
                <span>{copy.fields.name}</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder={copy.fields.namePlaceholder}
                  aria-invalid={Boolean(errors.name)}
                />
                {errors.name && <small>{errors.name}</small>}
              </label>

              <label className="b2b-contact__field">
                <span>{copy.fields.company}</span>
                <input
                  type="text"
                  name="companyName"
                  value={form.companyName}
                  onChange={handleChange}
                  placeholder={copy.fields.companyPlaceholder}
                  aria-invalid={Boolean(errors.companyName)}
                />
                {errors.companyName && <small>{errors.companyName}</small>}
              </label>

              <div className="b2b-contact__field-group">
                <label className="b2b-contact__field">
                  <span>{copy.fields.units}</span>
                  <input
                    type="number"
                    min="1"
                    name="units"
                    value={form.units}
                    onChange={handleChange}
                    placeholder={copy.fields.unitsPlaceholder}
                    aria-invalid={Boolean(errors.units)}
                  />
                  {errors.units && <small>{errors.units}</small>}
                </label>

                <label className="b2b-contact__field">
                  <span>{copy.fields.service}</span>
                  <select
                    name="serviceType"
                    value={form.serviceType}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.serviceType)}
                  >
                    <option value="">{copy.fields.service}</option>
                    {copy.fields.serviceOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.serviceType && <small>{errors.serviceType}</small>}
                </label>
              </div>

              <label className="b2b-contact__field b2b-contact__field--message">
                <span>{copy.fields.message}</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder={copy.fields.messagePlaceholder}
                  rows="5"
                  aria-invalid={Boolean(errors.message)}
                />
                {errors.message && <small>{errors.message}</small>}
              </label>

              <button type="submit" className="b2b-contact__submit">
                {copy.fields.submit}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default ContactSectionPremium;
