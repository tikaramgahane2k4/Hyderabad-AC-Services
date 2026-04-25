import { useState } from "react";
import { useAppPreferences } from "../context/AppPreferencesContext";

const initialFormState = {
  name: "",
  phone: "",
  email: "",
  service: "",
  message: "",
};

const contactFormCopy = {
  en: {
    name: "Name",
    phone: "Phone",
    email: "Email",
    service: "Service Type",
    message: "Message",
    namePlaceholder: "Your full name",
    phonePlaceholder: "10-digit phone number",
    emailPlaceholder: "Your business email",
    messagePlaceholder: "Briefly describe your AC requirement",
    submit: "Request a Call Back",
    success: "Thanks for reaching out. Our team will contact you shortly.",
    serviceOptions: ["AC Repair", "AC Installation", "Maintenance"],
    errors: {
      nameRequired: "Name is required.",
      phoneRequired: "Phone number is required.",
      phoneInvalid: "Enter a valid 10-digit phone number.",
      emailRequired: "Email is required.",
      emailInvalid: "Enter a valid email address.",
      serviceRequired: "Please select a service type.",
      messageRequired: "Message is required.",
    },
  },
  hi: {
    name: "नाम",
    phone: "फ़ोन",
    email: "ईमेल",
    service: "सेवा प्रकार",
    message: "संदेश",
    namePlaceholder: "अपना पूरा नाम लिखें",
    phonePlaceholder: "10 अंकों का फ़ोन नंबर",
    emailPlaceholder: "अपना व्यावसायिक ईमेल",
    messagePlaceholder: "अपनी एसी आवश्यकता संक्षेप में बताएं",
    submit: "कॉल बैक अनुरोध करें",
    success: "धन्यवाद! हमारी टीम जल्द आपसे संपर्क करेगी।",
    serviceOptions: ["AC Repair", "AC Installation", "Maintenance"],
    errors: {
      nameRequired: "नाम आवश्यक है।",
      phoneRequired: "फ़ोन नंबर आवश्यक है।",
      phoneInvalid: "सही 10 अंकों का फ़ोन नंबर दर्ज करें।",
      emailRequired: "ईमेल आवश्यक है।",
      emailInvalid: "सही ईमेल पता दर्ज करें।",
      serviceRequired: "कृपया सेवा प्रकार चुनें।",
      messageRequired: "संदेश आवश्यक है।",
    },
  },
  te: {
    name: "Peru",
    phone: "Phone",
    email: "Email",
    service: "Service Type",
    message: "Message",
    namePlaceholder: "Mee poorthi peru",
    phonePlaceholder: "10-digit phone number",
    emailPlaceholder: "Mee business email",
    messagePlaceholder: "Mee AC requirement gurinchi short ga rayandi",
    submit: "Request a Call Back",
    success: "Dhanyavadalu! Maa team tondaralo mimmalni contact chestundi.",
    serviceOptions: ["AC Repair", "AC Installation", "Maintenance"],
    errors: {
      nameRequired: "Peru avasaram.",
      phoneRequired: "Phone number avasaram.",
      phoneInvalid: "Sariyana 10-digit phone number ivvandi.",
      emailRequired: "Email avasaram.",
      emailInvalid: "Sariyana email address ivvandi.",
      serviceRequired: "Service type select cheyyandi.",
      messageRequired: "Message avasaram.",
    },
  },
};

function ContactForm() {
  const { language } = useAppPreferences();
  const copy = contactFormCopy[language] ?? contactFormCopy.en;

  const [formState, setFormState] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const validate = () => {
    const nextErrors = {};
    const digitsOnlyPhone = formState.phone.replace(/\D/g, "");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formState.name.trim()) {
      nextErrors.name = copy.errors.nameRequired;
    }

    if (!formState.phone.trim()) {
      nextErrors.phone = copy.errors.phoneRequired;
    } else if (digitsOnlyPhone.length !== 10) {
      nextErrors.phone = copy.errors.phoneInvalid;
    }

    if (!formState.email.trim()) {
      nextErrors.email = copy.errors.emailRequired;
    } else if (!emailPattern.test(formState.email.trim())) {
      nextErrors.email = copy.errors.emailInvalid;
    }

    if (!formState.service) {
      nextErrors.service = copy.errors.serviceRequired;
    }

    if (!formState.message.trim()) {
      nextErrors.message = copy.errors.messageRequired;
    }

    return nextErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((currentState) => ({
      ...currentState,
      [name]: value,
    }));
    setSuccessMessage("");
    setErrors((currentErrors) => ({
      ...currentErrors,
      [name]: undefined,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = validate();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setSuccessMessage("");
      return;
    }

    setErrors({});
    setFormState(initialFormState);
    setSuccessMessage(copy.success);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form-grid">
        <label>
          <span>{copy.name}</span>
          <input
            type="text"
            name="name"
            value={formState.name}
            onChange={handleChange}
            placeholder={copy.namePlaceholder}
            aria-invalid={Boolean(errors.name)}
          />
          {errors.name && <small className="field-error">{errors.name}</small>}
        </label>

        <label>
          <span>{copy.phone}</span>
          <input
            type="tel"
            name="phone"
            value={formState.phone}
            onChange={handleChange}
            placeholder={copy.phonePlaceholder}
            inputMode="numeric"
            aria-invalid={Boolean(errors.phone)}
          />
          {errors.phone && <small className="field-error">{errors.phone}</small>}
        </label>

        <label>
          <span>{copy.email}</span>
          <input
            type="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            placeholder={copy.emailPlaceholder}
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email && <small className="field-error">{errors.email}</small>}
        </label>

        <label>
          <span>{copy.service}</span>
          <select
            name="service"
            value={formState.service}
            onChange={handleChange}
            aria-invalid={Boolean(errors.service)}
          >
            <option value="">{copy.service}</option>
            {copy.serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.service && <small className="field-error">{errors.service}</small>}
        </label>
      </div>

      <label className="contact-form-message">
        <span>{copy.message}</span>
        <textarea
          name="message"
          value={formState.message}
          onChange={handleChange}
          placeholder={copy.messagePlaceholder}
          rows="5"
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message && <small className="field-error">{errors.message}</small>}
      </label>

      <button type="submit" className="contact-submit-button">
        {copy.submit}
      </button>

      {successMessage && (
        <div className="contact-success" role="status" aria-live="polite">
          {successMessage}
        </div>
      )}
    </form>
  );
}

export default ContactForm;